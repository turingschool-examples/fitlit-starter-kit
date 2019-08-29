function getRandomNumber() {
  min = Math.ceil(1);
  max = Math.floor(50);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let userNum = getRandomNumber();

const allUsers = new UserRepository(userData);
let person = allUsers.getUser(userNum);
let user = new User(person);
const allUsersHydration = new Hydration(hydrationData, person);
const allUsersSleep = new Sleep(sleepData, person);
const allUsersActivity = new Activity(activityData, person);
const allUsersActivityRepo = new ActivityRepository(activityData);

$('.header__span').text(user.returnFirstName());
$("#step-goal").append(user.dailyStepGoal);
$('#avg-steps').append(allUsers.returnAvgStepGoal());
$('#water-consumption').append(allUsersHydration.getDailyOz('2019/06/20', userNum));
$('#hours-slept').append(allUsersSleep.getHoursSleptPerDay('2019/06/20', userNum));
$('#sleep-quality').append(allUsersSleep.getSleepQualPerDay('2019/06/20', userNum));
$('#sleep-quality-alltime').append(allUsersSleep.getAvgSleepQual(userNum));
$('#hours-slept-alltime').append(allUsersSleep.getAvgSleepHours(userNum));
$('#step-count-today').append(allUsersActivity.returnStepsDay('2019/06/20', userNum));
$('#users-step-count-today').append(allUsersActivityRepo.returnAvgSteps('2019/06/20'));
$('#min-active-today').append(allUsersActivity.returnActiveDay('2019/06/20', userNum));
$('#users-min-active-today').append(allUsersActivityRepo.returnAvgMinutesActive('2019/06/20'));
$('#stairs-today').append(allUsersActivity.returnStairsDay('2019/06/20', userNum));
$('#users-stairs-today').append(allUsersActivityRepo.returnAvgStairs('2019/06/20'));
$('#miles-today').append(allUsersActivity.calculateMilesWalked('2019/06/20', userNum));

function appendWaterWeekToDOM() {
  let weekArray = allUsersHydration.getWeekIntake('2019/06/20', userNum);
  let weekOunces = weekArray.map((day) => {
    return day.numOunces;
  })
  weekOunces.forEach((num) => {
    $('#water-consumption-week').append(`<li>${num}</li>`);
  })
}
appendWaterWeekToDOM()

function appendHoursSleptWeekToDOM() {
  let weekArray = allUsersSleep.getHoursSleptPerDayPerWeek('2019/06/20', userNum);
  let weekHours = weekArray.map((day) => {
    return day;
  })
  weekHours.forEach((num) => {
    $('#hours-slept-week').append(`<li>${num}</li>`);
  })
}
appendHoursSleptWeekToDOM()

function appendSleepQualityWeekToDOM() {
  let weekArray = allUsersSleep.getSleepQualPerDayPerWeek('2019/06/20', userNum);
  let weekHours = weekArray.map((day) => {
    return day;
  })
  weekHours.forEach((num) => {
    $('#sleep-quality-week').append(`<li>${num}</li>`);
  })
}
appendSleepQualityWeekToDOM()

function appendStepCountWeekToDOM() {
  let weekArray = allUsersActivity.returnWeekStep('2019/06/21', userNum);
  let weekHours = weekArray.map((day) => {
    return day;
  })
  weekHours.forEach((num) => {
    $('#steps-week').append(`<li>${num}</li>`);
  })
}
appendStepCountWeekToDOM()

function appendFlightOfStairsClimbedWeekToDOM() {
  let weekArray = allUsersActivity.returnWeekStairs('2019/06/21', userNum);
  let weekHours = weekArray.map((day) => {
    return day;
  })
  weekHours.forEach((num) => {
    $('#flights-of-stairs-week').append(`<li>${num}</li>`);
  })
}
appendFlightOfStairsClimbedWeekToDOM()

function appendActiveMinsWeekToDOM() {
  let weekArray = allUsersActivity.returnWeekMin('2019/06/21', userNum);
  let weekActive = weekArray.map((day) => {
    return day;
  })

  weekActive.forEach((num) => {
    $('#mins-active-week').append(`<li>${num}</li>`);
  })
}
appendActiveMinsWeekToDOM()
