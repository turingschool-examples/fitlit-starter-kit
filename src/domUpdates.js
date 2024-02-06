//NOTE: Your DOM manipulation will occur in this file
import { getUserInfo, calculateAverageSteps, getRandomUser } from './scripts.js';
import userData from './data/users';

const username = document.querySelector('.user-name')
const address = document.querySelector('.address-cont')
const strideData = document.querySelector('.stride-data')
const stepGoal = document.querySelector('.steps-goal-data')
const avgStepGoal = document.querySelector('.global-steps-goal-data')

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


// On load, a user should be chosen at random.

// As a user, I should be able to view an info card with all of my info on the page
// As a user, I should be able to see my first name somewhere prominently on the page to welcome me
// As a user, I should be able to see how my step goal compares to the average step goal amongst all users (this display should not be hard-coded)

export {
  displayUserData
}