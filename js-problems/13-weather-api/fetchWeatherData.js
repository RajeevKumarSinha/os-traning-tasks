"use strict";

// In this challenge, you will create a function called 'fetchWeather' that takes an array of city names as input and
//  uses the OpenWeather API to retrieve and display the current weather information for all the cities.

// Here are the steps you need to follow:

// Use the OpenWeather API (https://openweathermap.org/api) to fetch weather data for a given city. You will need to sign up for a free API key.

// Write a function 'fetchWeather' that takes an array of city names as an argument.

// Inside the function, use the fetch API you need to make a GET request to the OpenWeather API using the provided city name and your API key.

// Handle the response using promises. If the request is successful (status code 200), parse the JSON response and extract relevant weather
// information such as temperature, weather description, and any other data you find interesting.

// Display the weather information to the user. You can log it to the console or format it in any other creative way you prefer.
const apiKey = "c585be26fae71c52e5d29e89a50fd2a7";
// const fetchWeather = function (cities, myKey = apiKey) {
//   const fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${cities}&units=metric&appid=${myKey}`
//   )
//     .then((response) => {
//       // console.log(response);
//       return response.json();
//     })
//     .then((data) => console.log(data));
//   // body
// };

// fetchWeather("alabama");

const usaCities = [
  "New York City",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "SaAntonio", // error case
  "San Diego",
  "Dallas",
  "San Jose",
];

const fetchWeather = async function (cities, myKey = apiKey) {
  //////////////////////////////////////////////old(__this code make api calls one at a time__) {

  // const citiesWeather = []; // array to store fetched data
  // for (const city of cities) {
  //   // loop over cities array
  //   const cityWeather = await getJson(
  //     // cityWeather will store after fetching data of a single city from cities array
  //     `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myKey}`
  //   );
  //   citiesWeather.push(cityWeather); // adding feched city weather object into citiesWeather array
  // }
  // citiesWeather.forEach((weather, index) => showWeather(weather, index)); // calling showWeather fn to display fetched data.
  //////////////////////////////////////////////old(__this code make api calls one at a time__) {

  //////////////////////////////////////////////new(__this code make all the apiCalls at a time__) (){

  const urlCities = cities.map((city) =>
    getJson(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myKey}`
    )
  );

  const citiesWeather = await Promise.all(urlCities);
  console.log(citiesWeather);
  citiesWeather.forEach((weather, index) => showWeather(weather, index)); // calling showWeather fn to display fetched data.

  //////////////////////////////////////////////new }
};

async function getJson(url) {
  // takes the url and returns fetched data or error.
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    return err.message;
  }
}

fetchWeather(usaCities); // calling fetchWeather for usaCities

function showWeather(obj, index) {
  // logs error or weather report based on object and index passed.
  if (obj.cod === "404") {
    console.log(`${index + 1}. Error: ${obj.message}`);
  } else {
    console.log(
      `${index + 1}. ${obj.name}'s temperature is ${
        obj.main.temp
      }°C & wind speed is ${obj.wind.speed} meter/sec.`
    );
  }
}
