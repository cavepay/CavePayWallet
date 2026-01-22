export interface cryptoadapter {
  deriveaccount(index: number): Promise<{
    address: string
    publickey: string
  }>
  sign(payload: Uint8Array): Promise<Uint8Array>
}
