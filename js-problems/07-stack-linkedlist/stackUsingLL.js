"use strict";
// import { LinkedList } from "./linkedList.mjs";
const { linkedList } = require("./linkedList.js");

const stackLL = function () {
  const ll = linkedList();
  return {
    push: function (input) {
      ll.insertAtFront(input);
    },
    pop: function () {
      let popped = ll.removeFromFront();
      return popped;
    },
    peek: function () {
      //   console.log(ll.peek());
      return ll.peek();
    },
    size: function () {
      return ll.size();
    },
    isEmpty: function () {
      return ll.size() !== 0 ? "Not Empty" : "Empty";
    },
    clear: function () {
      ll.clear();
    },
  };
};

// const funStk = stackLL();
// funStk.push(5);
// funStk.push("Birthday");
// funStk.push(10);
// console.log(funStk.peek());
// console.log(funStk.size());
// funStk.pop();
// console.log(funStk.size());
// console.log(funStk.isEmpty());
// funStk.clear();
// console.log(funStk.isEmpty());

module.exports = { stackLL };
