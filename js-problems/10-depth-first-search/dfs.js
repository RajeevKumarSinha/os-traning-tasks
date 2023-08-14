"use strict";

const { stackLL } = require("./stackUsingLL");
///////////////////////////////////////
const stack = stackLL();
//////////////////////////////////////
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
    // dfs(curr = root) {
    //   if (curr === null) {
    //     return;
    //   } else {
    //     console.log(curr.value);
    //     this.dfs(curr.left);
    //     this.dfs(curr.right);
    //   }
    // },
    dfs(curr = root) {
      stack.push(curr);
      while (stack.size != 0) {
        let current = stack.pop();
        if (current !== undefined) {
          console.log(current.value);
        } else break;
        if (current.right !== null) {
          stack.push(current.right);
        }
        if (current.left !== null) {
          stack.push(current.left);
        }
      }
      //   return 0;
    },
  };
};

const bst = binaryTree();
bst.add(10);
bst.add(9);
bst.add(12);
bst.add(11);
bst.add(7);
bst.add(8);
bst.add(4);

// console.log(bst.root());
// console.log(bst.search(16));
// console.log(bst.search(4));

bst.dfs();

//       10
//      /  \
//     9    12
//    /\     /
//   7  8   11
//  /
// 4

//Function to test data type of Arguments , its not array it is object
// function heavy(...param) {
//   // console.log(Array.isArray(arguments));//false
//   console.log(typeof arguments, arguments);
//   console.log(Array.isArray(param), param);
// }
// heavy(5, 1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 7);

// const x = {
//   name: "king",
//   retName(fName) {
//     return `${fName} ${this.name}`;
//   },
// };

// const y = {
//   name: "Great king",
//   // retName(fName){
//   //   return `${fName} ${this.name}`
//   // }
// };

// const yFun = x.retName.bind(y);

// console.log(yFun("Bhandari"));

// console.log(x.retName("Karama"));
