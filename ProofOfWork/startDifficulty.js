const {
  mine,
  blocks,
  mempool,
  addTransaction,
  TARGET_DIFFICULTY,
} = require("./Difficulty");

async function main() {
  for (let i = 0; i < 5; i++) {
    addTransaction({ sender: "bob", to: "alice" });
  }
  mine();
  console.log("\n==== blocks length ====\n");
  console.log(blocks.length);
  // console.log("\n==== transactions length ====\n");
  // console.log(blocks[0].transactions.length);
  console.log("\n==== mempool length ====\n");
  console.log(mempool.length);
  console.log("\n==== nonce check ====\n");
  console.log(blocks[0].nonce);
  let actual = blocks[0].hash.toString();
  console.log("\n==== hash lower than target difficulty ====\n");
  console.log(`Target: ${TARGET_DIFFICULTY}\n\n`);
  let actualHash = BigInt(`0x${actual}`);
  console.log(`Hash: ${actualHash}\n\n`);
  let isLess = BigInt(`0x${actual}`) < TARGET_DIFFICULTY;
  console.log(`Is Less? ${isLess}`);
  console.log("\n**** fin ****\n");
}

main();
