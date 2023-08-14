// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

// const country = "INDIA";
// const continent = "ASIA";
// let population = 1394.5;

// console.log(
//   "My Country is " +
//     country +
//     " and my continent is " +
//     continent +
//     " population of my country is " +
//     population +
//     " million"
// );

///////////////////////////////////////////////////////

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

// let isIsland = false;
//let language;

// console.log(typeof country);
// console.log(typeof language);
// console.log(typeof population);
// console.log(typeof isIsland);

////////////////////////////////////////////////////////

// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

// language = "hindi";
// language = "english";
// console.log(language);

////////////////////////////////////////////////////////

// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'

// let countryPopulation = 1394.5;
// countryPopulation++;
// let halfPopulation = countryPopulation / 2;
// console.log(`In each half ${halfPopulation} million will live`);

// let finlandPopulation = 6;

// console.log(
//   `My country has more population than findland : ${
//     countryPopulation > finlandPopulation
//   }`
// );

// const description =
//   "Portugal is in Europe, and its 11 million people speak portuguese";

////////////////////////////////////////////////////////////////////////////////

// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax

// const description = `Portugal is in Europe, and its 11 million people speak portuguese`;
// ////////////////////////////////////////////////////////////////////////////

// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 andhen to
// 130. See the different results, and set the population back to original

// const myCountryPopulation = 1394.5;

// if (myCountryPopulation > 33) {
//   console.log("India's population is above average");
// } else {
//   console.log(
//     `India's population is ${myCountryPopulation - 33} million above average`
//   );
// }

///////////////////////////////////////////////////////////////////////

// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';  ans 4
// '19' - '13' + '17'; ans 617
// '19' - '13' + 17; ans 23
// '123' < 57; false
// 5 + 6 + '4' + 9 - 4 - 2; ans 1143
// 2. Execute the operations to check if you were right

// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

//////////////////////////////////////////////////////////////////////

// LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

// const numNeighbours = 1;

// if (numNeighbours === 1) {
//   console.log("only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("more than 1 neighbor");
// } else {
//   console.log("no border");
// }

// we should use type conversion and === opertor such that both type and value can be compared
// and decision should be made on both parameter rather than the single value parameter

///////////////////////////////////////////////////////////////////////

// LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)

// const country = "India";
// const isIlandCountry = false;
// const isEnglishSpeaking = true;
// const population = 1395.5;

// if (isIlandCountry === false && isEnglishSpeaking && population > 50) {
//   console.log("sarah would love to live in " + country);
// } else {
//   console.log("sarah can't live in " + country);
// }

////////////////////////////////////////////////////////////////

// LECTURE: The switch Statement
// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'
// let language = "urdu";
// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too");
// }

/////////////////////////////////////////////////////////////////

// LECTURE: The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

// let myCountryPopulation = 1395.5;

// myCountryPopulation > 33
//   ? console.log("India's population is above average.")
//   : console.log("India's population is below average");

// const day = "sund";

// if (day === "monday") {
//   console.log("Plan course structure \nGo to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day!");
// }

console.log(`Do the right thing ${100}% of the time.`);
