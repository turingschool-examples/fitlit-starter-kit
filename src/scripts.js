import './css/styles.css';
import './images/fitlit-logo.png';
import './images/white-texture.png';
import { setupEventListeners, sleepChartUpdate } from './domUpdates';
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

      setupEventListeners(appState.randomUser, appState.account.user);
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


// Make the DIV element draggable:
document.querySelector(".mainContainer").addEventListener('click', (e) => {
  if(e.target.classList.contains('info-card')){
    console.log(document.getElementById(`${e.target.id}`))
    dragElement(document.getElementById(`${e.target.id}`))
  }
})

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



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