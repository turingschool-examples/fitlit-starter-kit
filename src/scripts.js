const greeting = document.querySelector('.greeting')
const users = document.querySelector('.users')
const hydration = document.querySelector('.hydration')
const sleep = document.querySelector('.sleep')
const activity = document.querySelector('.activity')
var userRepo = new UserRepository(userData);
var todaysDate = '2019/09/22'

function makeUser() {
  const randomUser = Math.floor(Math.random() * userData.length)
  const user = new User(userData[randomUser])
  displayUserInfo(user)
  makeHydration(user)
  makeSleep(user)
}

function showInfoCard(user) {
  users.innerHTML = `<section class="userInfo">
                     <p class="welcome">Welcome Back ${user.name.split(' ')[0]}!</p>
                     <p>Address: ${user.address}</p>
                     <p>Email: ${user.email}</p>
                     <p>Stride Length: ${user.strideLength}</p>
                     <p>Daily Step Goal: ${user.dailyStepGoal}</p>
                     <section class='friends-names'>Your friends:</section>
                     <p>ID: ${user.id}</p>
                     </section>
                     <section class='step-goal'>
                     </section>
                     `
}


function createFriendsList(user) {
  const friendsNames = document.querySelector('.friends-names')
  const friendsList = user.userFriends.map(friends => userRepo.getUserByID(friends))
  friendsList.forEach(friend => friendsNames.insertAdjacentHTML('beforeEnd', `<p>${friend.name.split(' ')[0]}</p>`))
}

function createStepGoal(user) {
  const stepGoal = document.querySelector('.step-goal')
  stepGoal.innerHTML =
  `<p>${user.getFirstName()}'s goal is  ${user.dailyStepGoal} steps per day, and the average is  ${userRepo.getAverageStepGoal()} steps per day.
  <p class="ahead-or-behind"></p>`
}

function compareStepGoal(user) {
  const difference = userRepo.getAverageStepGoal() - user.dailyStepGoal
  const absoluteValue = Math.abs(difference)
  const aheadOrBehind = document.querySelector('.ahead-or-behind')
  difference > 0 ?  aheadOrBehind.innerText = `Your goal is ${absoluteValue} steps greater than the average!` : aheadOrBehind.innerText = `Your goal is ${absoluteValue} steps less than the average!`
}

function displayUserInfo(user) {
  showInfoCard(user)
  createFriendsList(user)
  createStepGoal(user)
  compareStepGoal(user)
}

function makeHydration(user) {
  const newHydration = new Hydration(hydrationData, user)
  showHydrationCard(newHydration)
}

function showHydrationCard(newHydration) {
  let weeksHydroData = newHydration.getWeekOfHydroData(todaysDate)
  hydration.innerHTML = `
       <section class="hydration-data"><p>Hydration Average: ${newHydration.getAverageDailyOunces()} oz</p></section>
       <section class="weekly-hydration"><p>Todays Hydration: ${newHydration.getOuncesForSpecificDay(todaysDate)} oz</p></section>
       <section class="hydration-data">
       <p class="box-text">Yesterday's Hydration: ${weeksHydroData[0].numOunces} oz</p>
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
  let weeksSleepData = newSleep.getOneUserWeekOfSleepData('2019/06/16')
  sleep.innerHTML = `
  <section class="sleep-data"><p>Hours Slept Average: ${newSleep.getAverageDailySleep()} hours</p><p>Sleep Quality Average: ${newSleep.getAverageSleepQuality()}</p></section>
  <section class="sleep-data"><p>Todays Hours Slept: ${newSleep.getSleepForSpecificDay(todaysDate)}</p><p>Todays Sleep Quality: ${newSleep.getQualityForSpecificDay(todaysDate)}</p></section>
  <section class="sleep-data">
  <p class="box-text">Yesterday's Sleep: Hours Slept: ${weeksSleepData[0].hoursSlept} Sleep Quality ${weeksSleepData[0].sleepQuality}</p>
  <p class="box-text">${weeksSleepData[1].date}: Hours Slept: ${weeksSleepData[1].hoursSlept} Sleep Quality ${weeksSleepData[1].sleepQuality}
  <p class="box-text">${weeksSleepData[2].date}: Hours Slept: ${weeksSleepData[2].hoursSlept} Sleep Quality ${weeksSleepData[2].sleepQuality}
  <p class="box-text">${weeksSleepData[3].date}: Hours Slept: ${weeksSleepData[3].hoursSlept} Sleep Quality ${weeksSleepData[3].sleepQuality}
  <p class="box-text">${weeksSleepData[4].date}: Hours Slept: ${weeksSleepData[4].hoursSlept} Sleep Quality ${weeksSleepData[4].sleepQuality}
  <p class="box-text">${weeksSleepData[5].date}: Hours Slept: ${weeksSleepData[5].hoursSlept} Sleep Quality ${weeksSleepData[5].sleepQuality}
  <p class="box-text">${weeksSleepData[6].date}: Hours Slept: ${weeksSleepData[6].hoursSlept} Sleep Quality ${weeksSleepData[6].sleepQuality}
  </section>
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
