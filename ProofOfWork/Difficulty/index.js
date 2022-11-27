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

function buildHash(transactions, nonce) {
  let newBlock = { id: blocks.length, transactions, nonce };
  let newBlockString = JSON.stringify(newBlock);
  let nbsHash = SHA256(newBlockString);
  console.log(`0x${nbsHash}`);
  return nbsHash;
}

function mine() {
  // TODO: mine a block
  let transactions = [];
  let nonce = 0;
  while (mempool.length > 0) {
    if (transactions.length < MAX_TRANSACTIONS) {
      let transaction = mempool.shift();
      transactions.push(transaction);
    } else {
      break;
    }
  }
  let nbsHash = buildHash(transactions, nonce);
  while (BigInt(`0x${nbsHash}`) >= TARGET_DIFFICULTY) {
    nonce++;
    nbsHash = buildHash(transactions, nonce);
  }
  blocks.push({ id: blocks.length, transactions, nonce, hash: nbsHash });
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
