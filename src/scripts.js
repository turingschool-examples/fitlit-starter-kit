import './css/styles.css';
import './images/turing-logo.png'
import './images/user.png'
import UserRepository from './UserRepository';
import User from './User';
import Sleep from './Sleep';
// import Hydration from './Hydration';
import Chart from 'chart.js/auto'
import {userData, userSleepData, userActivityData, userHydrationData} from './fetch.js';

const header = document.querySelector('#header')
const sleepChart = document.querySelector('#sleepChartWeek')
const sleepChartAvg = document.querySelector('#sleepChartAvg')
const activityChart = document.querySelector('#activityChart')

let usersData, sleepEntries, activityData, hydrationData, sleepData;

const allData = (info, sleep, activity, hydration) => {
  const userRepository = new UserRepository(info);
  const randomUser = Math.floor(Math.random() * userRepository.users.length);
  const user = new User(userRepository.users[randomUser]);
  const userSleepData = new Sleep(sleep);
  sleepData = userSleepData.sleepData;
  // const hydrationData = new Hydration(hydration);
  displayUserInfo(user);
  displayStepGoalComparison(user, userRepository);
  displaySleepDataWeek(user, sleepData)
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
  const activityChartSection = new Chart(activityChart, {
    type: 'bar',
    data: {
      labels: ['Yours', 'Community Average'],
      datasets: [{
        label: 'Steps',
        data: [`${currentUser.dailyStepGoal}`, `${allUsers.calculateAvgStepGoal()}`],
        backgroundColor: ['#4575dd', '#dd5245'],
        borderColor: '#dd5245'
      }],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Daily Step Goals',
          font: {
            size: 20
          }
        }
      },
    }
  })
  activityChart.innerHTML = activityChartSection;
}


const pullLatestDate = (dataset, user) => {
  return dataset.reduce((latestDate, entry) => {
    if (entry.userID === user.id && entry.date > latestDate) {
      latestDate = entry.date;
    }
    return latestDate;
  }, "")
}

const displaySleepDataWeek = (currentUser, sleepSupport) => {
  const date = pullLatestDate(sleepSupport, currentUser);
  const userSleep = currentUser.findHoursSleptByWeek(sleepSupport, date)
  const userAvgHoursSlept = currentUser.calculateAvgDailySleep(sleepSupport)
  const userAvgQualitySleep = currentUser.calculateAvgSleepQuality(sleepSupport)
  displaySleepChart(userSleep)
  displaySleepChartAvg(userSleep, userAvgHoursSlept, userAvgQualitySleep)
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
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Weekly Summary',
          font: {
            size: 20
          }
        }
      }
    }
  })
  sleepChart.innerHTML = sleepChartSection;
}

const displaySleepChartAvg = (userSleep, userAvgHoursSlept, userAvgQualitySleep) => {
  const sleepChartSectionAvg = new Chart(sleepChartAvg, {
    type: 'bar',
    data: {
      labels: [`${userSleep[6].date}`, 'Overall Average'],
      datasets: [{
        label: 'Hours Slept',
        data: [`${userSleep[6].hoursSlept}`, `${userAvgHoursSlept}`],
        backgroundColor: '#b46096',
        borderColor: '#b46096'
      }, {
        label: 'Sleep Quality',
        data: [`${userSleep[6].sleepQuality}`, `${userAvgQualitySleep}`],
        backgroundColor: '#60b46d',
        borderColor: '#60b46d'
      }],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Day/Average Comparison',
          font: {
            size: 20
          }
        }
      }
    }
  })
  sleepChartAvg.innerHTML = sleepChartSectionAvg;
}


window.addEventListener('load', loadUser);
