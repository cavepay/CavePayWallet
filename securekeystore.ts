export interface securekeystore {
  generatekey(index: number): Promise<{ id: string }>
  getpublickey(keyid: string): Promise<string>
  sign(keyid: string, payload: Uint8Array): Promise<Uint8Array>
}
