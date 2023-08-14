"use strict";
//1 Problem statement: Given a number n, write a JavaScript program to print a
// diamond star pattern of 2n - 1 rows.
//a Example: If n = 5, the program should output the following pattern:
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

// Understanding the problem
// what is star pattern?how to print star pattern?
// number of rows = 2n-1 ?

// breaking the problem
// - to print star pattern we need nested loops;
// - outer loop will keep track of max no. of star to be printed
// - inner loop will increase or decrease the no. of star to match pattern

let length = 5;

const printDiamond = function (length) {
  for (let i = 1; i <= length; i++) {
    // loop for printing first n rows of the diamond
    let input = "";
    for (let k = length; k > i; k--) {
      // loop for adding space in the front
      input += " ";
    }
    for (let j = 0; j < i; j++) {
      // loop for adding * for first n lines
      input += "* ";
    }
    console.log(input);
  }

  for (let i = length - 1; i > 0; i--) {
    // loop for printing last n-1 rows
    let input = "";
    for (let j = i; j < length; j++) {
      // loop for adding space in front
      input += " ";
    }
    for (let k = i; k > 0; k--) {
      // loop for adding *
      input += "* ";
    }
    console.log(input);
  }
};

// printDiamond(length);

// solution 2 using two for loops
//1 Problem statement: Given a number n, write a JavaScript program to print a
// diamond star pattern of 2n - 1 rows.
//a Example: If n = 5, the program should output the following pattern:
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

// understanding the problem
// rows = 2n-1, input is n

const diamond = (n) => {
  let n2 = 2 * n;
  for (let i = 1; i < n2; i++) {
    //this outer loop will run 2n-1 times
    // console.log(i);
    if (i <= n) {
      // this condition is for half pattern till i = n;
      let str = "";
      for (let j = 1; j <= n; j++) {
        //In this loop we run it 1->n times everytime because starting space + no. of '*' is always = n;
        if (n - i >= j) {
          // if n-i is >= j then we add space to the str , this block basically sets condition to decreases the no. of spaces eventually
          str += " ";
        }
        if (n - i < j) {
          // if n-i is < j then we add "* " to the str , this block basically sets condition to increases the no. of * eventually
          str += "* ";
        }
      }
      console.log(str);
    } else {
      // this else block executes when i = n+1;
      let str = "";
      for (let j = n; j >= 1; j--) {
        // this loop runs from n->1 times , this bcz no. of * + no. of " "  = n;
        if (n2 - i >= j) {
          // this condition adds stars in str ,when n2-1 >=j, this condition helps to reduce no. of *'s on every iteration
          str += "* ";
        }
        if (n2 - i < j) {
          // this condition adds " " in str ,when n2-1 <j, this condition helps to increase no. of ' 's on every iteration
          str += " ";
        }
      }
      console.log(str);
    }
  }
};

diamond(3);
