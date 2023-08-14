// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const temperatures = [3, -6, -2, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcAmplitude = (arr1, arr2) => {
//   let arr = [...arr1, ...arr2];
//   let max = arr[0];
//   let min = arr[0];
//   arr.forEach((item) => {
//     if (item !== "error") {
//       if (max < item) {
//         max = item;
//       }
//       if (min > item) {
//         min = item;
//       }
//     }
//   });
//   return max - min;
// };

// const temp = [60, 5, 4];

// console.log(calcAmplitude(temperatures, temp));

// const todoList = [
//   {
//     id: 1,
//     task: "Buy groceries",
//     dueDate: "2023-07-25",
//     priority: "High",
//     completed: false,
//   },
//   {
//     id: 2,
//     task: "Finish report for work",
//     dueDate: "2023-07-28",
//     priority: "Medium",
//     completed: false,
//   },
//   {
//     id: 3,
//     task: "Pay utility bills",
//     dueDate: "2023-07-30",
//     priority: "High",
//     completed: false,
//   },
//   {
//     id: 4,
//     task: "Go for a run",
//     dueDate: "2023-07-26",
//     priority: "Low",
//     completed: false,
//   },
//   {
//     id: 5,
//     task: "Read a book",
//     dueDate: "2023-08-01",
//     priority: "Medium",
//     completed: false,
//   },
// ];

// console.table(todoList);

// Problem 2:
// Function should now recieve 2 arrays of temps

// 1 Understanding the problem
// - with two array, should we implement functionality twice ?
// No! just merge two arrays

// 2 Breaking up into sub-problems
// -How to merge 2 arrays?

// function multiply(a, b) {
//   const result = a * b;
//   return result;
// }

// function addAndMultiply(x, y, z) {
//   const sum = x + y;
//   const product = multiply(sum, z);
//   return product;
// }

// const num1 = 2;
// const num2 = 3;
// const num3 = 4;
// debugger;
// const result = addAndMultiply(num1, num2, num3);
// console.log("Result:", result);

// Coding Challenge #1

// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4];

// Understanding the Problem
//-Array transformed to string , seperated by ...
//-what is x days ? ans: index+1

//breaking up into sub problem
//-Transform array to string
//-Transform each element to string with degree ℃
//-string need to contain day(index+1)
//-Add...between elements and start and end of string

let myarr = [17, 21, 23];
let myarr2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let str = "...";
  arr.forEach((item, index) => (str += item + `℃  in ${index + 1} days ... `));
  str + "...";
  return str;
};
console.log(printForecast(myarr2));
