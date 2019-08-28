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
const activity = new Activity(activityData, userData, randomUser.id);


// *** Event Listeners ***
window.addEventListener('load', handlePageLoad);

// *** Functionality | Handlers 1st ***
function handlePageLoad() {
  handleUser();
  displayUserHydration();
  displaySleepInfo();
  displayStepInfo();
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
  dailySection.insertAdjacentHTML('beforeend', `<article>
   <p>Daily Water Intake: ${dailyWaterIntake}</p>
   <ul>Water consumed this week:
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

function returnLatestHoursSlept() {
  sleep.extractSingleUser();
  return sleep.averageHoursSlept();
}

function returnLatestSleepQuality() {
  sleep.extractSingleUser();
  return sleep.averageSleepQuality();
}

function returnWeeklyHoursSlept() {
  sleep.extractSingleUser();
  let userSleep = sleep.singleUserData;
  let date = userSleep[userSleep.length - 1].date;
  return sleep.calculateWeeklyHoursSlept(date);
}

function returnAvgHoursSlept() {
  sleep.extractSingleUser();
  return sleep.averageHoursSlept()
};

function returnAvgSleepQuality() {
  sleep.extractSingleUser();
  return sleep.averageSleepQuality()
};


function displaySleepInfo() {
  let latestHoursSlept = returnLatestHoursSlept();
  let latestSleepQual = returnLatestSleepQuality();
  let weeklyHrsSlept = returnWeeklyHoursSlept();
  let avgHoursSlept = returnAvgHoursSlept();
  let avgSleepQuality = returnAvgSleepQuality();
  dailySection.insertAdjacentHTML('beforeend', `<article class="user_info">
  <p>Hours Slept Last Night: ${latestHoursSlept} hrs</p>
  <p>Last Night's Sleep Quality: ${latestSleepQual} / 5</p>
  <p>Weekly Sleep Info:</p>
    <div class='week-sleep-info'>
      <h3>${weeklyHrsSlept[0].date}</h3>
      <p>${weeklyHrsSlept[0].hoursSlept}hrs | ${weeklyHrsSlept[0].sleepQuality} / 5</p>
    </div>
    <div class='week-sleep-info'>
      <h3>${weeklyHrsSlept[1].date}</h3>
      <p>${weeklyHrsSlept[1].hoursSlept}hrs | ${weeklyHrsSlept[1].sleepQuality} / 5</p>
    </div>
    <div class='week-sleep-info'>
      <h3>${weeklyHrsSlept[2].date}</h3>
      <p>${weeklyHrsSlept[2].hoursSlept}hrs | ${weeklyHrsSlept[2].sleepQuality} / 5</p>
    </div>
    <div class='week-sleep-info'>
      <h3>${weeklyHrsSlept[3].date}</h3>
      <p>${weeklyHrsSlept[3].hoursSlept}hrs | ${weeklyHrsSlept[3].sleepQuality} / 5</p>
    </div>
    <div class='week-sleep-info'>
      <h3>${weeklyHrsSlept[4].date}</h3>
      <p>${weeklyHrsSlept[4].hoursSlept}hrs | ${weeklyHrsSlept[4].sleepQuality} / 5</p>
    </div>
    <div class='week-sleep-info'>
      <h3>${weeklyHrsSlept[5].date}</h3>
      <p>${weeklyHrsSlept[5].hoursSlept}hrs | ${weeklyHrsSlept[5].sleepQuality} / 5</p>
    </div>
    <div class='week-sleep-info'>
      <h3>${weeklyHrsSlept[6].date}</h3>
      <p>${weeklyHrsSlept[6].hoursSlept}hrs | ${weeklyHrsSlept[6].sleepQuality} / 5</p>
    </div>
    <p>All Time Average:</p>
    <div class='week-sleep-info'>
      <p>${avgHoursSlept}hrs | ${avgSleepQuality} / 5</p>
    </div>
  </article>`)
}

function returnDailySteps() {
  activity.extractSingleActivityData();
  let singleUserActivity = activity.singleActivity;
  let latestDay = singleUserActivity[singleUserActivity.length - 1]
  return latestDay.numSteps
}

function returnMinutesActive() {
  activity.extractSingleActivityData();
  let singleUserActivity = activity.singleActivity;
  let latestDay = singleUserActivity[singleUserActivity.length - 1]
  return latestDay.minutesActive
}

function returnDailyMiles() {
  activity.extractSingleActivityData();
  activity.extractSingleUser();
  let singleUserActivity = activity.singleActivity;
  let latestDay = singleUserActivity[singleUserActivity.length - 1]
  let miles = activity.calculateDailyMiles(latestDay.date);
  return miles
}


function displayStepInfo() {
  let dailySteps = returnDailySteps();
  let stepGoal = user.dailyStepGoal;
  let minutesActive = returnMinutesActive();
  let miles = returnDailyMiles();

  dailySection.insertAdjacentHTML('beforeend', `<article>
    <h3>Steps</h3>
    <p>${dailySteps}</p> 
    <p>/ ${stepGoal}</p>

    <h3>Activity</h3>
    <p>Minutes Active: ${minutesActive} mins</p>
    <p>Miles: ${miles}mi</p>

   </article>`)
}

// function displayA





