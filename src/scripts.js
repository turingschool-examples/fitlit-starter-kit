'use strict'

const userFirstName = document.querySelector('.user-first-name')
const userAddress = document.querySelector('.user-address')
const userEmail = document.querySelector('.user-email')
const userStepCompare = document.querySelector('.user-step-compare')

const viewUserButton = document.querySelector(".admin-selector")
const namesList = document.querySelector(".names-list")
const activityButton = document.querySelector(".exercise-icon");
const sleepButton = document.querySelector(".sleep-icon");
const waterButton = document.querySelector(".water-icon");

const allStatsDisplays = document.querySelectorAll('.reset')

const allWaterDisplays = document.querySelectorAll(".water");
const todayConsumption = document.querySelector(".today-consumption")

const allSleepDisplays = document.querySelectorAll(".sleep");
const todaySleep = document.querySelector(".today-sleep")
const avgSleepStats = document.querySelector(".avg-sleep-stats")

const allActivityDisplays = document.querySelectorAll('.activity');
const activityStatsDisplay = document.querySelector(".activity-stats");
const todayActivity = document.querySelector(".today-activity")
const avgActivityStats = document.querySelector(".avg-activity-stats")

const userRepo = new UserRepo(
  userData, 
  sleepData, 
  hydrationData, 
  activityData);
let currentUser = new User(
  userRepo.getAUser(21), 
  userRepo.filterSleepData(21), 
  userRepo.filterHydrationData(21),
  userRepo.filterActivityData(21));
let chosenDate = "2019/06/15"

window.addEventListener('load', () => {
  let chosenUserID = currentUser.id; 
  displayFirstName(chosenUserID);
  displayInfoCard(chosenUserID);
  mapUserNames()
  fillDropdown()
  activityStatsDisplay.classList.toggle('hidden');
  return chosenUserID; 
})

waterButton.addEventListener('click', () => {
  displayHydrationActivity();
  displayHydrationChart();
})

sleepButton.addEventListener('click', () => {
  displaySleepActivity()
})

activityButton.addEventListener('click', () => {
  displayExerciseActivity();
})

viewUserButton.addEventListener('click', (event) => {
  event.preventDefault()
  let chosenUserID = getChosenUserData().id 
  currentUser = new User(
    userRepo.getAUser(chosenUserID),
    userRepo.filterSleepData(chosenUserID),
    userRepo.filterHydrationData(chosenUserID),
    userRepo.filterActivityData(chosenUserID))
  displayFirstName() 
  displayInfoCard() 
  setChosenDate() 
  clearDisplays()
  return currentUser
})

function toggleElement(element) {
  element.classList.toggle('hidden')
}

function clearDisplays() {
  allStatsDisplays.forEach(item => item.classList.add('hidden'))
}

function setChosenDate() { 
  const datePicker = document.querySelector(".date-picker")
  chosenDate = datePicker.value.split('-').join('/')
  return chosenDate
}

function getChosenUserData() { 
  return userData.find(user => user.name === namesList.value)
}

function displayFirstName() {
  userFirstName.innerText = `${currentUser.getFirstName()}`;
}

function displayInfoCard() {
  userAddress.innerText = `${currentUser.address}`;
  userEmail.innerText = `${currentUser.email}`;
  userStepCompare.innerText = `Your step goal is ${
    currentUser.userActivity.dailyStepGoal
  }, and the average is ${userRepo.getAllUserAvgItem(
    userRepo.activityData,
    chosenDate, 
    "numSteps")}`;
}

function displayHydrationActivity() {
  const hydrationStatsDisplay = document.querySelector(".hydration-stats");
  clearDisplays()
  toggleElement(hydrationStatsDisplay)  
  getHydrationData(todayConsumption, 0, chosenDate, currentUser.id);
  allWaterDisplays.forEach((cell, index) => {
    getHydrationData(cell, index, chosenDate, currentUser.id)
  })
}

function displaySleepActivity() {
  const sleepStatsDisplay = document.querySelector(".sleep-stats")
  clearDisplays()
  toggleElement(sleepStatsDisplay);
  getSleepData(todaySleep, 0, chosenDate, currentUser)
  allSleepDisplays.forEach((cell, index) => {
    getSleepData(cell, index, chosenDate, currentUser)
  })
  getSleepData(avgSleepStats, 0, chosenDate, currentUser)
} 

function displayExerciseActivity() {
  clearDisplays()
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

function singleUserData(keyName) {
  return currentUser.userActivity.getOneDayOfData(chosenDate, keyName);
}

function allUsersData(fullList, keyName) {
  return userRepo.getAllUserAvgItem(fullList, chosenDate, keyName)
}

function displayUserStairsSuccess() { 
  const compareStairs = document.querySelector(".stairs-compare");
  let singleStair = singleUserData('flightsOfStairs')
  let allStairs = allUsersData(userRepo.activityData, 'flightsOfStairs')
  if (currentUser.userActivity.isUserAboveAvg(singleStair, allStairs)) {
    compareStairs.innerText = `Your ${singleStair} stairs climbed is higher than the user average of ${allStairs}`;
    compareStairs.classList.add('success')
  } else {
    compareStairs.innerText = `Your ${singleStair} stairs climbed is lower than the user average of ${allStairs}`;
    compareStairs.classList.remove('success')
  }
}

function displayUserStepSuccess() {
  const compareSteps = document.querySelector(".steps-compare");
  let singleStep = singleUserData('numSteps')
  let allSteps = allUsersData(userRepo.activityData, "numSteps")
  if (currentUser.userActivity.isUserAboveAvg(singleStep, allSteps)) {
    compareSteps.innerText = `Your ${singleStep} step count is higher than the user average of ${allSteps}`;
    compareSteps.classList.add('success')
  } else {
    compareSteps.innerText = `Your ${singleStep} step count is lower than the user average of ${allSteps}`;
    compareSteps.classList.remove('success')
  }
}

function displayUserMinutesSuccess() {
  const compareMinutes = document.querySelector(".minutes-compare");
  let singleMinute = singleUserData('minutesActive')
  let allMinutes = allUsersData(userRepo.activityData, 'minutesActive')
  if (currentUser.userActivity.isUserAboveAvg(singleMinute, allMinutes)) {
    compareMinutes.innerText = `Your active minute count of ${singleMinute} is higher than the user average of ${allMinutes}`;
    compareMinutes.classList.add('success')
  } else { 
    compareMinutes.innerText = `Your active minute count of ${singleMinute} is lower than the user average of ${allMinutes}`;
    compareMinutes.classList.remove('success')
  }
}

function displayAvgSleepData(placement) {
  let displaySleepQual = currentUser.userSleep.calculateAvgSleepItem('sleepQuality').toFixed(2)
  let displaySleepHours = currentUser.userSleep.calculateAvgSleepItem('hoursSlept').toFixed(2)
  placement.innerText = `all-time average hours: ${displaySleepHours}, \n all-time average quality: ${displaySleepQual}`
}

function getSleepData(placement, index) {
  placement.innerText = `${
    currentUser.userSleep.calculateSleepItemPerWeek(chosenDate, 'hoursSlept')[index]
  } hours, 
    quality: ${
    currentUser.userSleep.calculateSleepItemPerWeek(chosenDate, 'sleepQuality')[index]
  }`;
  displayAvgSleepData(avgSleepStats)
}

function getHydrationData(placement, index) {
  placement.innerText = `${
    currentUser.userHydration.calculateWaterPerWeek(chosenDate, currentUser)[index]
  } ounces`;
}

function getStepData(placement, index) {
  placement.innerText = `${
    currentUser.userActivity.getWeekOfData(chosenDate, 'numSteps')[index]
  } steps,
    ${
    currentUser.userActivity.getWeekOfData(chosenDate, 'flightsOfStairs')[index]
  } flights of stairs,
    ${
    currentUser.userActivity.getWeekOfData(chosenDate, 'minutesActive')[index]
  } active minutes`;
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

  function displayHydrationChart() {
    let ctx = document.getElementById("hydrationChart").getContext("2d");
    let chart = new Chart(ctx, {
      // The type of chart we want to create
      type: "bar",

      // The data for our dataset
      data: {
        labels: [
          "Start Date",
          "Next Day",
          "2 Days Later",
          "3 Days Later",
          "4 Days Later",
          "5 Days Later",
          "6 Days Later",
        ],
        datasets: [
          {
            label: "Hydration Data",
            backgroundColor: "#61ED90",
            borderColor: "#61ED90",
            data: currentUser.userHydration.calculateWaterPerWeek(
              chosenDate,
              currentUser
            )
          },
        ],
      },

      // Configuration options go here
      options: {},
    })
  }