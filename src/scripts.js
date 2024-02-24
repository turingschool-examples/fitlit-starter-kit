import './css/styles.css';
import './images/fitlit-logo.png';
import './images/white-texture.png';
import { updateDom, sleepChartUpdate, updateAccountData, } from './domUpdates';
import { fetchUserData, fetchHydrationData, fetchSleepData, fetchActivityData, postHydrationData } from './apiCalls';
import { adminChart,stepChart,sleepChart,hydChart } from './chartSetup';


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

      const justUsers = userData.users.reduce((acc,user) => {
        acc.push(user.name)
        return acc
      }, [])

      updateDom(appState.randomUser, appState.account.user);
      generateUserList(justUsers)
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

function adminChartUpdate() {
  const totalAverageSleepQuality = getTotalAverageSleepData(appState.sleepData, 'sleepQuality')
  const totalAverageSleepHours = getTotalAverageSleepData(appState.sleepData, 'hoursSlept')
  const totalAverageHydration = getTotalAverageNumOunces()
  const totalAverageActiveMins = getTotalAverageActivityData(appState.activityData, 'minutesActive')
  const totalAverageFlightsOfStairs = getTotalAverageActivityData(appState.activityData, 'flightsOfStairs')

  const charts = {
    step: stepChart.data
  }
  console.log(charts.step.datasets[0].data)
  const adminChartData = Object.values(chartUpdate.children).reduce((acc, child) => {
    acc.push(child.value)
    console.log(`${charts}.${child.value}`)
    return acc
},[])
adminChart.data.datasets[0].data = charts.step.datasets[0].data = [totalAverageSleepQuality]
adminChart.data.labels = charts.step.labels
console.log('TEST', adminChart.data.datasets[0].data)
adminChart.update()
}

/* example
sleepChart.data.datasets[0].data = [hoursSleptRecentDay, sleepQualityRecentDay];
  sleepChart.options.scales.x.ticks.max = Math.max(hoursSleptRecentDay, sleepQualityRecentDay) + 10;
*/


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

function getTotalAverageSleepData(sleepData, propertyName) {
  const total = appState.sleep.sleepData.reduce((sum, record) => sum + record[propertyName], 0);
  const average = total / appState.sleep.sleepData.length;
  return average.toFixed(2);
}

function getTotalAverageNumOunces() {
  const totalAvgOunces = appState.hydration.hydrationData.reduce((total, record) => total + record.numOunces, 0);
  return (totalAvgOunces / appState.hydration.hydrationData.length).toFixed(2);
}

function getTotalAverageActivityData(activityData, propertyName) {
  const total = appState.activity.activityData.reduce((sum, record) => sum + record[propertyName], 0);
  const average = total / appState.activity.activityData.length;
  return average.toFixed(2);
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

document.getElementById('submitHydrationData').addEventListener('click', () => {
  const date = document.getElementById('hydrationDate').value;
  const numOunces = parseInt(document.getElementById('hydrationAmount').value, 10);

  if (!date || isNaN(numOunces)) {
    alert('Please fill in both fields correctly.');//minds blanking on how to do this w/o an alert
    return;
  }

  postHydrationData(randomUser.id, date, numOunces)
});


/////////
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
  getWeeklySleepQuality,
  getTotalAverageSleepData,
  getTotalAverageNumOunces,
  getTotalAverageActivityData,
  adminChartUpdate,
};

const userSelect = document.querySelector('.userSelect')
const userList = document.querySelector('.userList')
const viewMenu = document.querySelector('.viewMenu')
const adminPanel = document.querySelector('.adminControls')
const adminView = document.querySelector('.adminView')
const chartOptions = document.querySelector('.chartOptions'); //add these to target the sections
const chartUpdateSection = document.querySelector('.chartUpdate')

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

// Function to handle drop event - refactored
function handleDrop(event) {
  event.preventDefault();
  const draggableElementId = event.dataTransfer.getData('text/plain');
  const draggableElement = document.getElementById(draggableElementId);
  const target = event.target;

  if(draggableElement.classList.contains('chartOpt')){
    if (target === chartUpdateSection || chartUpdateSection.contains(target)) { //this checks if dropped in the chartUpdateSection
      chartUpdateSection.appendChild(draggableElement);
      adminChartUpdate(draggableElement.id); //call to update the admin chart - we need to flesh out logic for this
    } else {
      chartOptions.appendChild(draggableElement);
      }
    } else {
      sortContainer.appendChild(draggableElement);
    }   
}



function generateUserList(users) {
  users.forEach((user) => {
    userSelect.innerHTML += `<option>${user}</option>`
  })
}

// Add event listeners to the sort container and chart options
sortContainer.addEventListener('dragover', handleDragOver);
sortContainer.addEventListener('drop', handleDrop);
chartUpdate.addEventListener('dragover', handleDragOver);
chartUpdate.addEventListener('drop', handleDrop);
chartUpdateSection.addEventListener('drop', handleDrop); // Added


// Add event listeners to draggable elements
const draggableElements = document.querySelectorAll('.draggable');
draggableElements.forEach(element => {
    element.addEventListener('dragstart', handleDragStart);
});

////////////////////////
let dropButton = document.querySelector('.dropbtn')
let userDropDown = document.querySelector('.dropdown-content')
let filterInput = document.getElementById("myInput")

dropButton.addEventListener('click', () => {
  userDropDown.classList.toggle('hidden')
  filterInput.addEventListener('keydown', filterSearch())
})

function filterSearch() {
  console.log(filterInput.value)
}

userSelect.addEventListener('change', () => {
  userList.innerHTML += `<p class="delete">${userSelect.value}&#x26D4</p>`
deleteEvent()
})

function deleteEvent(){
  let users = document.querySelectorAll(".delete")
  console.log(users)
  users.forEach((user) => {
    user.addEventListener('dblclick', (e) => {
      e.target.remove()
    })
  })
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
