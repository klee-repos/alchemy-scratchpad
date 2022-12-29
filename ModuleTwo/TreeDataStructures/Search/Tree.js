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

function hasNode(root, value) {
    if (!root) {
        return false;
    }
    if (root.data === value) {
        return true;
    }
    if (value < root.data) {
        return hasNode(root.left, value);
    } else if (value > root.data) {
        return hasNode(root.right, value);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        this.root = insert(this.root, node);
    }

    hasNode(value) {
        return hasNode(this.root, value);
    }
}

module.exports = Tree;
