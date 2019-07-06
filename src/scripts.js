$( document ).ready(() => {
  console.log('doc ready');
  populateUser();

});

function populateUser() {
  let randomUser = Math.round(Math.random() * (50 - 1) + 1);
  const userRepository = new UserRepository(userData);
  const userInfo = userRepository.returnUserData(randomUser);
  const user = new User(userInfo);
  let name = user.returnUserName();
  $('.user__name').text(`${name}`);
  
  const activity = new Activity(activityData);

  populateUserCard(user, activity);
  populateMainPage(user, activity);
  

  console.log(randomUser, userRepository);
  console.log(userInfo, user);
}

function populateUserCard(data, actData) {
  let avgUserSteps = actData.averageActivity('2019/09/22', 'numSteps');
  $('.user__address').text(`${data.address}`);
  $('.user__email').text(`${data.email}`);
  $('.user__strideLength').text(`${data.strideLength}`);
  $('.user__dailyStepGoal').text(`${data.dailyStepGoal}`);
  $('.average__dailyStepGoal').text(`${avgUserSteps}`);
}

function populateMainPage(data, actData) {
  console.log(actData);
  // let 
  // $('.steps').text(`${data.address}`);
}