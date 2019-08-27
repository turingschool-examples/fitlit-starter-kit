// const data = require('../data/users.js');
// Math.floor(Math.random() * (50 - 1 + 1)) +1;
// const uniqueUserId = uniqueUserIndex + 1;
// const currentUser = userRepo.data.find(function(user) {
//   return user.id === uniqueUserIndex
// })
const uniqueUserId = 1;
const userRepo = new UserRepository(userData);

const currentUser = userRepo.data.find(user => user.id === uniqueUserId)
const user = new User(currentUser);
const hydrationRepo = new Hydration(hydrationData);
const currentUserHydration = hydrationRepo.waterData.filter(user => user.userID === uniqueUserId);
const sleepRepo = new Sleep(sleepData);
const currentUserSleep = sleepRepo.sleepData.filter(user => user.userID === uniqueUserId)

const activityRepo = new Activity(activityData);
const currentUserActivity = activityRepo.moveData.filter(user => user.userID === uniqueUserId)


$('.user_card-name-span').text(user.getUserFirstName(uniqueUserId));
$('.step_goal-user-span').text(`${user.dailyStepGoal}`);
$('.step_goal-all-average-span').text(userRepo.averageStepGoal());
$('.main_daily-water-span').text(hydrationRepo.dailyHydration(uniqueUserId, findToday()));
$('.main_weekly-water-span').text(displayWeek());

$('.main_daily-sleep-span').text(sleepRepo.getHoursForDay(uniqueUserId, findToday()));
$('.main_quality-sleep-span').text(sleepRepo.getQualityForDay(uniqueUserId, findToday()));

$('.main_alltime-sleep-span').text(sleepRepo.getAverageSleepQuality(uniqueUserId));

$('.main_weekly-sleep-hours-span').text(sleepRepo.getUserHoursWeekAverage(uniqueUserId, findToday()));

$('.main_weeekly-sleep-quality-span').text(sleepRepo.getUserQualityWeekAverage(uniqueUserId, findToday()));

$('.main_weeekly-sleep-quality-span').text(sleepRepo.getUserQualityWeekAverage(uniqueUserId, findToday()));

$('.main_daily-steps-span').text(activityRepo.getStepsToday(uniqueUserId, findToday()));

$('.main_daily-minutes-active-span').text(activityRepo.getMinutesActive(uniqueUserId, findToday()));

// $('.').text(activityRepo.getMilesWalked(uniqueUserId, findToday()));




function findToday() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = `${yyyy}/${mm}/${dd}`;
    return today;
}

function displayWeek() {
    return display =hydrationRepo.weeklyHydration(uniqueUserId, findToday());
}



// .forEach((index) => {
    // console.log(hydrationRepo[index].numOunces);
    // return hydrationRepo[index].numOunces}));