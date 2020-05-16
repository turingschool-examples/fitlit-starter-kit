const greeting = document.querySelector('.greeting')
const users = document.querySelector('.users')
const hydration = document.querySelector('.hydration')
const sleep = document.querySelector('.sleep')
const activity = document.querySelector('.activity')
const stepGoal = document.querySelector('.step-goal')
// var userRepo = new UserRepository(userData);
var todaysDate = '2019/09/22'



function makeUser() {
  let randomUser = Math.floor(Math.random() * userData.length)
  const user = new User(userData[randomUser])
  makeHydration(user)
}

function showInfoCard() {
  users.innerHTML = `<section class="userInfo">
                     <p>User: ${user.name}</p>
                     <p>Address: ${user.address}</p>
                     <p>Email: ${user.email}</p>
                     <p>Stride Length: ${user.strideLength}</p>
                     <p>Daily Step Goal: ${user.dailyStepGoal}</p>
                     <p>Friends: ${user.userFriends}</p>
                     <p>ID: ${user.id}</p>
                     </section>
                     `
}

function showFirstName() {
  greeting.innerHTML = `<p>Welcome ${user.getFirstName()}</p>`
}

function compareStepGoal() {
  let average = user.dailyStepGoal / userRepo.getAverageStepGoal()
  let averagePercent = (average * 100).toFixed(2)
  userInfo.insertAdjacentHTML('afterEnd',
    `
    <p>Your${user.dailyStepGoal} steps per day, and the average is ${userRepo.getAverageStepGoal()} steps per day.
    ${user.getFirstName()}'s goal is ${averagePercent}% of the average
    </p>
    `)
}

function makeHydration(user) {
  let newHydration = new Hydration(hydrationData, user)
  showHydrationCard(newHydration)
}

function showHydrationCard(newHydration) {
  let weeksHydroData = newHydration.getWeekOfHydroData(todaysDate)
  hydration.innerHTML = `
    <section class="hydration-average"><p>Hydration Average: ${newHydration.getAverageDailyOunces()}oz</p></section>
    <section class="todays-hydration"><p>Todays Hydration: ${newHydration.getOuncesForSpecificDay(todaysDate)}oz</p></section>
    <section class="weekly-hydration">
    <p class="box-text">Yesterday's Hydration: ${weeksHydroData[0]}</p>
    <p class="box-text">2 days ago: ${weeksHydroData[1]}oz</p>
    <p class="box-text">3 days ago: ${weeksHydroData[2]}oz</p>
    <p class="box-text">4 days ago: ${weeksHydroData[3]}oz</p>
    <p class="box-text">5 days ago: ${weeksHydroData[4]}oz</p>
    <p class="box-text">6 days ago: ${weeksHydroData[5]}oz</p>
    <p class="box-text">7 days ago: ${weeksHydroData[6]}oz</p>
    </section>
                         `
}





makeUser()
showInfoCard()
showFirstName()
compareStepGoal()




// Create an info card on the dashboard with all of user’s info on the page
// Display their first name somewhere prominently on the page to welcome them
// For a specific user, display how their step goal compares to the average step
//  goal amongst all users (this display should not be hard-coded)
