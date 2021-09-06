const TronWeb = require("tronweb");
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.shasta.trongrid.io/");
const solidityNode = new HttpProvider("https://api.shasta.trongrid.io/");
const eventServer = new HttpProvider("https://api.shasta.trongrid.io/");
const privateKey = process.env.TRON_PRIVATE_KEY;
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

tronWeb.trx.getAccount("TD9uCRGYNBduikRbcxwFVzXn3XcCrYBBxe")
    .then(result => console.log(result));

tronWeb.trx.getAccountResources("TD9uCRGYNBduikRbcxwFVzXn3XcCrYBBxe")
    // .then(result => console.log(result));

tronWeb.trx.getBalance("TD9uCRGYNBduikRbcxwFVzXn3XcCrYBBxe")
    // .then(result => console.log(result));

tronWeb.trx.getCurrentBlock()
    // .then(result => console.log(result));

tronWeb.trx.getReward("TD9uCRGYNBduikRbcxwFVzXn3XcCrYBBxe")
    // .then(result => console.log(result));

// const tronAccount = tronWeb.createAccount();
// console.log(tronAccount);

// tronWeb.trx.getAccount("TQA79oUcQ2wtYHRTho9Q1oqBf5vLBvpXfS")
    // .then(result => console.log(result));

// Sending Transaction
// tronWeb.trx.sendTransaction("TQA79oUcQ2wtYHRTho9Q1oqBf5vLBvpXfS", 1000, "b332ffc7405a746e123c3b78076086ecbc2b38271ed154e3538a5a84a8bc0ecc")
    // .then(result => console.log(result));

// tronWeb.trx.getTransaction("0243b4e347608e21e7c48cb74c59eb40ce0b2115e3b7fdcbcff34051b3ca4851")
    // .then(result => console.log(result));

// Getting trasaction info
// tronWeb.trx.getTransactionInfo("0243b4e347608e21e7c48cb74c59eb40ce0b2115e3b7fdcbcff34051b3ca4851")
    // .then(console.log);

// tronWeb.trx.sendTransaction("TD9uCRGYNBduikRbcxwFVzXn3XcCrYBBxe", 10, "89996CB5188869750E7AD2E97B5C79864BBF8FAE712630AEAAC0D96C29CB1B2A")
//     .then(result => console.log(result));

// Query the list of nodes connected to the machine.
// tronWeb.trx.listNodes()
//     .then(result => console.log(result));