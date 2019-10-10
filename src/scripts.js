let randomNum = null;
let user = undefined;
let hydro  = undefined;
let sleep = undefined;
let activity = undefined;
let userRepository = undefined;
let hydroRepository = undefined;
let sleepRepository = undefined;
let activityRepository = undefined;

function getRandomNum() {
    randomNum = Math.floor((Math.random() * 50) + 1);

}

$(window).on('load', function () {
  getRandomNum();
  makeUsers(userData);
  makeHydro(hydrationData);
  makeSleep(sleepData);
  makeActivity(activityData);

  $('.header_h1_span').text(`${user.returnFirstName()}`);
  $('.user_name').text(`${user.name.join(' ')}`);
  $('.user_email').text(`${user.email}`);
  $('.user_address').text(`${user.address}`);
  $('.user_stride_length').text(`${user.strideLength}`);
  $('.user_step_goal').text(`${user.dailyStepGoal}`);
  $('.div_steps_other_users_p').text(`${userRepository.calculateAverageStepGoal()}`);
  $('.hydro_day').text(hydro.findFluidDate('2019/09/15'));
  $('.hydro_week').text(hydro.findFluidWeek('2019/09/15').join(' '));
  $('.sleep_date').text('2019/09/15');
  $('.sleep_hours_day').text(sleep.findHoursDay('2019/09/15'));
  $('.sleep_quality_day').text(sleep.findQualDay('2019/09/15'));
  $('.sleep_hours_avg').text(sleep.findAvgSleepAll());
  $('.sleep_quality_avg').text(sleep.findAvgQualAll());
  $('.activity_date').text("2019/09/15");
  $('.activity_steps_day').text(activity.stepGoalReached('2019/09/15'));
  $('.activity_min_active_day').text(activity.minutesActiveGivenDay('2019/09/15'));
  $('.activity_miles_walked_day').text(activity.milesWalked('2019/09/15'));
  $('.div_activity_steps_other_users_p').text(activityRepository.numberofStepsGivenDate('2019/09/15'));
  $('.div_activity_min_active_other_users_p').text(activityRepository.avgMinutesActiveGivenDate('2019/09/15'));
  $('.div_activity_stairs_other_users_p').text(activityRepository.numberofStepsGivenDate('2019/09/15'));
  $('.activity_min_active_week').text(activity.minActiveWeek('2019/09/15').join(' '));
  $('.activity_steps_week').text(activity.stepsWeek('2019/09/15').join(' '));
  $('.activity_stairs_week').text(activity.stairsWeek('2019/09/15').join(' '));
})

$( function() {
  $( "#datepicker_hydro" ).datepicker();
} );

function makeUsers(data) {
  userRepository = new UserRepository(data);
  userRepository.findUser(randomNum);
  user = new User(userRepository.currentUser);
}

function makeHydro(data) {
    hydroRepository = new HydroRepository(data);
    hydroRepository.findUserId(randomNum);
    hydro = new Hydro(hydroRepository.currentUser);
}

function makeSleep(data) {
  sleepRepository = new SleepRepository(data);
  sleepRepository.findUserId(randomNum);
  sleep = new Sleep(sleepRepository.currentUser);
}

function makeActivity(data) {
  activityRepository = new ActivityRepository(data);
  activityRepository.findUserId(randomNum);
  activity = new Activity(activityRepository.currentUser, user);
}