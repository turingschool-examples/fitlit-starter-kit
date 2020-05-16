const greeting = document.querySelector('.greeting')
const users = document.querySelector('.users')
const hydration = document.querySelector('.hydration')
const sleep = document.querySelector('.sleep')
const activity = document.querySelector('.activity')
const stepGoal = document.querySelector('.step-goal')
var userRepo = new UserRepository(userData);
var todaysDate = '2019/09/22'



function makeUser() {
  const randomUser = Math.floor(Math.random() * userData.length)
  const user = new User(userData[randomUser])
  displayUserInfo(user)
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

function compareStepGoal(user) {
  let average = user.dailyStepGoal / userRepo.getAverageStepGoal()
  let averagePercent = (average * 100).toFixed(2)
  stepGoal.innerHTML =
  `<section class='step-goal'>
  <p>${user.getFirstName()}'s goal is  ${user.dailyStepGoal} steps per day, and the average is  ${userRepo.getAverageStepGoal()} steps per day.
  ${user.getFirstName()}'s goal is ${averagePercent}% of the average
  </p>
  </section>`
}
function displayUserInfo(user) {
  showFirstName(user)
  showInfoCard(user)
  createFriendsList(user)
  compareStepGoal(user)
  makeHydration(user)
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
                         <p>Yesterday's Hydration: ${weeksHydroData[0]}</p>
                         <p>2 days days ago: ${weeksHydroData[1]}oz</p>
                         <p>3 days ago: ${weeksHydroData[2]}oz</p>
                         <p>4 days ago: ${weeksHydroData[3]}oz</p>
                         <p>5 days ago: ${weeksHydroData[4]}oz</p>
                         <p>6 days ago: ${weeksHydroData[5]}oz</p>
                         <p>7 days ago: ${weeksHydroData[6]}oz</p>
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
