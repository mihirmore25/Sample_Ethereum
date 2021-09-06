const Web3 = require("web3");

const web3 = new Web3("https://ropsten.infura.io/v3/3c5dbe2ec25f46da984eb5951ca5b19a");

const newAccount = web3.eth.accounts.create();

// console.log(newAccount);


const ropstenAddress = web3.eth.accounts.privateKeyToAccount('0x4bf30770ff27a7af2ee53e468a8ac1b0d7e5e81490067fc871123aefdb9eedaf');
console.log(ropstenAddress);

web3.eth.getBalance("0x64E8CabE89c678008B201b754c3FE52DeF1279Df")
    // .then(console.log);


const metaMaskRopstenAddress = web3.eth.accounts.privateKeyToAccount("f74d18a02e37dfc74e5f0c3f33705eba0a4b59e504631d514349f6ad91c91924");
// console.log(metaMaskRopstenAddress);

// web3.eth.getBalance("0x2978eA4d81C7fFd7D8C167fE80a2FC1D0D1c009b")
//     .then(console.log);

web3.eth.getBalance('0x2978eA4d81C7fFd7D8C167fE80a2FC1D0D1c009b', (call, wei) => {
    const balance = web3.utils.fromWei(wei, 'ether');
    // console.log(balance);
});