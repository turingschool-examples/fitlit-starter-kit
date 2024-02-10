//NOTE: Your DOM manipulation will occur in this file
import {  calculateAverageSteps, dailyOunces, weeklyOunces, findDailySleep, findWeeklyHours, findRecentWeek } from './scripts.js';
import { calculateAvgHours } from '../src/sleepData.js';

import { getAllData } from './apiCalls.js';

const username = document.querySelector('.user-name')
const address = document.querySelector('.address-cont')
const strideData = document.querySelector('.stride-data')
const stepGoal = document.querySelector('.steps-goal-data')
const avgStepGoal = document.querySelector('.global-steps-goal-data')
const dailyHydration = document.querySelector('.daily-hydration-label')
const weeklyHydrationLabel = document.querySelector('.weekly-hydration-label')
const weeklyHydrationData = document.querySelector('.weekly-hydration-data')
const dailySleep = document.querySelector('.daily-sleep-label')
const weeklySleepLabel = document.querySelector('.weekly-sleep-label')
const weeklySleepData = document.querySelector('.weekly-sleep-data')

window.addEventListener('load', getAllData)

function displayUserData(userInfo) {
  username.innerText = userInfo.name
  strideData.innerText = userInfo.strideLength
  stepGoal.innerText = userInfo.dailyStepGoal
  address.innerHTML +=
  `<address class='contact-info'>
    Email: ${userInfo.email} <br>
    Address: ${userInfo.address} <br>
  </address>`
}

function displaySteps(userData) {
  avgStepGoal.innerText = calculateAverageSteps(userData) 
}

function displayHydrationData(hydration) {
    var userHydration = weeklyOunces(hydration)
    console.log('userHydration', userHydration)
    dailyHydration.innerText = dailyOunces(hydration)
    weeklyHydrationLabel.innerText = `${userHydration[0].date} | ${userHydration[1].date} | ${userHydration[3].date} | ${userHydration[4].date} | ${userHydration[5].date} | ${userHydration[6].date}`
    weeklyHydrationData.innerText = `${userHydration[0].numOunces} | ${userHydration[1].numOunces} | ${userHydration[3].numOunces} | ${userHydration[4].numOunces} | ${userHydration[5].numOunces} | ${userHydration[6].numOunces}`
}

function displaySleepData(sleep) {
  let date = findRecentWeek(sleep)
  let weeklyHoursSlept = findWeeklyHours(sleep, date) 
  let weeklySleepQuality = findWeeklyHours(sleep, date)
  dailySleep.innerText = findDailySleep(sleep)
  weeklySleepLabel.innerText = `${weeklyHoursSlept[0].date} | ${weeklyHoursSlept[1].date} | ${weeklyHoursSlept[2].date} | ${weeklyHoursSlept[3].date} | ${weeklyHoursSlept[4].date} | ${weeklyHoursSlept[5].date} | ${weeklyHoursSlept[6].date}`
  weeklySleepData.innerText = `${weeklyHoursSlept[0].hours} | ${weeklyHoursSlept[1].hours} | ${weeklyHoursSlept[2].hours} | ${weeklyHoursSlept[3].hours} | ${weeklyHoursSlept[4].hours} | ${weeklyHoursSlept[5].hours} | ${weeklyHoursSlept[5].hours}`
console.log('weekly hours slept', weeklyHoursSlept)
}

export {
  displayUserData,
  displayHydrationData,
  displaySleepData,
  displaySteps
}