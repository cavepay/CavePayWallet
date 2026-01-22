# architecture

## overview
walletcore is the central trusted component responsible for account management
and transaction signing orchestration.

## trust boundaries
- ui is untrusted
- network is untrusted
- cryptography is delegated to adapters

## design goals
- non-custodial
- minimal api surface
- audit-friendly structure
