// Import styles:
import './css/styles.css';
import './images/icons8-plus-67.png';
import './images/icons8-high-voltage-48.png';
import './images/icons8-water-96.png';
import './images/icons8-zzz-96.png';
import './images/fitlit-logo.png';

// Import local files:
import fetchData from './apiCalls.js';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';

// Import third party libraries:
import Chart from 'chart.js/auto';

// Query Selectors
const greeting = document.querySelector('.greeting');
const friendsList = document.querySelector('.friends-list');
const fullName = document.querySelector('.full-name');
const userAddress = document.querySelector('.user-address');
const userEmail = document.querySelector('.user-email');
const stepGoal = document.querySelector('.step-goal');
const sleepAverages = document.querySelector('.sleep-averages');

// Global variables
let userData;
let sleepData;
let hydrationData;
let currentUser;
let hydration;
let sleep;
let allUsers;

// API data
function fetchAllData() {
  Promise.all([fetchData('users', 'userData'), fetchData('sleep', 'sleepData'), fetchData('hydration', 'hydrationData'),])
  .then(data => {
    userData = data[0],
    sleepData = data[1],
    hydrationData = data[2],
    currentUser = new User(userData[Math.floor(Math.random() * userData.length)]);
    hydration = new Hydration(currentUser.id, hydrationData);
    sleep = new Sleep(currentUser.id, sleepData);
    allUsers = new UserRepository(userData);
    
    loadUserInfo();
  });
}

// Event Listeners
window.addEventListener('load', fetchAllData);

// Helper Functions

// DOM Functions
function loadUserInfo() {
  renderGreeting();
  renderFriendsList();
  renderProfile();
  renderOuncesPerDay('2020/01/22');
  renderOuncesByWeek(194, 201);
  renderSleepChartByDay();
  renderSleepChartByWeek();
  renderSleepAverages();
};

function renderGreeting() {
  const userFirstName = currentUser.name.split(' ')[0];
  greeting.innerHTML = `Hello, ${userFirstName}!`;
};

function renderFriendsList() {
  const friendNames = userData
  .filter(user => {
    if(currentUser.userFriends.includes(user.id)) {
      return user.name;
    }
  });
  return friendNames.forEach(friend => {
    friendsList.innerHTML += 
    `<button class="friend">${friend.name}</button>`;
  }); 
};

function renderProfile() {
  fullName.innerText = `${currentUser.name}`;
  userAddress.innerText = `${currentUser.email}`;
  userEmail.innerText = `${currentUser.address}`;
  stepGoal.innerText += ` ${currentUser.dailyStepGoal}
  Average Step Goal: ${allUsers.returnAverageStepGoal()}`;
};

function renderSleepAverages() {
  sleepAverages.innerText = `Average Hours of Sleep: ${sleep.getAvgSleepData('hoursSlept', sleepData)}
  Average Sleep Quality: ${sleep.getAvgSleepData('sleepQuality', sleepData)}`;
}

// Chart styling
const fontProperties = (context) => {
  let width = context.chart.width;
  let size = Math.round(width / 28);

  return {
      family: 'Alegreya',
      size: size
  };
};

const chartPlugins = {
  legend: {
    labels: {
      font: fontProperties
    }
  } 
};

const chartOptions = {
  scales: {
    x: {
      ticks: {
        font: fontProperties
      }
    },
    y: {
      ticks: {
        font: fontProperties
      }
    }
  }, 
  plugins: {
    ...chartPlugins,
  }
};

const barStyle1 = {
  backgroundColor: '#0077BB',
  hoverBackgroundColor: '#00DDDD',
}

const barStyle2 = {
  backgroundColor: '#9000EE',
  hoverBackgroundColor:'#CC77FF',
}

// Chart render functions
function renderSleepChartByWeek() {
  const weeklyHS = sleep.getDailySleepByWeek('2019/06/15','2019/06/21', 'hoursSlept');
  const weeklySQ = sleep.getDailySleepByWeek('2019/06/15','2019/06/21', 'sleepQuality');
  const weeklyHoursSlept = new Chart('weeklyHoursSlept', {
    type: 'bar',
    data: {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      datasets: [{
        label: 'Hours of Sleep Per Week',
        data: weeklyHS,
        ...barStyle1,
      },
      {
        label: 'Sleep Quality Per Week',
        data: weeklySQ,
        ...barStyle2
      }
    ]
    },
    options: {
      ...chartOptions, 
    }
  });
  return weeklyHoursSlept;
};

function renderSleepChartByDay() {
  const hours = sleep.getSleepDataByGivenDay('2019/06/15', 'hoursSlept');
  const quality = sleep.getSleepDataByGivenDay('2019/06/15', 'sleepQuality');
  const sleepDayCanvas = new Chart('dailyHoursSlept', {
    type: 'bar',
    data: {
      labels: [''],
      datasets: [{
        label: 'Hours Slept',
        data: [hours],
        ...barStyle1,
        borderRadius: 4,
      },
      {
        label: 'Sleep Quality',
        data: [quality],
        ...barStyle2,
        borderRadius: 4,
      }
    ]},
    options: {
      indexAxis: 'y',
      responsive: true,
      ...chartOptions,  
    },
    // scales: {
    //   yAxes: {
    //     maxBarThickness: 10,
    //   }
    // }
  });
  return sleepDayCanvas;
};

function renderOuncesByWeek(start, end) {
  const weeklyData = hydration.getDailyOuncesByWeek(start, end);
  const weeklyOunces = new Chart('weeklyOunces', {
    type: 'bar',
    data: {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      datasets: [{
        label: 'Water Intake for the week',
        data: weeklyData,
        ...barStyle1,
      }]
    },
    options: {
      ...chartOptions,
    }
  });
  return weeklyOunces;
};

function renderOuncesPerDay(date) {
  const day = hydration.ouncesPerDay(date);
  const dailyOunces = new Chart('dailyOunces', {
    type: 'bar',
    data: {
      labels: [''],
      datasets: [{
        label: 'Daily Water Intake',
        data: [day],
        ...barStyle2,
        borderRadius: 4,
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      ...chartOptions,
    },
    // scales: {
    //   yAxes: {
    //     maxBarThickness: 10,
    //   }
    // }
  });
  return dailyOunces;
};