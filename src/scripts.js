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
console.log("hydra", hydration)

// *** Event Listeners ***
window.addEventListener('load', handlePageLoad);

// *** Functionality | Handlers 1st ***
function handlePageLoad() {
  handleUser()
  handleHydration();
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

function handleHydration() {

  // returnDailyWaterIntake();
  displayUserHydration();
  // let waterConsumedToday = hydration.calculateDailyWaterIntake();
  // let singleUserIntakeData = hydration.singleUserData;
  // let weeklyOunces = hydration.calculateWeeklyWaterIntake();
}

// function returnAverageWaterIntake() {
//   hydration.extractSingleUser();
//   return hydration.calculateAverageWaterIntake();
// }

function returnDailyWaterIntake() {
  hydration.extractSingleUser();
  return hydration.calculateDailyWaterIntake();
}

function returnWeeklyWaterIntake() {
  hydration.extractSingleUser();
  return hydration.calculateWeeklyWaterIntake()
}


function displayUserHydration() {
  let dailyWaterIntake = returnDailyWaterIntake();
  let weeklyWaterIntake = returnWeeklyWaterIntake();
  console.log(weeklyWaterIntake)
  dailySection.insertAdjacentHTML('beforeend', `<article>
   <p>Daily Water Intake: ${dailyWaterIntake}</p>
   <ul>Water consumed this week:
  let weeklyWaterIntake = returnWeeklyWaterIntake();
    <li>${weeklyWaterIntake[0].date} : ${weeklyWaterIntake[0].numOunces} ounces</li>
    <li>${weeklyWaterIntake[1].date} : ${weeklyWaterIntake[1].numOunces} ounces</li>
    <li>${weeklyWaterIntake[2].date} : ${weeklyWaterIntake[2].numOunces} ounces</li>
    <li>${weeklyWaterIntake[3].date} : ${weeklyWaterIntake[3].numOunces} ounces</li>
    <li>${weeklyWaterIntake[4].date} : ${weeklyWaterIntake[4].numOunces} ounces</li>
    <li>${weeklyWaterIntake[5].date} : ${weeklyWaterIntake[5].numOunces} ounces</li>
    <li>${weeklyWaterIntake[6].date} : ${weeklyWaterIntake[6].numOunces} ounces</li>
   </ul>
   </article>`)
}


