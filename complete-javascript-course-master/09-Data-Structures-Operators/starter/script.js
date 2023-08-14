'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex]], this.mainMenu[mainIndex];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orederPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngrident, ...otherIngridents) {
    console.log(mainIngrident);
    console.log(otherIngridents);
  },
};

const {
  openingHours: { sat, thu },
} = restaurant;

// console.log(sat, thu);
let arr = ['mushroom', 'olive', 'cheese'];
// restaurant.orderPizza(...arr);
// restaurant.orderPizza('Paneer');
// restaurant.orederPasta(...arr);

//rest operator

const [a, b, ...others] = [1, 2, 3, 4, 5, 6];

const [x, , y, ...otherss] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// console.log(a, b, others);
// console.log(x, y, otherss);

// rest Operator for Objects

// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat, weekDays);

//rest operator in function for taking arbitrary amount of input

// const add = function (...numbers) {
//   let sum = numbers.reduce((total, item) => (total += item));
//   return sum;
// };
// console.log(add(1, 2, 3, 4, 56, 7));

const add = function () {
  let sum = 0;
  // let sum = arguments.reduce((total, item) => (total += item));
  for (let i = 0; i < arguments.length; i++) sum += arguments[i];
  return sum;
  // console.log(arguments);
};
// console.log(add(1, 2, 3, 4, 56, 7));

// copy array

// const mainMenuCopy = [...restaurant.mainMenu, 'Chowmin'];
// console.log(mainMenuCopy);

// merge array

// const main = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(main);

const newRestaurant = { ...restaurant };
newRestaurant.name = 'Bhook nhi h';
// console.log(newRestaurant, restaurant);
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'kailash nagar',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Pandra OP',
//   starterIndex: 1,
// });

// const { name, mainMenu } = restaurant;

// console.log(name, mainMenu);

// const { menu = [], starterMenu: starter = [] } = restaurant;

// console.log(menu, starter);

// mutating variables

// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// nested objects

// const {
//   fri: { open: o, close },
// } = restaurant.openingHours;

// console.log(o, close);

// short circuiting && ||

// console.log(0 || true);
// console.log(1 || false);

// console.log(1 && true);
// console.log(1 && false);
/////////////////////////////////////////////////////////////////////

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
// const players1 = [];
// const players2 = [];
// const game = {
//   team1: {
//     gk: 'GoalKeeper',
//     remainingplayers: [],
//     substitute: ['Thiago', 'Coutinho', 'Perisic'],
//   },
//   odds: {
//     team1: '',
//     draw: '',
//     team2: '',
//   },
//   printGoals: function (...players) {
//     for (let index = 0; index < players.length; index++) {
//       console.log(players[index]);
//     }
//   },
// };
// allPlayers = [gk, ...remainingplayers];

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (let i = 0; i < days.length; i++) {
//   if (restaurant.openingHours?.[days[i]]) {
//     console.log(`open on ${days[i]}`);
//   } else {
//     console.log(`doesn't open on ${days[i]}`);
//   }
// }

// const entries = Object.entries(restaurant);
// console.log(entries);

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, 
and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
// const gameSet = new Set([...gameEvents].map(item => item[1]));
// // or;
// const gameNewSet = [...new Set(gameEvents.values())];
// console.log(gameNewSet);

// 2.
// gameEvents.delete(64);
// console.log(gameEvents);
// 3.
// const gameArr = [...gameEvents];
// let avgTime = 0;
// for (let i = 0; i < gameArr.length - 1; i++) {
//   avgTime += gameArr[i + 1][0] - gameArr[i][0];
//   console.log(gameArr[i]);
// }
// avgTime /= gameArr.length;
// console.log(avgTime);
// console.log(`An event happened, on average, every ${avgTime} minutes`);

// 4.
// for (const iterator of gameArr) {
//   if (iterator[0] <= 45) {
//     console.log(`[First Half] ${iterator[0]}: ${iterator[1]}`);
//   } else {
//     console.log(`[Second Half] ${iterator[0]}: ${iterator[1]}`);
//   }
// }

// sets

// const mynums = [1, 2, 2, 21, 1, 4, 5, 6, 2, 3, 3];
// const nums = new Set(mynums);
// console.log(nums);
// nums.add(50);
// console.log(nums);
// console.log(nums.has(3));
// nums.delete(21);
// console.log(nums);
// console.log(nums.size);

// maps

const marks = new Map([
  ['english', 65],
  ['hindi', 80],
  ['math', 55],
  ['science', 80],
  ['computer', 95],
  ['sports', 80],
]);
// console.log(marks);

// console.log(marks.set('dsa', 50));
// marks.set('os', 70).set('dbms', 80).set('.net', 40);
// marks.delete('sports');
// console.log(marks, marks.size);
// console.log(marks.get('english'));
// console.log(marks.has('.net'));

// for (const [subject, mark] of marks) {
//   console.log(subject, mark);
// }

// const subjects = marks.keys();
// const mak = marks.values();
// console.log(subjects, mak);

// strings

const airPlane = 'Air_India';
// console.log(airPlane[0]);
// console.log(airPlane.indexOf('r'));
// console.log(airPlane.indexOf('z'));
// console.log(airPlane.slice(0, airPlane.length));
// console.log(airPlane.slice(1, -1));

const passenger = 'jOaNaS';
const correctPassenger =
  passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
// console.log(correctPassenger);

// comparing emails

const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';
const correctMail = loginEmail.trim().toLowerCase();
// console.log(email === correctMail);
// console.log(email.replace(/l/g, 'i'));

// padding

const maskCreditCard = function (num) {
  const str = num + '';
  const last = str.slice(-4);
  const final = last.padStart(12, 'X');
  return final;
};
// console.log(maskCreditCard('1234567899876543'));

// Question
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
*/

const arrVariables = [
  'first_name',
  'last_name',
  'employee_id',
  'company_name',
  'fathers_name',
  'date_of_birth',
];

const test = [
  'underscore_case',
  'first_name',
  'Some_Variable',
  'calculate_AGE',
  'delayed_departure',
];

function convertToCamel(arr) {
  return arr.map(item => {
    let newItems = item.split('_');
    // console.log(newItems);
    let newItem = newItems[0];
    for (let i = 1; i < newItems.length; i++) {
      // console.log(newItems[i]);
      newItem +=
        newItems[i][0].toUpperCase() + newItems[i].slice(1).toLowerCase();
    }
    return newItem;
  });
}

// console.log(convertToCamel(test))
// console.log(convertToCamel(arrVariables));
// const outPut = convertToCamel(test);
// outPut.forEach((element, index) => {
//   console.log(`${element.padEnd(20, ' ')} ${'✅'.repeat(index + 1)}`);
// });

///////////////////////////////////////
// String Methods Practice
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flightsArr = flights.split('+');
// console.log(flightsArr);

// for (const data of flightsArr) {
//   const [status, from, to, time] = data.split(';');
//   console.log(
//     `${status.includes('Delayed') ? '❤️ ' : ' '}${status.replaceAll(
//       '_',
//       ' '
//     )} ${from.slice(0, 3).toUpperCase()} to ${to
//       .slice(0, 3)
//       .toUpperCase()} (${time.replace(':', 'h')})`.padStart(39)
//   );
// }

const arrr = [1, 2, 3, 4, 5, 6, 7, 8];

function hell(param) {
  param[0] = 10;
  return param;
}
console.log(hell(arrr));
console.log(arrr);
