'use strict'

// const UserHydration = require("./userHydration")

let userFirstName = document.querySelector('.user-first-name')
let userAddress = document.querySelector('.user-address')
let userEmail = document.querySelector('.user-email')
let userStepCompare = document.querySelector('.user-step-compare')
let waterButton = document.querySelector(".water-icon");
let chartIcon = document.querySelector(".chart-icon");
let hydrationStatsDisplay = document.querySelector(".hydration-stats");
let todayWater = document.querySelector(".today-water");
let yesterdayWater = document.querySelector(".yesterday-water");
let twoDayWater = document.querySelector(".two-day-water");
let threeDayWater = document.querySelector(".three-day-water");
let fourDayWater = document.querySelector(".four-day-water");
let fiveDayWater = document.querySelector(".five-day-water");
let sixDayWater = document.querySelector(".six-day-water");
let todayConsumption = document.querySelector(".today-consumption");

const userRepo = new UserRepo(userData); // needs to take in array of users
const currentUser = new User(userRepo.getAUser(1)); // user object
const userHydration = new UserHydration(hydrationData);

window.addEventListener('load', () => {
  const currentID = currentUser.id; // sets the ID to a variable to use as an argument
  displayFirstName(currentID);
  displayInfoCard(currentID);
  return currentID; // returning ID out to use it later
})

waterButton.addEventListener('click', () => {
  displayHydrationActivity();
})

const displayFirstName = (currentID) => {
  userFirstName.innerText = `Welcome, ${currentUser.getFirstName(currentID)}`;
};

const displayInfoCard = (currentID) => {
  userAddress.innerText = `${currentUser.address}`;
  userEmail.innerText = `${currentUser.email}`;
  userStepCompare.innerText = `Your step goal is ${
    currentUser.dailyStepGoal
  }, and the average is ${userRepo.calculateAvgSteps()}`;
};

const displayHydrationActivity = () => {
  // hide(chartIcon);
  show(hydrationStatsDisplay);
  getHydrationData(todayConsumption, 0, "2019/07/15", 1);
  getHydrationData(todayWater, 0, '2019/07/15', 1);
  getHydrationData(yesterdayWater, 1, "2019/07/15", 1);
  getHydrationData(twoDayWater, 2, "2019/07/15", 1);
  getHydrationData(threeDayWater, 3, "2019/07/15", 1);
  getHydrationData(fourDayWater, 4, "2019/07/15", 1);
  getHydrationData(fiveDayWater, 5, "2019/07/15", 1);
  getHydrationData(sixDayWater, 6, "2019/07/15", 1);
}

const getHydrationData = (placement, index, startDate, id) => {
  placement.innerText = `${
    userHydration.calculateWaterPerWeek("2019/07/15", 1)[index]
  }`;
};

//Psudocode:
// parameter - position (today water)


const show = (element) => {
  element.classList.remove('hidden')
}

const hide = (element) => {
  element.classList.add('hidden')
}