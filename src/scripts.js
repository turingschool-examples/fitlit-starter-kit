import './css/styles.css';
import './images/icons8-plus-67.png';
import './images/icons8-sustainable-energy-96.png';
import './images/icons8-water-96.png';
import './images/icons8-zzz-96.png';

import fetchData from './apiCalls.js';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';
import Chart from 'chart.js/auto';


let userData;
let sleepData;
let hydrationData;
let currentUser;
let hydration;
let sleep;
let allUsers;

const greeting = document.querySelector('.greeting');
const friendsList = document.querySelector('#friendsList');
const fullName = document.querySelector('.full-name');
const userAddress = document.querySelector('.user-address');
const userEmail = document.querySelector('.user-email');
const stepGoal = document.querySelector('.step-goal');

const load = document.querySelector('.loading');

window.addEventListener('load', fetchAll);

function fetchAll() {
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
      hideLoading();
    }
  );

}

const hideLoading = () => {
  load.classList.add('hidden');
}

function loadUserInfo() {
  renderGreeting();
  renderFriendsList();
  renderProfile();
  // renderSleepChartByWeek('2019/06/15','2019/06/21', 'hoursSlept');
  renderSleepChartByDay('2019/06/15', 'hoursSlept');
};

function renderGreeting() {
  // console.trace()
  // console.log('line 48', JSON.parse(JSON.stringify(currentUser)))
  const userFirstName = currentUser.name.split(' ')[0]; // error happening here
      greeting.innerHTML = `Hello, ${userFirstName}!`;
      // Is coming back correctly with the first name only of the random user
      // console.log(currentUser)
      // Is coming back correctly with the whole random User instance object
      // console.log(currentUser.name) 
      // Is comming back correctly with the first and last name of the random user 
      // console.log(currentUser.name.split(' ')[0]) 
      // is coming back correctly with the first name only of the random user
};

// console.log('function', renderGreeting())

function renderFriendsList() {
  const friendNames = userData
  .filter(user => {
    if(currentUser.userFriends.includes(user.id)) {
      return user.name;
    }
  });
  return friendNames.forEach(friend => {
    friendsList.innerHTML += 
    `<button class="friend">${friend.name}</button>`
  }); 
};

function renderProfile() {
  fullName.innerText = `${currentUser.name}`;
  userAddress.innerText = `${currentUser.email}`;
  userEmail.innerText = `${currentUser.address}`;
  stepGoal.innerText = `${currentUser.dailyStepGoal}`;
};

function renderSleepChartByWeek(start, end, type) {
  const weeklyData = sleep.getDailySleepByWeek(start, end, type);
  const sleepWeekCanvas = new Chart('sleepCanvasByWeek', {
    type: 'bar', // bar, horizontal, pie, line, doughnut, radar, polarArea
    data: {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      datasets: [{
        label: 'Hours of Sleep Per Week',
        data: weeklyData,
        fill: true,
        backgroundColor: "#128FC8",
        borderColor: "#128FC8",
      }]
    },
  })
}

function renderSleepChartByDay(date, type) {
  const day = sleep.getSleepDataByGivenDay(date, type);
  const max = 12-day; 

  const sleepDayCanvas = new Chart('sleepCanvasByDay', {
    type: 'bar',
    data: {
      labels: [''],
      datasets: [{
        label: 'Hours Slept by Day',
        data: [day],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor:'rgb(255, 99, 132)',
        borderWidth: 1,
      },
      {
        label: 'Maximum Sleep',
        data: [max],
        backgroundColor: 'rgba(177, 99, 255, 0.2)',
        borderColor:'rgb(229, 99, 255)',
        borderWidth: 1,
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true,
          beginAtZero: true,
        }
      }
    }
  })

  // const sleepByDay = new Chart('sleepCanvasByDay', {
  //   type: 'doughnut', 

    
  //   data: {
  //     labels: ['Hours of Sleep By Day', 'Maximum Hours'],
  //     datasets: 
  //     [{
  //       data: [day, max],
  //     }]
  //   },
  // })
}



