console.log("Hello World");
$(document).ready(() => {
    
  const today = dateToday();
  const todayString = dateTodayString();
  const idRandom = Math.ceil(Math.random() * 50 - 1);
  const userRepository = new UserRepository(userData);
  const userDataArray = userRepository.fetchUserData(idRandom);
  const currentUser = new User(userDataArray);
  const hydration = new Hydration(hydrationData, currentUser.id);
  hydration.findCurrentUserData();
  const activity = new Activity(activityData, idRandom, userData);
  //   const findTrends = activity.findTrendOfIncreasingStepsForMoreThanThreeDaysForAllUsers()
  const sleep = new Sleep(sleepData, idRandom, userData);
  sleep.findCurrentUserData();
  activity.findCurrentUserData();
  

  

  const $profileInfoSection = $('.profile-info');
  const $sleepinfo = $('.sleep-info');
  const $hydrationInfo = $('.hydration-info');
  const $activityInfo = $('.activity-info');

  $('.today').text(dateToday());

  $('.profile-first-name').text(currentUser.findUserFirstName());
  $('.profile-name').text(currentUser.name);
  $('.profile-address').text(currentUser.address);
  $('.profile-email').text(currentUser.email);
  $('.profile-stride-length').text(currentUser.strideLength);
  $('.profile-daily-step-goal').text(currentUser.dailyStepGoal);
  $('.avg-step-goal-of-all-users').text(userRepository.findAverageStepGoalOfAllUsers());

  $('.water-consumed-today').text(hydration.findAverageFluidOzConsumedforSpecificDay(todayString));
  $('.default-display').text(displayThisWeeksHydration(hydration));
  $('.most-recent-steps').text(activity.findActivityForMostRecentDay(todayString, "numSteps"));
  $('.all-users-avg-most-recent-steps').text(activity.findAverageOfAnyActivityByDateForAllUsers(todayString, "numSteps"));
  $('.most-recent-minutes-active').text(activity.findActivityForMostRecentDay(todayString, "minutesActive"));
  $('.all-users-avg-most-recent-minutes-active').text(activity.findAverageOfAnyActivityByDateForAllUsers(todayString, "minutesActive"));
  $('.most-recent-stairs').text(activity.findActivityForMostRecentDay(todayString, "flightsOfStairs"));
  $('.all-users-avg-most-recent-stairs').text(activity.findAverageOfAnyActivityByDateForAllUsers(todayString, "flightsOfStairs"))
  $('.most-recent-miles').text(activity.findMilesWalkedForSpecificDayOfUser(todayString));

  $('.default-display').text(displayThisWeeksSleepOrQuality(sleep, 'hoursSlept'));
  $('.default-display').text(displayThisWeeksSleepOrQuality(sleep, 'sleepQuality'));
  $(".average-hours-slept").text(sleep.findUserAverageHoursSleptEachDayById(todayString));
  $(".average-sleep-quality-per-day").text(sleep.findUserAverageSleepQualityPerDay(todayString));
  $(".hours-slept-date").text(sleep.findHoursSleptByDate(todayString));
  $(".quality-slept-date").text(sleep.findSleepQualityByDate(todayString));
  $(".sleep-or-quality-each-day-week").text(sleep.findSleepHoursOrQualityEachDayOverWeekForAUser(todayString));
  $(".average-quality-all-users").text(sleep.fetchAverageQualityOfSleepAllUsers(todayString));
  $(".most-hours-slept-date").text(sleep.findUsersSleptMostHoursBasedOnDate(todayString));
  $(".over-three-sleep-quality").text(sleep.findAllUsersOverThreeSleepQualityForWeek(todayString, todayString));
  $(".best-date-of-sleep").text(sleep.findBestDateOfSleepOfUser(todayString));

})


const dateToday = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; 
  // console.log(new Intl.DateTimeFormat('en-US', mm).format(today));
  const yyyy = today.getFullYear();
  if (dd<10) {
    dd=`0${dd}`;
  } 
  if (mm<10) {
    mm=`0${mm}`;
  } 
  // today = `${yyyy}/${mm}/${dd}`;
  today = `${mm}/${dd}/${yyyy}`;
  // console.log(today);
  return today;
}

const dateTodayString = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; 
  const yyyy = today.getFullYear();
  if (dd<10) {
    dd=`0${dd}`;
  } 
  if (mm<10) {
    mm=`0${mm}`;
  } 
  today = `${yyyy}/${mm}/${dd}`;
  return today;
}

const startTodayString = () => {
  let today = new Date();
  let dd = today.getDate() - 7;
  let mm = today.getMonth() + 1; 
  const yyyy = today.getFullYear();
  if (dd<10) {
    dd=`0${dd}`;
  } 
  if (mm<10) {
    mm=`0${mm}`;
  } 
  today = `${yyyy}/${mm}/${dd}`;
  return today;
}

const displayThisWeeksHydration = (hydration) => {
  let endDate = dateTodayString();
  let startDate = startTodayString();
  let weekArray = hydration.findFluidOzConsumedEveryDayOverSpecificWeek(startDate, endDate);
  weekArray.forEach((day) => {
    $('.hydration-week-display').append(`<li> On ${day.date} you drank ${day.numOunces} oz of water </li>`)
  })
}

const displayThisWeeksSleepOrQuality = (sleep, property) => {
  let endDate = dateTodayString();
  let startDate = startTodayString();
  let weekArray = sleep.findSleepHoursOrQualityEachDayOverWeekForAUser(startDate, endDate, property);
    
  weekArray.forEach((day) => {
    if(property === 'hoursSlept') {
      $('.sleep-week-display').append(`<li> On ${day.date} you slept ${day[property]} hours. </li>`)
    }
    else {
      $('.sleep-week-quality-display').append(`<li> On ${day.date} your sleep quality was ${day[property]}. </li>`)
    }
  })
    
}



const displayLatestWeeksStats = (activity) => {
  let endDate = dateTodayString();
  let startDate = startTodayString();
}

$(".sleep-btn").click(function() {
  $(".sleep-week-display").toggle();
  $(".sleep-week-quality-display").toggle();
  $(".sleep-info").toggle();
});

$(".sleep-btn").click(function() {
  $(".hydration-week-display").hide();
  $(".hydration-info").hide();
  $(".activity-week-display").hide();
  $(".profile-info").hide();
});

$(".hydration-btn").click(function() {
  $(".sleep-week-display").hide();
  $(".sleep-week-quality-display").hide();
  $(".sleep-info").hide();
  $(".activity-week-display").hide();
  $(".profile-info").hide();
});

$(".hydration-btn").click(function() {
  $(".hydration-week-display").toggle();
  $(".hydration-info").toggle();
});

$(".activity-btn").click(function() {
  $(".activity-week-display").toggle();
});

$(".activity-btn").click(function() {
  $(".sleep-week-display").hide();
  $(".sleep-week-quality-display").hide();
  $(".sleep-info").hide();
  $(".hydration-week-display").hide();
  $(".hydration-info").hide();
  $(".profile-info").hide();
});

$(".profile-btn").click(function() {
  $(".profile-info").toggle();
});

$(".profile-btn").click(function() {
  $(".sleep-week-display").hide();
  $(".sleep-week-quality-display").hide();
  $(".sleep-info").hide();
  $(".hydration-week-display").hide();
  $(".hydration-info").hide();
  $(".activity-week-display").hide();
});




