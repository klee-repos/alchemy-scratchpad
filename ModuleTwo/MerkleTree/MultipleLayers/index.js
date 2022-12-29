function constructTree(leaves, concat) {
    if (leaves.length === 1) {
        return leaves[0];
    }
    const newLeaves = [];
    for (let i = 0; i < leaves.length; i += 2) {
        const left = leaves[i];
        const right = leaves[i + 1];
        newLeaves.push(concat(left, right));
    }
    return constructTree(newLeaves, concat);
}

class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }

    getRoot() {
        return constructTree(this.leaves, this.concat);
    }
}

module.exports = MerkleTree;
