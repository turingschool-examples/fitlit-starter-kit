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
// const todayConsumption = document.querySelector(".today-consumption");
const todaySleep = document.querySelector(".today-sleep")
const todayActivity = document.querySelector(".today-activity")
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


const userRepo = new UserRepo(userData); // needs to take in array of users
let currentUser = new User(userRepo.getAUser(21)); // user object
let chosenDate = "2019/06/15" // default date
const userHydration = new UserHydration(hydrationData);
const userSleep = new UserSleep(sleepData)
const userActivity = new UserActivity(activityData);

window.addEventListener('load', () => {
  let chosenUserID = currentUser.id; // sets the ID to a variable to use as an argument
  displayFirstName(chosenUserID);
  displayInfoCard(chosenUserID);
  mapUserNames()
  fillDropdown()
  hide(todaySleep);
  hide(sleepStatsDisplay);
  hide(todayConsumption);
  hide(hydrationStatsDisplay);
  hide(todayActivity);
  hide(activityStatsDisplay);
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
  currentUser = new User(userRepo.getAUser(chosenUserID)) // create user object
  displayFirstName() // show user first name
  displayInfoCard() // show user info
  setChosenDate() // set date from date in calendar
  displayStatsArea.classList.add('hidden')
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
    currentUser.dailyStepGoal
  }, and the average is ${userRepo.calculateAvgSteps()}`;
}

function displayHydrationActivity() {
  // hide(chartIcon);
  show(hydrationStatsDisplay);
  show(displayStatsArea)
  show(todayConsumption)
  hide(todaySleep)
  hide(sleepStatsDisplay)
  getHydrationData(todayConsumption, 0, chosenDate, currentUser.id);
  allWaterDisplays.forEach((cell, index) => {
    getHydrationData(cell, index, chosenDate, currentUser.id)
  })
  hide(activityStatsDisplay);
  hide(todayActivity);
}

function displaySleepActivity() {
  show(sleepStatsDisplay)
  show(displayStatsArea)
  show(todaySleep)
  hide(todayConsumption)
  hide(hydrationStatsDisplay)
  getSleepData(todaySleep, 0, chosenDate, currentUser.id)
  allSleepDisplays.forEach((cell, index) => {
    getSleepData(cell, index, chosenDate, currentUser.id)
  })
  getSleepData(avgSleepStats, 0, chosenDate, currentUser.id)
  hide(activityStatsDisplay);
  hide(todayActivity);
} 

function displayExerciseActivity() {
  show(activityStatsDisplay);
  show(displayStatsArea);
  show(todayActivity);
  hide(todaySleep);
  hide(sleepStatsDisplay);
  hide(todayConsumption);
  hide(hydrationStatsDisplay);
  displayMilesWalked(todayActivity, chosenDate, currentUser.id);
  displayUserSuccess();
  };


function displayMilesWalked(placement, chosenDate, currentUser) {
  placement.innerText = `You walked ${userActivity
    .calculateMilesWalked(userRepo, currentUser, chosenDate)
    .toFixed(2)} miles today`;
}

function displayUserSuccess() {
   let singleStair = userActivity.calculateStairsClimbed(
     chosenDate,
     currentUser.id
   );
   let allStairs = userActivity.calculateAllAvgStairs(chosenDate);
    if (userActivity.isUserAboveAvg(singleStair, allStairs)) {
      compareStairs.innerText = `Your ${singleStair} stairs climbed is higher than the user average of ${allStairs}`;
    } else {
      compareStairs.innerText = `Your ${singleStair} stairs climbed is lower than the user average of ${allStairs}`;
    }

    let singleStep = userActivity.calculateNumSteps(
      chosenDate,
      currentUser.id
    );
    let allSteps = userActivity.calculateAllAvgSteps(chosenDate);
    if (userActivity.isUserAboveAvg(singleStep, allSteps)) {
      compareSteps.innerText = `Your ${singleStep} step count is higher than the user average of ${allSteps}`;
    } else {
      compareSteps.innerText = `Your ${singleStep} step count is lower than the user average of ${allSteps}`;
    }

     let singleMinute = userActivity.calculateActiveMinutes(
       chosenDate,
       currentUser.id
     );
     let allMinutes = userActivity.calculateAllAvgMin(chosenDate);
     if (userActivity.isUserAboveAvg(singleMinute, allMinutes)) {
       compareMinutes.innerText = `Your active minute count of ${singleMinute} is higher than the user average of ${allMinutes}`;
     } else { 
       compareMinutes.innerText = `Your active minute count of ${singleMinute} is lower than the user average of ${allMinutes}`;
     }
  }
    


function getAvgSleepData(placement) {
  let displaySleepQual = userSleep.calculateAvgSleepQual(sleepData, currentUser.id).toFixed(2)
  let displaySleepHours = userSleep.calculateAvgHoursSlept(sleepData, currentUser.id).toFixed(2)
  placement.innerText = `all-time average hours: ${displaySleepHours}, all-time average quality: ${displaySleepQual}`
}

function getSleepData(placement, index, chosenDate, currentUser) {
  placement.innerText = `${
    userSleep.calculateSleepItemPerWeek(chosenDate, currentUser, 'hoursSlept')[index]
  } hours, quality: ${
    userSleep.calculateSleepItemPerWeek(chosenDate, currentUser, 'sleepQuality')[index]
  }`;
  getAvgSleepData(avgSleepStats)
}

function getHydrationData(placement, index, chosenDate, currentUser) {
  placement.innerText = `${
    userHydration.calculateWaterPerWeek(chosenDate, currentUser)[index]
  } ounces`;
}

function show(element) {
  element.classList.remove('hidden')
}

function hide(element) {
  element.classList.add('hidden')
}

// why didn't we use map instead of reduce?
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