const currentUserRepo = new UserRepo(userData);
const currentUser = new User(currentUserRepo.data[49]);
const currentHydrationRepo = new HydrationRepo(hydrationData);
const currentHydration = new Hydration(currentHydrationRepo.data[4999]);
const currentSleepRepo = new SleepRepo(sleepData);
const currentSleep = new Sleep(currentSleepRepo.data[4999]);
const currentActivityRepo = new ActivityRepo(activityData, userData);
const currentActivity = new Activity(currentActivityRepo.activityData[4999]);
const firstNameDisplay = document.querySelector('.first-name-section');
const fullNameDisplay = document.querySelector('.full-name');
const addressDisplay = document.querySelector('.address');
const emailDisplay = document.querySelector('.email');
const strideLengthDisplay = document.querySelector('.stride');
const dailyStepGoal = document.querySelector('.daily-step-goal');
const friendsList = document.querySelector('.friends');
const averageStepGoal = document.querySelector('.average-step-goal');
const waterConsumed = document.querySelector('.water-consumed');
const hydrationHeading = document.querySelector('.hydration-data');
const hydrationDayButton = document.querySelector('.hydration-day');
const hydrationWeekButton = document.querySelector('.hydration-week');
const sleepDurationDisplay = document.querySelector('.sleep-duration');
const sleepQualityDisplay = document.querySelector('.sleep-quality');
const sleepAvgDisplay = document.querySelector('.sleep-average')
const sleepWeekButton = document.querySelector('.sleep-week');
const sleepDayButton = document.querySelector('.sleep-day');
const sleepAvgButton = document.querySelector('.sleep-avg');
const todaysSteps = document.querySelector('.steps');
const todaysMilesTraveled = document.querySelector('.miles');
const todaysActivityTime = document.querySelector('.activity');
const activityDayButton = document.querySelector('.activity-day');
const activityWeekButton = document.querySelector('.activity-week');
const activityTrends = document.querySelector('.trends');
const todaysDate = document.querySelector('.todays-date');

const hydrationWeekView = (id, date) => {
  waterConsumed.innerText = `Water Consumed This Past Week - ${currentHydrationRepo.returnWaterConsumed(id, date)}`;
}

const hydrationDayView = () => {
  waterConsumed.innerText = `Water Consumed Today - ${currentHydration.numOunces} ounces!`;
}

const sleepWeekView = (id, date) => {
  sleepDurationDisplay.innerText = `Daily Hours Slept: ${currentSleepRepo.returnWeekOfDailyHoursSlept(id, date)}`
  sleepQualityDisplay.innerText = `Daily Sleep Quality: ${currentSleepRepo.returnWeekOfDailySleepQuality(id, date)}`
}

const sleepDayView = () => {
  sleepDurationDisplay.innerText = `Hours Slept: ${currentSleep.returnHoursSlept()}`;
  sleepQualityDisplay.innerText = `Sleep Quality: ${currentSleep.returnSleepQuality()}`;
}

const displaySleepAverages = (id) => {
  const truncatedSleepDurationAverage = parseFloat(currentSleepRepo.returnAverageHoursSleptPerDay(id).toFixed(2));
  const truncatedSleepQualityAverage = parseFloat(currentSleepRepo.returnOverallAverageSleepQuality(id).toFixed(2));
  sleepDurationDisplay.innerText = `Average Hours Slept: ${truncatedSleepDurationAverage} hours`;
  sleepQualityDisplay.innerText = `Average Sleep Quality: ${truncatedSleepQualityAverage}`;
}

const displayAllUserData = () => {
  if ( firstNameDisplay.innerText != `Hello ${currentUser.provideUsersFirstName()}!`) {
    todaysSteps.innerText = `Steps Today: ${currentActivity.steps}`;
    todaysMilesTraveled.innerText = `Miles Traveled: ${currentActivityRepo.calculateMiles(currentUser.id, currentActivity.date)}`;
    todaysActivityTime.innerText = `Today's Activity: ${currentActivity.returnMinutes()} minutes.`;
    firstNameDisplay.innerText = `Hello ${currentUser.provideUsersFirstName()}!`;
    fullNameDisplay.innerText += `${currentUser.name}`;
    addressDisplay.innerText += `${currentUser.address}`;
    emailDisplay.innerText += `${currentUser.email}`;
    strideLengthDisplay.innerText += `${currentUser.strideLength}`;
    dailyStepGoal.innerText += `${currentUser.dailyStepGoal}`;
    averageStepGoal.innerText += `        ${currentUserRepo.userStepGoalAverage()}.`;
    waterConsumed.innerText = `Water Consumed Today -   ${currentHydration.numOunces} ounces!`;
    sleepDurationDisplay.innerText = `Hours Slept: ${currentSleep.returnHoursSlept()}`;
    sleepQualityDisplay.innerText = `Sleep Quality: ${currentSleep.returnSleepQuality()}`;
    todaysDate.innerText = `Today is ${currentActivity.date}`;
    displayFriendsByName();
    }
  };

function displayFriendsByName() {
  currentUser.friends.forEach(id => {
  friendsList.innerText += ` ${userData[id - 1].name}. `;
  });
};

sleepAvgButton.addEventListener('click', () => {
  displaySleepAverages(currentUser.id);
})

sleepDayButton.addEventListener('click', () => {
  sleepDayView();
})

sleepWeekButton.addEventListener('click', () => {
  sleepWeekView(currentUser.id, currentSleep.date);
})

hydrationWeekButton.addEventListener('click', () => {
  hydrationWeekView(currentUser.id, currentHydration.date);
});

hydrationDayButton.addEventListener('click', () => {
  hydrationDayView();
});

activityWeekButton.addEventListener('click', function () {
  todaysActivityTime.innerText = `Average Activity: ${
    currentActivityRepo.calculateAvgMinutesActive(currentUser.id, currentActivity.date)} minutes.`;
  todaysSteps.innerText = `Average Steps: ${
    currentActivityRepo.calculateAvgSteps(currentUser.id, currentActivity.date)}`;
  todaysMilesTraveled.innerText = `Average Flights Climbed: ${
    currentActivityRepo.calculateAvgStairs(currentUser.id, currentActivity.date)}`;
});

activityTrends.addEventListener('click', function () {

})
