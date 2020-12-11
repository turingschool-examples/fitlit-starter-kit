// if (typeof module !== 'undefined') {
//   var User = require('./User');
//   var UserRepository = require('./UserRepository');
//   var userData = require('../data/users');
//   var Hydration = require('./Hydration');
//   var HydrationRepository = require('./HydrationRepository')
//   var hydrationData = require('../data/hydration')
// }

// ~~~~~ QUERY SELECTORS ~~~~~
const userNameGreeting = document.querySelector('.user-greeting');
const userInfoCard = document.querySelector('.user-info-card');
const hydrationSection = document.querySelector('.hydration');
const sleepSection = document.querySelector('.sleep');

// ~~~~~ EVENT LISTENERS ~~~~~
window.onload = start;

// ~~~~~ GLOBAL VARIABLES ~~~~~
const users = userData.map(userObject => {
  const user = new User(userObject);
  return user;
});
const userRepository = new UserRepository(users);

const hydrationObjects = hydrationData.map(hydrationObject => {
  const hydration = new Hydration(hydrationObject);
  return hydration;
});
const hydrationRepository = new HydrationRepository(hydrationObjects);

const sleepObjects = sleepData.map(sleepObject => {
  const sleep = new Sleep(sleepObject);
  return sleep;
});
const sleepRepository = new SleepRepository(sleepData);

// ~~~~~ FUNCTIONS ~~~~~
function start() {
  userNameGreeting.innerText = `Hello, ${users[5].returnFirstName()}`;
  displayUserInfoCard(users[5]);
  displayHydrationInfo(users[5], "2019/06/24")
  displaySleepInfo(users[5], "2019/06/24")
}

function displayUserInfoCard(user) {
  userInfoCard.innerHTML = `
    <p>User ID: ${user.id}</p>
    <p>Name: ${user.name}</p>
    <p>Email: ${user.email}</p>
    <p>Stride length: ${user.strideLength}</p>
    <p>Friends: ${user.friends}</p>
    <p>Daily Step Goal: ${user.dailyStepGoal}</p>
    <p>Avg User Step Goal: ${userRepository.calculateAverageStepGoal()}</p>`;
}

function displayHydrationInfo(user, date) {
  const pastWeekHydrationObjects = hydrationRepository.returnOuncesByWeek(5, date);
  hydrationSection.innerHTML = `
    <h2>HYDRATION!</h2>
    <p>Water consumed today: ${hydrationRepository.returnOuncesByDate(5, "2019/06/24")} ounces</p>
    <p>Water consumed the past week:</p>
    <p>${pastWeekHydrationObjects[0].date}: ${pastWeekHydrationObjects[0].numOunces} ounces</p>
    <p>${pastWeekHydrationObjects[1].date}: ${pastWeekHydrationObjects[1].numOunces} ounces</p>
    <p>${pastWeekHydrationObjects[2].date}: ${pastWeekHydrationObjects[2].numOunces} ounces</p>
    <p>${pastWeekHydrationObjects[3].date}: ${pastWeekHydrationObjects[3].numOunces} ounces</p>
    <p>${pastWeekHydrationObjects[4].date}: ${pastWeekHydrationObjects[4].numOunces} ounces</p>
    <p>${pastWeekHydrationObjects[5].date}: ${pastWeekHydrationObjects[5].numOunces} ounces</p>
    <p>${pastWeekHydrationObjects[6].date}: ${pastWeekHydrationObjects[6].numOunces} ounces</p>`;
}

function displaySleepInfo(user, date) {
  const pastWeekSleepObjects = sleepRepository.getSleepDataByWeek(5, date);
  sleepSection.innerHTML = `
    <h2>SLEEP!</h2>
    <p>All-time average sleep quality: ${sleepRepository.getUserAvgSleepQualityAllTime(5)}</p>
    <p>All-time average hours slept: ${sleepRepository.getUserAvgHoursSleptAllTime(5)}</p>
    <p>Sleep stats for the week:</p>
    <p>${pastWeekSleepObjects[0].date}: ${pastWeekSleepObjects[0].hoursSlept} hours slept, ${pastWeekSleepObjects[0].sleepQuality} sleep quality</p>
    <p>${pastWeekSleepObjects[1].date}: ${pastWeekSleepObjects[1].hoursSlept} hours slept, ${pastWeekSleepObjects[1].sleepQuality} sleep quality</p>
    <p>${pastWeekSleepObjects[2].date}: ${pastWeekSleepObjects[2].hoursSlept} hours slept, ${pastWeekSleepObjects[2].sleepQuality} sleep quality</p>
    <p>${pastWeekSleepObjects[3].date}: ${pastWeekSleepObjects[3].hoursSlept} hours slept, ${pastWeekSleepObjects[3].sleepQuality} sleep quality</p>
    <p>${pastWeekSleepObjects[4].date}: ${pastWeekSleepObjects[4].hoursSlept} hours slept, ${pastWeekSleepObjects[4].sleepQuality} sleep quality</p>
    <p>${pastWeekSleepObjects[5].date}: ${pastWeekSleepObjects[5].hoursSlept} hours slept, ${pastWeekSleepObjects[5].sleepQuality} sleep quality</p>
    <p>${pastWeekSleepObjects[6].date}: ${pastWeekSleepObjects[6].hoursSlept} hours slept, ${pastWeekSleepObjects[6].sleepQuality} sleep quality</p>
    `;
}
