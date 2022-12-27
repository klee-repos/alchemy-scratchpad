const Block = require("./Block");

class Blockchain {
  constructor() {
    let block = new Block("hello world");
    this.chain = [
      /* TODO: Create the genesis block here */
      block,
    ];
  }
}

module.exports = Blockchain;
