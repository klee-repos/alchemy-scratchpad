function insert(root, node) {
    // if root is null
    if (!root) {
        root = node;
        return root;
    }
    if (node.data < root.data) {
        root.left = insert(root.left, node);
    } else if (node.data > root.data) {
        root.right = insert(root.right, node);
    }
    return root;
}

class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        this.root = insert(this.root, node);
    }
}

module.exports = Tree;
