let userRepository = new UserRepository();

userData.forEach(user => {
  user = new User(user);
  userRepository.users.push(user)
});

// let userRepository = new UserRepository([userData]);

var headerName = document.querySelector('#header-name');
var stepsUserStepsToday = document.querySelector('#steps-user-steps-today');
var stepsInfoActiveMinutesToday = document.querySelector('#steps-info-active-minutes-today');
var stepsInfoMilesWalkedToday = document.querySelector('#steps-info-miles-walked-today');
// var stepsFriendActiveMinutesAverageToday = document.querySelector('#steps-friend-active-minutes-average-today');
// var stepsFriendStepsAverageToday = document.querySelector('#steps-friend-steps-average-today');
var stepsCalendarTotalActiveMinutesWeekly = document.querySelector('#steps-calendar-total-active-minutes-weekly');
var stepsCalendarTotalStepsWeekly = document.querySelector('#steps-calendar-total-steps-weekly');










headerName.innerText = `${userRepository.users[0].getFirstName()}'S `;
