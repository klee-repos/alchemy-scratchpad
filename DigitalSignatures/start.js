const signMessage = require("./SignMessage/signMessage");
const recoverKey = require("./RecoverKey/recoverKey");
const getAddress = require("./KeyToAddress/getAddress");
const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const PRIVATE_KEY =
  "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";
const EXPECTED_ADDRESS = "16bB6031CBF3a12B899aB99D96B64b7bbD719705";

async function startKeyToAddress() {
  const publicKey = secp.getPublicKey(PRIVATE_KEY);
  const address = toHex(getAddress(publicKey));
  console.log("\n==== address ====\n");
  console.log(address);
  console.log("\n==== expected address ====\n");
  console.log(EXPECTED_ADDRESS);
}

async function startRecoverKey() {
  const [sig, recoveryBit] = await signMessage("hello world");
  const publicKey = secp.getPublicKey(PRIVATE_KEY);
  const recovered = await recoverKey("hello world", sig, recoveryBit);
  console.log("\n==== public key ====\n");
  console.log(publicKey);
  console.log("\n==== recovered ====\n");
  console.log(recovered);
}

async function startSignMessage() {
  let [signature, recovery] = await signMessage("hello world");
  console.log("\n==== signature =====\n");
  console.log(signature);
  console.log("\n==== recovery =====\n");
  console.log(recovery);
}

async function main() {
  let userArgs = process.argv.slice(2);
  if (userArgs.length > 0) {
    if (userArgs[0] === "startSignMessage") {
      await startSignMessage();
    } else if (userArgs[0] === "startRecoverKey") {
      await startRecoverKey();
    } else if (userArgs[0] === "startKeyToAddress") {
      await startKeyToAddress();
    } else {
      await startSignMessage();
      await startRecoverKey();
    }
  }
  console.log("\n**** fin ****\n");
}

main();
