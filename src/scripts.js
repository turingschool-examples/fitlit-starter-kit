/* eslint-disable no-undef */
// *** Variables ***
let randomNum = Math.floor(Math.random() * 50 + 1);
let randomUser = userData.find(user => user.id === randomNum);
const dailySection = document.querySelector('.daily_section');
const header = document.querySelector('header');

//*** Instances ***
const user = new User(randomUser);
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
  header.insertAdjacentHTML('beforeend', `<h2 class="welcome-msg">Welcome, ${user.name}</h2>`);
}

function createUserCard() {
  dailySection.insertAdjacentHTML('afterbegin', `<section class="user_info info_block">
  <h3 class="user_info_headings">Address: </h3>
  <p class="user_info_text">${user.address}</p>
  <h3 class="user_info_headings">E-mail: </h3>
  <p class="user_info_text">${user.email}</p>
  <h3 class="user_info_headings">Stride Length: </h3>
  <p class="user_info_text">${user.strideLength} ft.</p>
  <h3 class="user_info_headings">Daily Step Goal: </h3>
  <p class="user_info_text">${user.dailyStepGoal}</p>
  <h3 class="user_info_headings">Avg User Step Goal: </h3>
  <p class="user_info_text">${users.calculateAverageStepGoals()}</p>
  </section>`);
}

function returnDailyWaterIntake() {
  hydration.extractSingleUser();
  return hydration.calculateDailyWaterIntake();
}

function returnWeeklyWaterIntake() {
  hydration.extractSingleUser();
  return hydration.calculateWeeklyWaterIntake();
}

function displayUserHydration() {
  let dailyWaterIntake = returnDailyWaterIntake();
  let weeklyWaterIntake = returnWeeklyWaterIntake();
  dailySection.insertAdjacentHTML('beforeend', `<section class="water_info info_block">
    <div class="daily_water_intake">
      <img src="../images/water-drop.svg" class="water_drop_img" alt="water drop">
      <p>${dailyWaterIntake} oz.</p>
    </div>
    <div class="weekly_water_info">
      <h3>Water Consumed This Week</h3>
        <div class="week_by_day">
        <div class="first_half_week">
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
        </div>
        <div class="second_half_week">
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
        </div>
        </div>
      <div>
   </section>`);
}

function returnLatestHoursSlept() {
  sleep.extractSingleUser();
  return sleep.averageHoursSlept();
}

function returnLatestSleepQuality() {
  sleep.extractSingleUser();
  return sleep.averageSleepQuality();
}

function returnLatestWeekSleepInfo() {
  sleep.extractSingleUser();
  return sleep.findLatestWeek();
}

function returnAvgHoursSlept() {
  sleep.extractSingleUser();
  return sleep.averageHoursSlept();
}

function returnAvgSleepQuality() {
  sleep.extractSingleUser();
  return sleep.averageSleepQuality();
}

function displaySleepInfo() {
  let latestHoursSlept = returnLatestHoursSlept();
  let latestSleepQual = returnLatestSleepQuality();
  let weeklyHrsSlept = returnLatestWeekSleepInfo();
  let avgHoursSlept = returnAvgHoursSlept();
  let avgSleepQuality = returnAvgSleepQuality();
  dailySection.insertAdjacentHTML('beforeend', `<section class="sleep_info info_block">
  <div class="latest_night_sleep">
    <div class="sleep_hrs">
      <h3>Hours Slept Last Night </h3>
      <p>${latestHoursSlept} hrs</p>
    </div>
    <img src="../images/pillow.svg" class="pillow_img" alt="happy pillow">
    <div class="sleep_qual">
      <h3>Last Night's Sleep Quality </h4>
      <p>${latestSleepQual} / 5</p>
    </div>
  </div>
  <div class='avg_sleep'>
    <h3>All Time Average</h3>
    <p>${avgHoursSlept}hrs <span class="sleep_divider">|</span> ${avgSleepQuality} / 5</p>
  </div>
  <div class="weekly_sleep_info">
    <h3>Weekly Sleep Info</h3>
    <div class="all_sleep_days">
    <div class="single_day_sleep">
      <h4>${weeklyHrsSlept[0].date}</h4>
      <p>${weeklyHrsSlept[0].hoursSlept}hrs <span class="sleep_divider">|</span> ${weeklyHrsSlept[0].sleepQuality} / 5</p>
    </div>
    <div class="single_day_sleep">
      <h4>${weeklyHrsSlept[1].date}</h4>
      <p>${weeklyHrsSlept[1].hoursSlept}hrs <span class="sleep_divider">|</span> ${weeklyHrsSlept[1].sleepQuality} / 5</p>
    </div>
    <div class="single_day_sleep">
      <h4>${weeklyHrsSlept[2].date}</h4>
      <p>${weeklyHrsSlept[2].hoursSlept}hrs <span class="sleep_divider">|</span> ${weeklyHrsSlept[2].sleepQuality} / 5</p>
    </div>
    <div class="single_day_sleep">
      <h4>${weeklyHrsSlept[3].date}</h4>
      <p>${weeklyHrsSlept[3].hoursSlept}hrs <span class="sleep_divider">|</span> ${weeklyHrsSlept[3].sleepQuality} / 5</p>
    </div>
    <div class="single_day_sleep">
      <h4>${weeklyHrsSlept[4].date}</h4>
      <p>${weeklyHrsSlept[4].hoursSlept}hrs <span class="sleep_divider">|</span> ${weeklyHrsSlept[4].sleepQuality} / 5</p>
    </div>
    <div class="single_day_sleep">
      <h4>${weeklyHrsSlept[5].date}</h4>
      <p>${weeklyHrsSlept[5].hoursSlept}hrs <span class="sleep_divider">|</span> ${weeklyHrsSlept[5].sleepQuality} / 5</p>
    </div>
    <div class="single_day_sleep">
      <h4>${weeklyHrsSlept[6].date}</h4>
      <p>${weeklyHrsSlept[6].hoursSlept}hrs <span class="sleep_divider">|</span> ${weeklyHrsSlept[6].sleepQuality} / 5</p>
    </div>
    </div>
    </div>
  </section>`);
}

function returnDailySteps() {
  activity.extractSingleActivityData();
  let singleUserActivity = activity.singleActivity;
  let latestDay = singleUserActivity[singleUserActivity.length - 1];
  return latestDay.numSteps;
}

function returnMinutesActive() {
  activity.extractSingleActivityData();
  let singleUserActivity = activity.singleActivity;
  let latestDay = singleUserActivity[singleUserActivity.length - 1];
  return latestDay.minutesActive;
}

function returnDailyMiles() {
  activity.extractSingleUser();
  activity.extractSingleActivityData();
  let singleUserActivity = activity.singleActivity;
  let latestDay = singleUserActivity[singleUserActivity.length - 1];
  let miles = activity.calculateDailyMiles(latestDay.date);
  return miles;
}

function returnFlightsClimbed() {
  activity.extractSingleActivityData();
  return activity.checkFlightsClimbed();
}

function returnEveryonsAvgSteps() {
  activity.extractSingleActivityData();
  let singleUserActivity = activity.singleActivity;
  let lastUserDay = singleUserActivity[singleUserActivity.length - 1]
  let latestDay = lastUserDay.date;
  let avgSteps = activity.getEveryonesAvgSteps(latestDay);
  return avgSteps;
}

function returnEveryonsAvgMinActive() {
  activity.extractSingleActivityData();
  let singleUserActivity = activity.singleActivity;
  let lastUserDay = singleUserActivity[singleUserActivity.length - 1];
  let latestDay = lastUserDay.date;
  let avgMinActive = activity.getEveryonesAvgMinsActive(latestDay);
  return avgMinActive;
}

function returnEveryonsAvgStairsClimed() {
  activity.extractSingleActivityData();
  let singleUserActivity = activity.singleActivity;
  let lastUserDay = singleUserActivity[singleUserActivity.length - 1];
  let latestDay = lastUserDay.date;
  let avgStairsClibmed = activity.getEveryonesAvgStairsClimbed(latestDay);
  return avgStairsClibmed;
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
  let flightsClimbed = returnFlightsClimbed();
  let allAvgSteps = returnEveryonsAvgSteps();
  let allAvgMinActive = returnEveryonsAvgMinActive();
  let allAvgStairsClimbed = returnEveryonsAvgStairsClimed();
  let totalWeeklySteps = returnWeeklyStepCount();
  let totalWeeklyMinActive = returnWeeklyMinActive();
  let totalWeeklyStairsClimbed = returnWeeklyStairsClimbed();
  dailySection.insertAdjacentHTML('beforeend', `<section class="info_block activity_block">
    <div class="steps_activity_info">
    <div class="steps">
    <img src="../images/sneakers.svg" class="shoe_img">
    <p>${dailySteps} / ${stepGoal}</p>
    </div>
    <div class="activity">
    <img src="../images/electricity.svg" class="activity_img">
      <p>${minutesActive} mins</p>
      <p>${miles} miles</p>
    </div>
    </div>
    <div class="report_and_compare">
    <div class="activity_comparison">
    <h3>How You Compare</h3>
    <div class="inline-records">
      <h4 class="reports">Steps: </h4>
      <p class="reports">${dailySteps} / ${allAvgSteps}</p>
    </div>
    <div class="inline-records">
      <h4 class="reports">Minutes Active: </h4>
      <p class="reports">${minutesActive}min / ${allAvgMinActive} min</p>
    </div>
    <div class="inline-records">
      <h4 class="reports">Stairs Climbed: </h4>
      <p class="reports">${flightsClimbed} / ${allAvgStairsClimbed}</p>
    </div>
    </div>
    <div class="weekly_report">
    <h3>Weekly Report</h3>
    <div class="inline-records">
      <h4 class="reports">Steps: </h4>
      <p class="reports">${totalWeeklySteps}</p>
    </div>
    <div class="inline-records">
      <h4 class="reports">Minutes Active:  </h4>
      <p class="reports">${totalWeeklyMinActive} mins</p>
    </div>
    <div class="inline-records">
      <h4 class="reports">Flights Climbed: </h4>
      <p class="reports">${totalWeeklyStairsClimbed }</p>
    </div>
    </div>
    </div>
   </section>`);
}