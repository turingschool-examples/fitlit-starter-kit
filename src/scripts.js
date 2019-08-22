
const userRepository = new UserRepository(userData);
const user = new User(userRepository.findUserData(1))
const hydrationUser = new HydrationUser(hydrationData)
$(document).ready(() => {
  $('strong').text(user.returnFirstName());
  $('.article__strong--name').text(user.name);
  $('.article__strong--address').text(user.address);
  $('.article__strong--email').text(user.email);
  $('.article__strong--stride').text(user.strideLength);
  $('.article__p--daily-water').text(hydrationUser.findDailyHydration('2019/06/15', 2));
  $('.article__p--weekly').text(hydrationUser.findWeeklyHydration(2));
  $('.artile__p--average-sleep').text(sleepRepository.returnSleepAvg(2))

  
});






