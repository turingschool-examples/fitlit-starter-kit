// imports //
import './css/styles.css';
import './images/turing-logo.png'
import './images/icons8-fire-90.png'
import './images/icons8-sleep-52.png'
import './images/icons8-water-52.png'
import './images/icons8-walking-100.png'
import './images/IMG_4293.png'
import { fetchAll } from './apiCalls';
import datepicker from 'js-datepicker'

// import userData from './data/users'
import User from './User.js'
import Hydration from './Hydration.js'
import Sleep from './Sleep.js'
import UserRepository from './UserRepository';

// global variables // <--- i do not trust these
let userAPIData;
let sleepAPIData;
let hydrationAPIData;
// const userNumber = userData[Math.floor(Math.random()*userData.length)]

// instanciate classes //
const currentUserData = new User(userNumber)
const allUserData = new UserRepository(userAPIData) // <-- userAPIData
const allUserHydroData = new Hydration(hydrationAPIData)


// promises //
const getFetch = () => {
  fetchAll()
  .then(data => {
    userAPIData = data[0].userData
    sleepAPIData = data[1].sleepData
    hydrationAPIData = data[2].hydrationData
    console.log(data);
    loadData()
  })
}

// DOM Manipulation //

// header selectors //
const userNameDisplay = document.querySelector('.header-welcome-username')
const userIconDisplay = document.querySelector('.header-userlogo') 
const welcomeDisplay = document.querySelector('.header-welcome') 

// steps selectors//
const stepsGoalDisplay = document.querySelector('.steps-content-goal') 
const stepsCurrentDisplay = document.querySelector('.steps-content-current')
const stepsFriendsList = document.querySelectorAll('.step-friend')
const stepsFriendsDisplay = document.querySelector('.steps-content-header')
const friend1 = document.getElementById('friend1')
const friend2 = document.getElementById('friend2')
const friend3 = document.getElementById('friend3')
const friend4 = document.getElementById('friend4')
const friend5 = document.getElementById('friend5')

// hydration selectors//
const hydrationContentDisplay = document.querySelector('.hydration-content') 
const dailyHydrationListDisplay = document.querySelectorAll('.daily-hydration')
const waterDrankToday = document.getElementById('water-drank-today')

const hydroDay7Display = document.getElementById('hydro-7')
const hydroDay6Display = document.getElementById('hydro-6')
const hydroDay5Display = document.getElementById('hydro-5')
const hydroDay4Display = document.getElementById('hydro-4')
const hydroDay3Display = document.getElementById('hydro-3')
const hydroDay2Display = document.getElementById('hydro-2')
const hydroDay1Display = document.getElementById('hydro-1')

// sleep selectors //
const sleepContentDisplay = document.querySelector('.sleep-content') 
const sleepArticleDisplay = document.getElementById('avg-sleep')
const avgHoursSleptDisplay = document.getElementById('hours-slept')
const avgSleepQualityDisplay = document.getElementById('sleep-quality')

// event listeners //
userIconDisplay.addEventListener('click', showUserInfo)
window.addEventListener('load', getFetch)
function loadData() {
  console.log(applyUserName()); 
}

// function calls
showStepsContent()

// functions //
function applyUserName() {
  userNameDisplay.innerText = currentUserData.returnUserFirstName(); 
}
applyUserName()

function showUserInfo() {
  if (welcomeDisplay.innerText === "WELCOME,") {
    welcomeDisplay.innerText = `${currentUserData.address}, Stride Length: ${currentUserData.strideLength}`;
    userNameDisplay.innerText = ""
  } else {
    welcomeDisplay.innerHTML = "WELCOME,";
    userNameDisplay.innerText = `${currentUserData.returnUserFirstName()}!`
  }
}

function showStepsContent(stepsGoal, stepsCurrent) {
  stepsGoalDisplay.innerText += currentUserData.dailyStepGoal
  // stepsCurrentDisplay.innerText = `So far you have taken: 9,999`
}

function showStepsFriends() {
    // stepsFriendsList = can probly write a forEach loop here
    stepsFriendsDisplay.innerText = 'Your friends have taken:'
    friend1.innerText = `Friend 1 - DAILY STEP GOAL`
    friend2.innerText = `Friend 2 - DAILY STEP GOAL`
    friend3.innerText = `Friend 3 - DAILY STEP GOAL`
    friend4.innerText = `Friend 4 - DAILY STEP GOAL`
    friend5.innerText = `Friend 5 - DAILY STEP GOAL`
  }
  showStepsFriends()

  function displayTodaysHydration() {
    waterDrankToday.innerText = allUserHydroData.findWaterConsumedByDate(userNumber, '2019/06/26')
  }
  displayTodaysHydration()
  


  /* ------ experimental -------- */

  let stepsTakenData = 9000
  let stepsData = [(currentUserData.dailyStepGoal), (currentUserData.dailyStepGoal - stepsTakenData)]

  new Chart("steps-pie-chart", {
    type: "pie",
    data: {
      labels: ["Steps Goal", "Steps Remaining"],
      datasets: [{
        label: 'Graph Label', // steps / sleep / hydro
        backgroundColor: ["rgba(4, 104, 255, 0.6)", "rgb(255, 125, 0, .6)"],
        data: stepsData // [steps goal, ]
      }]
    },
    // options: {...}
  });
  

var xValues = ["Friend 1", "Friend 2", "Friend 3", "Friend 4", "Friend 5", "friend 6", "friend 7"]; 
var yValues = [55, 49, 44, 24, 15, 100, 45];
var barColors = [
  "rgb(255, 0, 0, .6)", 
  "rgb(255, 125, 0, .6)",
  "rgb(255, 255, 0, .6)",
  "rgb(0, 255, 0, .6)",
  "rgb(0, 0, 255, .6)",
  "rgb(75, 0, 130, .6)",
  "rgb(150, 0, 210, .6)"];

  new Chart("compare-avg-goal", {
    type: "bar",
    data: {
      labels: ["Your goal", "Average FitLit Goal"], 
      datasets: [{
        label: 'Your Goal VS AVG', // steps / sleep / hydro
        backgroundColor: barColors,
        data: [currentUserData.dailyStepGoal, allUserData.calculateAvgStepGoal()] // array containing user goal, average of all users goals
      }]
    },
    // options: {...}
  });
  

new Chart("steps-friends-chart", {
  type: "bar",
  data: {
    labels: xValues, // bar titles - add friends' names here
    datasets: [{
      label: "Friends' Step Goals",
      backgroundColor: barColors,
      data: yValues // add friends' step goal data here
    }]
  },
  // options: {...}
});

var hydroColors = [
  "rgba(4, 104, 255, 0.6)"];

new Chart("week-in-water", {
  type: "bar",
  data: {
    labels: xValues, // bar titles - relevant dates here
    datasets: [{
      label: 'OZ Drank Per Day', 
      backgroundColor: hydroColors,
      data: yValues // add friends' data here
    }]
  },
  // options: {...}
});

new Chart("chosen-week-in-water", {
  type: "bar",
  data: {
    labels: xValues,  // bar titles - relevant dates here
    datasets: [{
      label: 'OZ Drank Per Day', // steps / sleep / hydro
      backgroundColor: hydroColors,
      data: yValues // add friends' data here
    }]
  },
  // options: {...}
});



new Chart("hydro-homies", {
  type: "bar",
  data: {
    labels: xValues, // bar titles - add friends' names here
    datasets: [{
      label: 'Hydro Homies', // steps / sleep / hydro
      backgroundColor: hydroColors,
      data: yValues // add friends' data here
    }]
  },
  // options: {...}
});

var sleepColors = [
  "rgb(95, 0, 160, .6)"]


new Chart("average-sleep-hours", {
  type: "bar",
  data: {
    labels: xValues, // bar titles - add friends' names here
    datasets: [{
      label: 'Hours Slept By Day', // steps / sleep / hydro
      backgroundColor: sleepColors,
      data: yValues // add friends' data here
    }]
  },
  // options: {...}
});


new Chart("average-sleep-quality", {
  type: "bar",
  data: {
    labels: xValues, // bar titles - add friends' names here
    datasets: [{
      label: 'Hours Slept By Day', // steps / sleep / hydro
      backgroundColor: sleepColors,
      data: yValues // add friends' data here
    }]
  },
  // options: {...}
});

new Chart("sleep-quality", { // missing from DOM
  type: "bar",
  data: {
    labels: xValues, // bar titles - add friends' names here
    datasets: [{
      label: 'Sleep Quality By Day', // steps / sleep / hydro
      backgroundColor: sleepColors,
      data: yValues // add friends' data here
    }]
  },
  // options: {...}
});


const waterDrankPicker = document.getElementById('water-drank-on-date')
const hoursSleptPicker = document.getElementById('hours-slept-by-date')
const weekSleptPicker = document.getElementById('week-slept-by-date')
const sleepQualityPicker = document.getElementById('sleep-quality-by-date')
const weekSleepQualityPicker = document.getElementById('sleep-quality-by-week')

function waterDrankByDate() {
  const picker = datepicker(waterDrankPicker)
}
waterDrankByDate()

function hoursSleptByDate() {
  const picker = datepicker(hoursSleptPicker)
}
hoursSleptByDate()

function hoursSleptByWeek() {
  const picker = datepicker(weekSleptPicker)
}
hoursSleptByWeek()

function sleepQualityByDate() {
  const picker = datepicker(sleepQualityPicker)
}
sleepQualityByDate()

function sleepQualityByWeek() {
  const picker = datepicker(weekSleepQualityPicker)
}
sleepQualityByWeek()


/*
Datepicker takes 2 arguments:
1 - selector - two possibilities:
  1 string - a CSS selector, such as '.my-class', '#my-id', or 'div'.
  or
  1 DOM node - provide a DOM node, such as document.querySelector('#my-id').
2 - (optional) An object full of options.

The return value of the datepicker function is the datepicker instance. See the methods and properties below.

You can use Datepicker with any type of element you want. If used with an <input> element (the common use case), then the <input>'s value will automatically be set when selecting a date.

NOTE: Datepicker will not change the value of input fields with a type of date - <input type="date">. This is because those input's already have a built in calendar and can cause problems. Use <input type="text"> instead.
*/
