export interface SecureKeyStore {
  create(password: string): Promise<void>

  unlock(password: string): Promise<void>

  lock(): Promise<void>

  isLocked(): Promise<boolean>

  hasSeed(): Promise<boolean>

  generateSeed(): Promise<Uint8Array>

  importSeed(seed: Uint8Array): Promise<void>

  derivePrivateKey(index: number): Promise<Uint8Array>

  sign(payload: Uint8Array, index: number): Promise<Uint8Array>

  destroy(): Promise<void>
}
