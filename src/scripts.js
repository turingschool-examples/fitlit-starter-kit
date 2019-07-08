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
  let dailyHoursSleptForWeek = sleep.dailyHoursSleptPerWeek(3, "2019/06/17");
  let dailyQualitySleepForWk = sleep.dailySleepQualityPerWk(3, "2019/06/17");
  sleepHoursWkInfo(dailyHoursSleptForWeek);
  sleepQualityWkInfo(dailyQualitySleepForWk);
  let avgWklyHrsSleep = sleep.averageHoursSlept(user.id);
  $('.day-sleep-avg').text(`${avgWklyHrsSleep}`);
  let avgWklySleepQual = sleep.averageQualitySleep(user.id);
  $('.day-sleep-q-avg').text(`${avgWklySleepQual}`)
}

function sleepHoursWkInfo(listOfDailyHours) {
  $('.day-sleep-1').text(`${listOfDailyHours[0]}`);
  $('.day-sleep-2').text(`${listOfDailyHours[1]}`);
  $('.day-sleep-3').text(`${listOfDailyHours[2]}`);
  $('.day-sleep-4').text(`${listOfDailyHours[3]}`);
  $('.day-sleep-5').text(`${listOfDailyHours[4]}`);
  $('.day-sleep-6').text(`${listOfDailyHours[5]}`);
  $('.day-sleep-7').text(`${listOfDailyHours[6]}`);
}

function sleepQualityWkInfo(listOfDailySleepQual) {
  $('.day-sleep-q-1').text(`${listOfDailySleepQual[0]}`);
  $('.day-sleep-q-2').text(`${listOfDailySleepQual[1]}`);
  $('.day-sleep-q-3').text(`${listOfDailySleepQual[2]}`);
  $('.day-sleep-q-4').text(`${listOfDailySleepQual[3]}`);
  $('.day-sleep-q-5').text(`${listOfDailySleepQual[4]}`);
  $('.day-sleep-q-6').text(`${listOfDailySleepQual[5]}`);
  $('.day-sleep-q-7').text(`${listOfDailySleepQual[6]}`);
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
