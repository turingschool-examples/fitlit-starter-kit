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

$('.header__span').text(user.returnFirstName());
$("#step-goal").append(user.dailyStepGoal);
$('#avg-steps').append(allUsers.returnAvgStepGoal());
$('#water-consumption').append(allUsersHydration.getDailyOz('2019/06/20', userNum));
$('#hours-slept').append(allUsersSleep.getHoursSleptPerDay('2019/06/20', userNum));
$('#sleep-quality').append(allUsersSleep.getSleepQualPerDay('2019/06/20', userNum));
$('#sleep-quality-alltime').append(allUsersSleep.getAvgSleepQual(userNum));
$('#hours-slept-alltime').append(allUsersSleep.getAvgSleepHours(userNum));
$('#step-count-today').append(allUsersActivity.returnStepsDay('2019/06/20', userNum));
$('#min-active-today').append(allUsersActivity.returnActiveDay('2019/06/20', userNum));

function appendWaterWeekToDOM() {
  var weekArray = allUsersHydration.getWeekIntake('2019/06/20', userNum);
  var weekOunces = weekArray.map((day) => {
    return day.numOunces;
  })
  weekOunces.forEach((num) => {
    $('#water-consumption-week').append(`<li>${num}</li>`);
  })
}
appendWaterWeekToDOM()

function appendHoursSleptWeekToDOM() {
  var weekArray = allUsersSleep.getHoursSleptPerDayPerWeek('2019/06/20', userNum);
  var weekHours = weekArray.map((day) => {
    return day;
  })
  weekHours.forEach((num) => {
    $('#hours-slept-week').append(`<li>${num}</li>`);
  })
}
appendHoursSleptWeekToDOM()

function appendSleepQualityWeekToDOM() {
  var weekArray = allUsersSleep.getSleepQualPerDayPerWeek('2019/06/20', userNum);
  var weekHours = weekArray.map((day) => {
    return day;
  })
  weekHours.forEach((num) => {
    $('#sleep-quality-week').append(`<li>${num}</li>`);
  })
}
appendSleepQualityWeekToDOM()
