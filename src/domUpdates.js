//NOTE: Your DOM manipulation will occur in this file
import { getUserInfo, calculateAverageSteps, getRandomUser, dailyOunces, weeklyOunces } from './scripts.js';
import userData from './data/users';
import userHydrationData from './data/hydration';

const username = document.querySelector('.user-name')
const address = document.querySelector('.address-cont')
const strideData = document.querySelector('.stride-data')
const stepGoal = document.querySelector('.steps-goal-data')
const avgStepGoal = document.querySelector('.global-steps-goal-data')
const dailyHydration = document.querySelector('.daily-hydration-label')
const weeklyHydrationLabel = document.querySelector('.weekly-hydration-label')
const weeklyHydrationData = document.querySelector('.weekly-hydration-data')


function displayUserData(userInfo) {
  username.innerText = userInfo.name
  strideData.innerText = userInfo.strideLength
  stepGoal.innerText = userInfo.dailyStepGoal
  avgStepGoal.innerText = calculateAverageSteps(userData)
  address.innerHTML +=
  `<address class='contact-info'>
    Email: ${userInfo.email} <br>
    Address: ${userInfo.address} <br>
  </address>`
}

function displayHydrationData(userId) {
    var userHydration = weeklyOunces(userId)
    console.log(userHydration)
    console.log(userId)
    dailyHydration.innerText = dailyOunces(userId)
    // weeklyHydration.innerHTML += `<dt class="weekly-sleep-label">
    // ${userHydration[0].date} | ${userHydration[1].date} | ${userHydration[3].date} | 
    // ${userHydration[4].date} | ${userHydration[5].date} | ${userHydration[6].date}<br>
    // <div class="hydration-data-weekly">
    // ${userHydration[0].numOunces} | ${userHydration[1].numOunces} | ${userHydration[3].numOunces} |
    // ${userHydration[4].numOunces} | ${userHydration[5].numOunces} | ${userHydration[6].numOunces}
    // </div>
    // </dt>`
    weeklyHydrationLabel.innerText = `${userHydration[0].date} | ${userHydration[1].date} | ${userHydration[3].date} | ${userHydration[4].date} | ${userHydration[5].date} | ${userHydration[6].date}`
    weeklyHydrationData.innerText = `${userHydration[0].numOunces} | ${userHydration[1].numOunces} | ${userHydration[3].numOunces} | ${userHydration[4].numOunces} | ${userHydration[5].numOunces} | ${userHydration[6].numOunces}`
}

export {
  displayUserData,
  displayHydrationData
}