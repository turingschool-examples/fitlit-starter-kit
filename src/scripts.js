$(document).ready(function() {
  const id = 22;
  const userRepo = new UserRepo(userData);
  const user = new User(userRepo.returnUserData(id));
  const hyrationRepo = new Hydration();
  const hydration = new HydrationRepo();
  // const sleep = new Sleep();
  // const sleepRepo = new SleepRepo();
  // const activity = new Activity();
  // const activityRepo = new ActivityRepo();
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
    $('.avg').text(userRepo.returnAllUsersStepGoalAverage());
  }
});
