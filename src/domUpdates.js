//NOTE: Your DOM manipulation will occur in this file
import { calculateAverageSteps, dailyOunces, weeklyOunces, findDailySleep, findWeeklyHours, findRecentWeek, findWeeklyQuality } from './scripts.js';

import { getAllData } from './apiCalls.js';

const username = document.querySelector('.user-name')
const address = document.querySelector('.address-cont')
const strideData = document.querySelector('.stride-data')
const stepGoal = document.querySelector('.steps-goal-data')
const avgStepGoal = document.querySelector('.global-steps-goal-data')
const dailyHydration = document.querySelector('.daily-hydration-label')
// const weeklyHydrationLabel = document.querySelector('.weekly-hydration-label')
const weeklyHydrationData1 = document.querySelector('.weekly-hydration-data1')
const weeklyHydrationData2 = document.querySelector('.weekly-hydration-data2')
const weeklyHydrationData3 = document.querySelector('.weekly-hydration-data3')
const weeklyHydrationData4 = document.querySelector('.weekly-hydration-data4')
const weeklyHydrationData5 = document.querySelector('.weekly-hydration-data5')
const weeklyHydrationData6 = document.querySelector('.weekly-hydration-data6')
const weeklyHydrationData7 = document.querySelector('.weekly-hydration-data7')
const weeklydateData1 = document.querySelector('.weekly-date-data1')
const weeklydateData2 = document.querySelector('.weekly-date-data2')
const weeklydateData3 = document.querySelector('.weekly-date-data3')
const weeklydateData4 = document.querySelector('.weekly-date-data4')
const weeklydateData5 = document.querySelector('.weekly-date-data5')
const weeklydateData6 = document.querySelector('.weekly-date-data6')
const weeklydateData7 = document.querySelector('.weekly-date-data7')
const dailySleep = document.querySelector('.daily-sleep-data')
// const weeklySleepLabel = document.querySelector('.weekly-sleep-label')
// const weeklySleepData = document.querySelector('.weekly-sleep-data')
// const weeklySleepQuality = document.querySelector('.')


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
    weeklyHydrationData1.innerText = `${userHydration[0].date} - ${userHydration[0].numOunces}oz`
    weeklyHydrationData2.innerText = `${userHydration[1].date} - ${userHydration[1].numOunces}oz`
    weeklyHydrationData3.innerText = `${userHydration[2].date} - ${userHydration[2].numOunces}oz`
    weeklyHydrationData4.innerText = `${userHydration[3].date} - ${userHydration[3].numOunces}oz`
    weeklyHydrationData5.innerText = `${userHydration[4].date} - ${userHydration[4].numOunces}oz`
    weeklyHydrationData6.innerText = `${userHydration[5].date} - ${userHydration[5].numOunces}oz`
    weeklyHydrationData7.innerText = `${userHydration[6].date} - ${userHydration[6].numOunces}oz`
}

function displaySleepData(sleep) {
  let date = findRecentWeek(sleep)
  let weeklyHoursSlept = findWeeklyHours(sleep, date)
  let weeklyQualitySlept = findWeeklyQuality(sleep, data)
  dailySleep.innerText = findDailySleep(sleep)


}

export {
  displayUserData,
  displayHydrationData,
  displaySleepData,
  displaySteps
}