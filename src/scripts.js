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
let userDropdown = document.querySelector(".user-dropdown")
let namesList = document.querySelector(".names-list")
let adminSelector = document.querySelector(".admin-selector")

let userRepo = new UserRepo(userData); // needs to take in array of users
let currentUser = new User(userRepo.getAUser(21)); // user object
const userHydration = new UserHydration(hydrationData);

window.addEventListener('load', (event) => {
  event.preventDefault()
  let currentID = currentUser.id; // sets the ID to a variable to use as an argument
  displayFirstName(currentID);
  displayInfoCard(currentID);
  mapUserNames()
  fillDropdown()
  return currentID; // returning ID out to use it later
})

waterButton.addEventListener('click', (event) => {
  event.preventDefault()
  displayHydrationActivity();
})

adminSelector.addEventListener('click', (event) => {
  event.preventDefault()
  let currentID = getCurrentUser().id
  currentUser = new User(userRepo.getAUser(currentID))
  displayFirstName()
  displayInfoCard(currentID)
  return currentID
})

function getCurrentUser() { // returns users.js object
  return userData.find(user => user.name === namesList.value)
}

function displayFirstName() {
  userFirstName.innerText = `Welcome, ${currentUser.getFirstName()}`;
};

let displayInfoCard = () => {
  userAddress.innerText = `${currentUser.address}`;
  userEmail.innerText = `${currentUser.email}`;
  userStepCompare.innerText = `Your step goal is ${
    currentUser.dailyStepGoal
  }, and the average is ${userRepo.calculateAvgSteps()}`;
};

let displayHydrationActivity = () => {
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

let getHydrationData = (placement, index, startDate, currentID) => {
  placement.innerText = `${
    userHydration.calculateWaterPerWeek("2019/07/15", currentID)[index]
  }`;
};

const show = (element) => {
  element.classList.remove('hidden')
}

const hide = (element) => {
  element.classList.add('hidden')
}

const mapUserNames = () => {
  userData.sort((a, b) => { // this should work with a.name - b.name tho?
    if (a.name < b.name) {
      return -1
    } 
  })
  let listOfNames = userData.reduce((total, value) => {
    total.push(value.name)
    return total;
  }, [])
  return listOfNames
}

function fillDropdown() {
  let names = mapUserNames();
  names.forEach(function (name) {
    let opt = document.createElement('option');
    opt.innerHTML = name;
    opt.value = name;
    namesList.appendChild(opt);
  });
}