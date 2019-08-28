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

$('.header__span').text(user.returnFirstName());
$("#step-goal").append(user.dailyStepGoal);
$('#avg-steps').append(allUsers.returnAvgStepGoal());
$('#water-consumption').append(allUsersHydration.getDailyOz('2019/06/20'));
$('#hours-slept').append(allUsersSleep.getHoursSleptPerDay('2019/06/20', userNum));
$('#sleep-quality').append(allUsersSleep.getSleepQualPerDay('2019/06/20'));
$('#sleep-quality-alltime').append(allUsersSleep.getAvgSleepQual());
$('#hours-slept-alltime').append(allUsersSleep.getAvgSleepHours(userNum))

function appendWaterWeekToDOM() {
  var weekArray = allUsersHydration.getWeekIntake('2019/06/20', person.id);
  var weekOunces = weekArray.map((day) => {
    return day.numOunces;
  })
  weekOunces.forEach((num) => {
    $('#water-consumption-week').append(`<li>${num}</li>`);
  })
}
appendWaterWeekToDOM()

function appendHoursSleptWeekToDOM() {
  var weekArray = allUsersSleep.getHoursSleptPerDayPerWeek('2019/06/20');
  var weekHours = weekArray.map((day) => {
    return day;
  })
  weekHours.forEach((num) => {
    $('#hours-slept-week').append(`<li>${num}</li>`);
  })
}
appendHoursSleptWeekToDOM()

function appendSleepQualityWeekToDOM() {
  var weekArray = allUsersSleep.getSleepQualPerDayPerWeek('2019/06/20');
  var weekHours = weekArray.map((day) => {
    return day;
  })
  weekHours.forEach((num) => {
    $('#sleep-quality-week').append(`<li>${num}</li>`);
  })
}
appendSleepQualityWeekToDOM()
