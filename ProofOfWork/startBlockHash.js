const { mine, blocks } = require("./BlockHash/index");
const SHA256 = require("crypto-js/sha256");

async function main() {
  const expectedHash = SHA256(JSON.stringify({ id: 0 }));
  mine();
  console.log("\n==== blocks hash ====\n");
  console.log(blocks[0].hash.toString());
  console.log("\n==== expected hash ====\n");
  console.log(expectedHash.toString());
  console.log("\n**** fin ****\n");
}

main();
