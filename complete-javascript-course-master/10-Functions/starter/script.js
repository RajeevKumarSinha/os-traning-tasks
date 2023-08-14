'use strict';

// console.log(null ?? 'john');
// console.log(0 ?? 'mom');
// console.log(undefined ?? 'jane');

const greet = greetings => {
  return greeter => console.log(`${greetings} ${greeter}`);
};

// let x = greet('hey');
// x('Rajeev');
// or
// greet('Hey')('Rajeev');

// call,apply and bind methods

// const airIndia = {
//   name: 'AirIndia',
//   iataCode: 'AI',
//   bookings: [],
//   book(flightNum, usrName) {
//     console.log(
//       `${usrName} booked a seat on ${this.name} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, usrName });
//   },
// };

// airIndia.book(300, 'Karan');
// airIndia.book(200, 'Anand');
// console.log(airIndia.bookings);

// const vistara = {
//   name: 'Vistara',
//   iataCode: 'VA',
//   bookings: [],
// };

// airIndia.book.call(vistara, 100, 'kamla');

// let anyone = [230, 'shreshtha'];
// airIndia.book.apply(vistara, anyone);

// airIndia.book.bind(vistara)(150, 'Hari');
// // or
// const bookVA = airIndia.book.bind(vistara);
// bookVA(134, 'Karuna');

// partial application

// const addTax = function (rate, value) {
//   return value * rate + value;
// };
// const vatTax = addTax.bind(null, 0.23);
// console.log(vatTax(100));

// iife

(function () {
  console.log('Hello world!');
})();
