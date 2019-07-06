console.log("Hello World");

let randomUser = Math.floor(Math.random() * 50 ) + 1
let userRepository = new UserRepository(userData);
let hydration = new Hydration(hydrationData);
let sleep = new Sleep(sleepData);
let sleepRepository = new SleepRepository(sleepData);
let activity = new Activity(activityData);
let activityRepository = new ActivityRepository(activityData);
let activeUser = new User(userData[randomUser]);


$(document).ready(function(){
  $('.first-name').text(activeUser.displayUsersFirstName());
  $('#personal-stride').text(userData[randomUser].strideLength);
  $('#personal-email').text(userData[randomUser].email);
  $('#personal-step-goal').text(userData[randomUser].dailyStepGoal);
  $('#personal-address').text(userData[randomUser].address);
  $('#num-daily-hours-slept').text(sleep.displayHoursSlept(randomUser + 1, "2019/06/15"));
  $('#num-all-time-sleep-hours').text(sleep.displayRecordHoursSlept(randomUser + 1)[1])
  $('#num-all-time-sleep-hours-date').text(sleep.displayRecordHoursSlept(randomUser + 1)[0]);
  $('#num-average-hours-slept').text(sleep.calculateAverageDailySleepHours(randomUser + 1))
 // $('#num-daily-hours-slept').text(sleep.displayHoursSlept(randomUser + 1, ${dateInput}));
})


console.log(randomUser)
console.log(randomUser + 1)







