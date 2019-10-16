// INTANTIATING
let userRepository = new UserRepository();

userData.forEach(user => {
  user = new User(user);
  userRepository.users.push(user)
});

let activities = [];

activityData.forEach(activity => {
  activity = new Activity(activity, userRepository);
  activities.push(activity);
});

hydrationData.forEach(hydration => {
  hydration = new Hydration(hydration, userRepository);
})

sleepData.forEach(sleep => {
  sleep = new Sleep(sleep, userRepository);
})

// let userRepository = new UserRepository([userData]);


// DATA TO CHANGE ON DOM
let user = userRepository.users[0];
let todayDate = "2019/09/22";
let headerName = document.querySelector('#header-name');
let stepsUserStepsToday = document.querySelector('#steps-user-steps-today');
let stepsInfoActiveMinutesToday = document.querySelector('#steps-info-active-minutes-today');
let stepsInfoMilesWalkedToday = document.querySelector('#steps-info-miles-walked-today');
let stepsInfoUserStepGoal = document.querySelector('#steps-info-user-step-goal');
var stepsFriendActiveMinutesAverageToday = document.querySelector('#steps-friend-active-minutes-average-today');
var stepsFriendStepsAverageToday = document.querySelector('#steps-friend-steps-average-today');
let stepsCalendarTotalActiveMinutesWeekly = document.querySelector('#steps-calendar-total-active-minutes-weekly');
let stepsCalendarTotalStepsWeekly = document.querySelector('#steps-calendar-total-steps-weekly');
let stepsFriendAverageStepGoal = document.querySelector('#steps-friend-average-step-goal');
let hydrationUserOuncesToday = document.querySelector('#hydration-user-ounces-today');
let dailyOz = document.querySelectorAll('.daily-oz');
let sleepUserHoursToday = document.querySelector('#sleep-user-hours-today');
let sleepInfoHoursAverageAlltime = document.querySelector('#sleep-info-hours-average-alltime');
let sleepInfoQualityAverageAlltime = document.querySelector('#sleep-info-quality-average-alltime');
let sleepCalendarHoursAverageWeekly = document.querySelector('#sleep-calendar-hours-average-weekly');
let sleepCalendarQualityAverageWeekly = document.querySelector('#sleep-calendar-quality-average-weekly');
let sleepFriendLongestSleeper = document.querySelector('#sleep-friend-longest-sleeper');
let sleepFriendWorstSleeper = document.querySelector('#sleep-friend-worst-sleeper');
let sleepInfoQualityToday = document.querySelector('#sleep-info-quality-today');
let stairsUserStairsToday = document.querySelector('#stairs-user-stairs-today');
let stairsInfoFlightsToday = document.querySelector('#stairs-info-flights-today');
let stairsFriendFlightsAverageToday = document.querySelector('#stairs-friend-flights-average-today');
let stairsCalendarFlightsAverageWeekly = document.querySelector('#stairs-calendar-flights-average-weekly');
let stairsCalendarStairsAverageWeekly = document.querySelector('#stairs-calendar-stairs-average-weekly');

let trendingStepsPhraseContainer = document.querySelector('.trending-steps-phrase-container');
let trendingStairsPhraseContainer = document.querySelector('.trending-stairs-phrase-container');




let hydrationInfoGlassesToday = document.querySelector('#hydration-info-glasses-today');
let hydrationFriendOuncesToday = document.querySelector('#hydration-friend-ounces-today');


// CARDS
let stepsMainCard = document.querySelector('#steps-main-card');
let stepsInfoCard = document.querySelector('#steps-info-card');
let stepsFriendsCard = document.querySelector('#steps-friends-card');
let stepsTrendingCard = document.querySelector('#steps-trending-card');
let stepsCalendarCard = document.querySelector('#steps-calendar-card');
let hydrationMainCard = document.querySelector('#hydration-main-card');
let hydrationInfoCard = document.querySelector('#hydration-info-card');
let hydrationFriendsCard = document.querySelector('#hydration-friends-card');
let hydrationCalendarCard = document.querySelector('#hydration-calendar-card');
let stairsMainCard = document.querySelector('#stairs-main-card');
let stairsInfoCard = document.querySelector('#stairs-info-card');
let stairsFriendsCard = document.querySelector('#stairs-friends-card');
let stairsTrendingCard = document.querySelector('#stairs-trending-card');
let stairsCalendarCard = document.querySelector('#stairs-calendar-card');
let sleepMainCard = document.querySelector('#sleep-main-card');
let sleepInfoCard = document.querySelector('#sleep-info-card');
let sleepFriendsCard = document.querySelector('#sleep-friends-card');
let sleepCalendarCard = document.querySelector('#sleep-calendar-card');
let mainPage = document.querySelector('main');
let stepsTrendingButton = document.querySelector('.steps-trending-button');
let stairsTrendingButton = document.querySelector('.stairs-trending-button');
let profileButton = document.querySelector('#profile-button');
let userInfoDropdown = document.querySelector('#user-info-dropdown');

// EVENT LISTENERS
mainPage.addEventListener('click', showInfo);
profileButton.addEventListener('click', showDropdown);

//FLIPPING CARDS
function showDropdown() {
  userInfoDropdown.classList.toggle('hide');
};

function showInfo() {
  if (event.target.classList.contains('steps-info-button')) {
    flipCard(stepsMainCard, stepsInfoCard);
  }
  if (event.target.classList.contains('steps-friends-button')) {
    flipCard(stepsMainCard, stepsFriendsCard);
  }
  if (event.target.classList.contains('steps-trending-button')) {
    flipCard(stepsMainCard, stepsTrendingCard);
  }
  if (event.target.classList.contains('steps-calendar-button')) {
    flipCard(stepsMainCard, stepsCalendarCard);
  }
  if (event.target.classList.contains('hydration-info-button')) {
    flipCard(hydrationMainCard, hydrationInfoCard);
  }
  if (event.target.classList.contains('hydration-friends-button')) {
    flipCard(hydrationMainCard, hydrationFriendsCard);
  }
  if (event.target.classList.contains('hydration-calendar-button')) {
    flipCard(hydrationMainCard, hydrationCalendarCard);
  }
  if (event.target.classList.contains('stairs-info-button')) {
    flipCard(stairsMainCard, stairsInfoCard);
  }
  if (event.target.classList.contains('stairs-friends-button')) {
    flipCard(stairsMainCard, stairsFriendsCard);
  }
  if (event.target.classList.contains('stairs-trending-button')) {
    flipCard(stairsMainCard, stairsTrendingCard);
  }
  if (event.target.classList.contains('stairs-calendar-button')) {
    flipCard(stairsMainCard, stairsCalendarCard);
  }
  if (event.target.classList.contains('sleep-info-button')) {
    flipCard(sleepMainCard, sleepInfoCard);
  }
  if (event.target.classList.contains('sleep-friends-button')) {
    flipCard(sleepMainCard, sleepFriendsCard);
  }
  if (event.target.classList.contains('sleep-calendar-button')) {
    flipCard(sleepMainCard, sleepCalendarCard);
  }
  if (event.target.classList.contains('steps-go-back-button')) {
    flipCard(event.target.parentNode, stepsMainCard);
  }
  if (event.target.classList.contains('hydration-go-back-button')) {
    flipCard(event.target.parentNode, hydrationMainCard);
  }
  if (event.target.classList.contains('stairs-go-back-button')) {
    flipCard(event.target.parentNode, stairsMainCard);
  }
  if (event.target.classList.contains('sleep-go-back-button')) {
    flipCard(event.target.parentNode, sleepMainCard);
  }
}

function flipCard(cardToHide, cardToShow) {
  cardToHide.classList.add('hide');
  cardToShow.classList.remove('hide');
}

// DATA MANIPULATION
stepsUserStepsToday.innerText = activityData.find(activity => {
  return activity.userID === user.id && activity.date === todayDate;
}).numSteps;

headerName.innerText = `${user.getFirstName()}'S `;

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
});

for (var i = 0; i < dailyOz.length; i++) {
  dailyOz[i].innerText = user.addDailyOunces(Object.keys(sortedHydrationDataByDate[i])[0])
}

sleepUserHoursToday.innerText = sleepData.find(sleep => {
  return sleep.userID === user.id && sleep.date === todayDate;
}).hoursSlept;

sleepInfoHoursAverageAlltime.innerText = user.hoursSleptAverage;
sleepInfoQualityAverageAlltime.innerText = user.sleepQualityAverage;

sleepCalendarHoursAverageWeekly.innerText = user.calculateAverageHoursThisWeek(todayDate);
sleepCalendarQualityAverageWeekly.innerText = user.calculateAverageQualityThisWeek(todayDate);

stepsFriendAverageStepGoal.innerText = `${userRepository.calculateAverageStepGoal()}`;

hydrationInfoGlassesToday.innerText = hydrationData.find(hydration => {
  return hydration.userID === user.id && hydration.date === todayDate;
}).numOunces / 8;
hydrationFriendOuncesToday.innerText = userRepository.calculateAverageDailyWater(todayDate);

sleepFriendLongestSleeper.innerText = userRepository.users.find(user => {
  return user.id === userRepository.getLongestSleepers(todayDate)
}).getFirstName();

sleepFriendWorstSleeper.innerText = userRepository.users.find(user => {
  return user.id === userRepository.getWorstSleepers(todayDate)
}).getFirstName();

sleepInfoQualityToday.innerText = sleepData.find(sleep => {
  return sleep.userID === user.id && sleep.date === todayDate;
}).sleepQuality;

stepsInfoMilesWalkedToday.innerText = activities.find(activity => {
   return (activity.date === todayDate && activity.userId === user.id)
}).calculateMiles(userRepository);

stepsInfoActiveMinutesToday.innerText = activityData.find(activity => {
  return activity.userID === user.id && activity.date === todayDate;
}).minutesActive;

stairsUserStairsToday.innerText = activityData.find(activity => {
  return activity.userID === user.id && activity.date === todayDate;
}).flightsOfStairs * 12;

stairsInfoFlightsToday.innerText = activityData.find(activity => {
  return activity.userID === user.id && activity.date === todayDate;
}).flightsOfStairs;

stepsFriendActiveMinutesAverageToday.innerText = userRepository.calculateAverageMinutesActive(todayDate);

stepsFriendStepsAverageToday.innerText = userRepository.calculateAverageSteps(todayDate);

stairsFriendFlightsAverageToday.innerText = (userRepository.calculateAverageStairs(todayDate) / 12).toFixed(1);

stepsCalendarTotalActiveMinutesWeekly.innerText = user.calculateAverageMinutesActiveThisWeek(todayDate);

stepsCalendarTotalStepsWeekly.innerText = user.calculateAverageStepsThisWeek(todayDate);

stairsCalendarFlightsAverageWeekly.innerText = user.calculateAverageFlightsThisWeek(todayDate);

stairsCalendarStairsAverageWeekly.innerText = (user.calculateAverageFlightsThisWeek(todayDate) * 12).toFixed(0);

stepsTrendingButton.addEventListener('click', function() {
  user.findTrendingStepDays();
  trendingStepsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStepDays[0]}</p>`;
});

stairsTrendingButton.addEventListener('click', function() {
  user.findTrendingStairsDays();
  console.log(user.trendingStairsDays);
  trendingStairsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStairsDays[0]}</p>`;
});

let dropdownName = document.querySelector('#dropdown-name');
let dropdownEmail = document.querySelector('#dropdown-email');
let dropdownGoal = document.querySelector('#dropdown-goal');
let dropdownFriends = document.querySelector('#dropdown-friends');

dropdownName.innerText = user.name.toUpperCase();
dropdownEmail.innerText = `Email | ${user.email}`;
dropdownGoal.innerText = `Daily Step Goal | ${user.dailyStepGoal}`;

user.findFriendsNames(userRepository.users);

user.friendsNames.forEach(friend => {
  dropdownFriends.innerText += ` ${friend} |`
});
