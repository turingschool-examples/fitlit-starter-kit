const greeting = document.querySelector('.greeting')
const users = document.querySelector('.users')
const hydration = document.querySelector('.hydration')
const sleep = document.querySelector('.sleep')
const activity = document.querySelector('.activity')
const stepGoal = document.querySelector('.step-goal')
var userRepo = new UserRepository(userData);
var todaysDate = '2019/09/22'



function makeUser() {
  let randomUser = Math.floor(Math.random() * userData.length)
  user = new User(userData[randomUser])
  makeHydration(user)
  makeSleep(user)
}

function showInfoCard() {
  users.innerHTML = `<section class="userInfo">
                     <p class="welcome">Welcome Back ${user.name.split(' ')[0]}!</p>
                     <p>Address: ${user.address}</p>
                     <p>Email: ${user.email}</p>
                     <p>Stride Length: ${user.strideLength}</p>
                     <p>Daily Step Goal: ${user.dailyStepGoal}</p>
                     <p>Friends: ${user.userFriends}</p>
                     <p>ID: ${user.id}</p>
                     </section>
                     `
}

// function showFirstName() {
//   greeting.innerHTML = `<p>Welcome ${user.getFirstName()}</p>`
// }

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
    <section class="hydration-data"><p>Hydration Average: ${newHydration.getAverageDailyOunces()}oz</p></section>
    <section class="hydration-data"><p>Todays Hydration: ${newHydration.getOuncesForSpecificDay(todaysDate)}oz</p></section>
    <section class="hydration-data">
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

function makeSleep(user) {
  let newSleep = new Sleep(sleepData, user)
  showSleepCard(newSleep)
}

function showSleepCard(newSleep) {
  let weeksSleepData = newSleep.getOneUserWeekOfSleepData(todaysDate)
  sleep.innerHTML = `
  <section class="sleep-data"><p>Hours Slept Average: ${newSleep.getAverageDailySleep()} hours</p>
                              <p>Sleep Quality Average: ${newSleep.getAverageSleepQuality()}</p>
  </section>
  <section class="sleep-data"><p>Todays Hours Slept: ${newSleep.getSleepForSpecificDay(todaysDate)}</p>
                              <p>Todays Sleep Quality: ${newSleep.getQualityForSpecificDay(todaysDate)}</p>
  </section>
  <section class="sleep-data">
  <p class="box-text">Yesterday's Sleep: Hours Slept: ${weeksSleepData[0].hoursSlept} Sleep Quality ${weeksSleepData[0].sleepQuality}</p>
  <p class="box-text">2 days ago: Hours Slept: ${weeksSleepData[1]}</p>
  <p class="box-text">3 days ago: Hours Slept: ${weeksSleepData[2]}</p>
  <p class="box-text">4 days ago: Hours Slept: ${weeksSleepData[3]}</p>
  <p class="box-text">5 days ago: Hours Slept: ${weeksSleepData[4]}</p>
  <p class="box-text">6 days ago: Hours Slept: ${weeksSleepData[5]}</p>
  <p class="box-text">7 days ago: Hours Slept: ${weeksSleepData[6]}</p>
  </section>
  `
  console.log(weeksSleepData)
}




makeUser()
showInfoCard()
showFirstName()
compareStepGoal()




// Create an info card on the dashboard with all of user’s info on the page
// Display their first name somewhere prominently on the page to welcome them
// For a specific user, display how their step goal compares to the average step
//  goal amongst all users (this display should not be hard-coded)



