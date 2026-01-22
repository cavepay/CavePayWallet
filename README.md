<div align="center">

# CavePay Wallet

**Non-custodial wallet core focused on security, privacy, and local-first design**

</div>

---

## Overview

CavePay Wallet is a non-custodial cryptocurrency wallet core designed with a
strict local-first security model.

The project provides a clean, auditable wallet engine that can be reused across
mobile, desktop, and web environments without coupling to any specific UI or
platform implementation.

Private keys are never stored on servers and never leave secure storage.

# Desktop ( Windows & macOS)
![telegram-cloud-photo-size-1-5157046118431525822-w](https://github.com/user-attachments/assets/25bc3945-e7e2-4f47-b2aa-f8c95543a374)

# Mobile ( iOS & Android)
![telegram-cloud-photo-size-1-5157046118431525825-w](https://github.com/user-attachments/assets/790b3ddc-3219-420a-bcea-dbf658693714)


---

## Core Principles

- Non-custodial by design  
- Local-only key management  
- Explicit user consent for every signature  
- Clear trust boundaries  
- Minimal and stable public API  

---

## Architecture

This project is developed under Clean Architecture. Based on the following scheme:
<img width="510" height="935" alt="image" src="https://github.com/user-attachments/assets/41372434-a303-4d97-8eeb-770b16d0eb50" />

---

## Wallet Core

The `WalletCore` module is the central component of the CavePay Wallet
architecture. It is responsible for enforcing all security invariants and
coordinating wallet operations.

### Responsibilities

`WalletCore` is responsible for:

- Account lifecycle management
- Transaction validation
- Transaction signing orchestration
- State management and invariants enforcement

The core does not implement cryptography directly and does not depend on any UI,
networking stack, or platform-specific code.

---

## Cryptography and Key Management

All cryptographic operations are delegated to platform-specific adapters.

### Key Storage

Private keys are generated and stored using secure hardware-backed storage
mechanisms whenever available:

- **iOS** — Secure Enclave
- **Android** — Android Keystore
- **Desktop** — Operating system keychain
- **External** — Hardware wallets or custom signing providers

Private keys never leave secure storage and are never exposed to application
memory.

### Signing Flow

1. The UI prepares a transaction payload
2. `WalletCore` validates the transaction
3. The signing request is forwarded to the secure keystore adapter
4. The user explicitly approves the operation
5. The signature is returned to `WalletCore`

---

## Security Model

CavePay Wallet follows a strict security-first approach.

### Key Security Guarantees

- No centralized custody of funds
- No silent or background signing
- No private key export
- No telemetry or user tracking
- Explicit user confirmation for every signature

### Trust Assumptions

- The operating system provides secure process isolation
- Secure hardware (Secure Enclave / Keystore) behaves as specified
- The network is considered hostile by default

---

## Supported Platforms

CavePay Wallet is designed to run across multiple platforms using a shared core.

- **Desktop** — Windows, macOS
- **Mobile** — iOS, Android

Platform-specific UI and system integrations are built on top of the same
wallet core logic.

---

## Development Status

**Version:** 1.3.0

The public API of the wallet core is considered stable.
Breaking changes require a major version update.

This repository currently focuses on the core wallet logic.
Platform-specific implementations may live in separate modules or repositories.

---

## Use Cases

CavePay Wallet core can be used for:

- Mobile cryptocurrency wallets
- Desktop wallet applications
- Embedded wallet engines
- SDK integration for third-party applications
