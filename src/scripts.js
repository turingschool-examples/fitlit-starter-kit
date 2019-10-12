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

// let userRepository = new UserRepository([userData]);

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
});

for (var i = 0; i < dailyOz.length; i++) {
  dailyOz[i].innerText = user.addDailyOunces(Object.keys(sortedHydrationDataByDate[i])[0])
}

stepsInfoUserStepGoal.innerText = `${userRepository.users[userIndex].dailyStepGoal}`;
stepsFriendAverageStepGoal.innerText = `${userRepository.calculateAverageStepGoal()}`
