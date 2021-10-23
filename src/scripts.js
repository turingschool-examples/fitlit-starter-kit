import './css/styles.css';
import './images/turing-logo.png'
import './images/user.png'
import UserRepository from './UserRepository';
import User from './User';
import Sleep from './Sleep';
import Chart from 'chart.js/auto'
import {userData, userSleepData, userActivityData, userHydrationData} from './fetch.js';
// import Hydration from './Hydration';

const header = document.querySelector('#header')
const singleDaySleepChart = document.querySelector('#sleepChartWeek')
const sleepChartAvg = document.querySelector('#sleepChartAvg')
const stepGoalChart = document.querySelector('#activityChart')

const fetchData = () => {
  return Promise.all([userData(), userSleepData(), userActivityData(), userHydrationData()])
    .then(data => parseData(data));
}

const parseData = (data) => {
  const usersData = data[0].userData;
  const sleepEntries = data[1].sleepData;
  const activityData = data[2].activityData;
  const hydrationData = data[3].hydrationData;
  loadPage([usersData, sleepEntries, activityData, hydrationData])
}

const getLatestDate = (dataset, user) => {
  return dataset.reduce((latestDate, entry) => {
    if (entry.userID === user.id && entry.date > latestDate) {
      latestDate = entry.date;
    }
    return latestDate;
  }, '')
}

const generateRandomIndex = (dataset) => {
  return Math.floor(Math.random() * dataset.length);
}

const getUserSleepData = (user, dataset, date) => {
  return user.findHoursSleptByWeek(dataset, date);
}

const getSleepComparison = (currentUser, sleepData, date) => {
  const hours = currentUser.findHoursSleptByWeek(sleepData, date)[6].hoursSlept;
  const quality = currentUser.findHoursSleptByWeek(sleepData, date)[6].sleepQuality;
  const avgHours = currentUser.calculateAvgDailySleep(sleepData);
  const avgQuality = currentUser.calculateAvgSleepQuality(sleepData);
  const comparison =  {
    date: date,
    hoursSleptOnDate: hours,
    sleepQualityOnDate: quality,
    hoursSleptAvg: avgHours,
    sleepQualityAvg: avgQuality
  }
  return comparison;
}

const generateHeaderContent = (user) => {
  return `<div class="welcome-box">
            <img src="./images/user.png" alt="user-icon" class="header header-image">
            <h1 class="welcome header">Welcome, ${user.displayFirstName()}</h1>
          </div>
          <div class="user-info-box">
            <p class="user-info">Name: ${user.name}</p>
            <p class="user-info">Address: ${user.address}</p>
            <p class="user-info">Email: ${user.email}</p>
          </div>
  `
}

const generateStepGoalChart = (currentUser, allUsers) => {
  return new Chart(activityChart, {
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
}

const generateWeekSleepChart = (userSleep) => {
  return new Chart(singleDaySleepChart, {
    type: 'line',
    data: {
      labels: userSleep.map(sleepEntry => sleepEntry.date),
      datasets: [{
        label: 'Hours Slept per Day',
        data: userSleep.map(sleepEntry => sleepEntry.hoursSlept),
        backgroundColor: '#b46096',
        borderColor: '#b46096'
      }, {
        label: 'Sleep Quality per Day',
        data: userSleep.map(sleepEntry => sleepEntry.sleepQuality),
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
}

const generateAvgSleepChart = (sleepComparisonData) => {
  return new Chart(sleepChartAvg, {
    type: 'bar',
    data: {
      labels: [`${sleepComparisonData.date}`, 'Overall Average'],
      datasets: [{
        label: 'Hours Slept',
        data: [`${sleepComparisonData.hoursSleptOnDate}`, `${sleepComparisonData.hoursSleptAvg}`],
        backgroundColor: '#b46096',
        borderColor: '#b46096'
      }, {
        label: 'Sleep Quality',
        data: [`${sleepComparisonData.sleepQualityOnDate}`, `${sleepComparisonData.sleepQualityAvg}`],
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
}

const loadPage = (data) => {
  const allUsers = new UserRepository(data[0]);
  const sleepData = new Sleep(data[1]);
  const randomIndex = generateRandomIndex(allUsers.users)
  const currentUser = new User(allUsers.users[randomIndex]);
  const date = getLatestDate(sleepData.sleepData, currentUser);
  const currentUserSleepDataByDate = getUserSleepData(currentUser, sleepData.sleepData, date)
  const sleepComparisonData = getSleepComparison(currentUser, sleepData.sleepData, date)

  header.innerHTML = generateHeaderContent(currentUser)
  stepGoalChart.innerHTML = generateStepGoalChart(currentUser, allUsers);
  singleDaySleepChart.innerHTML = generateWeekSleepChart(currentUserSleepDataByDate)
  sleepChartAvg.innerHTML = generateAvgSleepChart(sleepComparisonData)
}

window.addEventListener('load', fetchData);
