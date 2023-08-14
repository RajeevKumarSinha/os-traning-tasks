"use Strict";

// Write a JavaScript function that removes all keys with values of "N/A", "-", or empty strings "" from a nested object. The function
// should take the object as input and return the modified object with the unwanted keys removed.
//
var myObj = {
  name: { first: "Robert", middle: "", last: "Smith" },
  age: 25,
  DOB: "-",
  hobbies: [
    "running",
    "coding",
    "-",
    { highschool: "N/A", college: "Yale", ellect: "-" },
  ],
  education: {
    highschool: "N/A",
    college: "Yale",
    kl: "",
    t: ["", "-", "N/A", "", "-", "N/A"],
  },
};

// solution
// var myObj = {
//     "name": { "first": "Robert", "last": "Smith" },
//     "age": 25,
//     "hobbies": [ "running", "coding" ],
//     "education": { "highschool": "N/A", "college": "Yale" }
// };

// const removeKeys = function (obj) {
//   const objCopy = structuredClone(obj);
//   function forEveryLevel(param) {
//     const keysOfParam = Object.keys(param);
//     keysOfParam.forEach((key) => {
//       if (param[key] === "" || param[key] === "N/A" || param[key] === "-") {
//         if (param.length === undefined) {
//           // there is a func to chek for array and func
//           delete param[key];
//         } else {
//           index = param.indexOf(param[key]);
//           param.splice(index, 1);
//           // console.log(ram);
//         }
//       } else if (typeof param[key] === "object") {
//         // change this comparison
//         forEveryLevel(param[key]);
//       }
//     });
//   }
//   forEveryLevel(objCopy);
//   console.log(obj);
//   console.log(objCopy);
//   // console.log(obj.hobbies.at(-1));
//   // function
//   return objCopy;
// };
// // removeKeys(myObj);

// solution 2

const removeKeys = (obj) => {
  function removeFromArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i], "+-+", typeof arr[i]);
      if (arr[i] === "" || arr[i] === "-" || arr[i] === "N/A") {
        arr.splice(arr.indexOf(arr[i]), 1);
        i--;
      }
      if (Array.isArray(arr[i])) {
        removeFromArr(arr[i]);
      }
      if (typeof arr[i] === "object") {
        console.log(arr[i]);
        removeFromObject(arr[i]);
      }
    }
  }
  function removeFromObject(objkt) {
    // const objktKey = Object.keys(objkt);
    // console.log(objktKey);
    for (const key in objkt) {
      // console.log(typeof objkt[element], objkt[element]);
      if (Array.isArray(objkt[key])) {
        removeFromArr(objkt[key]);
      } else if (typeof objkt[key] === "object") {
        removeFromObject(objkt[key]);
      } else if (
        objkt[key] === "" ||
        objkt[key] === "-" ||
        objkt[key] === "N/A"
      ) {
        delete objkt[key];
      }
    }
  }
  removeFromObject(obj);
  console.log(myObj);
};

removeKeys(myObj);

// understanding the problem
// 1. remove unwanted keys from object ('','-','N/A'), and also remove these unwanted value from the arrays
// 2. take object as input and return cleaned object as output;

// breaking into smaller problems
// 1. function that will take input,
// 2. if every value type !== null then, if arr[i] or elementvalue === ('','-','N/A'),then remove arr[i]
// 3. if(typeof arr[i] is array) call array function
// 4. if(typeOf arr[i] is object) call object function

// const { hobbies } = myObj;

// hobbies.forEach((item) => console.log(item));
