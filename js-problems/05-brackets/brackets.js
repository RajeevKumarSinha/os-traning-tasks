"use strict";
// import { stackFunction } from "./stack.mjs";
const { stackFunction } = require("../06-stack/stack.js");
const { stackLL } = require("../07-stack-linkedlist/stackUsingLL.js");
// import { stackLL } from "./stackUsingLL.mjs";
//4 Problem statement: Given a string of brackets, determine if the brackets
// are balanced or not. A string of brackets is considered balanced if every
// opening bracket has a corresponding closing bracket of the same type, and
// they are properly nested. The function returns a boolean value.
// Examples:
// Input: “{[()]}” Output: true
// Input: “[{(}]” Output: false
// Input: "a[b{c}d]e(f)g" Output: true
// Input: ")(][}{" Output: false

// Understanding the problem
// create a loop which runs till inputlength
// if(element is an opening braket) push in the stack or pass
// if(element is a closing bracket ) pop the element and compare with the closing bracket,
// if closing brackets belong to the opening then continue;
// else the brackets are not balanced.

let input1 = "[{(}]";
let input2 = "{[()]}";
let input3 = "a[b{c}d]e(f)g";
let input4 = "[(])";

const balancedBrackets = function (input) {
  // const stack = stackFunction();
  const stack = stackLL();
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(" || input[i] === "{" || input[i] === "[") {
      stack.push(input[i]);
    } else if (input[i] === ")" || input[i] === "}" || input[i] === "]") {
      const popped = stack.pop();
      //   console.log(popped, input[i]);
      if (
        (popped === "(" && input[i] === ")") ||
        (popped === "{" && input[i] === "}") ||
        (popped === "[" && input[i] === "]")
      ) {
        continue;
      } else {
        // console.log(popped, input[i], "+");
        console.log(false);
        return;
      }
    }
  }
  if (stack.size() === 0) {
    console.log(true);
  } else console.log(false);
  //   console.log(stack.size());

  //   for (let index = 0; index < stack.size(); index++) {
  //     console.log(stack.pop());
  //   }
};
balancedBrackets(input1);
balancedBrackets(input2);
balancedBrackets(input3);
balancedBrackets(input4);

balancedBrackets(`const roundOffNumber = function (num, n) {
      let stringNum = num.toString();
  const dotIndex = stringNum.indexOf(".");
  if (Number(stringNum[dotIndex + n + 1]) >= 5) {
    // console.log(+stringNum[dotIndex + n] + 1);
    let roundNumSum = +stringNum[dotIndex + n] + 1;
    // roundNumSum === 10 then 1 is carrie forward to string[dotIndex +n-1].
    if (roundNumSum === 10) {
      stringNum =
      stringNum.slice(0, dotIndex + n - 1) +
      (+stringNum[dotIndex + n - 1] + 1);
    } else {
      stringNum = stringNum.slice(0, dotIndex + n) + roundNumSum;
    }
  } else {
    stringNum = stringNum.slice(0, dotIndex + n + 1);
  }
  return Number(stringNum);
};
`);

// additional
// stack datastructure as a class
// stack datastructure using a functional prog approach
// stack using a linked list
// Rajeev, Uday: pattern 2 for loops
// bracket prog using the stack data structure
// look into module.exports for code reuse
// single linked list
