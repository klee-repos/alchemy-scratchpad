const Block = require("./WhatsInAHash/Block");
const SHA256 = require("crypto-js/sha256");
const { faker } = require("@faker-js/faker");

function main() {
  const randomEmail = faker.internet.email();
  const emailHash = SHA256(randomEmail).toString();
  let block = new Block(randomEmail);
  let hash = block.toHash();
  console.log("\n==== block data ====\n");
  console.log(hash.toString());
  console.log("\n==== compare hash ====\n");
  console.log(emailHash);
  console.log("\n**** fin ****\n");
}

main();
