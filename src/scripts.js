import './css/styles.css';
import './images/fitlit-logo.png';
import './images/white-texture.png';
import { updateDom, sleepChartUpdate, updateAccountData } from './domUpdates';
import { fetchUserData, fetchHydrationData, fetchSleepData, fetchActivityData } from './apiCalls';


let appState = {
  account: null,
  hydration: null,
  sleep: null,
  activity: null,
  randomUser: null,
};

function fetchData() {
  Promise.all([
    fetchUserData(),
    fetchHydrationData(),
    fetchSleepData(),
    fetchActivityData(),
  ])
    .then(([userData, hydrationData, sleepData, activityData]) => {
      appState.account = userData;
      appState.hydration = hydrationData;
      appState.sleep = sleepData;
      appState.activity = activityData;

      appState.randomUser = generateRandomUser(appState.account);

      let dateData = []
      sleepData.sleepData.forEach((entry) => {
        if (!dateData.includes(entry.date)) {
          dateData.push(entry.date)
        }
      })
      dateData.forEach((date) => {
        document.getElementById('date-selector').innerHTML += `<option>${date}</option>`
      })

      updateDom(appState.randomUser, appState.account.user);
    })
    .catch(error => console.error("Error loading data:", error));
}

function generateRandomUser(accountData) {
  const randomIndex = Math.floor(Math.random() * accountData.users.length);
  return accountData.users[randomIndex];
}

function getAccountFriends(user) {
  var friendArr = user.friends
  var friendNames = appState.account.users.reduce((acc, account) => {
    if (friendArr.includes(account.id)) {
      acc.push(account.name)
    }
    return acc
  }, [])
  return friendNames.join(" - ")
}

function getAverageStepGoal() {
  const totalStepsGoal = appState.account.users.reduce((total, user) => total + user.dailyStepGoal, 0);
  return totalStepsGoal / appState.account.users.length;
}

function getAverageDailyFluidOunces(userId) {
  const userHydrationData = appState.hydration.hydrationData.filter(userRecord => userRecord.userID === userId);
  const totalOunces = userHydrationData.reduce((acc, userRecord) => acc + userRecord.numOunces, 0);
  return totalOunces / userHydrationData.length;
}

function getSpecificDay(userId) {
  const userHydrationData = appState.hydration.hydrationData.filter(record => record.userID === userId);
  const mostRecentRecord = userHydrationData.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  return mostRecentRecord ? mostRecentRecord.numOunces : 0;
}

function getWeeklyFluidOunces(userId) {
  const userHydrationData = appState.hydration.hydrationData.filter(record => record.userID === userId);
  userHydrationData.sort((a, b) => new Date(b.date) - new Date(a.date));
  const lastWeekData = userHydrationData.slice(0, 7);
  return lastWeekData.map(record => ({
    date: record.date,
    numOunces: record.numOunces
  }));
}

function getUserSleepData(randomUser) {
  return appState.sleep.sleepData.filter(user => user.userID === randomUser.id)
}

function getAverageSleepHours(randomUser) {
  let sameUserSleepData = getUserSleepData(randomUser)
  let averageSleepHours = 0
  let totalSleepHours = 0
  sameUserSleepData.forEach(obj => {
    totalSleepHours += obj.hoursSlept
  })
  averageSleepHours = totalSleepHours / sameUserSleepData.length
  return averageSleepHours.toFixed(2)
}

function getAverageSleepQuality(randomUser) {
  let sameUserSleepData = getUserSleepData(randomUser)
  let averageSleepQuality = 0
  let totalSleepQuality = 0
  sameUserSleepData.forEach(obj => {
    totalSleepQuality += obj.sleepQuality
  })
  averageSleepQuality = totalSleepQuality / sameUserSleepData.length
  return averageSleepQuality.toFixed(2)
}

        // refactored getAverageSleepQuality() + getAverageSleepHours()
        function getAverageSleepData(randomUser, sleepDataType) {
          let sameUserSleepData = getUserSleepData(randomUser)
          let averageSleep = 0
          let totalSleep = 0
          sameUserSleepData.forEach(obj => {
            totalSleep += obj[sleepDataType]
          })
          averageSleep = totalSleep/ sameUserSleepData.length
          return averageSleep.toFixed(2)
        }

function getMostRecentSleepHours(randomUser) {
  let sameUserSleepData = getUserSleepData(randomUser)
  let latestSleepDataIndex = sameUserSleepData.length - 1
  return sameUserSleepData[latestSleepDataIndex].hoursSlept
}

function getMostRecentSleepQuality(randomUser) {
  let sameUserSleepData = getUserSleepData(randomUser)
  let latestSleepDataIndex = sameUserSleepData.length - 1
  return sameUserSleepData[latestSleepDataIndex].sleepQuality
}

        // refactored getMostRecentSleepHours() + getMostRecentSleepQuality()
        function getMostRecentSleepData(randomUser, sleepDataType) {

          let sameUserSleepData = getUserSleepData(randomUser)
          let latestSleepDataIndex = sameUserSleepData.length - 1
          return sameUserSleepData[latestSleepDataIndex][sleepDataType]
        }

function getWeeklySleep(randomUser, selectedDay) {
  let selectedWeek = []
  let sameUserSleepData = getUserSleepData(randomUser)
  for (let i = 0; i < sameUserSleepData.length; i++) {
    if (sameUserSleepData[i].date === selectedDay) {
      selectedWeek.push(sameUserSleepData.slice(i - 6, i + 1))
    }
  }
  return {
    weeklySleepHours: getWeeklySleepHours(selectedWeek),
    weeklySleepQuality: getWeeklySleepQuality(selectedWeek)
  }
}

function getWeeklySleepHours(selectedWeek) {
  return selectedWeek[0].map(day => day.hoursSlept)
}

function getWeeklySleepQuality(selectedWeek) {
  return selectedWeek[0].map(day => day.sleepQuality)
}

        // refactored getWeeklySleepHours() + getWeeklySleepQuality()
        function getWeeklySleepData(selectedWeek, sleepDataType) {
          return selectedWeek[0].map(day => day[sleepDataType])
        }

document.addEventListener('DOMContentLoaded', fetchData);

document.getElementById('date-selector').addEventListener('change', function (event) {

  event.preventDefault();

  const inputDate = this.value;

  const randomUser = appState.randomUser;
  const weeklySleepData = getWeeklySleep(randomUser, inputDate);
  sleepChartUpdate(randomUser)
});


document.querySelector(".viewButton").addEventListener('click', () => {
  document.querySelector(".viewMenu").classList.toggle('hidden')
})

document.querySelector('.condMode').addEventListener('click', () => {
  document.querySelector(".viewMenu").classList.toggle('hidden')
  document.querySelector('#top').classList.toggle('condensed')
})


export {
  appState,
  getAccountFriends,
  getAverageStepGoal,
  getAverageDailyFluidOunces,
  getSpecificDay,
  getWeeklyFluidOunces,
  getAverageSleepHours,
  getAverageSleepQuality,
  getMostRecentSleepHours,
  getMostRecentSleepQuality,
  getWeeklySleep,
  getWeeklySleepHours,
  getWeeklySleepQuality
};

const userSelect = document.querySelector('.userSelect')
const userList = document.querySelector('.userList')
const viewMenu = document.querySelector('.viewMenu')
const adminPanel = document.querySelector('.adminControls')
const adminView = document.querySelector('.adminView')

adminView.addEventListener('click', () => {
  adminPanel.classList.toggle('collapsed')
  viewMenu.classList.toggle('hidden')
})

const sortContainer = document.querySelector('.sortContainer');
const chartUpdate = document.querySelector('.chartUpdate');

// Function to handle drag start event
function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    
}

// Function to handle drag over event
function handleDragOver(event) {
  const draggableElementId = event.dataTransfer.getData('text/plain');
  const draggableElement = document.getElementById(draggableElementId);
    event.preventDefault();
}

// Function to handle drop event
function handleDrop(event) {
    event.preventDefault();
    const draggableElementId = event.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(draggableElementId);
    if(draggableElement.classList.contains('chartOpt')){
      chartUpdate.appendChild(draggableElement)
    } else {
      sortContainer.appendChild(draggableElement);
    }   
}

// Add event listeners to the sort container and chart options
sortContainer.addEventListener('dragover', handleDragOver);
sortContainer.addEventListener('drop', handleDrop);
chartUpdate.addEventListener('dragover', handleDragOver);
chartUpdate.addEventListener('drop', handleDrop);

// Add event listeners to draggable elements
const draggableElements = document.querySelectorAll('.draggable');
draggableElements.forEach(element => {
    element.addEventListener('dragstart', handleDragStart);
});

////////////////////////
const users = document.querySelectorAll(".delete")
userSelect.addEventListener('change', () => {
  userList.innerHTML += `<p class="delete">${userSelect.value}&#x26D4</p>`
    users.forEach((user) => {
    user.addEventListener('dblclick', deleteUser(e))
  })
})

function deleteUser(e) {
  console.log(e.target)
}

///////////////////////

let topNavBar = document.querySelectorAll('.topNav a')
let sideNavBar = document.querySelectorAll('.sideNav a')
document.querySelectorAll('nav').forEach((elem) => {
  elem.addEventListener('click', (e) => {
    for (let i = 0; i < topNavBar.length; i++) {
      if (topNavBar[i].classList === e.target.classList || sideNavBar[i].classList === e.target.classList) {
        topNavBar[i].classList.add('underline')
        sideNavBar[i].classList.add('underline')
      } else {
        topNavBar[i].classList.remove('underline')
        sideNavBar[i].classList.remove('underline')
      }
    }
  })
})

const debounce = (fn) => {
  let frame;
  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });

  }
};

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
  let opacLevel = 1 - window.scrollY / 1000
  let opacInvert = 1 + window.scrollY / 1000 - 1
  var navBar = document.getElementById('nav-bar')
  var sideBar = document.getElementById('side-nav')
  var logo = document.getElementById("logo")
  navBar.style.opacity = opacLevel
  sideBar.style.opacity = opacInvert
  if (opacLevel > 0.2) {
    logo.style.opacity = `${opacLevel}`
    navBar.classList.remove('hidden')
  } else {
    logo.style.opacity = '0.2'
    navBar.classList.add('hidden')
  }
}

document.addEventListener('scroll', debounce(storeScroll), { passive: true });
storeScroll();