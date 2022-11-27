const { mine, blocks, mempool, addTransaction } = require("./MineTX");

async function main() {
  for (let i = 0; i < 5; i++) {
    addTransaction({ sender: "bob", to: "alice" });
  }
  mine();
  console.log("\n==== blocks length ====\n");
  console.log(blocks.length);
  console.log("\n==== transactions length ====\n");
  console.log(blocks[0].transactions.length);
  console.log("\n==== mempool length ====\n");
  console.log(mempool.length);
  console.log("\n**** fin ****\n");
}

main();
