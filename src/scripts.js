$(document).ready(() => {
  const currentDate = '2019/06/15';

  const userRepo = new UserRepository(userData);
  let user = userRepo.returnUserData(15);
  let newUser = new User(user);
  let hydration = new Hydration(hydrationData);
  let sleep = new Sleep(sleepData);
  let activity = new Activity(activityData)

  
  $('#user-name').text(newUser.returnUserFirstName());
  $('#user-step-goal').text(newUser.dailyStepGoal);
  $('#average-step-goal-all-users').text(userRepo.returnAllUsersAverageStepGoal());
  $('#user-water-by-day').text(hydration.returnFluidOzByDate(user.id, currentDate));
  $('#user-water-by-week').text(hydration.returnFluidOzByWeek(user.id, currentDate));
  $('#user-sleep-by-day').text(sleep.returnAmountSlept(user.id, currentDate));
  $('#user-sleep-quality-by-day').text(sleep.returnSleepQuality(user.id, currentDate));
  $('#user-sleep-by-week').text(sleep.returnSleepByWeek(user.id, currentDate));
  $('#user-sleep-quality-by-week').text(sleep.returnSleepQualityByWeek(user.id, currentDate));
  $('#user-average-sleep-quality').text(sleep.returnAverageSleepQuality(user.id));
  $('#user-average-hours-slept').text(sleep.returnAverageSleep(user.id));
  // $('#user-current-step-count').text(activity.)
  $('#user-current-mins-active').text(activity.returnActiveMinutesByDate(user.id, currentDate));
  $('#user-current-miles-walked').text(activity.returnMilesWalkedByDate(user, currentDate));
  // $('#user-current-step-count').text(activity.)
  $('#all-users-average-step-count').text(activity.returnStepsTakenAllUsersByDate(currentDate));
  // $('#user-current-stairs-climbed').text(activity.)
  $('#all-users-average-stairs-climbed').text(activity.returnStairsClimbedAllUsersByDate(currentDate));
  // $('#user-current-active-mins').text(activity.)
  $('#all-users-average-active-mins').text(activity.returnActiveMinutesAllUsersByDate(currentDate));
  // $('#user-step-count-by-week').text(activity.)
  // $('#user-stairs-climbed-by-week').text(activity.)
  // $('#user-mins-active-by-week').text(activity.)

  


});

