$( document ).ready(() => {
  console.log('doc ready');
  populateUser();
});

function populateUser() {
  let randomUser = Math.round(Math.random() * (50 - 1) + 1);
  const userRepository = new UserRepository(userData);
  const userInfo = userRepository.returnUserData(randomUser);
  const user = new User(userInfo);
  const activity = new Activity(activityData);
  let name = user.returnUserName();
  let avgUserSteps = activity.averageActivity('2019/09/22', 'numSteps');
  $('.user__name').text(`${name}`);
  $('.user__address').text(`${user.address}`);
  $('.user__email').text(`${user.email}`);
  $('.user__strideLength').text(`${user.strideLength}`);
  $('.user__dailyStepGoal').text(`${user.dailyStepGoal}`);
  $('.average__dailyStepGoal').text(`${avgUserSteps}`);

  console.log(randomUser, userRepository);
  console.log(userInfo, user);
}
