//Generate random user 
const uniqueUserIndex = Math.floor(Math.random() * (50 - 1 + 1)) + 1;

//Repo variables
const userRepo = new UserRepo(userData);
const sleepRepo = new SleepRepo(sleepData);
const activityRepo = new ActivityRepo(activityData);

//Individual Class Repos
const user = new User(userData[uniqueUserIndex]);
const hydration = new Hydration(hydrationData, user.id);
const sleep = new Sleep(sleepData, user.id);
const activity = new Activity(activityData, user);

//Date
const date = activityData[0].date;
const dateObject = new Date(date);
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
const formattedDate = dateObject.toLocaleString('en', options)


//User Section
$('.username').text(`${user.returnUserName()}`)

//Date Section
$('.date').text(`${formattedDate}`);

//Hydration
$('.water-consumed').text(`Daily Water Consumption: ${hydration.returnDailyFluidOunces(date)}`);
$('.water-consumed-week').text(`Weekly Water Consumption: ${hydration.returnWeeklyNumOunces()}`);

//Sleep
$('.hours-slept-day').text(`Hours Slept Last Night: ${sleep.returnSleepHours(date)}`);
$('.hours-slept-week').text(`Hours Slept Last Week: ${sleep.returnWeekOfSleepHours(1)}`);
$('.hours-slept-all-time').text(`Hours Slept On Average: ${sleep.returnAvgSleepHours()}`);
$('.quality-sleep-day').text(`Quality of Sleep Last Night: ${sleep.returnSleepQuality(date)}`);
$('.quality-sleep-week').text(`Quality of Sleep Last Week: ${sleep.returnWeekOfSleepQuality(1)}`);
$('.quality-sleep-all-time').text(`Quality of Sleep On Average: ${sleep.returnAvgSleepQuality()}`);

//Activity Section
$('.user-step-goal').text(`Daily Step Goal: ${user.dailyStepGoal}`);
$('.average-step-goal').text(`Average Step Goal: ${userRepo.returnAverageStepGoal()}`);
$('.number-of-steps-day').text(`Daily Steps: ${activity.returnNumStepsDay("2019/06/17")}`);
$('.number-of-minutes-active-day').text(`Daily Minutes Active: ${activity.returnMinutesActive(date)}`);
$('.distance-of-miles-day').text(`Daily Miles Walked: ${activity.returnMilesWalked()}`);
$('.number-of-steps-week').text(`Weekly Number Of Steps: ${activity.returnAverageStepsForWeek()}`);