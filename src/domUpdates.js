//NOTE: Your DOM manipulation will occur in this file
import { calculateAverageSteps, dailyOunces, weeklyOunces, findDailySleep, findWeeklyHours, findRecentWeek, findWeeklyQuality, calculateAvgQuality, calculateAvgHours } from './scripts.js';

import { getAllData } from './apiCalls.js';

const username = document.querySelector('.user-name')
const address = document.querySelector('.address-cont')
const strideData = document.querySelector('.stride-data')
const stepGoal = document.querySelector('.steps-goal-data')
const avgStepGoal = document.querySelector('.global-steps-goal-data')

const dailyHydration = document.querySelector('.daily-hydration-label')
const weeklyHydrationDate = document.querySelectorAll('.hydration-date')
const hydrationSelect = document.querySelector('.weekly-hydration-select')

const weeklySleepDate = document.querySelectorAll('.sleep-date')
const sleepSelect = document.querySelector('.weekly-sleep-select')

const avgQualityData = document.querySelector('.avg-quality-data')
const avgHoursData = document.querySelector('.avg-hours-data')

const dailySleep = document.querySelector('.daily-sleep-data')

window.addEventListener('load', getAllData)
hydrationSelect.addEventListener('change', () => { checkIfSelected(userHydration, weeklyHoursSlept, weeklyQualitySlept) })
sleepSelect.addEventListener('change', () => { checkIfSelected(userHydration, weeklyHoursSlept, weeklyQualitySlept) })

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

function checkIfSelected(a, b, c) {
  let p = document.getElementById('hydration-data')
  let x = document.querySelector('.weekly-hydration-select').value
  let tdHours = document.querySelector('.hours-slept')
  let tdQuality = document.querySelector('.quality-slept')
  let v = document.querySelector('.weekly-sleep-select').value

  if (x !== 'Click to Select a Date') {
    let targetObj = a.find((user) => {
      return user.date === x
    })
    let data = targetObj.numOunces
    p.innerText = data
  } else {
    p.innerText = '----'
  }

  if (v !== 'Click to Select a Date') {
    let targetObjHours = b.find((user) => {
      return user.date === v
    })
    let targetObjQuality = c.find((user) => {
      return user.date === v
    })
    let dataHours = targetObjHours.hours
    tdHours.innerText = dataHours

    let dataQuality = targetObjQuality.quality
    tdQuality.innerText = dataQuality
  } else {
    tdHours.innerText = '----'
    tdQuality.innerText = '----'
  }
}

let userHydration;

function displayHydrationData(hydration) {
  userHydration = weeklyOunces(hydration)
  dailyHydration.innerText = dailyOunces(hydration)

  let dates = userHydration.map((object) => {
    return object.date
  })
  weeklyHydrationDate[0].innerText = dates[0]
  weeklyHydrationDate[1].innerText = dates[1]
  weeklyHydrationDate[2].innerText = dates[2]
  weeklyHydrationDate[3].innerText = dates[3]
  weeklyHydrationDate[4].innerText = dates[4]
  weeklyHydrationDate[5].innerText = dates[5]
  weeklyHydrationDate[6].innerText = dates[6]

  weeklyHydrationDate[0].value = dates[0]
  weeklyHydrationDate[1].value = dates[1]
  weeklyHydrationDate[2].value = dates[2]
  weeklyHydrationDate[3].value = dates[3]
  weeklyHydrationDate[4].value = dates[4]
  weeklyHydrationDate[5].value = dates[5]
  weeklyHydrationDate[6].value = dates[6]
}

let weeklyHoursSlept;
let weeklyQualitySlept;

function displaySleepData(sleep) {
  let date = findRecentWeek(sleep)
  weeklyHoursSlept = findWeeklyHours(sleep, date)
  weeklyQualitySlept = findWeeklyQuality(sleep, date)
  dailySleep.innerText = findDailySleep(sleep)

  let dates = weeklyHoursSlept.map((object) => {
    return object.date
  })
  weeklySleepDate[0].innerText = dates[0]
  weeklySleepDate[1].innerText = dates[1]
  weeklySleepDate[2].innerText = dates[2]
  weeklySleepDate[3].innerText = dates[3]
  weeklySleepDate[4].innerText = dates[4]
  weeklySleepDate[5].innerText = dates[5]
  weeklySleepDate[6].innerText = dates[6]

  weeklySleepDate[0].value = dates[0]
  weeklySleepDate[1].value = dates[1]
  weeklySleepDate[2].value = dates[2]
  weeklySleepDate[3].value = dates[3]
  weeklySleepDate[4].value = dates[4]
  weeklySleepDate[5].value = dates[5]
  weeklySleepDate[6].value = dates[6]

  avgQualityData.innerText = calculateAvgQuality(sleep)

  avgHoursData.innerText = calculateAvgHours(sleep)
}

export {
  displayUserData,
  displayHydrationData,
  displaySleepData,
  displaySteps,
  calculateAvgQuality,
}