let welcomeDisplay = document.querySelector('.display-name');
let userFullName = document.querySelector('.full-name');
let userAddress = document.querySelector('.address');
let userEmail = document.querySelector('.email');
let userStrideLength = document.querySelector('.stride-length');
let userStepGoal = document.querySelector('.daily-step-goal');
let allUsersAvgStepGoal = document.querySelector('.all-users-step-goal-average');
let userAverageOunceIntakeAllTime = document.querySelector('.average-fluid-ounces-all-time');
let currentUserDate = document.querySelector('.current-date');
let hoursSlept = document.querySelector('.hours-slept-day');
let qualitySlept = document.querySelector('.quality-slept-day');
let weeklySleepHours = document.querySelector('.sleep-hours-for-week');
let weeklySleepQuality = document.querySelector('.sleep-quality-for-week');
let averageSleepHours = document.querySelector('.average-sleep-hours');
let averageSleepQuality = document.querySelector('.average-sleep-quality');
let userOunceIntakeOnDay = document.querySelector('.fluid-ounces-consumed-on-day');
let userWeeklyOunceIntake = document.querySelector('.fluid-ounces-one-week');
let totalStepsOfCurrentDay = document.querySelector('.total-steps-current-day');
let flightsOfStairsOfCurrentDay = document.querySelector('.flights-of-stairs-current-day');
let minutesActiveOfCurrentDay = document.querySelector('.minutes-active-current-day');
let milesWalkedOfCurrentDay = document.querySelector('.miles-walked-current-day');
let allUserAverageStepsOfCurrentDay = document.querySelector('.all-user-average-steps-by-date');
let allUserAverageMinutesActiveOfCurrentDay = document.querySelector('.all-user-average-minutes-active-by-date');
let allUserAverageFlightStairsOfCurrentDay = document.querySelector('.all-user-average-flight-of-stairs-by-date');
let userWeeklyActivityInfo = document.querySelector('.weekly-activity-info');

window.onload = function() {
  const usersRepository = new UsersRepository(getRandomNumber());
  const userInfo = usersRepository.getUserDataById(userData);
  const user = new User(userInfo);
  const sleep = new Sleep(usersRepository, sleepData);
  const hydration = new Hydration(usersRepository, hydrationData);
  const activity = new Activity(usersRepository, activityData);
  const userDateRange = ["2019/06/16","2019/06/17","2019/06/18","2019/06/19","2019/06/20","2019/06/21","2019/06/22"];
  const currentDate = '2019/06/22';

  welcomeDisplay.innerText = `Welcome, ${user.returnUserFirstName()}!`;
  userFullName.innerText = `Full Name: ${user.name}`;
  userAddress.innerText = `Address: ${user.address}`;
  userEmail.innerText = `Email: ${user.email}`;
  userStrideLength.innerText = `Stride Length: ${user.strideLength}`;
  userStepGoal.innerText = `Your Daily Step Goal: ${user.dailyStepGoal}`;
  allUsersAvgStepGoal.innerText = `Average User's Step Goal: ${usersRepository.calculateAverageStepGoal(userData)}`;

  // hydration section
  userAverageOunceIntakeAllTime.innerText = `Your Average fl oz Intake: ${hydration.calculateAverageFluidIntakeForUser()}`;
  currentUserDate.innerText = `Today's Date: ${currentDate}`;
  userOunceIntakeOnDay.innerText = `Today's fl oz Intake: ${hydration.calculateFluidIntakeForDay(currentDate)}`;

  hoursSlept.innerText = `Hours Slept Today: ${sleep.findSleepTimeByDate(currentDate)}`;
  qualitySlept.innerText = `Quality of Sleep Today: ${sleep.findSleepQualityByDate(currentDate)}`;
  averageSleepHours.innerText = `Your Average Overall Hours Slept: ${sleep.calculateAverageSleepTimeOverall()}`;
  averageSleepQuality.innerText = `Your Average Overall Sleep Quality: ${sleep.calculateAverageSleepQualityOverall()}`;
  let userWeeklySleepHours = sleep.findAverageSleepHourByWeek(userDateRange);
  weeklySleepHours.innerHTML = sleepWeekHours(userWeeklySleepHours);
  let userWeeklySleepQuality = sleep.findAverageSleepQualityByWeek(userDateRange);
  weeklySleepQuality.innerHTML = sleepWeekQuality(userWeeklySleepQuality);


  let userIntakeForWeek = hydration.calculateDailyIntakeForWeek(userDateRange);
  userWeeklyOunceIntake.innerHTML = hydrationWeek(userIntakeForWeek);

  // activity section
  let currentUserActivityData = activity.findUserActivityDataByDate(currentDate);
  totalStepsOfCurrentDay.innerText = currentUserActivityData.numSteps;
  flightsOfStairsOfCurrentDay.innerText = currentUserActivityData.flightsOfStairs;
  minutesActiveOfCurrentDay.innerText = activity.findMinutesActiveByDay(currentDate);
  milesWalkedOfCurrentDay.innerText = activity.findMilesWalkedByDay(userInfo, currentDate);
  allUserAverageStepsOfCurrentDay.innerText = `Average Steps Taken: ${activity.findAllUserAverageStepsTakeForSpecificDate(currentDate)}`;
  allUserAverageMinutesActiveOfCurrentDay.innerText = `Average Minutes Active: ${activity.findAllUserAverageMinutesActiveForSpecificDate(currentDate)}`;
  allUserAverageFlightStairsOfCurrentDay.innerText = `Average Flight of Stairs Climb: ${activity.findAllUserAverageStairsClimbedForSpecificDate(currentDate)}`;

  let currentWeekUserActivityData = activity.findUserDailyActivityDataForWeek(userDateRange);
  userWeeklyActivityInfo.innerHTML = activityWeek(currentWeekUserActivityData);

}

function sleepWeekHours(userWeekSleep) {
  return userWeekSleep.reduce((acc, el) => {
    acc += `<div>Date: ${el.date}</div>
            <div>Hours of Sleep: ${el.sleepHours}</div>`
    return acc;
  }, ``)
}

function sleepWeekQuality(userWeekSleepQuality) {
  return userWeekSleepQuality.reduce((acc, el) => {
    acc += `<div>Date: ${el.date}</div>
            <div>Quality of Sleep: ${el.sleepQuality}</div>`
    return acc;
  }, ``)
}

function hydrationWeek(userWeekIntake) {
  return userWeekIntake.reduce((acc, el) => {
    acc += `<div>Date: ${el.date}</div>
            <div>Intake: ${el.intake}</div>`
    return acc;
  }, ``)
}

function activityWeek(currentWeekUserActivityData) {
  return currentWeekUserActivityData.reduce((acc, el) => {
    acc += `<div>Date: ${el.date}</div>
            <div>Number of Steps: ${el.numSteps}</div>
            <div>Minutes Active: ${el.minutesActive}</div>
            <div>Flights of Stairs: ${el.flightsOfStairs}</div>`
    return acc;
  }, ``)
}

function getRandomNumber() {
 randomNumber = Math.floor(Math.random() * (50 - 1) + 1);
 return randomNumber;
}
