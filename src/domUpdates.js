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

const weeklyDateData1 = document.querySelector('.weekly-date-data1')
const weeklyDateData2 = document.querySelector('.weekly-date-data2')
const weeklyDateData3 = document.querySelector('.weekly-date-data3')
const weeklyDateData4 = document.querySelector('.weekly-date-data4')
const weeklyDateData5 = document.querySelector('.weekly-date-data5')
const weeklyDateData6 = document.querySelector('.weekly-date-data6')
const weeklyDateData7 = document.querySelector('.weekly-date-data7')

const weeklyHoursData1 = document.querySelector('.weekly-hours-data1')
const weeklyHoursData2 = document.querySelector('.weekly-hours-data2')
const weeklyHoursData3 = document.querySelector('.weekly-hours-data3')
const weeklyHoursData4 = document.querySelector('.weekly-hours-data4')
const weeklyHoursData5 = document.querySelector('.weekly-hours-data5')
const weeklyHoursData6 = document.querySelector('.weekly-hours-data6')
const weeklyHoursData7 = document.querySelector('.weekly-hours-data7')

const weeklyQualityData1 = document.querySelector('.weekly-quality-data1')
const weeklyQualityData2 = document.querySelector('.weekly-quality-data2')
const weeklyQualityData3 = document.querySelector('.weekly-quality-data3')
const weeklyQualityData4 = document.querySelector('.weekly-quality-data4')
const weeklyQualityData5 = document.querySelector('.weekly-quality-data5')
const weeklyQualityData6 = document.querySelector('.weekly-quality-data6')
const weeklyQualityData7 = document.querySelector('.weekly-quality-data7')

const avgQualityData = document.querySelector('.avg-quality-data')
const avgHoursData = document.querySelector('.avg-hours-data')

const dailySleep = document.querySelector('.daily-sleep-data')

window.addEventListener('load', getAllData)
document.addEventListener('change', () => { checkIfSelected(userHydration) })

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

function checkIfSelected(userHydration) {
  let x = document.querySelector('.weekly-hydration-select').value

  let targetObj = userHydration.find((user) => {
    return user.date === x
  })
  let data = targetObj.numOunces
  let p = document.getElementById('hydration-data')
  p.innerText = data
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

function displaySleepData(sleep) {
  let date = findRecentWeek(sleep)
  let weeklyHoursSlept = findWeeklyHours(sleep, date)
  let weeklyQualitySlept = findWeeklyQuality(sleep, date)
  dailySleep.innerText = findDailySleep(sleep)
  weeklyDateData1.innerText = `${weeklyHoursSlept[0].date}`
  weeklyDateData2.innerText = `${weeklyHoursSlept[1].date}`
  weeklyDateData3.innerText = `${weeklyHoursSlept[2].date}`
  weeklyDateData4.innerText = `${weeklyHoursSlept[3].date}`
  weeklyDateData5.innerText = `${weeklyHoursSlept[4].date}`
  weeklyDateData6.innerText = `${weeklyHoursSlept[5].date}`
  weeklyDateData7.innerText = `${weeklyHoursSlept[6].date}`

  weeklyHoursData1.innerText = `${weeklyHoursSlept[0].hours}`
  weeklyHoursData2.innerText = `${weeklyHoursSlept[1].hours}`
  weeklyHoursData3.innerText = `${weeklyHoursSlept[2].hours}`
  weeklyHoursData4.innerText = `${weeklyHoursSlept[3].hours}`
  weeklyHoursData5.innerText = `${weeklyHoursSlept[4].hours}`
  weeklyHoursData6.innerText = `${weeklyHoursSlept[5].hours}`
  weeklyHoursData7.innerText = `${weeklyHoursSlept[6].hours}`

  weeklyQualityData1.innerText = `${weeklyQualitySlept[0].quality}`
  weeklyQualityData2.innerText = `${weeklyQualitySlept[1].quality}`
  weeklyQualityData3.innerText = `${weeklyQualitySlept[2].quality}`
  weeklyQualityData4.innerText = `${weeklyQualitySlept[3].quality}`
  weeklyQualityData5.innerText = `${weeklyQualitySlept[4].quality}`
  weeklyQualityData6.innerText = `${weeklyQualitySlept[5].quality}`
  weeklyQualityData7.innerText = `${weeklyQualitySlept[6].quality}`

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