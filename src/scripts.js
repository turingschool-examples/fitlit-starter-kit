$(document).ready(function() {
  const userRepo = new UserRepo(sampleUserData);
  const user = new User(userRepo.returnUserData(2));
  const hyrationRepo = new Hydration();
  const hydration = new HydrationRepo();
  appendUserCard();

  function appendUserCard() {
    appendAverageStepGoals();
  };

  function appendAverageStepGoals() {
    $('.avg').text(userRepo.returnAllUsersStepGoalAverage())
  };

});
