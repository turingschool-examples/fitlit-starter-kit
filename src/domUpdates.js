import { userSteps } from './scripts.js' 


var userCard = document.querySelector('.card1')
var welcomeUser = document.querySelector('.card-banner')

export default function displayUserInfo (user) {
  userCard.innerHTML = `
  <section> 
    User id is ${user.id}
    ${user.name}'s daily step goal is ${user.dailyStepGoal} steps
  </section>
   The average step goal is ${userSteps}
`
welcomeUser.innerText = `Welcome, ${user.name}`
}











