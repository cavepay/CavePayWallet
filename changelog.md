# Changelog

All notable changes to this project will be documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [1.3.0] – 2026-01-15
### Added
- NFT support (ERC-721, ERC-1155)
- NFT gallery with metadata rendering
- NFT transfer functionality
- ENS name resolution for wallet addresses
- Improved transaction signing preview with clearer contract interaction details

### Improved
- Wallet initialization performance
- Reduced RPC requests during balance updates
- UI responsiveness on mobile devices

### Security
- Improved detection of potentially malicious contract interactions
- Additional warnings for blind-signing transactions

---

## [1.2.0] – 2025-12-20
### Added
- dApp browser with WalletConnect v2 support
- Read-only (watch-only) wallet mode
- Transaction simulation before signing
- QR code scanning for wallet addresses
- Multilingual interface (EN, RU)

### Improved
- Error handling for failed and dropped transactions
- More informative transaction status messages

---

## [1.1.0] – 2025-11-30
### Added
- ERC-20 token support
- Custom token import by contract address
- Network switcher for EVM-compatible chains
- Gas fee presets (slow / normal / fast)
- Address book for frequently used wallets

### Improved
- Transaction confirmation speed
- Wallet import flow (seed phrase / private key)
- General UI/UX polish after initial release

---

## [1.0.0] – 2025-11-10
### Added
- Initial public release of CavePay Wallet
- Non-custodial wallet architecture
- Client-side private key and seed phrase generation (BIP-39)
- Ethereum (EVM) network support
- Send & receive native ETH
- Transaction history with on-chain verification
- Encrypted local key storage
- Web3 provider injection for dApp connectivity
- Responsive web interface (desktop & mobile)

### Security
- Private keys and seed phrases never leave the user’s device
- No custodial access to user funds
- Protection against basic phishing and injection attacks

---

## [Unreleased]
### Planned
- In-wallet token swaps (DEX aggregation)
- Hardware wallet support (Ledger)
- Multi-wallet management
- Advanced gas controls
- Additional EVM network support
