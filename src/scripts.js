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
const dayHydrationBox = document.querySelector('.hydration-day');
const weekHydrationBox = document.querySelector('.hydration-week');
const daySleepBox = document.querySelector('.sleep-day');
const weekSleepHoursBox = document.querySelector('.sleep-hours-week');
const weekSleepQualityBox = document.querySelector('.sleep-quality-week');
const overallSleepHoursBox = document.querySelector('.sleep-hours-all-time');
const overallSleepQualityBox = document.querySelector('.sleep-quality-all-time')


function populateUserInfo(id) {
  let user = new User(userRepo.getUserData(id));
  userName.innerText = user.name;
  userAddress.innerText = user.address;
  userEmail.innerText = user.email;
  userStride.innerText = user.strideLength;
  userStepGoal.innerText = user.dailyStepGoal;
  userGoalAverage.innerText = userRepo.getStepGoalAverage();
  stepComparison.innerText  = (user.dailyStepGoal > userRepo.getStepGoalAverage()) ? 
    `You're step goal is ${user.dailyStepGoal - userRepo.getStepGoalAverage()} steps above the average` :
    `You're step goal is ${userRepo.getStepGoalAverage() - user.dailyStepGoal} steps below the average`
  friendsList.innerHTML = friendsList.innerHTML = user.friends.map(friendID => userRepo.getUserData(friendID).name)
}

function populateHydrationInfo(id, date) {
  dayHydrationBox.innerHTML = hydration.getDay(id, date);
  let weekData = hydration.getWeek(id, date);
  weekHydrationBox.innerHTML = weekData.map(obj => obj.numOunces)
}

function populateSleepInfo(id, date) {
  daySleepBox.innerHTML = sleep.getDayHours(id, date);
  weekSleepHoursBox.innerText = sleep.getHoursByWeek(id, date);
  weekSleepQualityBox.innerText = sleep.getQualityByWeek(id, date);
  overallSleepHoursBox.innerText = sleep.calculateAverageHours(id);
  overallSleepQualityBox.innerText = sleep.calculateAverageQuality(id)
}

populateUserInfo(42);
populateHydrationInfo(42, '2019/08/02');
populateSleepInfo(42, '2019/08/02');
