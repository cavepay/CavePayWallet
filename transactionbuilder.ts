export class transactionbuilder {
  private tx: any = {}

  to(address: string) {
    this.tx.to = address
    return this
  }

  value(value: string) {
    this.tx.value = value
    return this
  }

  chainid(chainid: number) {
    this.tx.chainid = chainid
    return this
  }

  data(data: string) {
    this.tx.data = data
    return this
  }

  build() {
    if (!this.tx.to || !this.tx.value || !this.tx.chainid) {
      throw new Error('incomplete transaction')
    }
    return this.tx
  }
}
