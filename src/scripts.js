const greeting = document.querySelector('.greeting')
const users = document.querySelector('.users')
const hydration = document.querySelector('.hydration')
const sleep = document.querySelector('.sleep')
const activity = document.querySelector('.activity')
const stepGoal = document.querySelector('.step-goal')
var userRepo = new UserRepository(userData);
var todaysDate = '2019/08/22'



function makeUser() {
  const randomUser = Math.floor(Math.random() * userData.length)
  const user = new User(userData[randomUser])
  displayUserInfo(user)
  makeHydration(user)
}

function showInfoCard(user) {
  users.innerHTML = `<section class='info-card'>
                     <p>User: ${user.name}</p>
                     <p>Address: ${user.address}</p>
                     <p>Email: ${user.email}</p>
                     <p>Stride Length: ${user.strideLength}</p>
                     <p>Daily Step Goal: ${user.dailyStepGoal}</p>
                     <section class='friends-names'>Your friends:</section>
                     <p>ID: ${user.id}</p>
                     </section>
                     `;
}

function createFriendsList(user) {
  const friendsNames = document.querySelector('.friends-names')
  const friendsList = user.userFriends.map(friends => userRepo.getUserByID(friends))
  friendsList.forEach(friend => friendsNames.insertAdjacentHTML('beforeEnd', `<p>${friend.name.split(' ')[0]}</p>`))
}

function showFirstName(user) {
  greeting.innerHTML = `<p>Welcome ${user.getFirstName()}</p>`
}

function createStepGoal(user) {
  stepGoal.innerHTML =
  `<section class='step-goal'>
  <p>${user.getFirstName()}'s goal is  ${user.dailyStepGoal} steps per day, and the average is  ${userRepo.getAverageStepGoal()} steps per day.
  <p class="ahead-or-behind"></p>
  </section>`
}

function compareStepGoal(user) {
  const difference = userRepo.getAverageStepGoal() - user.dailyStepGoal
  const absoluteValue = Math.abs(difference)
  const aheadOrBehind = document.querySelector('.ahead-or-behind')
  difference > 0 ?  aheadOrBehind.innerText = `Your goal is ${absoluteValue} steps greater than the average!` : aheadOrBehind.innerText = `Your goal is ${absoluteValue} steps less than the average!`
}

function displayUserInfo(user) {
  showFirstName(user)
  showInfoCard(user)
  createFriendsList(user)
  createStepGoal(user)
  compareStepGoal(user)
}

function makeHydration(user) {
  let newHydration = new Hydration(hydrationData, user)
  showHydrationCard(newHydration)
}

function showHydrationCard(newHydration) {
  let weeksHydroData = newHydration.getWeekOfHydroData(todaysDate)
  hydration.innerHTML = `
                         <p>Hydration Average: ${newHydration.getAverageDailyOunces()}oz</p>
                         <p>Todays Hydration: ${newHydration.getOuncesForSpecificDay(todaysDate)}oz</p>
                         <p>Yesterday's Hydration: ${weeksHydroData[0].numOunces}oz</p>
                         <p>2 days days ago: ${weeksHydroData[1].numOunces}oz</p>
                         <p>3 days ago: ${weeksHydroData[2].numOunces}oz</p>
                         <p>4 days ago: ${weeksHydroData[3].numOunces}oz</p>
                         <p>5 days ago: ${weeksHydroData[4].numOunces}oz</p>
                         <p>6 days ago: ${weeksHydroData[5].numOunces}oz</p>
                         <p>7 days ago: ${weeksHydroData[6].numOunces}oz</p>
                         `
}





makeUser()
// showInfoCard()
// showFirstName()
// compareStepGoal()




// Create an info card on the dashboard with all of user’s info on the page
// Display their first name somewhere prominently on the page to welcome them
// For a specific user, display how their step goal compares to the average step
//  goal amongst all users (this display should not be hard-coded)
