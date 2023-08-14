"use strict";

//3 Problem statement: Implement a stack data structure using JavaScript in 2 ways
// First by using the array data type of JavaScript, using the class keyword
// First by using the array data type of JavaScript, without the class keyword(functional)
// Then without using the array data type
// The stack data structure should fulfill the following operations
// Push: Add an element to the top of the stack.
// Pop: Remove the top element from the stack.
// Peek/Top: Retrieve the top element from the stack without removing it.
// Size: Get the number of elements in the stack.
// isEmpty: Check if the stack is empty.
// Clear: Remove all elements from the stack.

//Understanding the problem
// what is stack ? Ans: stack is lifo ds.
// by using array we can implement it very easily by using pop and push method on it.

class stackAsClass {
  constructor() {
    this.stack = [];
  }
  add(item) {
    this.stack.push(item);
  }
  remove() {
    this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  size() {
    return this.stack.length;
  }
  isEmpty() {
    return this.stack.length === 0 ? "Empty" : "Not Empty";
  }
  clear() {
    this.stack = [];
    return this.isEmpty();
  }
}

// const stack1 = new stackAsClass();
// stack1.add(10);
// stack1.add(50);
// stack1.add(40);
// console.log(stack1.stack);
// stack1.remove();
// console.log(stack1.stack);
// stack1.add(30);
// console.log(stack1.stack);
// stack1.remove();
// console.log(stack1.stack);
// console.log(stack1.peek());
// console.log(stack1.size());
// console.log(stack1.isEmpty());
// console.log(stack1.stack);
// console.log(stack1.clear());
// console.log(stack1.stack);

// solution 2 using function and creating instance of it by calling new on this function

function stackUsingFun() {
  this.stack = [];
  this.push = function (item) {
    this.stack.push(item);
  };
  this.pop = function () {
    this.stack.pop();
  };
  this.peek = function () {
    return this.stack[this.stack.length - 1];
  };
  this.size = function () {
    return this.stack.length;
  };
  this.isEmpty = function () {
    return this.stack.length === 0 ? "Empty" : "Not Empty";
  };
  this.clear = function () {
    this.stack = [];
  };
}

// const stk = new stackUsingFun();
// stk.push("Hello");
// stk.push("everyone");
// stk.push("president");
// console.log(stk.stack);
// stk.pop();
// console.log(stk.stack);
// stk.push("present");
// stk.push("here");
// console.log(stk.stack);
// console.log(stk.size());
// console.log(stk.isEmpty());
// stk.clear();
// console.log(stk.isEmpty());

// solution 3 stack using a function

const stackFunction = function () {
  let stack = [];
  return {
    push: function (input) {
      stack.push(input);
    },
    pop: function () {
      return stack.pop();
    },
    peek: function () {
      return stack[stack.length - 1];
    },
    size: function () {
      return stack.length;
    },
    isEmpty: function () {
      return stack.length !== 0 ? "Not Empty" : "Empty";
    },
    clear: function () {
      stack = [];
    },
  };
};

// const funStk = stackFunction();
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

module.exports = { stackFunction };
// solution 3 stack using a linked list ;

// stack datastructure as a class
// stack datastructure using a functional prog approach
// stack using a linked list
// Rajeev, Uday: pattern 2 for loops
// bracket prog using the stack data structure
// look into module.exports for code reuse
// single linked list
