const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
  let addressPK = publicKey.slice(1, publicKey.length);
  let aHash = keccak256(addressPK);
  let lastTwenty = aHash.slice(aHash.length - 20, aHash.length);
  return lastTwenty;
}

module.exports = getAddress;
