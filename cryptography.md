# Cryptography

This document describes the cryptographic principles and guarantees used in CavePay.

---

## Key Management

- All keys are generated client-side
- No private keys or seed phrases are ever transmitted or stored remotely
- Account derivation follows deterministic hierarchical paths
- Multiple accounts are derived from a single master secret

---

## Seed Phrases

- Seed phrases follow the BIP-39 standard
- Entropy is generated using a cryptographically secure random source
- Seed phrases are only shown once during wallet creation
- Users are fully responsible for seed phrase backup and storage

---

## Signing

- All signing operations are performed locally
- Arbitrary payload signing is supported
- Transaction signing follows EVM-compatible standards
- No blind signing without explicit user confirmation

---

## Encryption

- Sensitive data is encrypted at rest
- Encryption keys are derived from user-controlled secrets
- No plaintext private key material is persisted

---

## Network Security

- Strict chain ID validation is enforced
- Transactions are signed only for the active network
- RPC responses are validated before use

---

## Threat Model

- Compromised UI cannot directly access private keys
- Remote servers have no signing capabilities
- Replay and network spoofing attacks are mitigated by chain validation

---

## Limitations

- CavePay cannot recover lost seed phrases
- Hardware-level compromises are out of scope
- User-side malware can compromise security

---

## Audits

- Internal security reviews performed prior to each release
- External audits planned for future major versions
