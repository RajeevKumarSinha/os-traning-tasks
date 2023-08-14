"use strict";

const binaryTree = function () {
  let root = null;
  const Node = function (value = null, left = null, right = null) {
    return {
      value,
      left,
      right,
    };
  };
  return {
    add(data) {
      const node = Node(data);
      if (root === null) {
        root = node;
        return;
      } else {
        this.insert(root, node);
      }
    },
    insert(curr = root, node) {
      if (curr.value > node.value) {
        if (curr.left === null) {
          curr.left = node;
        } else {
          this.insert(curr.left, node);
        }
      } else {
        if (curr.right === null) {
          curr.right = node;
        } else {
          this.insert(curr.right, node);
        }
      }
    },
    root() {
      return root;
    },
    search(val, curr = root) {
      // fix this without passing root
      if (curr === null) {
        return false;
      } else if (curr.value === val) {
        return true;
      } else if (curr.value > val) {
        return this.search(val, curr.left);
      } else {
        return this.search(val, curr.right);
      }
    },
  };
};

const bst = binaryTree();
bst.add(10);
bst.add(9);
bst.add(12);
bst.add(11);
bst.add(8);
bst.add(7);
bst.add(4);

console.log(bst.root());
console.log(bst.search(16));
console.log(bst.search(4));
