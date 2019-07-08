$( document ).ready(() => {
  console.log('doc ready');
  populateUser();
  // $('.water').toggle('click', hydrationMoreInfo());
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
  hydrationMoreInfo(hydration, user);
  console.log(hydration);
}

function hydrationMoreInfo(instance, user) {
  const weeklyOunces = instance.dailyOuncesPerWeek(user.id);
  $('.day-1').text(`${weeklyOunces[0]}`);
  $('.day-2').text(`${weeklyOunces[1]}`);
  $('.day-3').text(`${weeklyOunces[2]}`);
  $('.day-4').text(`${weeklyOunces[3]}`);
  $('.day-5').text(`${weeklyOunces[4]}`);
  $('.day-6').text(`${weeklyOunces[5]}`);
  $('.day-7').text(`${weeklyOunces[6]}`);
}

function populateSleepwidget(user) {
  const sleep = new Sleep(sleepData);
  let hoursSleptToday = sleep.hoursSleptByDate('2019/09/22', user.id);
  $('.hrsSlept').text(`${hoursSleptToday}`);
  let qualSleepToday = sleep.sleepQualityByDate('2019/09/22', user.id)
  $('.qualSlept').text(`${qualSleepToday}`);
  displaySleepComp(user, sleep);
  sleepHoursMoreInfo(sleep, user);
  // sleepQualityMoreInfo(sleep, user);
}

// function sleepHoursMoreInfo(sleepInfo, user) {
//   console.log(user);
//   const weeklySleep = sleepInfo.dailyHoursSleptPerWeek(user.id, '2019/09/15');
//   console.log(sleepInfo);
// }

// function sleepQualityMoreInfo(sleepInfo, user) {
//   const weeklyQuality = sleepInfo.dailySleepQualityPerWk(user.id, '2019/09/15');
//   console.log(weeklyQuality);
// }



function displaySleepComp(user, sleep) {
  if (sleep.sleepComp('2019/09/22', user.id)) {
    $('.sleep__message').text('Great Sleep! Keep it up!');
  } else {
    $('.sleep__message').text('You need good sleep for great health!');
  }
}
