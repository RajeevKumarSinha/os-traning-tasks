'use strict';

// // console.log(Number.isNaN(10));
// console.log(Number.isFinite(10));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(10 / 0));
// console.log(Number.isFinite('ddd'));
// console.log(Math.sqrt(6));

// let million = 1_00_00_00;
// console.log(million);
// const jsDate = new Date(0);
// console.log(jsDate);

// const presentDate = new Date();
// console.log(presentDate);

// const createDate = new Date(2024, 0, 1, 22);
// console.log(createDate);

// console.log(new Date(1600, 12, 21, 5));

// console.log(jsDate.getFullYear());
// console.log(jsDate.getMonth());
// console.log(jsDate.getDate());
// console.log(jsDate.getDay());
// console.log(jsDate.getHours());
// console.log(jsDate.getMinutes());
// console.log(jsDate.getSeconds());
// console.log(jsDate.getTime());
// console.log(jsDate.toISOString());
// console.log(jsDate.toUTCString());
// const opt = {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
// };
// console.log(new Intl.DateTimeFormat('en-GB', opt).format(jsDate));

// const num = 45678902983;
// const numOpt = {
//   style: 'currency',
//   unit: 'celsius',
//   currency: 'INR',
// };
// console.log(new Intl.NumberFormat('en-IN', numOpt).format(num));

// const intervalId = setInterval(() => {
//   const date = new Date();
//   console.log(
//     `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
//   );
// }, 100);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 3000);
// setInterval;

const Person = function (userName, age) {
  this.userName = userName;
  this.age = age;
};

const jonas = new Person('Jonas', 30);

Person.prototype.calcAge = function () {
  return 100 - this.age;
};
console.log(jonas);
console.log(jonas.calcAge());
