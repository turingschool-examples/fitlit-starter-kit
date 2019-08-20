$(document).ready(() => {
  const today = '2019/09/22';
  // const userData = ../data.prototypeData;
  // const UserRepository = require('User-repository');

  const userRepo = new UserRepository(userData);
  console.log(userData);
  let user = userRepo.returnUserData(15);
  let newUser = new User(user);
  
  $('#user-name').text(newUser.returnUserFirstName());
  $('#user-step-goal').text(newUser.dailyStepGoal);
  $('#average-step-goal-all-users').text(userRepo.returnAllUsersAverageStepGoal());


});

