'use strict'

const userFirstName = document.querySelector('.user-first-name')
const userAddress = document.querySelector('.user-address')
const userEmail = document.querySelector('.user-email')
const userStepCompare = document.querySelector('.user-step-compare')
const waterButton = document.querySelector(".water-icon");
const chartIcon = document.querySelector(".chart-icon");
const displayStatsArea = document.querySelector(".display-stats")
const hydrationStatsDisplay = document.querySelector(".hydration-stats");
const allWaterDisplays = document.querySelectorAll(".water"); // returns a node list
const todayConsumption = document.querySelector(".today-consumption");
const userDropdown = document.querySelector(".user-dropdown")
const namesList = document.querySelector(".names-list")
const datePicker = document.querySelector(".date-picker")
const adminSelector = document.querySelector(".admin-selector")

const userRepo = new UserRepo(userData); // needs to take in array of users
let currentUser = new User(userRepo.getAUser(21)); // user object
let chosenDate = "2019/07/16" // default date
const userHydration = new UserHydration(hydrationData);

window.addEventListener('load', (event) => {
  event.preventDefault()
  let chosenUserID = currentUser.id; // sets the ID to a variable to use as an argument
  displayFirstName(chosenUserID);
  displayInfoCard(chosenUserID);
  mapUserNames()
  fillDropdown()
  return chosenUserID; // returning ID out to use it later
})

waterButton.addEventListener('click', (event) => {
  event.preventDefault()
  displayHydrationActivity();
})

adminSelector.addEventListener('click', (event) => {
  event.preventDefault()
  let chosenUserID = getChosenUserData().id // set ID from name in dropdown
  console.log(chosenUserID)
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
};

function displayInfoCard() {
  userAddress.innerText = `${currentUser.address}`;
  userEmail.innerText = `${currentUser.email}`;
  userStepCompare.innerText = `Your step goal is ${
    currentUser.dailyStepGoal
  }, and the average is ${userRepo.calculateAvgSteps()}`;
};

let displayHydrationActivity = () => {
  // hide(chartIcon);
  show(hydrationStatsDisplay);
  show(displayStatsArea)
  getHydrationData(todayConsumption, 0, chosenDate, currentUser.id);
  allWaterDisplays.forEach((cell, index) => {
    getHydrationData (cell, index, chosenDate, currentUser.id)
  })
}


function getHydrationData(placement, index, chosenDate, currentUser) {
  placement.innerText = `${
    userHydration.calculateWaterPerWeek(chosenDate, currentUser)[index]
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