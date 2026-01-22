export interface TransactionBuilder {
  build(tx: {
    from: string
    to: string
    value?: bigint
    data?: Uint8Array
    nonce: number
    chainId: number
    gasLimit: bigint
    maxFeePerGas?: bigint
    maxPriorityFeePerGas?: bigint
  }): Uint8Array

  simulate(tx: {
    from: string
    to: string
    value?: bigint
    data?: Uint8Array
  }): Promise<{
    success: boolean
    gasUsed?: bigint
    error?: string
  }>
}
