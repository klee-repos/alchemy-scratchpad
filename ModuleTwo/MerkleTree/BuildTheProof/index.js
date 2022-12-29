function constructTree(leaves, concat) {
    if (leaves.length === 1) {
        return leaves[0];
    }
    const newLeaves = [];
    for (let i = 0; i < leaves.length; i += 2) {
        if (i + 1 === leaves.length) {
            newLeaves.push(leaves[i]);
        } else {
            const left = leaves[i];
            const right = leaves[i + 1];
            newLeaves.push(concat(left, right));
        }
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

    getProof(index) {
        let proof = [];

        let copyLeave = this.leaves.map((x) => x);

        while (copyLeave.length > 1) {
            if (index % 2 == 0) {
                if (
                    index == copyLeave.length - 1 &&
                    copyLeave.length % 2 != 0
                ) {
                    //do nothing
                } else {
                    proof.push({ data: copyLeave[index + 1], left: false });
                }
            } else {
                proof.push({ data: copyLeave[index - 1], left: true });
                index--;
            }

            index = index / 2;

            for (let i = 0; i < copyLeave.length; i++) {
                if (i + 1 < copyLeave.length) {
                    copyLeave.splice(
                        i,
                        2,
                        this.concat(copyLeave[i], copyLeave[i + 1])
                    );
                }
            }
        }

        return proof;
    }
}

module.exports = MerkleTree;
