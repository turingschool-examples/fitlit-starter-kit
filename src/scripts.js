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
  populateUserCard(user, activity);
  populateMainPage(user, activity);
  populateHydrationWidget(user);
  populateSleepwidget(user);
   let name = user.returnUserName();
  $('.user__name').text(`${name}`);
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
  let stepsToday = actData.totalUserStepsDaily(userData.id, '2019/09/22');
  $('.steps').text(`${stepsToday}`);
}

function populateHydrationWidget(user) {
  const hydration = new Hydration(hydrationData);
  let waterIntakeToday = hydration.totalOuncesDaily('2019/09/22', user.id);
  $('.ounces').text(`${waterIntakeToday}`);
}

function populateSleepwidget(user) {
  const sleep = new Sleep(sleepData);
  let hoursSleptToday = sleep.hoursSleptByDate('2019/09/22', user.id);
  $('.hrsSlept').text(`${hoursSleptToday}`);
  let qualSleepToday = sleep.sleepQualityByDate('2019/09/22', user.id)
  $('.qualSlept').text(`${qualSleepToday}`);
  displaySleepComp(user, sleep);
}

function displaySleepComp(user, sleep) {
  if (sleep.sleepComp('2019/09/22', user.id)) {
    $('.sleep__message').text('Great Sleep! Keep it up!');
  } else {
    $('.sleep__message').text('You need good sleep for great health!');
  }
}