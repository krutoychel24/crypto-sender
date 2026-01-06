# Crypto Sender 🚀

Простий CLI скрипт на Node.js для відправки нативної криптовалюти (ETH, BNB, MATIC) у EVM-сумісних мережах.

## 🛠 Технології
- Node.js
- Ethers.js (v6)
- Dotenv

## ⚙️ Встановлення

1. Клонуйте репозиторій:
   ```bash
   git clone <URL_ВАШОГО_РЕПОЗИТОРІЮ>
   cd crypto-sender
Встановіть залежності:

Bash

npm install
🔐 Налаштування
Перейменуйте файл-шаблон .env.example на .env:

Bash

cp .env.example .env
(або просто створіть файл .env вручну)

Відкрийте .env та вкажіть свої дані:

Ini, TOML

PRIVATE_KEY=ваш_приватний_ключ
RPC_URL=[https://ethereum-sepolia-rpc.publicnode.com](https://ethereum-sepolia-rpc.publicnode.com)
Примітка: Файл .env додано у .gitignore, тому ваші ключі не потраплять у репозиторій.

### Використання
Запустіть скрипт, вказавши суму та адресу отримувача:

Bash

node send.js <СУМА> <АДРЕСА_ОТРИМУВАЧА>
Приклад (Sepolia Testnet):
```Bash

node send.js 0.001 0x000000000000000000000000000000000000dEaD
```
---
