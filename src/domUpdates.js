//NOTE: Your DOM manipulation will occur in this file
import { calculateAverageSteps, dailyOunces, weeklyOunces, findDailySleep, findWeeklyHours, findRecentWeek, findWeeklyQuality, calculateAvgQuality, calculateAvgHours } from './scripts.js';

import { getAllData } from './apiCalls.js';

const username = document.querySelector('.user-name')
const address = document.querySelector('.address-cont')
const strideData = document.querySelector('.stride-data')
const stepGoal = document.querySelector('.steps-goal-data')
const avgStepGoal = document.querySelector('.global-steps-goal-data')
const dailyHydration = document.querySelector('.daily-hydration-label')
// const weeklyHydrationData1 = document.querySelector('.weekly-hydration-data1')
// const weeklyHydrationData2 = document.querySelector('.weekly-hydration-data2')
// const weeklyHydrationData3 = document.querySelector('.weekly-hydration-data3')
// const weeklyHydrationData4 = document.querySelector('.weekly-hydration-data4')
// const weeklyHydrationData5 = document.querySelector('.weekly-hydration-data5')
// const weeklyHydrationData6 = document.querySelector('.weekly-hydration-data6')
// const weeklyHydrationData7 = document.querySelector('.weekly-hydration-data7')
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
  dailyHydration.innerText = dailyOunces(hydration)

   let dates = userHydration.map((object) => {
    return object.date
  })

  let ounces = userHydration.map((object) => {
    return object.numOunces
  })
  
    weeklyHydrationDate[0].innerText = dates[0]
    weeklyHydrationDate[1].innerText = dates[1]
    weeklyHydrationDate[2].innerText = dates[2]
    weeklyHydrationDate[3].innerText = dates[3]
    weeklyHydrationDate[4].innerText = dates[4]
    weeklyHydrationDate[5].innerText = dates[5]
    weeklyHydrationDate[6].innerText = dates[6]


  // weeklyHydrationData1.innerText = `${userHydration[0].date} - ${userHydration[0].numOunces}oz`
  // weeklyHydrationData2.innerText = `${userHydration[1].date} - ${userHydration[1].numOunces}oz`
  // weeklyHydrationData3.innerText = `${userHydration[2].date} - ${userHydration[2].numOunces}oz`
  // weeklyHydrationData4.innerText = `${userHydration[3].date} - ${userHydration[3].numOunces}oz`
  // weeklyHydrationData5.innerText = `${userHydration[4].date} - ${userHydration[4].numOunces}oz`
  // weeklyHydrationData6.innerText = `${userHydration[5].date} - ${userHydration[5].numOunces}oz`
  // weeklyHydrationData7.innerText = `${userHydration[6].date} - ${userHydration[6].numOunces}oz`
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