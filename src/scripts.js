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
}

function populateUserCard(userData, actData) {
  let avgUserSteps = actData.averageActivity('2019/09/22', 'numSteps');
  $('.user__address').text(`${userData.address}`);
  $('.user__email').text(`${userData.email}`);
  $('.user__strideLength').text(`${userData.strideLength}`);
  $('.user__dailyStepGoal').text(`${userData.dailyStepGoal}`);
  $('.average__dailyStepGoal').text(`${avgUserSteps}`);
}

function populateMainPage(userData, actData) {
  let stepsToday = actData.totalUserStepsDaily(userData.id, "2019/09/22");
  $('.steps').text(`${stepsToday}`);
  populateHydrationWidget(userData);
}

function populateHydrationWidget(user) {
  const hydration = new Hydration(hydrationData);
  let waterIntakeToday = hydration.totalOuncesDaily("2019/09/22", user.id);
  $('.ounces').text(`${waterIntakeToday}`);
}