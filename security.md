# Security

This document outlines the security model, assumptions, and responsibilities of the CavePay wallet.

---

## Security Model

- CavePay is a non-custodial wallet
- Private keys and seed phrases are generated and stored locally
- CavePay has no access to user funds or signing capabilities
- All cryptographic operations are performed client-side

---

## Key Handling

- Seed phrases and private keys never leave the user’s device
- Private key material is kept encrypted at rest
- Keys are only decrypted in memory for signing operations
- No API or interface exists to export private keys

---

## Password Protection

- User passwords are never stored
- Encryption keys are derived from user-provided passwords
- Brute-force protection relies on strong password selection
- Password recovery is not possible by design

---

## Transaction Security

- Transactions are signed locally
- Chain ID validation prevents cross-network replay attacks
- Users are shown explicit transaction details before signing
- Blind signing is restricted and warned against

---

## Network Security

- RPC endpoints are treated as untrusted
- All RPC responses are validated before use
- Network switching requires explicit user action
- Malicious or malformed responses are rejected

---

## Threat Model

### In Scope
- Phishing and malicious dApps
- Compromised RPC providers
- UI-level attacks attempting unauthorized signing

### Out of Scope
- Compromised operating systems
- Hardware-level key extraction
- User-installed malware or browser extensions

---

## User Responsibilities

- Securely back up seed phrases
- Use strong, unique passwords
- Verify transaction details before signing
- Keep devices and browsers up to date

---

## Reporting Vulnerabilities

- Security issues should be reported privately
- Do not disclose vulnerabilities publicly before a fix is released
- Responsible disclosure is encouraged

---

## Audits

- Internal security reviews are performed regularly
- External audits are planned for future major releases
