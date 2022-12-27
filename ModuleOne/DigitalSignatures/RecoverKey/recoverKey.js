const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("../SignMessage/hashMessage");

async function recoverKey(message, signature, recoveryBit) {
  let mHash = hashMessage(message);
  let pubKey = secp.recoverPublicKey(mHash, signature, recoveryBit, false);
  return pubKey;
}

module.exports = recoverKey;
