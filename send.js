require('dotenv').config();
const { ethers } = require('ethers');

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

async function sendTransaction(amount, receiverAddress) {
    console.log(`\nПочинаємо відправку...`);
    console.log(`Від: ${wallet.address}`);
    console.log(`До: ${receiverAddress}`);
    console.log(`Сума: ${amount} ETH (native coin)`);

    try {
        if (!ethers.isAddress(receiverAddress)) {
            throw new Error('Невірний формат адреси одержувача!');
        }

        const balance = await provider.getBalance(wallet.address);
        const amountInWei = ethers.parseEther(amount); // Конвертація з ETH в Wei
    
        const feeData = await provider.getFeeData();
        const estimatedGas = BigInt(21000) * (feeData.gasPrice || BigInt(0));

        if (balance < (amountInWei + estimatedGas)) {
            throw new Error(`Недостатньо коштів. Ваш баланс: ${ethers.formatEther(balance)}`);
        }

        const tx = {
            to: receiverAddress,
            value: amountInWei,
        };

        console.log('Підписання та відправка транзакції...');
        const transactionResponse = await wallet.sendTransaction(tx);

        console.log(`Tранзакцію відправлено!`);
        console.log(`Hash: ${transactionResponse.hash}`);
        console.log('Очікування підтвердження мережі...');

        const receipt = await transactionResponse.wait(1);

        console.log(`Транзакція підтверджена у блоці ${receipt.blockNumber}`);
        console.log(`Переглянути: https://sepolia.etherscan.io/tx/${transactionResponse.hash}`);

    } catch (error) {
        console.error('\nПОМИЛКА ТРАНЗАКЦІЇ:');
        if (error.code === 'INSUFFICIENT_FUNDS') {
            console.error('Недостатньо коштів на гаманці для покриття суми + комісії газу.');
        } else {
            console.error(error.message || error);
        }
        process.exit(1);
    }
}

// node send.js <amount> <receiver>
const args = process.argv.slice(2);
const amountArg = args[0];
const receiverArg = args[1];

if (!amountArg || !receiverArg) {
    console.log('Використання: node send.js <СУМА> <АДРЕСА_ОДЕРЖУВАЧА>');
    console.log('   Приклад: node send.js 0.01 0x123...');
    process.exit(1);
}

sendTransaction(amountArg, receiverArg);