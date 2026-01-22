export interface CryptoAdapter {
  deriveAccount(index: number): Promise<{
    address: string
    publicKey: string
  }>

  sign(payload: Uint8Array): Promise<Uint8Array>

  getChainId(): Promise<number>

  switchChain(chainId: number): Promise<void>

  estimateGas(tx: {
    to: string
    data?: Uint8Array
    value?: bigint
  }): Promise<{
    gasLimit: bigint
    maxFeePerGas?: bigint
    maxPriorityFeePerGas?: bigint
  }>

  sendTransaction(tx: {
    to: string
    data?: Uint8Array
    value?: bigint
    gasLimit?: bigint
    maxFeePerGas?: bigint
    maxPriorityFeePerGas?: bigint
    nonce?: number
  }): Promise<{
    hash: string
  }>
}
