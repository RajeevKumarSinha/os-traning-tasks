"use strict";

// // coding challenge 1

// const checkDogs = (dogsJulia, dogsKate) => {
//   const juliaCopy = dogsJulia.slice(1, -2);
//   //   console.log(juliaCopy);
//   const combinedData = [...juliaCopy, ...dogsKate];
//   combinedData.forEach((dog, index) => {
//     if (dog <= 3) {
//       console.log(`Dog number ${index + 1} is still a puppy 🐶`);
//     } else {
//       console.log(
//         `Dog number ${index + 1} is an adult, and is ${dog} years old.`
//       );
//     }
//   });
// };
// // const julia = [3, 5, 2, 12, 7];
// // const Kate = [4, 1, 15, 8, 3];
// // checkDogs(julia, Kate);
// // const Julia = [9, 16, 6, 8, 3];
// // const Kate2 = [10, 5, 6, 1, 4];
// // checkDogs(Julia, Kate2);

// // coding challenge 2

// const calcAverageHumanAge = (ages) => {
//   const dogAgeHumanYear = ages.map((age) => {
//     if (age <= 2) {
//       return 2 * age;
//     } else {
//       return 16 + age * 4;
//     }
//   });
//   const oldDogs = dogAgeHumanYear.filter((dogAge) => dogAge >= 18);
//   const avgDogAge =
//     dogAgeHumanYear.reduce((total, age) => {
//       return total + age;
//     }, 0) / dogAgeHumanYear.length;
//   console.log(dogAgeHumanYear, "*", oldDogs, "*", avgDogAge);
// };
// // const testData = [5, 2, 4, 1, 15, 8, 3];
// // const testData2 = [16, 6, 10, 5, 6, 1, 4];
// // calcAverageHumanAge(testData);
// // calcAverageHumanAge(testData2);

// // coding challeng 4

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// dogs.forEach((dog) => {
//   const recommendedFood = (dog.weight ** 0.75 * 28) / 1000;
//   dog.recommendedFood = recommendedFood;
// });

// console.log(dogs);

// dogs.forEach((dog) => {
//   dog.owners.forEach((owner) => {
//     if (owner === "Sarah") {
//       if (
//         dog.curFood < dog.recommendedFood / 10 + dog.recommendedFood ||
//         dog.curFood > dog.recommendedFood / 10 + dog.recommendedFood
//       )
//         console.log("Ok Amount");
//       else if (dog.curFood > dog.recommendedFood / 10 + dog.recommendedFood)
//         console.log("Too much eating");
//       else console.log("Eating less");
//     }
//   });
// });

// const arr = [[1, 2, [3, [89, 9, [5]]]], 4, 5];
// // console.log(arr.flat(10).toSorted());
// arr.fill(1);
// console.log(arr);

// Array.from
////////////////////////////////////
// const random6 = () => Math.ceil(Math.random() * 4) + 2;
// const randomHundredDiceRollArr = Array.from({ length: 100 }, (_, i) =>
//   random6()
// );
// console.log(randomHundredDiceRollArr);

// Coding Challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// dogs.forEach((dog) => {
//   dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28);
//   if (dog.owners.includes("Sarah")) {
//     if (dog.curFood > dog.recommendedFood * 1.1) {
//       console.log(
//         `Sarah's dog is overEating`,
//         dog.curFood,
//         dog.recommendedFood * 1.1
//       );
//     } else if (dog.curFood < dog.recommendedFood * 0.9) {
//       console.log(`Sarah's dog is underEating`);
//     }
//   }
// });

// const ownerEatTooMuch = dogs
//   .reduce((acc, dog) => {
//     if (dog.curFood > dog.recommendedFood * 1.1) {
//       acc.push(dog.owners);
//     }
//     return acc;
//   }, [])
//   .flat();

// const ownerEatTooLittle = dogs
//   .reduce((acc, dog) => {
//     if (dog.curFood < dog.recommendedFood * 0.9) {
//       acc.push(dog.owners);
//     }
//     return acc;
//   }, [])
//   .flat();
// console.log(ownerEatTooMuch, ownerEatTooLittle);

// const stringOut = (arr, t) =>
//   console.log(`${arr.join(" and ")}'s dogs eat too ${t ? "Much!" : "Little!"}`);
// stringOut(ownerEatTooMuch, true);
// stringOut(ownerEatTooLittle, false);
// // dogs[0].curFood = 284;
// console.log(
//   `Any dog eating exact amount: ${dogs.some(
//     (dog) => dog.curFood === dog.recommendedFood
//   )}`
// );
// // console.log(dogs);
// const okayAmount = (dog) =>
//   dog.curFood < dog.recommendedFood * 1.1 &&
//   dog.curFood > dog.recommendedFood * 0.9;
// console.log(`Any Dog eating okay amount: ${dogs.some(okayAmount)}`);

// array containing okay amount
// const okayAmountArr = [dogs.find(okayAmount)];
// console.log(okayAmountArr);

////////////////
// const dogsCopy = [...dogs];
// console.log(dogsCopy.sort((a, b) => a.recommendedFood - b.recommendedFood));
