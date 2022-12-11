// import './images/turing-logo.png'
import './css/styles.css';
// import makeStepCharts from './charts';
import { getAPIData } from './apiCalls'
import User from '../src/User';
import UserRepository from './UserRepository';
import loadCharts from './charts';

// Global Variables
// let one = 1
let users
let sleep
let hydration
let currentUser

// const userRepository = new UserRepository(userData)
// 
// console.log(userRepository)

//Query Selectors
let sleepBox = document.querySelector('.zero')
let stepGoalBox = document.querySelector('#step-text')
let infoBox = document.querySelector('.two')
//let activityBox = document.querySelector('.three')
let sleepHistoryBox = document.querySelector('.four')
let hydrationBox = document.querySelector('.three')
let activityTrackerTitle = document.querySelector('h1')
let userInfoList = document.querySelector("#userInfoList")
let hydrationInfoList = document.querySelector("#hydrationInfoList")
let sleepInfoList = document.querySelector("#sleepInfoList")
let sleepHistoryList = document.querySelector("#sleepHistoryList")

// Event Listeners
window.addEventListener('load', getAllData)
// window.addEventListener('load', displayUserInfo)
// infoBox.addEventListener('click', )
// hydrationBox.addEventListener('click', )
// window.addEventListener('load', stepGoalDisplay)
// activityBox.addEventListener('click', )
// friendsBox.addEventListener('click', )
// sleepBox.addEventListener('click', )
// window.addEventListener('load', displayWelcomeName)


//Event Handlers
function getAllData() {
  Promise.all([getAPIData('users'), getAPIData('sleep'), getAPIData('hydration')])
    .then((data) => {
      users = new UserRepository(data[0])
      sleep = data[1]
      hydration = data[2]
      loadPage()
      // console.log('hydration', hydration)
      // console.log('users', users)
      // console.log('currentUser', currentUser)
    })
    .catch(err => console.log('To err is human', err))
}

function displayUserInfo() {
  // getAllData()
  userInfoList.innerHTML += `<li>${currentUser.userData.name}</li>
  <li>${currentUser.userData.address}</li> 
  <li>${currentUser.userData.email}</li>
  <li>Stride Length: ${currentUser.userData.strideLength}</li>
  <li>Daily Step Goal: ${currentUser.userData.dailyStepGoal}</li>
  <li>Friends: ${getUserFriends()}</li>`
}

function displayWelcomeName() {
  activityTrackerTitle.innerText += ` ${currentUser.getFirstName()}`
}

function displayStepGoal() {
  let currentUserStepGoal = currentUser.userData.dailyStepGoal
  let allUsersStepGoal = users.stepGoalAverage()
  let result = [currentUserStepGoal, allUsersStepGoal]
  console.log(result)
  return result
  // stepGoalBox.innerText += ` Your step goal is ${currentUser.userData.dailyStepGoal} steps. The average step goal is ${users.stepGoalAverage()}.`
}

// Functions
function getUser(sleep, hydration) {
  let randomIndex = Math.floor(Math.random() * users.data.userData.length);
  let randomUser = users.data.userData[randomIndex];
  currentUser = new User(randomUser, sleep, hydration);
}

function getUserFriends() {
  let friendsArray = currentUser.userData.friends.map(friend => {
    return users.getData(friend).name
  })
  return friendsArray.join(', ')
}

function displayWater() {
  let dailyWaterIntake = currentUser.getWaterPerDay('2019/06/15')
  let dailyWaterGoal = 96
  let result = [dailyWaterIntake, dailyWaterGoal]
  return result
  // hydrationBox.innerText += `Your water intake for today is ${currentUser.getWaterPerDay('2019/06/15')} ounces`
  // hydrationInfoList.innerHTML += `<li>Your weekly water intake is ${currentUser.getWeeklyConsumption()} ounces</li>`

}

// function showOverallSleep() {
//   currentUser.sleepOnSpecificDate()
//   currentUser.sleepQualityOnSpecificDate()
// }

function displaySleep() {
  let dailySleep = currentUser.sleepOnSpecificDate('2019/06/15')
  let maxSleep = 12
  let result = [dailySleep, maxSleep]
  return result
  // sleepInfoList.innerHTML += `<li>Last night you slept ${currentUser.sleepOnSpecificDate('2019/06/15')} hours</li>
  // <li>The quality of your sleep last night was ${currentUser.sleepQualityOnSpecificDate('2019/06/15')} out of 5</li> 
  // <li>Your weekly sleep pattern: ${currentUser.givenWeekSleepDataByDay()} - ${currentUser.givenWeeksSleepQualityByDay()}</li>`
}

function displaySleepQuality() {
  let dailyQuality = currentUser.sleepQualityOnSpecificDate('2019/06/15')
  let maxQuality = 5
  let result = [dailyQuality, maxQuality]
  return result
}

function displaySleepHistory() {
  // sleepHistoryList.innerHTML += `<li>Overall Sleep Hours: ${currentUser.getAverageDailySleep()} hours</li>
  // <li>Overall Sleep Quality: ${currentUser.getOverallQualityAvg()} out of 5</li>`
  let avgSleep = currentUser.getAverageDailySleep()
  let avgQuality = currentUser.getOverallQualityAvg()
  // let maxQuality = 5
  let result = [avgSleep, avgQuality]
  console.log('sleep history result', result)
  return result
}

function displayLast7DaysSleep() {
  let weeklySleepAndDate = currentUser.givenWeekSleepDataByDay()
  let weeklySleep = weeklySleepAndDate.map(current => Object.values(current)[0])
  return weeklySleep
  // console.log('weekly sleep', weeklySleep)
  // return weeklySleep
}
// currentUser.givenWeekSleepDataByDay() returns an array of objects
// Each object has a dynamic key of a date and dynamic value of sleep hours
// We need to return/access only the values/hours

function displayLast7DaysQuality() {
  let weeklyQualityAndDate = currentUser.givenWeeksSleepQualityByDay()
  let weeklyQuality = weeklyQualityAndDate.map(current => Object.values(current)[0])
  return weeklyQuality
  // console.log('weekly sleep', weeklySleep)
  // return weeklySleep
}

function loadPage() {
  getUser(sleep, hydration)
  displayUserInfo()
  // displayStepGoal()
  displayWelcomeName()
  // displayWater()
  // displaySleep()
  // displaySleepHistory()
  loadCharts(displayStepGoal(), displayWater(), displaySleep(), displaySleepQuality(), displayLast7DaysSleep(), displayLast7DaysQuality())
}

// export default displayStepGoal;

