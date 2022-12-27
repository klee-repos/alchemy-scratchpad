class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        if (!this.root) {
            this.root = node;
            return;
        }
        if (!this.root.left) {
            this.root.left = node;
            return;
        } else {
            this.root.right = node;
            return;
        }
    }
}

module.exports = Tree;
