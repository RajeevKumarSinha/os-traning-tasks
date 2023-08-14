"use strict";
//2 Problem statement: Given a floating-point number and the number of decimal places
//  to round to, write a JavaScript program to round the number to the specified
// number of decimal places.
//b Example: If the input number is 3.14159 and the number of decimal places to
// round to is 2, the program should output 3.14.
//c Example: If the input number is 3.14159 and the number of decimal places to
//  round to is 3, the program should output 3.142.
//d Example: If the input number is 3.14159 and the number of decimal places to
//  round to is 4, the program should output 3.1416.

// Understanding the problem
// given, a floting point number(num) and no. of decimal places to round off(n).
// we can use num.toFixed(length) method. how to do it manually ? Ans.
// we need to mainipulate the number after decimal point. how to operate on numbers after the decimal point.

// breaking into smaller problems
// - convert given no. to string.
// - find let dotIndex num.indexOf('.');
// - find the roundDecidingNum= num[dotIndex+n+1];
// - if(roundDecidingNum >=5 ) num[dotIndex+n] +1;

// solution

let num = -3.999678;
let num1 = 3.14159;
let n = 3;
let n1 = 4;
let n2 = 5;

const roundOffNumber = function (num, n) {
  let stringNum = num.toString();
  const dotIndex = stringNum.indexOf(".");
  if (n <= 0) {
    return num;
  }
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

// console.log(roundOffNumber(num, n));
// console.log(roundOffNumber(num1, n2));
// console.log(roundOffNumber(num1, n3));

// second Solution

const roundMethod = function (num, n) {
  return Number(num.toFixed(n));
};

// console.log(roundMethod(num, n));
