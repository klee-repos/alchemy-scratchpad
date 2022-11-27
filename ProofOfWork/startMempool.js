const { addTransaction, mempool } = require("./Mempool/index");

async function main() {
  const transaction = { to: "bob", sender: "alice" };
  addTransaction(transaction);
  console.log("\n==== mempool length ====\n");
  console.log(mempool.length);
  console.log("\n==== mempool ====\n");
  console.log(mempool[0]);
  console.log("\n**** fin ****\n");
}

main();
