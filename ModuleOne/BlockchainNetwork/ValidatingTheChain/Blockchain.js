const Block = require("./Block");

class Blockchain {
  constructor() {
    let block = new Block("hello world");
    this.chain = [block];
  }

  addBlock(block) {
    block.previousHash = this.chain[this.chain.length - 1].toHash();
    this.chain.push(block);
  }

  isValid() {
    let valid = false;

    for (let b in this.chain) {
      if (b < 1) {
        valid = true;
      } else {
        valid =
          this.chain[b].previousHash.toString() ===
          this.chain[b - 1].toHash().toString();
      }
      if (valid === false) {
        break;
      }
    }
    return valid;
  }
}

module.exports = Blockchain;
