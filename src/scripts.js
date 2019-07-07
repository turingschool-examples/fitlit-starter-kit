const uniqueUserIndex = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
const uniqueUserId = uniqueUserIndex + 1;



const userRepo = new UserRepo();
const user = new User(uniqueUserIndex);
const hydrationRepo = new HydrationRepo(uniqueUserId);
const sleepRepo = new SleepRepo(uniqueUserId);
const activityRepo = new ActivityRepo(uniqueUserId);

console.log('userRepo: ', userRepo);
console.log('user: ', user);
console.log('hydrationRepo: ', hydrationRepo);
console.log('sleepRepo: ', sleepRepo);
console.log('activityRepo: ', activityRepo);


// User Info
$('.nav__span--name').text(`${user.name}`)
$('.nav__span--address').text(`${user.address}`)
$('.nav__span--email').text(`${user.email}`)
$('.nav__span--stepgoal').text(`${user.dailyStepGoal}`)
$('.nav__span--comparison').text(`${user.dailyStepGoal}`)//this needs a function to call the average step goal for everyone

// Sleep Info
$('.sleep__span--hours').text(`${sleepRepo.users.findHoursSleptForSpecificDay("2019/06/15")}`); //make date dynamic
$('.sleep__span--quality').text(`${sleepRepo.users.findSleepQualityForSpecificDay("2019/06/15")}`);//make date dynamic
$('.sleep__span--weekHours').text(`${sleepRepo.users.findHoursSleptForWeek("2019/06/23")}`);//make date dynamic
$('.sleep__span--weekQuality').text(`${sleepRepo.users.findSleepQualityForWeek("2019/06/23")}`);//make date dynamic
$('.sleep__span--overallHours').text(`${sleepRepo.users.findAverageHoursSleptForUser()}`);
$('.sleep__span--overallQuality').text(`${sleepRepo.users.findAverageSleepQualityForUser()}`);

// Hydration Info
$('.hydro__span--today').text(`${hydrationRepo.findSpecificDayHydrationOunces(2, "2019/06/23")}`); //make date dynamic
$('.hydro__span--average').text(`${hydrationRepo.weeklyConsumptionAverage("2019/06/23")}`);
$('.hydro__span--week').text(`${hydrationRepo.returnHydrationValuesForWeek("2019/06/23")}`);









