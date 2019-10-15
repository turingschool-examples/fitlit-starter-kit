$(document).ready(function(){
let user;
let userRepo;
let hydroUser;
let hydroRepo;
let sleepRepo;
let sleepUser;
let activityRepo;
let activityUser;

$("#login-page-button").click(clickLoginButton);
$("body").on("click", "#aside-step-challenge", addFriendsTotalStepsByWeek);
$("body").on("click", "#aside-step-challenge", function() {
  $("#step-challenge-background").toggleClass("hidden");
});

function clickLoginButton(event) {
  if (!$("#login-page-input").val()) {
    displayErrorMessage();
    event.preventDefault();
  } else {
    instantiateUserData(userData);
    instantiateHydroData(hydrationData);
    instantiateSleepData(sleepData);
    instantiateActivityData(activityData);
    displayUserPage();
    addUserFirstName();
    addUserInfo(user);
    addStepComparison(user, userRepo);
    addOzToday();
    addWeeklyOzByDay();
    addSleepDataforDay();
    addWeeklySleepDataByDay();
    addAllTimeSleepAvg();
    addAllUsersActivityAverages();
    addFlightsOfStairsForLatestDay();
    addMilesForLatestDay();
    addMinutesActiveByDay();
    addNumStepsForLatestDay();
    addWeeklyActivityDataByDay();
  }
}

function instantiateUserData(usersData) {
  let userEmail = $("#login-page-input").val();
  userRepo = new UserRepo(usersData);
  let userInfo = userRepo.getUserData($("#login-page-input").val())
  user = new User(userInfo);
}

function instantiateHydroData(data) {
  hydroRepo = new HydroRepo(data);
  let hydroUserInfo = hydroRepo.getUserHydroData(user.id);
  hydroUser = new HydroUser(hydroUserInfo);
}

function instantiateSleepData(data) {
  sleepRepo = new SleepRepo(data);
  let userSleepData = sleepRepo.getUserSleepData(user.id);
  sleepUser = new SleepUser(userSleepData);
}

function instantiateActivityData(data) {
  activityRepo = new ActivityRepo(data);
  let userActivityData = activityRepo.getUserActivityData(user.id);
  activityUser = new ActivityUser(userActivityData);
}

function instantiateFriendsUser() {
  let friendsInfo = getFriendsInfo(user);
  return friendsInfo.map((friendInfo) => {
    let friend = new User(friendInfo);
    return friend;
  })
}

function instantiateFriendsActivity() {
  let friendsInfo = getFriendsInfo(user);
  return friendsInfo.map((friendInfo) => {
    let friendActivityInfo = activityRepo.getUserActivityData(friendInfo.id);
    let friendActivity = new ActivityUser(friendActivityInfo);
    return friendActivity;
  });
}

function addFriendsTotalStepsByWeek() {
  console.log($("#friend-weekly-steps-section").length);
  if ($("#friend-weekly-steps-section").length === 0) {
    let friends = instantiateFriendsUser();
    let friendsActivity = instantiateFriendsActivity();
    $("#aside-step-challenge").after(`
      <div class="step-challenge-background hidden" id="step-challenge-background">
        <section class="section-style step-challenge-section" id="friend-weekly-steps-section">
        </section
      </div>`)
    friendsActivity.forEach((friend, index) => {
      let totalfriendStepsByWeek = friend.calcTotalStepsByWeek('2019/09/22');
      let friendFirstName = friends[index].getFirstName();
      $("#friend-weekly-steps-section").append(`
            <div>
              <h3>${friendFirstName}</h3>
              <p>${totalfriendStepsByWeek}</p>
            </div>`);
    });
  }
}


function getFriendsInfo(user) {
  let friendInfo = user.friends.map(friend => {
    let friendInfo = userRepo.getFriendData(friend);
    return friendInfo;
  });
  return friendInfo;
}

function displayErrorMessage() {
  if ($("#error-message").length === 0) {
    $("#login-page-input").after("<p id='error-message'>Please enter your email</p>");
  }
}

function addUserFirstName() {
  $('#aside-user-name').html(`${user.getFirstName()}`);
}

function addStepComparison(user, userRepo) {
  $("#aside-user-step-comparison").html(`
    <h3 class="aside-step-goal-header">Your Step Goal</h3>
    <div class="aside-step-goal-style user-step-goal">${user.dailyStepGoal}</div>
    <h3 class="aside-step-goal-header">Average Step Goal</h3>
    <div class="aside-step-goal-style">${userRepo.calcAvgStepGoal()}</div>`);
}

function addUserInfo(user) {
  let userProperties = Object.keys(user);
  userProperties.splice(0, 4);
  let orderedUserProperties = userProperties.reverse();
  orderedUserProperties.forEach(function(property, index) {
    $("#aside-user-info-header").after(`
      <div class="aside-user-info-div">
        <h4>${property}</h4>
        <p class="aside-user-info-par">${user[property]}</p>
      </div>`);
  });
}

function addOzToday() {
  $("#card-daily-oz-header").after(`
  <p class="card-daily-oz-paragraph">${hydroUser.getOzByDate("2019/06/22")}</p>`);
}

function addWeeklyOzByDay() {
 let weeklyUserOz =  hydroUser.getDailyOzPerWeek();
  weeklyUserOz.forEach(day => {
    $("#card-weekly-oz-header").after(`
    <section class="section-style">
      <h3>${day.date}</h3>
      <p>${day.numOunces}</p>
    </section>`);
  })
}

function addSleepDataforDay() {
  let hoursSleptOnDay = sleepUser.getSleepDataDay('2019/06/22', 'hoursSlept');
  let sleepQualityOnDay = sleepUser.getSleepDataDay('2019/06/22', 'sleepQuality');
  $("#card-sleep-daily-data").after(`
    <section class="section-style">
      <h3>Hours Slept Last Night</h3>
      <p>${hoursSleptOnDay}</p>
    </section>
    <section class="section-style">
      <h3>Sleep Quality Last Night</h3>
      <p>${sleepQualityOnDay}</p>
    </section>`)
}

function addWeeklySleepDataByDay() {
  let weeklyUserSleepHours = sleepUser.getDailySleepByWeek('2019/06/22');
  weeklyUserSleepHours.forEach(day => {
    $("#card-weekly-sleep-header").after(`
      <section class="section-style">
        <h3>${day.date}</h3>
        <section class="sleep-weekly-data-section">
          <div>Hours Slept: ${day.hoursSlept}</div>
          <div>Quality of Sleep: ${day.sleepQuality}</div>
        </section>
      </section>`)
    })
}

function addAllTimeSleepAvg() {
  let allTimeAvgHoursSlept = sleepUser.calcAvgSleepPerDay('hoursSlept');
  let allTimeAvgSleepQuality = sleepUser.calcAvgSleepPerDay('sleepQuality');
  $("#card-sleep-all-time-avg").after(`
    <section class="section-style">
      <h3>Total Average Hours Slept/Night</h3>
      <p>${allTimeAvgHoursSlept}</p>
    </section>
    <section class="section-style">
      <h3>Total Average Sleep Quality/Night</h3>
      <p>${allTimeAvgSleepQuality}</p>
    </section>`);
}

function addMilesForLatestDay() {
  let todaysMiles = activityUser.calcMilesByDay('2019/09/22', user.strideLength);
  $("#daily-activity-header").after(`
  <section class="section-style">
  <h3>Miles Walked</h3>
  <p>${todaysMiles}</p>
  </section>`)
}

function addMinutesActiveByDay() {
  let todaysMinutes = activityUser.getMinutesActiveByDay('2019/09/22');
  $("#daily-activity-header").after(`
  <section class="section-style">
  <h3>Minutes Active</h3>
  <p>${todaysMinutes}</p>
  </section>`)
}

function addNumStepsForLatestDay() {
  let todaysSteps = activityUser.getNumStepsByDay('2019/09/22');
  $("#daily-activity-header").after(`
  <section class="section-style">
  <h3>Today's Steps</h3>
  <p>${todaysSteps}</p>
  </section>`)
}

function addFlightsOfStairsForLatestDay() {
  let todaysFlights = activityUser.getFlightsClimbedByDay('2019/09/22');
  $("#daily-activity-header").after(`
  <section class="section-style">
  <h3>Today's Flights Climbed</h3>
  <p>${todaysFlights}</p>
  </section>`)
}

function addAllUsersActivityAverages() {
  let avgFlights = activityRepo.calcAvgStairsClimbedByDay('2019/09/22');
  let avgSteps = activityRepo.calcAvgStepsTakenByDay('2019/09/22');
  let avgMins = activityRepo.calcMinsActiveByDay('2019/09/22');
  $("#daily-activity-header").after(`
  <section class="section-style">
    <h3>Average User Activity</h3>
    <section class="activity-all-users-data-section">
      <div>Steps: ${avgSteps}</div>
      <div>Minutes: ${avgMins}</div>
      <div>Flights: ${avgFlights}</div>
    </section>
  </section>`)
}

function addWeeklyActivityDataByDay() {
  let weeklyUserActivityHours = activityUser.getDailyActivityByWeek('2019/06/22');
  weeklyUserActivityHours.forEach(day => {
    $("#weekly-activity-header").after(`
      <section class="section-style">
        <h3>${day.date}</h3>
        <section class="sleep-weekly-data-section">
          <div>Steps: ${day.numSteps}</div>
          <div>Minutes: ${day.minutesActive}</div>
          <div>Flights: ${day.flightsOfStairs}</div>
        </section>
      </section>`)
    })
}

function displayUserPage() {
    $("#main-login-page").remove();
    $("body").html(`
  <div class="body-content-container">
    <header>
      <section class="header-section-categories">
        <h1 class="header-style header-hydration-style">Hydration</h1>
        <h1 class="header-style header-activity-style">Activity</h1>
        <h1 class="header-style header-sleep-style">Sleep</h1>
      </section>
    </header>
    <aside>
      <div class="aside-user-name">
      <h2>Fit Lit</h2>
      <h2 id="aside-user-name"></h2>
      </div>
      <div class="aside-user-info-div">
        <section class="aside-style">
          <h3 class="aside-user-info-header" id="aside-user-info-header">User Info</h3>
          <button class="user-logout-button">Log Out</button>
        </section>
        <section class="aside-style" id="aside-user-step-comparison">
        </section>
        <section class="aside-style">
          <button class="aside-trend-button" id="aside-step-challenge">Step Challenge</button>
          <button class="aside-trend-button">Step Trend</button>
        </section>
      </div>
    </aside>
    <main class="main-user-stats">
      <div class="main-user-stats-div">
        <article class="card-style card-daily-oz">
          <h2 id="card-daily-oz-header">Have you been drinkin'?</h2>
        </article>
        <article class="card-style card-weekly-oz">
          <h2 id="card-weekly-oz-header">Weekly Water Intake</h2>
        </article>
        <article class="card-style card-daily-activity">
          <h2 id="daily-activity-header">Today's Activity</h2>
        </article>
        <article class="card-style card-weekly-activity">
          <h2 id="weekly-activity-header">This Week's Activity</h2>
        </article>
        <article class="card-style card-daily-sleep">
          <h2 id="card-sleep-daily-data">Previous Night's Sleep Stats</h2>
        </article>
        <article class="card-style card-weekly-sleep">
          <h2 id="card-weekly-sleep-header">Seven Days of Sleep</h2>
        </article>
        <article class="card-style card-all-time-sleep">
          <h2 id="card-sleep-all-time-avg">All Time Sleep Stats</h2>
        </article>
      </div>
    </main>
  </div>`)
}

});
