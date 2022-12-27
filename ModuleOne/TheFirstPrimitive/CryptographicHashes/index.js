const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    for (let c in COLORS) {
        let colorBytes = utf8ToBytes(COLORS[c]);
        let colorHash = sha256(colorBytes);
        let found = toHex(hash) === toHex(colorHash);
        if (found) {
            return COLORS[c]
        }
    }
    return "no color found"
   
}

module.exports = findColor;