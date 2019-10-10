let userRepository = new UserRepository();

userData.forEach(user => {
  user = new User(user);
  userRepository.users.push(user)
});

activityData.forEach(activity => {
  activity = new Activity(activity);
})

// let userRepository = new UserRepository([userData]);

let userIndex = 0;
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


stepsUserStepsToday.innerText = activityData.find(activity => {
  return activity.userID === userRepository.users[userIndex].id && activity.date === todayDate;
}).numSteps;

headerName.innerText = `${userRepository.users[userIndex].getFirstName()}'S `;

stepsInfoUserStepGoal.innerText = `${userRepository.users[userIndex].dailyStepGoal}`;
