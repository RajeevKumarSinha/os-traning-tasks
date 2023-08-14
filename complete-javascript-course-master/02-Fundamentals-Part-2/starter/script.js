"use strict";
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Kumar",
//   age: 25,
//   job: "Developer",
//   friends: ["Mac", "Jack", "Rock"],
// };

// let varName = "age";

// console.log(
//   `${jonas.firstName} has ${
//     jonas.friends.length
//   }, and his best friend is called ${jonas.friends[jonas.friends.length - 1]}`
// );
// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const myCountryDetais = describeCountry("India", 1395.5, "New-Delhi");
// const pakistanDetails = describeCountry("Pakistan", 231.4, "Islamabad");
// const chinaDetails = describeCountry("China", 1430, "Bejing");

// console.log(myCountryDetais);
// console.log(pakistanDetails);
// console.log(chinaDetails);

///////////////////////////////////////////////////////////////////////////////

// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

function percentageOfWorld1(population) {
  return (population / 79).toFixed(2) + "%";
}

// const chinaPopulationPercent = `China has ${percentageOfWorld1(
//   1441
// )} of world's population.`;
// const indiaPopulationPercent = `India has ${percentageOfWorld1(
//   1349.5
// )} of world's population.`;
// const pakistanPopulationPercent = `Pakistan has ${percentageOfWorld1(
//   234.4
// )} of world's population.`;

// console.log(chinaPopulationPercent);
// console.log(indiaPopulationPercent);
// console.log(pakistanPopulationPercent);

// const percentageOfWorld2 = function (population) {
//   return (population / 79).toFixed(2) + "%";
// };

// console.log(percentageOfWorld2(1441));
// console.log(percentageOfWorld2(1395.5));
// console.log(percentageOfWorld2(234.4));

///////////////////////////////////////////////////////////////////

// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'

// const percentageOfWorld3 = (population) => (population / 79).toFixed(2) + "%";

// console.log(percentageOfWorld3(1441));

///////////////////////////////////////////////////////////////////////////

// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

// const describePopulation = (country, population) => {
//   return `${country} has ${population} million people, which is about ${percentageOfWorld1(
//     population
//   )} of the world.`;
// };

// console.log(describePopulation("India", 1395.5));
// console.log(describePopulation("Bhikaristan", 234.4));
// console.log(describePopulation("China", 1441));

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const yearsUntilRetirement = (firstName, birthYear) => {
//   const age = calcAge(birthYear);
//   const retirement = 60 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement("Kishan", 1998));

////////////////////////////////////////////////////////////////////

// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

// const populations = [100, 200, 400, 1000];

// console.log(populations);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

//////////////////////////////////////////////////////////////

// LECTURE: Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

// const indiasNeighbours = [
//   "Pakistan",
//   "China",
//   "Nepal",
//   "Bhutan",
//   "Bangladesh",
//   "Myanmar",
// ];
// console.log(indiasNeighbours);

// indiasNeighbours.push("Utopia");

// console.log(indiasNeighbours);

// indiasNeighbours.pop();

// console.log(indiasNeighbours);

// if (indiasNeighbours.includes("Germany")) {
//   console.log("Germany can't be India's neighbour are you dumb or what!");
// } else {
//   console.log("India is in asia, not europe stupid.");
// }

// indiasNeighbours[indiasNeighbours.indexOf("Pakistan")] = "Bhikaristan";

// console.log(indiasNeighbours);

/////////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)

// const myCountry = {
//   country: "India",
//   capital: "New Delhi",
//   language: "Hindi",
//   population: 1395.5,
//   neighbours: ["Pakistan", "China", "Nepal", "Bhutan", "Bangladesh", "Myanmar"],
// };

// console.log(myCountry);

/////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

// console.log(
//   `${myCountry.country} has a ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry["population"] -= 2;
// console.log(myCountry.population);

// const arr = [];
// arr[5] = 10;
// console.log(arr)

////////////////////////////////////////////////////////////////////////////

// LECTURE: Object Methods
// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.

// myCountry.describe = function () {
//   console.log(
//     `${this.country} has a ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capita called ${this.capital}`
//   );
// };

// myCountry.describe();

// myCountry.checkIsland = function () {
//   this.neighbours.length > 0 ? (this.isIland = false) : (this.isIland = true);
// };

// myCountry.checkIsland();
// console.log(myCountry.isIland);

///////////////////////////////////////////////////////////////////

// LECTURE: Iteration: The for Loop
// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

// for (let i = 1; i < 51; i++) {
//   console.log(`Voter number ${i} is currently voting.`);
// }

///////////////////////////////////////////////////////////////////

// LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manuallyin the previous assignment,
// and reflect on how much better this solution is

// const populations = [100, 200, 400, 1000];

// const percentage2 = [];

// for (let i = 0; i < populations.length; i++) {
//   percentage2.push(percentageOfWorld1(populations[i]));
// }
// console.log(percentage2);

/////////////////////////////////////////////////////////////////

// LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway 😉

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//   }
// }

/////////////////////////////////////////////////////////////////

// LECTURE: The while Loop
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?

const populations = [100, 200, 400, 1000];

const percentages3 = [];
let i = 0;
while (percentages3.length !== populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages3);
