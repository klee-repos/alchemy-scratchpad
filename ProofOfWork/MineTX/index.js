const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  mempool.push(transaction);
}

function mine() {
  // TODO: mine a block
  let transactions = [];
  while (mempool.length > 0) {
    if (transactions.length < MAX_TRANSACTIONS) {
      let transaction = mempool.shift();
      transactions.push(transaction);
    } else {
      break;
    }
  }
  let newBlock = { id: blocks.length, transactions };
  blocks.push(newBlock);
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
