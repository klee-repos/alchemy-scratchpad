const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
  let mBytes = utf8ToBytes(message);
  let mHash = keccak256(mBytes);
  return mHash;
}

module.exports = hashMessage;
