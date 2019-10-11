const data = {
  users: userData,
  hydration: hydrationData,
  sleep: sleepData,
  activity: activityData
}
let userRepository = new UserRepository(data);
userRepository.findToday();
let user;

$(document).ready(function() {

  $('.login button').on('click', function() {
    const nameGiven = `${$('.first-name').val()} ${$('.last-name').val()}`;
    const currentUser = userRepository.findUserByName(nameGiven);
    user = new User(currentUser);
    $('.login-header, .page-header, .empty-board, .board').fadeToggle(100);
    fillUserInfo();
    getFriends(user.findFriends(userRepository));
    showHydration()
  });

  $('.bio-info').on('click', function () {
    $('.bio-info main').fadeToggle();
  });

  $('.steps-goal footer p').on('click', function() {
    $('.steps-goal .average').fadeToggle();
    $(this).text($(this).text() == 'see average' ? 'close' : 'see average');
  });

  function fillUserInfo() {
    $('.page-header header h2').text(user.getFirstName());
    $('.info .name').text(user.name);
    $('.info .email').text(user.email);
    $('.info .address').text(user.address);
    $('.body .step').text(`${user.strideLength} feet`);
    $('.steps-goal .goal').text(user.dailyStepGoal);
    $('.steps-goal .average-goal').text(userRepository.calculateAverageStepGoal());
  }

  function getFriends(friends) {
    friends.forEach(friend => {
      $('.friend-names').append(`
      <h5>${friend.name}</h5>
      <p>step goal: ${friend.dailyStepGoal}</p>`);
    })
  }

  function showHydration() {
    const currentHydration = hydrationData.find(hydro => {
      return hydro.userID === userRepository.currentUserId
    })
    $('.current-hydro').text(currentHydration.numOunces)
  }
});
