import './css/styles.css';
import './images/turing-logo.png'
import './images/user.png'
import UserRepository from './UserRepository';
import User from './User';
import Sleep from './Sleep';
import Hydration from './Hydration';
import Chart from 'chart.js/auto'

import {userData, userSleepData, userActivityData, userHydrationData} from './fetch.js';

const header = document.querySelector('#header')
const activitySection = document.querySelector('#activity')
const sleepSection = document.querySelector('#sleep')
const sleepChart = document.querySelector('#sleepChart')

let usersData, sleepEntries, activityData, hydrationData, sleepData;

const allData = (info, sleep, activity, hydration) => {
  const userRepository = new UserRepository(info);
  const randomUser = Math.floor(Math.random() * userRepository.users.length);
  const user = new User(userRepository.users[randomUser]);
  const userSleepData = new Sleep(sleep);
  sleepData = userSleepData.sleepData;
  const hydrationData = new Hydration(hydration);
  displayUserInfo(user);
  displayStepGoalComparison(user, userRepository);
  displaySleepDataToday(user, sleepData)
  displayAvgSleepQuality(user, sleepData)
};

const parseData = (data) => {
  usersData = data[0].userData;
  sleepEntries = data[1].sleepData;
  activityData = data[2].activityData;
  hydrationData = data[3].hydrationData;
  allData(usersData, sleepEntries, activityData, hydrationData)
}

const fetchCall = () => {
  Promise.all([userData(), userSleepData(), userActivityData(), userHydrationData()])
    .then(data => parseData(data))
};

const loadUser = () => {
  fetchCall();
}

const displayUserInfo = (user) => {
  header.innerHTML = `
    <div class='welcome-box'>
      <img src="./images/user.png" alt='user-icon' class='header header-image'>
      <h1 class='header'>Welcome, ${user.displayFirstName()}</h1>
    </div>
    <div class='header user-info'>
    <p class='header'>Name: ${user.name}<br>
    Address: ${user.address}<br>
    Email: ${user.email}</p>
    </div>
  `
}

const displayStepGoalComparison = (currentUser, allUsers) => {
  activitySection.innerHTML = `
    <h3 class='activity'>Your daily step goal is ${currentUser.dailyStepGoal}, and the average for everyone is ${allUsers.calculateAvgStepGoal()}</h3>
  `
}

const pullLatestDate = (dataset, user) => {
  return dataset.reduce((latestDate, entry) => {
    if (entry.userID === user.id && entry.date > latestDate) {
      latestDate = entry.date;
    }
    return latestDate;
  }, "")
}

const displaySleepDataToday = (currentUser, sleepSupport) => {
  const date = pullLatestDate(sleepData, currentUser);
  const quality = currentUser.findSleepQualityByDate(sleepData, date)
  const hours = currentUser.findHoursSleptByDate(sleepData, date)
  // sleepSection.innerHTML = `
  //   <h3 class='sleep'>Latest Sleep Data: You slept ${hours} hours with a quality of ${quality}.</h3>
  // `
  displaySleepDataWeek(currentUser, sleepSupport);
}

const displaySleepDataWeek = (currentUser, sleepSupport) => {
  const date = pullLatestDate(sleepSupport, currentUser);
  const userSleep = currentUser.findHoursSleptByWeek(sleepSupport, date)
  const quality = currentUser.findSleepQualityByWeek(sleepSupport, date)
  displaySleepChart(userSleep)
}

const displayAvgSleepQuality = (currentUser, sleepSupport) => {
  const hours = currentUser.calculateAvgDailySleep(sleepSupport);
  const quality = currentUser.calculateAvgSleepQuality(sleepSupport);
}

const displaySleepChart = (userSleep) => {
  const sleepChartSection = new Chart(sleepChart, {
    type: 'line',
    data: {
      labels: [`${userSleep[0].date}`, `${userSleep[1].date}`, `${userSleep[2].date}`, `${userSleep[3].date}`, `${userSleep[4].date}`, `${userSleep[5].date}`, `${userSleep[6].date}`],
      datasets: [{
        label: 'Hours Slept per Day',
        data: [`${userSleep[0].hoursSlept}`, `${userSleep[1].hoursSlept}`, `${userSleep[2].hoursSlept}`, `${userSleep[3].hoursSlept}`, `${userSleep[4].hoursSlept}`, `${userSleep[5].hoursSlept}`, `${userSleep[6].hoursSlept}`],
        backgroundColor: '#b46096', 
        borderColor: '#b46096'
      }, {
        label: 'Sleep Quality per Day',
        data: [`${userSleep[0].sleepQuality}`, `${userSleep[1].sleepQuality}`, `${userSleep[2].sleepQuality}`, `${userSleep[3].sleepQuality}`, `${userSleep[4].sleepQuality}`, `${userSleep[5].sleepQuality}`, `${userSleep[6].sleepQuality}`],
        backgroundColor: '#60b46d', 
        borderColor: '#60b46d'
      }],
    },
  })
  sleepChart.innerHTML = sleepChartSection;
}


window.addEventListener('load', loadUser);
