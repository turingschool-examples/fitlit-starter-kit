$(document).ready(function() {
  const id = 22;
  const date = "2019/06/23";
  const userRepo = new UserRepo(userData);
  const user = new User(userRepo.returnUserData(id));
  const hydrationRepo = new HydrationRepo(hydrationData);
  const hydration = new Hydration(hydrationRepo.returnUserData(id));
  // const sleepRepo = new SleepRepo(sleepData);
  // const sleep = new Sleep(sleepRepo.returnUserData(id));
  // const activityRepo = new ActivityRepo(activityData);
  // const activity = new Activity(activityRepo.returnUserData(id));
  appendUser();
  appendHydration();
  appendSleep();
  appendActivity();

  function appendUser() {
    appendFirstName();
    appendUserProfile();
    appendAverageStepGoals();
  }


  function appendHydration() {
    appendTodayWater();
  }

  function appendSleep() {

  }

  function appendActivity() {

  }

  function appendFirstName() {
    $('.user--firstName').text(user.returnUserFirstName());
  }

  function appendUserProfile() {
    $('.user--id').text(userRepo.returnUserData(id).id);
    $('.user--name').text(userRepo.returnUserData(id).name);
    $('.user--address').text(userRepo.returnUserData(id).address);
    $('.user--email').text(userRepo.returnUserData(id).email);
    $('.user--strideLength').text(userRepo.returnUserData(id).strideLength);
    $('.user--dailyStepGoal').text(userRepo.returnUserData(id).dailyStepGoal);
    $('.user--friends').text(userRepo.returnUserData(id).friends);
  }

  function appendAverageStepGoals() {
    $('.users--stepAverage').text(userRepo.returnAllUsersStepGoalAverage());
  }

  function appendTodayWater() {
    $('.user--todayWater').text(hydration.returnOuncesGivenDate(date));
  }
});
