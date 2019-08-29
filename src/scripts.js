const randomUserId = Math.floor(Math.random() * (50 - 1 + 1)) + 1
const userRepository = new UserRepository(userData);
const user = new User(userRepository.findUserData(randomUserId))
const sleepUser = new SleepUser(sleepData);
const hydrationUser = new HydrationUser(hydrationData);
const activityUser = new ActivityUser(activityData, userData);
// const activityRepository = new ActivityRepository(activityTestData);
// const sleepRepository = new SleepRepository(sleepTestData, 2)



$(document).ready(() => {
  $('strong').text(user.returnFirstName());
  $('.p__span--name').text(user.name);
  $('.p__span--address').text(user.address);
  $('.p__span--email').text(user.email);
  $('.p__span--stride').text(user.strideLength);
  $('.section__p--step-goals').text(userRepository.compareGoals(randomUserId));
  $('.p__span--daily-water').text(hydrationUser.findDailyHydration('2019/06/15', randomUserId));
  $('.article__p--weekly').text(hydrationUser.findWeeklyHydration(randomUserId));
  $('.p__span--sleep-hours').text(sleepUser.findDailySleep('2019/06/15', randomUserId));
  $('.p__span--sleep-quality').text(sleepUser.findDailySleepQuality('2019/06/15', randomUserId));
  $('.p__span--sleep-average-hours').text(sleepUser.findAverageHoursSlept('2019/06/15', '2019/06/21', randomUserId));
  $('.p__span--sleep-average-quality').text(sleepUser.findAverageQualitySlept('2019/06/15', '2019/06/21', randomUserId));
  $('.section__p--weekly-sleep-hours').text(sleepUser.findWeeklyHoursSlept('2019/06/15', '2019/06/21', randomUserId));
  $('.section__p--weekly-sleep-quality').text(sleepUser.findWeeklySleepQuality('2019/06/15', '2019/06/21', randomUserId));
  // $('.header__date').text(findTodaysDate());
  $('.article__p--steps-daily').text(activityUser.getDailyStepCount(randomUserId));
  $('.article__p--minutes-daily').text(activityUser.findMinutesActive('2019/06/15', randomUserId));
  $('.section__p--miles-daily').text(activityUser.calculateMilesWalked('2019/06/15', randomUserId));
  $('.article__span--steps-weekly').text(activityUser.findAverageMinutesActive('2019/06/15', '2019/06/21', randomUserId));
  $('.article__p--percent-world').text(activityUser.calculatePercentOfWorldWalked(randomUserId));
  $('.article__h4--weekly-steps').text(activityUser.getWeeklyStepCount('2019/06/15', randomUserId));

  $('.section__p--compare-step').text(activityUser.compareStepAverageWithUser('2019/06/15', randomUserId))
  $('.section__p--compare-minutes').text(activityUser.compareMinutesAverageWithUser('2019/06/15', randomUserId))
  $('.section__p--compare-stairs').text(activityUser.compareStairsAverageWithUser('2019/06/15', randomUserId))
  $('.section__friends').text(appendFriends())
  $('.test2').text(activityUser.showUserFriends("2019/06/23", randomUserId))

  $('.li__span--total-steps').text(activityUser.calculateWeeksSteps('2019/06/15', '2019/06/21', randomUserId));
  $('.li__span--total-stairs').text(activityUser.calculateWeeksStairsClimbed('2019/06/15', '2019/06/21', randomUserId));
  $('.li__span--total-minutes').text(activityUser.calculateWeeksActiveMinutes('2019/06/15', '2019/06/21', randomUserId));

function appendFriends() {
  return `${activityUser.showUserFriends("2019/06/23", randomUserId)[0]} walked ${activityUser.showUserFriendsSteps("2019/06/23", randomUserId)[0]} steps today
   ${activityUser.showUserFriends("2019/06/23", randomUserId)[1]} walked ${activityUser.showUserFriendsSteps("2019/06/23", randomUserId)[1]} steps today
   ${activityUser.showUserFriends("2019/06/23", randomUserId)[2]} walked ${activityUser.showUserFriendsSteps("2019/06/23", randomUserId)[2]} steps`
}

});










