/* eslint-disable max-len */
'use strict'

const userFirstName = document.querySelector('.user-first-name')
const userAddress = document.querySelector('.user-address')
const userEmail = document.querySelector('.user-email')
const userStepCompare = document.querySelector('.user-step-compare')
const waterButton = document.querySelector(".water-icon");
const sleepButton = document.querySelector(".sleep-icon");
const activityButton = document.querySelector(".exercise-icon");

const displayStatsArea = document.querySelector(".display-stats")
const hydrationStatsDisplay = document.querySelector(".hydration-stats");
const sleepStatsDisplay = document.querySelector(".sleep-stats")
const activityStatsDisplay = document.querySelector(".activity-stats");
const allWaterDisplays = document.querySelectorAll(".water"); // returns a node list
const allSleepDisplays = document.querySelectorAll(".sleep"); // returns a node list
const allActivityDisplays = document.querySelectorAll('.activity'); // returns a node list
const todaySleep = document.querySelector(".today-sleep")
const todayActivity = document.querySelector(".today-activity")
const avgActivityStats = document.querySelector(".avg-activity-stats")
const avgSleepStats = document.querySelector(".avg-sleep-stats")
const todayConsumption = document.querySelector(".today-consumption")
const userDropdown = document.querySelector(".user-dropdown")
const namesList = document.querySelector(".names-list")
const datePicker = document.querySelector(".date-picker")
const adminSelector = document.querySelector(".admin-selector")
const compareStairs = document.querySelector(".stairs-compare");
const compareSteps = document.querySelector(".steps-compare");
const compareMinutes = document.querySelector(".minutes-compare");
const compareMiles = document.querySelector(".miles-compare");
//think about getting querySelectors local when we can
// using it more than once - global, click or load
// if only using once make it local
// low hanging fruit
// use more event delegation (event.target, node siblings, parents) or declare it locally. 
// declaring QS locally - easiest 

const userRepo = new UserRepo(
  userData, 
  sleepData, 
  hydrationData, 
  activityData);
let currentUser = new User(
  userRepo.getAUser(21), 
  userRepo.filterSleepData(21), 
  userRepo.filterHydrationData(21),
  userRepo.filterActivityData(21)); // user object
let chosenDate = "2019/06/15" // default date

window.addEventListener('load', () => {
  let chosenUserID = currentUser.id; // sets the ID to a variable to use as an argument
  displayFirstName(chosenUserID);
  displayInfoCard(chosenUserID);
  mapUserNames()
  fillDropdown()
  activityStatsDisplay.classList.toggle('hidden');
  return chosenUserID; // returning ID out to use it later
})

waterButton.addEventListener('click', () => {
  displayHydrationActivity();
})

sleepButton.addEventListener('click', () => {
  displaySleepActivity()
})

activityButton.addEventListener('click', () => {
  displayExerciseActivity();
})

adminSelector.addEventListener('click', (event) => {
  event.preventDefault()
  let chosenUserID = getChosenUserData().id // set ID from name in dropdown
  currentUser = new User(
    userRepo.getAUser(chosenUserID),
    userRepo.filterSleepData(chosenUserID),
    userRepo.filterHydrationData(chosenUserID),
    userRepo.filterActivityData(chosenUserID))
  displayFirstName() // show user first name
  displayInfoCard() // show user info
  setChosenDate() // set date from date in calendar
  clearDisplay(hydrationStatsDisplay);
  clearDisplay(activityStatsDisplay);
  clearDisplay(sleepStatsDisplay);
  return currentUser
})

function setChosenDate() { // returns chosen date
  chosenDate = datePicker.value.split('-').join('/')
  return chosenDate
}

function getChosenUserData() { // returns users.js object
  return userData.find(user => user.name === namesList.value)
}

function displayFirstName() {
  userFirstName.innerText = `Welcome, ${currentUser.getFirstName()}`;
}

function displayInfoCard() {
  userAddress.innerText = `${currentUser.address}`;
  userEmail.innerText = `${currentUser.email}`;
  userStepCompare.innerText = `Your step goal is ${
    currentUser.userActivity.dailyStepGoal
  }, and the average is ${userRepo.getAllUserAvgItem
    (userRepo.activityData,
      chosenDate, 
      "numSteps")}`;
}

function displayHydrationActivity() {
  clearDisplay(sleepStatsDisplay);
  clearDisplay(activityStatsDisplay);
  toggleElement(hydrationStatsDisplay)  
  getHydrationData(todayConsumption, 0, chosenDate, currentUser.id);
  allWaterDisplays.forEach((cell, index) => {
    getHydrationData(cell, index, chosenDate, currentUser.id)
  })
}

function displaySleepActivity() {
  clearDisplay(hydrationStatsDisplay);
  clearDisplay(activityStatsDisplay);
  toggleElement(sleepStatsDisplay);
  getSleepData(todaySleep, 0, chosenDate, currentUser)
  allSleepDisplays.forEach((cell, index) => {
    getSleepData(cell, index, chosenDate, currentUser)
  })
  getSleepData(avgSleepStats, 0, chosenDate, currentUser)
} 

function displayExerciseActivity() {
  clearDisplay(hydrationStatsDisplay);
  clearDisplay(sleepStatsDisplay);
  toggleElement(activityStatsDisplay);
  allActivityDisplays.forEach((cell, index) => {
    getStepData(cell, index)
  })
  getStepData(avgActivityStats, 0)
  displayMilesWalked(todayActivity)
  displayUserStairsSuccess()
  displayUserMinutesSuccess()
  displayUserStepSuccess()
}

function displayMilesWalked(placement) {
  placement.innerText = `You walked ${currentUser.userActivity
    .calculateMilesWalked(chosenDate)
    .toFixed(2)} miles today`;
}

//try and squish these together

function displayUserStairsSuccess() { 
  let singleStair = currentUser.userActivity.getOneDayOfData(
    chosenDate,
    'flightsOfStairs'
  );
  let allStairs = userRepo.getAllUserAvgItem(
    userRepo.activityData,
    chosenDate,
    'flightsOfStairs'
  )
  if (currentUser.userActivity.isUserAboveAvg(singleStair, allStairs)) {
    console.log(compareStairs)
    compareStairs.innerText = `Your ${singleStair} stairs climbed is higher than the user average of ${allStairs}`;
  } else {
    compareStairs.innerText = `Your ${singleStair} stairs climbed is lower than the user average of ${allStairs}`;
  }
}

function displayUserStepSuccess() {
  let singleStep = currentUser.userActivity.getOneDayOfData(
    chosenDate,
    'numSteps'
  );
  let allSteps = userRepo.getAllUserAvgItem(
    userRepo.activityData,
    chosenDate,
    "numSteps"
  );
  if (currentUser.userActivity.isUserAboveAvg(singleStep, allSteps)) {
    compareSteps.innerText = `Your ${singleStep} step count is higher than the user average of ${allSteps}`;
  } else {
    compareSteps.innerText = `Your ${singleStep} step count is lower than the user average of ${allSteps}`;
  }
}

function displayUserMinutesSuccess() {
  let singleMinute = currentUser.userActivity.getOneDayOfData(
    chosenDate,
    'minutesActive'
  );
  let allMinutes = userRepo.getAllUserAvgItem(
    userRepo.activityData,
    chosenDate, 
    "minutesActive");
  if (currentUser.userActivity.isUserAboveAvg(singleMinute, allMinutes)) {
    compareMinutes.innerText = `Your active minute count of ${singleMinute} is higher than the user average of ${allMinutes}`;
  } else { 
    compareMinutes.innerText = `Your active minute count of ${singleMinute} is lower than the user average of ${allMinutes}`;
  }
}

function getAvgSleepData(placement) {
  let displaySleepQual = currentUser.userSleep.calculateAvgSleepItem('sleepQuality').toFixed(2)
  let displaySleepHours = currentUser.userSleep.calculateAvgSleepItem('hoursSlept').toFixed(2)
  placement.innerText = `all-time average hours: ${displaySleepHours}, \n all-time average quality: ${displaySleepQual}`
}

function getSleepData(placement, index) {
  placement.innerText = `${
    currentUser.userSleep.calculateSleepItemPerWeek(chosenDate, 'hoursSlept')[index]
  } hours, \n quality: ${
    currentUser.userSleep.calculateSleepItemPerWeek(chosenDate, 'sleepQuality')[index]
  }`;
  getAvgSleepData(avgSleepStats)
}

function getHydrationData(placement, index) {
  placement.innerText = `${
    currentUser.userHydration.calculateWaterPerWeek(chosenDate, currentUser)[index]
  } ounces`;
}

function getStepData(placement, index) {
  placement.innerText = `${
    currentUser.userActivity.getWeekOfData(chosenDate, 'numSteps')[index]
  } steps, ${
    currentUser.userActivity.getWeekOfData(chosenDate, 'flightsOfStairs')[index]
  } flights of stairs, and ${
    currentUser.userActivity.getWeekOfData(chosenDate, 'minutesActive')[index]
  } active minutes`;
}

function toggleElement(element) {
  element.classList.toggle('hidden')
}

// clear everything
function clearDisplay(element) {
  element.classList.add('hidden');
}

const mapUserNames = () => {
  const listOfNames = userData.sort((a, b) => { 
    if (a.name < b.name) {
      return -1
    }
  }).map(user => user.name)
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