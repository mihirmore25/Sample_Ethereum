require("dotenv").config();
const Transaction = require("ethereumjs-tx").Transaction;
const Web3 = require("web3");

const web3 = new Web3("https://ropsten.infura.io/v3/3c5dbe2ec25f46da984eb5951ca5b19a");

const metaMaskAccount = "0x2978eA4d81C7fFd7D8C167fE80a2FC1D0D1c009b";
const infuraAccount = "0x64E8CabE89c678008B201b754c3FE52DeF1279Df";

const metaMaskPrivateKey = Buffer.from(process.env.META_MASK_PRIVATE_KEY, "hex");
const infuraPrivateKey = Buffer.from(process.env.INFURA_PRIVATE_KEY, "hex");

web3.eth.getTransactionCount(metaMaskAccount, (err, transactionCount) => {
    // Build a transaction
    const transactionObject = {
        nonce: web3.utils.toHex(transactionCount),
        to: infuraAccount,
        value: web3.utils.toHex(web3.utils.toWei('0.000011', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }


    // Sign the transaction
    const transaction = new Transaction(transactionObject, { chain: 'ropsten' });
    transaction.sign(metaMaskPrivateKey);

    const serializedTransaction = transaction.serialize();
    const raw = '0x' + serializedTransaction.toString('hex');


    // Broadcast the transaction
    web3.eth.sendSignedTransaction(raw, (err, transactionHash) => {
        console.log('Transaction Hash: ', transactionHash);
        console.log(err);
    })
})

const receipt = web3.eth.getTransactionReceipt("0x126ca78cc859ad6880703c59fc22ae0a588d894a647197cd05ccc3082c01808d").then(console.log);

const receipt = web3.eth.getTransactionReceipt("0x2dd801fe7873737441975aca4309ab3bdbc5af7b0645b39b10b1733eda0ec482").then(console.log);

// web3.eth.getTransactionCount("0x2978ea4d81c7ffd7d8c167fe80a2fc1d0d1c009b")
//     .then(console.log);

// web3.eth.getTransactionCount("0x64E8CabE89c678008B201b754c3FE52DeF1279Df")
//     .then(console.log);

// Getting Account Balance of infura 
// web3.eth.getBalance(infuraAccount)
//     .then(console.log);

// Getting All The Accounts of Infura
// web3.eth.getAccounts()
//     .then(console.log);

// Getting transaction matching the given transaction hash
// web3.eth.getTransaction("0x126ca78cc859ad6880703c59fc22ae0a588d894a647197cd05ccc3082c01808d")
//     .then(console.log);

// Getting Node Info
// web3.eth.getNodeInfo()
//     .then(console.log);

// Getting chain id 
// web3.eth.getChainId()
//     .then(console.log);









