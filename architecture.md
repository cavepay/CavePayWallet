
# Architecture

## Overview

CavePay Wallet is built using a Clean Architecture approach with a strong
emphasis on security, explicit trust boundaries, and long-term maintainability.

The system is designed around a single trusted core that encapsulates all
critical wallet logic, while all external layers (UI, networking, platform
APIs) are treated as untrusted.

This separation allows the wallet core to be reused across platforms and
audited independently from user interfaces or operating system integrations.

---

## High-Level Architecture

The architecture is centered around `WalletCore` as the main orchestration
layer.

```text
Application / UI
        |
    WalletCore
        |
Crypto Adapters / Secure Keystore
````

### Layers

* **Application / UI**
  Responsible for presentation and user interaction.
  This layer is considered untrusted and must never handle private keys or
  cryptographic material directly.

* **WalletCore**
  The single trusted component.
  Responsible for enforcing all security invariants, validating input, and
  coordinating signing operations.

* **Crypto Adapters / Secure Keystore**
  Platform-specific implementations responsible for key generation, secure
  storage, and signing operations.

---

## WalletCore Responsibilities

`WalletCore` is responsible for:

* Account lifecycle management
* Transaction validation
* Selection and management of active accounts
* Orchestration of transaction signing
* Enforcing security and consistency rules

`WalletCore` does **not**:

* Store private keys
* Perform cryptographic operations directly
* Interact with UI frameworks
* Perform network requests

This strict responsibility boundary keeps the core small, testable, and
audit-friendly.

---

## Trust Boundaries

The system defines explicit trust boundaries:

### Trusted

* WalletCore
* Secure keystore implementations provided by the operating system

### Untrusted

* UI and presentation layers
* Network and RPC providers
* External data sources
* Application state outside the core

All data crossing into `WalletCore` is validated and treated as potentially
malicious.

---

## Platform Abstraction

Platform-specific functionality is accessed through explicit interfaces.

Examples include:

* Secure key storage (Secure Enclave, Android Keystore)
* Cryptographic signing
* Hardware wallet integrations

These capabilities are exposed to the core via adapters, allowing platform
implementations to vary without changing the core logic.

---

## Data Flow

A typical transaction signing flow:

1. The UI constructs a transaction request
2. The request is passed to `WalletCore`
3. `WalletCore` validates the transaction
4. The signing request is forwarded to a secure keystore adapter
5. The user explicitly approves the operation
6. The signature is returned to `WalletCore`
7. The signed transaction is returned to the UI

At no point does the UI gain access to private keys or signing primitives.

---

## Security-Oriented Design Decisions

Several architectural decisions are driven by security requirements:

* No background or automatic signing
* No implicit trust in network data
* No private key material in application memory
* Explicit user intent required for all sensitive operations

These constraints are enforced at the architectural level rather than relying
on UI or developer discipline.

---

## Extensibility

The architecture allows for future extensions without breaking core guarantees:

* Support for additional blockchains
* Hardware wallet integrations
* Alternative signing providers
* Persistence and recovery mechanisms

All extensions must integrate through well-defined interfaces and respect
existing trust boundaries.

---

## Summary

The CavePay Wallet architecture prioritizes:

* Clear separation of concerns
* Minimal trusted code surface
* Explicit trust boundaries
* Platform independence
* Auditability and long-term stability

This approach enables the wallet to evolve while maintaining strong security
and correctness guarantees.
