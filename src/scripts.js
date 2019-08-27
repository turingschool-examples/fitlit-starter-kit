const randomUserId = Math.floor(Math.random() * (50 - 1 + 1)) + 1
const userRepository = new UserRepository(userData);
const user = new User(userRepository.findUserData(randomUserId))
const sleepUser = new SleepUser(sleepData);
const hydrationUser = new HydrationUser(hydrationData);
const activityUser = new ActivityUser(activityData, userData)
// const sleepRepository = new SleepRepository(sleepTestData, 2)



$(document).ready(() => {
  $('strong').text(user.returnFirstName());
  $('.p__span--name').text(user.name);
  $('.p__span--address').text(user.address);
  $('.p__span--email').text(user.email);
  $('.p__span--stride').text(user.strideLength);
  $('.p__span--daily-water').text(hydrationUser.findDailyHydration('2019/06/15', 2));
  $('.article__p--weekly').text(hydrationUser.findWeeklyHydration(2));
  $('.p__span--sleep-hours').text(sleepUser.findDailySleep('2019/06/15', 2));
  $('.p__span--sleep-quality').text(sleepUser.findDailySleepQuality('2019/06/15', 2));
  $('.p__span--sleep-average-hours').text(sleepUser.findAverageHoursSlept('2019/06/15', '2019/06/21', 2));
  $('.p__span--sleep-average-quality').text(sleepUser.findAverageQualitySlept('2019/06/15', '2019/06/21', 2));
  // $('.header__date').text(findTodaysDate());
  $('.article__p--steps-daily').text(activityUser.getDailyStepCount(randomUserId));
  $('.article__p--minutes-daily').text(activityUser.findMinutesActive('2019/06/15', randomUserId));
  $('.section__p--miles-daily').text(activityUser.calculateMilesWalked('2019/06/15', randomUserId));
  $('.p__span--daily-water').text(hydrationUser.findDailyHydration('2019/06/15', randomUserId));
  $('.article__p--weekly').text(hydrationUser.findWeeklyHydration(randomUserId));
  $('.p__span--sleep-quality').text(sleepUser.findDailySleepQuality('2019/06/15', randomUserId));
  $('.p__span--sleep-hours').text(sleepUser.findDailySleep('2019/06/15', randomUserId));
  $('.p__span--sleep-average-quality').text(sleepUser.findAverageQualitySlept('2019/06/08', '2019/06/15', randomUserId));
  $('.p__span--sleep-average-hours').text(sleepUser.findAverageHoursSlept('2019/06/08', '2019/06/15', randomUserId));
  $('.article__span--steps-weekly').text(activityUser.findAverageMinutesActive('2019/06/08', '2019/06/15', randomUserId));

});






