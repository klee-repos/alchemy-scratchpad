const Block = require("./ValidatingTheChain/Block");
const Blockchain = require("./ValidatingTheChain/Blockchain");
const SHA256 = require("crypto-js/sha256");

function main() {
  blockchain = new Blockchain();
  blockchain.addBlock(new Block("Dan"));
  blockchain.addBlock(new Block("Peter"));
  blockchain.addBlock(new Block("James"));

  console.log("\n==== is chain valid ====\n");
  console.log(blockchain.isValid());
  console.log("\n**** fin ****\n");
}

main();
