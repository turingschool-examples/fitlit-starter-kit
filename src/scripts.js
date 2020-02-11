let userRepo = new UserRepository(userData);
let hydration = new Hydration(hydrationData);
let sleep = new Sleep(sleepData)

const userName = document.querySelector('.user-name');
const userAddress = document.querySelector('.user-address');
const userEmail = document.querySelector('.user-email');
const userStride = document.querySelector('.user-stride-length');
const userStepGoal = document.querySelector('.user-step-goal');
const userGoalAverage = document.querySelector('.step-goal-average');
const friendsList = document.querySelector('.friends-list');
const stepComparison = document.querySelector('.step-goal-comparison');
const dayHydrationBox = document.querySelector('.h-day-info');
const sleepHrCurrentDay = document.querySelector('.sleep-hours-current-day');
const sleepHrDay6 = document.querySelector('.S-Hr-6');
const sleepHrDay5 = document.querySelector('.S-Hr-5');
const sleepHrDay4 = document.querySelector('.S-Hr-4');
const sleepHrDay3 = document.querySelector('.S-Hr-3');
const sleepHrDay2 = document.querySelector('.S-Hr-2');
const sleepHrDay1 = document.querySelector('.S-Hr-1');
const sleepQualCurrentDay = document.querySelector('.sleep-quality-current-day');
const sleepQualDay6 = document.querySelector('.S-Qual-6');
const sleepQualDay5 = document.querySelector('.S-Qual-5');
const sleepQualDay4 = document.querySelector('.S-Qual-4');
const sleepQualDay3 = document.querySelector('.S-Qual-3');
const sleepQualDay2 = document.querySelector('.S-Qual-2');
const sleepQualDay1 = document.querySelector('.S-Qual-1');
const overallSleepHoursBox = document.querySelector('.sleep-hours-all-time');
const overallSleepQualityBox = document.querySelector('.sleep-quality-all-time');
const currentDate = document.querySelector('.current-date');
const hydrationCurrentDay = document.querySelector('.hydration-current-day');
const hydrationDay6 = document.querySelector('.H-day-6');
const hydrationDay5 = document.querySelector('.H-day-5');
const hydrationDay4 = document.querySelector('.H-day-4');
const hydrationDay3 = document.querySelector('.H-day-3');
const hydrationDay2 = document.querySelector('.H-day-2');
const hydrationDay1 = document.querySelector('.H-day-1');
const daySleepHours = document.querySelector('.current-sleep-hours');
const daySleepQuality = document.querySelector('.current-sleep-quality');

function populateUserInfo(id, date) {
  let user = new User(userRepo.getUserData(id));
  userName.innerText = user.name;
  userAddress.innerHTML = `<span>Address:</span> ${user.address}`;
  userEmail.innerHTML = `<span>Email:</span> ${user.email}`;
  userStride.innerHTML = `<span>Stride Length:</span> ${user.strideLength}`;
  userStepGoal.innerHTML = `<span>Daily Step Goal:</span> ${user.dailyStepGoal}`;
  userGoalAverage.innerHTML = `<span>Average Step Goal:</span> ${userRepo.getStepGoalAverage()}`;
  stepComparison.innerHTML  = (user.dailyStepGoal > userRepo.getStepGoalAverage()) ?
    `<span>Goal Comparison:</span> You're step goal is ${user.dailyStepGoal - userRepo.getStepGoalAverage()} steps above the average` :
    `<span>Goal Comparison:</span> You're step goal is ${userRepo.getStepGoalAverage() - user.dailyStepGoal} steps below the average`;
  friendsList.innerHTML = friendsList.innerHTML = user.friends.map(friendID => userRepo.getUserData(friendID).name);
  currentDate.innerText = date;

}

function populateHydrationInfo(id, date) {
  dayHydrationBox.innerHTML = `${hydration.getDay(id, date)} oz. of water consumed`;
  let weekDataObjs = hydration.getWeek(id, date);
  let weekNumbers = weekDataObjs.map(obj => obj.numOunces);
  hydrationCurrentDay.innerHTML = `<span>${weekDataObjs[6].date}:</span> ${weekNumbers[6]} oz.`;
  hydrationDay6.innerHTML = `<span>${weekDataObjs[5].date}:</span> ${weekNumbers[5]} oz.`;
  hydrationDay5.innerHTML = `<span>${weekDataObjs[4].date}:</span> ${weekNumbers[4]} oz.`;
  hydrationDay4.innerHTML = `<span>${weekDataObjs[3].date}:</span> ${weekNumbers[3]} oz.`;
  hydrationDay3.innerHTML = `<span>${weekDataObjs[2].date}:</span> ${weekNumbers[2]} oz.`;
  hydrationDay2.innerHTML = `<span>${weekDataObjs[1].date}:</span> ${weekNumbers[1]} oz.`;
  hydrationDay1.innerHTML = `<span>${weekDataObjs[0].date}:</span> ${weekNumbers[0]} oz.`;
}

function populateSleepInfo(id, date) {
  let weekDataObjs = sleep.getWeekData(id, date);
  daySleepHours.innerText = `You slept ${sleep.getDayHours(id, date)} hours`;
  daySleepQuality.innerText = `Your sleep quality was graded at ${sleep.getDayQuality(id, date)}`
  sleepHrCurrentDay.innerHTML = `<span>${weekDataObjs[6].date}</span>: ${weekDataObjs[6].hoursSlept} hours`;
  sleepHrDay6.innerHTML = `<span>${weekDataObjs[5].date}</span>: ${weekDataObjs[5].hoursSlept} hours`;
  sleepHrDay5.innerHTML = `<span>${weekDataObjs[4].date}</span>: ${weekDataObjs[4].hoursSlept} hours`;
  sleepHrDay4.innerHTML = `<span>${weekDataObjs[3].date}</span>: ${weekDataObjs[3].hoursSlept} hours`;
  sleepHrDay3.innerHTML = `<span>${weekDataObjs[2].date}</span>: ${weekDataObjs[2].hoursSlept} hours`;
  sleepHrDay2.innerHTML = `<span>${weekDataObjs[1].date}</span>: ${weekDataObjs[1].hoursSlept} hours`;
  sleepHrDay1.innerHTML = `<span>${weekDataObjs[0].date}</span>: ${weekDataObjs[0].hoursSlept} hours`;
  sleepQualCurrentDay.innerHTML = `${weekDataObjs[6].sleepQuality} quality grade`;
  sleepQualDay6.innerHTML = `${weekDataObjs[5].sleepQuality} quality grade`;
  sleepQualDay5.innerHTML = `${weekDataObjs[4].sleepQuality} quality grade`;
  sleepQualDay4.innerHTML = `${weekDataObjs[3].sleepQuality} quality grade`;
  sleepQualDay3.innerHTML = `${weekDataObjs[2].sleepQuality} quality grade`;
  sleepQualDay2.innerHTML = `${weekDataObjs[1].sleepQuality} quality grade`;
  sleepQualDay1.innerHTML = `${weekDataObjs[0].sleepQuality} quality grade`;
  overallSleepHoursBox.innerText = `Your average hours slept per day is ${sleep.calculateAverageHours(id)} hours`;
  overallSleepQualityBox.innerText = `Your average sleep quality per day is graded at ${sleep.calculateAverageQuality(id)}`
}

populateUserInfo(27, '2019/07/25');
populateHydrationInfo(27, '2019/07/25');
populateSleepInfo(27, '2019/07/25');
