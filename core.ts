export type address = string
export type publickey = string

export type account = {
  id: string
  address: address
  publickey: publickey
  createdat: number
}

export type transactionpayload = {
  to: address
  value: string
  data?: string
  chainid: number
}

export type signedtransaction = {
  raw: string
  hash: string
}

export class walleterror extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'walleterror'
  }
}

export class validationerror extends walleterror {
  constructor(message: string) {
    super(message)
    this.name = 'validationerror'
  }
}

export class stateerror extends walleterror {
  constructor(message: string) {
    super(message)
    this.name = 'stateerror'
  }
}

export interface cryptoadapter {
  deriveaccount(index: number): Promise<{
    address: address
    publickey: publickey
  }>
  signtransaction(
    payload: transactionpayload
  ): Promise<signedtransaction>
}

function generateid(): string {
  return Math.random().toString(36).slice(2)
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new validationerror(message)
}

function ishexaddress(value: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(value)
}

export class walletcore {
  private readonly crypto: cryptoadapter
  private accounts: account[] = []
  private selectedaccountid: string | null = null

  constructor(crypto: cryptoadapter) {
    this.crypto = crypto
  }

  async createaccount(index: number): Promise<account> {
    const derived = await this.crypto.deriveaccount(index)
    assert(ishexaddress(derived.address), 'invalid derived address')

    const acc: account = {
      id: generateid(),
      address: derived.address,
      publickey: derived.publickey,
      createdat: Date.now()
    }

    this.accounts.push(acc)
    if (!this.selectedaccountid) this.selectedaccountid = acc.id
    return acc
  }

  listaccounts(): account[] {
    return [...this.accounts]
  }

  selectaccount(accountid: string): void {
    if (!this.accounts.some(a => a.id === accountid)) {
      throw new stateerror('account not found')
    }
    this.selectedaccountid = accountid
  }

  getselectedaccount(): account {
    const acc = this.accounts.find(a => a.id === this.selectedaccountid)
    if (!acc) throw new stateerror('no account selected')
    return acc
  }

  async signtransaction(
    payload: transactionpayload
  ): Promise<signedtransaction> {
    this.validatetransaction(payload)
    this.getselectedaccount()
    return this.crypto.signtransaction(payload)
  }

  private validatetransaction(tx: transactionpayload): void {
    assert(ishexaddress(tx.to), 'invalid recipient address')
    assert(typeof tx.value === 'string', 'invalid value')
    assert(typeof tx.chainid === 'number', 'invalid chainid')
    if (tx.data !== undefined) {
      assert(/^0x[a-fA-F0-9]*$/.test(tx.data), 'invalid data field')
    }
  }
}
