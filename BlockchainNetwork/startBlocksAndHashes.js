const Block = require("./BlocksAndHashes/Block");

function main() {
  let block = new Block();
  let hash = block.toHash();
  console.log("\n==== hash ====\n");
  console.log(hash);
  console.log("\n**** fin ****\n");
}

main();
