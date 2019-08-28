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
  header.insertAdjacentHTML('beforeend', `<h2 class="welcome-msg">Welcome, ${user.name}</h2>`)
}

function createUserCard() {
  dailySection.insertAdjacentHTML('afterbegin', `<article class="user_info">
  <h3>Address: </h3>
  <p>${user.address}</p>
  <h3>E-mail: </h3>
  <p>${user.email}</p>
  <h3>Stride Length: </h3>
  <p>${user.strideLength}</p>
  <h3>Daily Step Goal: </h3>
  <p>${user.dailyStepGoal} / ${users.calculateAverageStepGoals()}</p>
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
   <h3>Daily Water Intake:</h3>
   <p> ${dailyWaterIntake} oz.</p>
   <h3>Water consumed this week:</h3>
    <div class="inline-records">
      <h4>${weeklyWaterIntake[0].date} : </h4> 
      <p> ${weeklyWaterIntake[0].numOunces} ounces</p>
    </div>
    <div class="inline-records">
      <h4>${weeklyWaterIntake[1].date} : </h4> 
      <p> ${weeklyWaterIntake[1].numOunces} ounces</p>
    </div>
    <div class="inline-records">
      <h4>${weeklyWaterIntake[2].date} : </h4> 
      <p> ${weeklyWaterIntake[2].numOunces} ounces</p>
    </div>
    <div class="inline-records">
      <h4>${weeklyWaterIntake[3].date} : </h4> 
      <p> ${weeklyWaterIntake[3].numOunces} ounces</p>
    </div>
    <div class="inline-records">
      <h4>${weeklyWaterIntake[4].date} : </h4> 
      <p> ${weeklyWaterIntake[4].numOunces} ounces</p>
    </div>
    <div class="inline-records">
      <h4>${weeklyWaterIntake[5].date} : </h4> 
      <p> ${weeklyWaterIntake[5].numOunces} ounces</p>
    </div>
    <div class="inline-records">
      <h4>${weeklyWaterIntake[6].date} : </h4> 
      <p> ${weeklyWaterIntake[6].numOunces} ounces</p>
    </div>
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

//USE THIS FOR SLEEP REFACTOR
function returnLatestWeekSleepInfo() {
  sleep.extractSingleUser();
  // let userSleep = sleep.singleUserData;
  // let date = userSleep[userSleep.length - 1].date;
  return sleep.findLatestWeek();
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
  let weeklyHrsSlept = returnLatestWeekSleepInfo();
  let avgHoursSlept = returnAvgHoursSlept();
  let avgSleepQuality = returnAvgSleepQuality();
  dailySection.insertAdjacentHTML('beforeend', `<article class="user_info">
  <h3>Hours Slept Last Night: </h3>
  <p>${latestHoursSlept} hrs</p>
  <h3>Last Night's Sleep Quality: </h4>
  <p>${latestSleepQual} / 5</p>
  <h3>Weekly Sleep Info:</h3>
    <div class='week-sleep-info'>
      <h4>${weeklyHrsSlept[0].date}</h4>
      <p>${weeklyHrsSlept[0].hoursSlept}hrs | ${weeklyHrsSlept[0].sleepQuality} / 5</p>
    </div>
    <div class='week-sleep-info'>
      <h4>${weeklyHrsSlept[1].date}</h4>
      <p>${weeklyHrsSlept[1].hoursSlept}hrs | ${weeklyHrsSlept[1].sleepQuality} / 5</p>
    </div>
    <div class='week-sleep-info'>
      <h4>${weeklyHrsSlept[2].date}</h4>
      <p>${weeklyHrsSlept[2].hoursSlept}hrs | ${weeklyHrsSlept[2].sleepQuality} / 5</p>
    </div>
    <div class='week-sleep-info'>
      <h4>${weeklyHrsSlept[3].date}</h4>
      <p>${weeklyHrsSlept[3].hoursSlept}hrs | ${weeklyHrsSlept[3].sleepQuality} / 5</p>
    </div>
    <div class='week-sleep-info'>
      <h4>${weeklyHrsSlept[4].date}</h4>
      <p>${weeklyHrsSlept[4].hoursSlept}hrs | ${weeklyHrsSlept[4].sleepQuality} / 5</p>
    </div>
    <div class='week-sleep-info'>
      <h4>${weeklyHrsSlept[5].date}</h4>
      <p>${weeklyHrsSlept[5].hoursSlept}hrs | ${weeklyHrsSlept[5].sleepQuality} / 5</p>
    </div>
    <div class='week-sleep-info'>
      <h4>${weeklyHrsSlept[6].date}</h4>
      <p>${weeklyHrsSlept[6].hoursSlept}hrs | ${weeklyHrsSlept[6].sleepQuality} / 5</p>
    </div>
    <h3>All Time Average:</h3>
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
  activity.extractSingleUser();
  activity.extractSingleActivityData();
  let singleUserActivity = activity.singleActivity;
  let latestDay = singleUserActivity[singleUserActivity.length - 1]
  let miles = activity.calculateDailyMiles(latestDay.date);
  return miles
}

function returnFlightsClimbed() {
  activity.extractSingleActivityData();
  return activity.checkFlightsClimbed()
}

function returnEveryonsAvgSteps() {
  activity.extractSingleActivityData();
  let singleUserActivity = activity.singleActivity;
  let lastUserDay = singleUserActivity[singleUserActivity.length - 1]
  let latestDay = lastUserDay.date
  let avgSteps = activity.getEveryonesAvgSteps(latestDay);
  return avgSteps
};

function returnEveryonsAvgMinActive() {
  activity.extractSingleActivityData();
  let singleUserActivity = activity.singleActivity;
  let lastUserDay = singleUserActivity[singleUserActivity.length - 1]
  let latestDay = lastUserDay.date
  let avgMinActive = activity.getEveryonesAvgMinsActive(latestDay);
  return avgMinActive
}

function returnEveryonsAvgStairsClimed() {
  activity.extractSingleActivityData();
  let singleUserActivity = activity.singleActivity;
  let lastUserDay = singleUserActivity[singleUserActivity.length - 1]
  let latestDay = lastUserDay.date
  let avgStairsClibmed = activity.getEveryonesAvgStairsClimbed(latestDay);
  return avgStairsClibmed
}

function returnWeeklyStepCount() {
  activity.extractSingleActivityData();
  return activity.calculateTotalWeeklySteps();
}

function returnWeeklyMinActive() {
  activity.extractSingleActivityData();
  return activity.calculateTotalWeeklyMinActive();
}

function returnWeeklyStairsClimbed() {
  activity.extractSingleActivityData();
  return activity.calculateTotalWeeklyFlightsClimbed();
}


function displayStepInfo() {
  let dailySteps = returnDailySteps();
  let stepGoal = user.dailyStepGoal;
  let minutesActive = returnMinutesActive();
  let miles = returnDailyMiles();
  let flightsClimbed = returnFlightsClimbed()
  let allAvgSteps = returnEveryonsAvgSteps();
  let allAvgMinActive = returnEveryonsAvgMinActive();
  let allAvgStairsClimbed = returnEveryonsAvgStairsClimed()
  let totalWeeklySteps = returnWeeklyStepCount();
  let totalWeeklyMinActive = returnWeeklyMinActive();
  let totalWeeklyStairsClimbed = returnWeeklyStairsClimbed()

  dailySection.insertAdjacentHTML('beforeend', `<article>
    <h3>Steps</h3>
    <p>${dailySteps}</p> 
    <p>/ ${stepGoal}</p>

    <h3>Activity</h3>
    <div class="inline-records">
      <h4>Minutes Active: </h4>
      <p>${minutesActive} mins</p>
    </div>
    <div class="inline-records">
      <h4>Miles: </h4>
      <p>${miles}mi</p>
    </div>

    <h3>You vs Everyone</h3>
    <div class="inline-records">
      <h4>Steps: </h4>
      <p>${dailySteps} / ${allAvgSteps}</p>
    </div>
    <div class="inline-records">
      <h4>Minutes Active: </h4>
      <p>${minutesActive}min / ${allAvgMinActive} min</p>
    </div>
    <div class="inline-records">
      <h4>Stairs Climbed: </h4>
      <p>${flightsClimbed} / ${allAvgStairsClimbed}</p>
    </div>

    <h3>Weekly Report</h3>
    <div class="inline-records">
      <h4>Steps: </h4>
      <p>${totalWeeklySteps}</p>
    </div>
    <div class="inline-records">
      <h4>Minutes Active:  </h4>
      <p>${totalWeeklyMinActive} mins</p>
    </div>
    <div class="inline-records">
      <h4>Flights Climbed: </h4>
      <p>${totalWeeklyStairsClimbed }</p>
    </div>


   </article>`)
}

// function displayA





