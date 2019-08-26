// *** Variables ***
let randomNum = Math.floor(Math.random() * 50 +1);
let randomUser = userData.find(user => user.id === randomNum);
const dailySection = document.querySelector('.daily_section')
const header = document.querySelector('header')

//*** Instances ***
const user = new User(randomUser)
const users = new UserRepository(userData);
const hydration = new Hydration(hydrationData, randomUser.id);
const sleep = new Sleep(sleepData, randomUser.id);
const activity = new Activity(activityData, userData);

// *** Event Listeners ***
window.addEventListener('load', handlePageLoad);

// *** Functionality | Handlers 1st ***
function handlePageLoad() {
  
  handleUser()
}


function handleUser() {

  welcomeUser();
  createUserCard();
}

function welcomeUser() {
  header.insertAdjacentHTML('beforeend', `<h2>Welcome, ${user.name}</h2>`)
}

function createUserCard() {
  dailySection.insertAdjacentHTML('afterbegin', `<article class="user_info">
  <p>Address: ${user.address}</p>
  <p>E-mail: ${user.email}</p>
  <p>Stride Length: ${user.strideLength}</p>
  <p>Daily Step Goal: ${user.dailyStepGoal} / ${users.calculateAverageStepGoals()}</p>
  </article>`)
}


hydration.extractSingleUser();
let waterConsumedToday = hydration.calculateDailyWaterIntake();
let singleUserIntakeData = hydration.singleUserData;
let weeklyOunces = hydration.calculateWeeklyWaterIntake();



dailySection.insertAdjacentHTML('beforeend', `<article>
 <p>Daily Water Intake: ${waterConsumedToday}</p>
 <ul>Water consumed this week:
  <li>${weeklyOunces[0].date} : ${weeklyOunces[0].numOunces} ounces</li>
  <li>${weeklyOunces[1].date} : ${weeklyOunces[1].numOunces} ounces</li>
  <li>${weeklyOunces[2].date} : ${weeklyOunces[2].numOunces} ounces</li>
  <li>${weeklyOunces[3].date} : ${weeklyOunces[3].numOunces} ounces</li>
  <li>${weeklyOunces[4].date} : ${weeklyOunces[4].numOunces} ounces</li>
  <li>${weeklyOunces[5].date} : ${weeklyOunces[5].numOunces} ounces</li>
  <li>${weeklyOunces[6].date} : ${weeklyOunces[6].numOunces} ounces</li>
 </ul>
 </article>`)

