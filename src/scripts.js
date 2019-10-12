// INTANTIATING
let userRepository = new UserRepository();

userData.forEach(user => {
  user = new User(user);
  userRepository.users.push(user)
});

activityData.forEach(activity => {
  activity = new Activity(activity);
})

hydrationData.forEach(hydration => {
  hydration = new Hydration(hydration, userRepository);
})

// DATA TO CHANGE ON DOM
let user = userRepository.users[0];
let todayDate = "2019/09/22"
let headerName = document.querySelector('#header-name');
let stepsUserStepsToday = document.querySelector('#steps-user-steps-today');
let stepsInfoActiveMinutesToday = document.querySelector('#steps-info-active-minutes-today');
let stepsInfoMilesWalkedToday = document.querySelector('#steps-info-miles-walked-today');
let stepsInfoUserStepGoal = document.querySelector('#steps-info-user-step-goal');
// var stepsFriendActiveMinutesAverageToday = document.querySelector('#steps-friend-active-minutes-average-today');
// var stepsFriendStepsAverageToday = document.querySelector('#steps-friend-steps-average-today');
let stepsCalendarTotalActiveMinutesWeekly = document.querySelector('#steps-calendar-total-active-minutes-weekly');
let stepsCalendarTotalStepsWeekly = document.querySelector('#steps-calendar-total-steps-weekly');
let stepsFriendAverageStepGoal = document.querySelector('#steps-friend-average-step-goal');
let hydrationUserOuncesToday = document.querySelector('#hydration-user-ounces-today');
let dailyOz = document.querySelectorAll('.daily-oz');

//BUTTONS
let stepsInfoButton = document.querySelector('#steps-info-button');
let stepsFriendsButton = document.querySelector('#steps-friends-button');
let stepsCalendarButton = document.querySelector('#steps-calendar-button');
let hydrationInfoButton = document.querySelector('#hydration-info-button');
let hydrationFriendsButton = document.querySelector('#hydration-friends-button');
let hydrationCalendarButton = document.querySelector('#hydration-calendar-button');
let stairsInfoButton = document.querySelector('#stairs-info-button');
let stairsFriendsButton = document.querySelector('#stairs-friends-button');
let stairsCalendarButton = document.querySelector('#stairs-calendar-button');
let sleepInfoButton = document.querySelector('#sleep-info-button');
let sleepFriendsButton = document.querySelector('#sleep-friends-button');
let sleepCalendarButton = document.querySelector('#sleep-calendar-button');

// CARDS
let stepsMainCard = document.querySelector('#steps-main-card');
let stepsInfoCard = document.querySelector('#steps-info-card');
let stepsFriendsCard = document.querySelector('#steps-friends-card');
let stepsCalendarCard = document.querySelector('#steps-calendar-card');
let hydrationMainCard = document.querySelector('#hydration-main-card');
let hydrationInfoCard = document.querySelector('#hydration-info-card');
let hydrationFriendsCard = document.querySelector('#hydration-friends-card');
let hydrationCalendarCard = document.querySelector('#hydration-calendar-card');
let stairsMainCard = document.querySelector('#stairs-main-card');
let stairsInfoCard = document.querySelector('#stairs-info-card');
let stairsFriendsCard = document.querySelector('#stairs-friends-card');
let stairsCalendarCard = document.querySelector('#stairs-calendar-card');
let sleepMainCard = document.querySelector('#sleep-main-card');
let sleepInfoCard = document.querySelector('#sleep-info-card');
let sleepFriendsCard = document.querySelector('#sleep-friends-card');
let sleepCalendarCard = document.querySelector('#sleep-calendar-card');

// EVENT LISTENERS
stepsInfoButton.addEventListener('click', showStepsInfo);
stepsFriendsButton.addEventListener('click', showStepsFriends);
stepsCalendarButton.addEventListener('click', showStepsCalendar);
hydrationInfoButton.addEventListener('click', showHydrationInfo);
hydrationFriendsButton.addEventListener('click', showHydrationFriends);
hydrationCalendarButton.addEventListener('click', showHydrationCalendar);
stairsInfoButton.addEventListener('click', showStairsInfo);
stairsFriendsButton.addEventListener('click', showStairsFriends);
stairsCalendarButton.addEventListener('click', showStairsCalendar);
sleepInfoButton.addEventListener('click', showSleepInfo);
sleepFriendsButton.addEventListener('click', showSleepFriends);
sleepCalendarButton.addEventListener('click', showSleepCalendar);

// FLIPPING CARDS FUNCTIONS
function showStepsInfo() {
  stepsMainCard.classList.add('hide');
  stepsInfoCard.classList.remove('hide');
}

function showStepsFriends() {
  stepsMainCard.classList.add('hide');
  stepsFriendsCard.classList.remove('hide');
}

function showStepsCalendar() {
  stepsMainCard.classList.add('hide');
  stepsCalendarCard.classList.remove('hide');
}

function showHydrationInfo() {
  hydrationMainCard.classList.add('hide');
  hydrationInfoCard.classList.remove('hide');
}

function showHydrationFriends() {
  hydrationMainCard.classList.add('hide');
  hydrationFriendsCard.classList.remove('hide');
}

function showHydrationCalendar() {
  hydrationMainCard.classList.add('hide');
  hydrationCalendarCard.classList.remove('hide');
}

function showStairsInfo() {
  stairsMainCard.classList.add('hide');
  stairsInfoCard.classList.remove('hide');
}

function showStairsFriends() {
  stairsMainCard.classList.add('hide');
  stairsFriendsCard.classList.remove('hide');
}

function showStairsCalendar() {
  stairsMainCard.classList.add('hide');
  stairsCalendarCard.classList.remove('hide');
}

function showSleepInfo() {
  sleepMainCard.classList.add('hide');
  sleepInfoCard.classList.remove('hide');
}

function showSleepFriends() {
  sleepMainCard.classList.add('hide');
  sleepFriendsCard.classList.remove('hide');
}

function showSleepCalendar() {
  sleepMainCard.classList.add('hide');
  sleepCalendarCard.classList.remove('hide');
}





// DATA MANIPULATION
stepsUserStepsToday.innerText = activityData.find(activity => {
  return activity.userID === user.id && activity.date === todayDate;
}).numSteps;

headerName.innerText = `${user.getFirstName()}'S `;

stepsInfoUserStepGoal.innerText = `${user.dailyStepGoal}`;

hydrationUserOuncesToday.innerText = hydrationData.find(hydration => {
  return hydration.userID === user.id && hydration.date === todayDate;
}).numOunces;

let sortedHydrationDataByDate = user.ouncesRecord.sort((a, b) => {
  if (Object.keys(a)[0] > Object.keys(b)[0]) { //sorts by descending
    return -1;
  }
  if (Object.keys(a)[0] < Object.keys(b)[0]) {
    return 1;
  }
  return 0;
})
// Array.from(dailyOz).forEach(dailyOzOnDOM => {
//   dailyOzOnDOM.innerText =
// })


for (var i = 0; i < dailyOz.length; i++) {
  dailyOz[i].innerText = user.addDailyOunces(Object.keys(sortedHydrationDataByDate[i])[0])
}

stepsInfoUserStepGoal.innerText = `${user.dailyStepGoal}`;
stepsFriendAverageStepGoal.innerText = `${userRepository.calculateAverageStepGoal()}`
