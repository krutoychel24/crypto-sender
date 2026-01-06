# Crypto Sender 

Простий CLI скрипт на Node.js для відправки нативної криптовалюти (ETH, BNB, MATIC) у EVM-сумісних мережах.

## Технології
- Node.js
- Ethers.js (v6)
- Dotenv

## Встановлення

1. Клонуйте репозиторій:
   ```bash
   git clone https://github.com/krutoychel24/crypto-sender.git
   cd crypto-sender
Встановіть залежності:

```Bash

npm install
```
### Налаштування
Перейменуйте файл-шаблон .env.example на .env:

```Bash

cp .env.example .env
```
(або просто створіть файл .env вручну)

Відкрийте .env та вкажіть свої дані:
```
PRIVATE_KEY=ваш_приватний_ключ
RPC_URL=[https://ethereum-sepolia-rpc.publicnode.com](https://ethereum-sepolia-rpc.publicnode.com)
```
### Використання
Запустіть скрипт, вказавши суму та адресу отримувача:

```Bash

node send.js <СУМА> <АДРЕСА_ОТРИМУВАЧА>

```
Приклад (Sepolia Testnet):
```

node send.js 0.001 0x000000000000000000000000000000000000dEaD
```
---
