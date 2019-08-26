$(document).ready(() => {
  const currentDate = '2019/06/30';

  const userRepo = new UserRepository(userData);
  let user = userRepo.returnUserData(15);
  let newUser = new User(user);
  let hydration = new Hydration(hydrationData);
  let sleep = new Sleep(sleepData);
  let activity = new Activity(activityData)

  function populateFriends (userFriends) {
    let friends = userFriends.map(friend => {
      let userFriend = new User(userRepo.returnUserData(friend))
      return ({id: userFriend.id, name: userFriend.name, steps: activity.returnNumberOfStepsByDate(userFriend.id, currentDate) })
    });
    return friends;
  }

  let friendObjs = populateFriends(user.friends);
    
  $('#user-name').text(newUser.returnUserFirstName());
  $('#user-info-name').text(newUser.name);
  $('#user-info-email').text(newUser.email);
  $('#user-info-address').text(newUser.address);
  $('#user-info-step-goal').text(newUser.dailyStepGoal);
  $('#average-step-goal-all-users').text(userRepo.returnAllUsersAverageStepGoal());
  $('#user-water-by-day').text(hydration.returnFluidOzByDate(user.id, currentDate));
  $('#user-water-by-week').text(hydration.returnFluidOzByWeek(user.id, currentDate));
  $('#user-sleep-by-day').text(sleep.returnAmountSlept(user.id, currentDate));
  $('#user-sleep-quality-by-day').text(sleep.returnSleepQuality(user.id, currentDate));
  $('#user-sleep-by-week').text(sleep.returnSleepByWeek(user.id, currentDate));
  $('#user-sleep-quality-by-week').text(sleep.returnSleepQualityByWeek(user.id, currentDate));
  $('#user-average-sleep-quality').text(sleep.returnAverageSleepQuality(user.id));
  $('#user-average-hours-slept').text(sleep.returnAverageSleep(user.id));
  $('#user-current-step-count').text(activity.returnNumberOfStepsByDate(user.id, currentDate))
  $('#user-current-mins-active').text(activity.returnActiveMinutesByDate(user.id, currentDate));
  $('#user-current-miles-walked').text(activity.returnMilesWalkedByDate(user, currentDate));
  $('#user-current-step-count-vs-average').text(activity.returnNumberOfStepsByDate(user.id, currentDate))
  $('#all-users-average-step-count').text(activity.returnAvgStepsTakenAllUsersByDate(currentDate));
  $('#user-current-stairs-climbed').text(activity.returnStairsClimbedByDate(user.id, currentDate))
  $('#all-users-average-stairs-climbed').text(activity.returnAvgStairsClimbedAllUsersByDate(currentDate));
  $('#user-current-active-mins').text(activity.returnActiveMinutesByDate(user.id, currentDate))
  $('#all-users-average-active-mins').text(activity.returnAvgActiveMinutesAllUsersByDate(currentDate));
  $('#user-step-count-by-week').text(activity.returnNumberOfStepsByWeek(user.id, currentDate))
  $('#user-stairs-climbed-by-week').text(activity.returnStairsClimbedByWeek(user.id, currentDate))
  $('#user-mins-active-by-week').text(activity.returnActiveMinutesByWeek(user.id, currentDate))

  friendObjs.forEach(friend => $('#friend-info').append(`<p>Friend name: ${friend.name}, steps: ${friend.steps}</p>`))

});

