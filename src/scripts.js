const currentUserRepo = new UserRepo(userData);
const currentUser = new User(currentUserRepo.data[0]);
const currentHydrationRepo = new HydrationRepo(hydrationData);
const currentHydration = new Hydration(currentHydrationRepo.data[1700]);
const currentSleepRepo = new SleepRepo(sleepData);
const currentSleep = new Sleep(currentSleepRepo.data[1700]);
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

const hydrationWeekView = (id, date) => {
  waterConsumed.innerText = `Water Consumed This Past Week  ${currentHydrationRepo.returnWaterConsumed(id, date)}`;
}

const hydrationDayView = () => {
  waterConsumed.innerText = `Water Consumed Today -     ${currentHydration.numOunces} ounces!`;
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
  sleepDurationDisplay.innerText = `Average Hours Slept: ${currentSleepRepo.returnAverageHoursSleptPerDay(id)} hours`;
  sleepQualityDisplay.innerText = `Average Sleep Quality: ${currentSleepRepo.returnOverallAverageSleepQuality(id)}`;
}

const displayAllUserData = () => {
  firstNameDisplay.innerText = `Hello ${currentUser.provideUsersFirstName()}!`
  fullNameDisplay.innerText += `${currentUser.name}`;
  addressDisplay.innerText += `${currentUser.address}`;
  emailDisplay.innerText += `${currentUser.email}`;
  strideLengthDisplay.innerText += `${currentUser.strideLength}`;
  dailyStepGoal.innerText += `${currentUser.dailyStepGoal}`;
  averageStepGoal.innerText += `        ${currentUserRepo.userStepGoalAverage()}.`;
  waterConsumed.innerText = `Water Consumed Today -   ${currentHydration.numOunces} ounces!`;
  sleepDurationDisplay.innerText = `Hours Slept: ${currentSleep.returnHoursSlept()}`;
  sleepQualityDisplay.innerText = `Sleep Quality: ${currentSleep.returnSleepQuality()}`;
  displayFriendsByName();
};

function displayFriendsByName() {
  currentUser.friends.forEach(id => {
  friendsList.innerText += ` ${userData[id - 1].name}. `;
  });
};

sleepAvgButton.addEventListener('click', function() {
  displaySleepAverages(currentUser.id);
})

sleepDayButton.addEventListener('click', function() {
  sleepDayView();
})

sleepWeekButton.addEventListener('click', function() {
  sleepWeekView(currentUser.id, currentSleep.date);
})

hydrationWeekButton.addEventListener('click', function() {
  hydrationWeekView(currentUser.id, currentHydration.date);
});

hydrationDayButton.addEventListener('click', function() {
  hydrationDayView();
});
