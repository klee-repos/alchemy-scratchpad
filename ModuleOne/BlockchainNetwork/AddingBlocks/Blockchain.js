const Block = require("./Block");

class Blockchain {
  constructor() {
    let block = new Block("hello world");
    this.chain = [block];
  }

  addBlock(block) {
    this.chain.push(block);
  }
}

module.exports = Blockchain;
