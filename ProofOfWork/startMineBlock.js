const { mine, blocks } = require("./MineBlock/index");

async function main() {
  mine();
  console.log("\n==== blocks length ====\n");
  console.log(blocks.length);
  console.log("\n==== first block id ====\n");
  console.log(blocks[0].id);
  console.log("\n**** fin ****\n");
}

main();
