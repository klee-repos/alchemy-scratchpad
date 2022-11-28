const Block = require("./Block");
const SHA256 = require("crypto-js/sha256");

class Blockchain {
  constructor() {
    let block = new Block("hello world");
    this.chain = [block];
  }

  addBlock(block) {
    block.previousHash = this.chain[this.chain.length - 1].toHash();
    this.chain.push(block);
  }
}

module.exports = Blockchain;
