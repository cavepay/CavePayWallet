# Cryptography

This document describes the cryptographic assumptions used by CavePay Wallet Core.

---

## Key Generation

- All keys are generated locally
- No key material is transmitted or stored remotely
- Deterministic derivation is used for account generation

---

## Seed Handling

- Seed phrases follow the BIP-39 standard
- Seeds are shown once during creation
- Loss of seed phrase results in permanent loss of access

---

## Signing

- Signing is performed locally
- Only explicitly provided payloads are signed
- No automatic or background signing

---

## Encryption

- Sensitive data is encrypted at rest
- Decrypted key material exists only in memory during signing

---

## Limitations

- No recovery mechanisms
- No protection against compromised devices
- No hardware-backed security guarantees
