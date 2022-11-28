const Blockchain = require("./TheGenesisBlock/Blockchain");
const Block = require("./TheGenesisBlock/Block");
const SHA256 = require("crypto-js/sha256");
const { faker } = require("@faker-js/faker");

function main() {
  const blockchain = new Blockchain();
  const randomUsername = faker.internet.userName();
  let block = new Block(randomUsername);
  const genesisBlock = blockchain.chain[0];
  console.log("\n==== genesis block exists ====\n");
  console.log(genesisBlock);
  console.log("\n**** fin ****\n");
}

main();
