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
const hydrationSection = document.querySelector('.hydration')

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

// ~~~~~ FUNCTIONS ~~~~~
function start() {
  userNameGreeting.innerText = `Hello, ${users[5].returnFirstName()}`;
  displayUserInfoCard(users[5]);
  displayHydrationInfo(users[5], "2019/06/24")
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
  const pastWeekHydrationObjects = hydrationRepository.returnOuncesByWeek(5, date)
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
