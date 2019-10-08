$(function() {
  const randomUser = Math.floor(Math.random() * 50) + 1   
  
  const user = new User(userData[randomUser]);
  const usersRepo = new UsersRepo(userData);
  //   const userSleep = new userSleep();
  //   const usersSleepRepo = new usersSleepRepo();
  //   const userHydration = new userHydration();
  //   const userActivity = new userActivity();
  //   const usersActivityRepo = UsersActivityRepo();

  $('.span__currentUser').text(user.getUserFirstName())  
  $('.user__address').text(userData[randomUser].address);
  $('.user__email').text(userData[randomUser].email);
  $('.user__stride').text(userData[randomUser].strideLength);
  $('.user__step').text(userData[randomUser].dailyStepGoal);
  $('.user__friends').text(userData[randomUser].friends);
  $('.compare__user-steps-to-all').text(usersRepo.avgStepGoal())



});