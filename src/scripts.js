
const data = {
  users: userData,
  hydration: hydrationData,
  sleep: sleepData,
  activity: activityData
}
const userRepository = new UserRepository(data);
let user;

$(document).ready(function() {
  $('.login button').on('click', function() {
    const nameGiven = `${$('.first-name').val()} ${$('.last-name').val()}`;
    const currentUser = userRepository.findUserByName(nameGiven);
    user = new User(currentUser);
    $('.login-header').fadeOut(100);
    $('.page-header').fadeIn(100);
    console.log(user.name);
    fillUserInfo();
    getFriends(user);
  });

  $('.bio-info').on('click', function () {
    $('.bio-info main').fadeToggle();
  });
  // $('.bio-info').on('mouseleave', function () {
  //   setTimeout(function(){
  //     $('.bio-info main').fadeOut(200);
  //   }, 2000);
  // });

  $('.steps-goal footer p').on('click', function() {
    $('.steps-goal .average').fadeToggle();
    $(this).text($(this).text() == 'see average' ? 'close' : 'see average');
  });
  //
  // $('.steps-goal').on('mouseleave', function () {
  //   setTimeout(function(){
  //     $('.steps-goal footer p').text('see average');
  //     $('.steps-goal .average').fadeOut(200);
  //   }, 2000);
  // });

  function fillUserInfo() {
    console.log(user);
    $('.page-header header h2').text(user.getFirstName());
    $('.info .name').text(user.name);
    $('.info .email').text(user.email);
    $('.info .address').text(user.address);
    $('.body .step').text(`${user.strideLength} feet`);
    $('.steps-goal .goal').text(user.dailyStepGoal);
    $('.steps-goal .average-goal').text(userRepository.calculateAverageStepGoal());
  }

function getFriends(user) {
  console.log(user.friends);
  user.friends.forEach(function(friend) {
    let friendId = friend;
    console.log(user.friends[friend]);
    let myFriend = userRepository.usersData.find(function(homie) {
      return homie.id === friendId;
    });
    document.querySelector('.friend-names').innerHTML += `<img src="" alt="">
    <h5>Name: ${myFriend.name}</h5>
    <p>step goal: ${myFriend.dailyStepGoal}</p>`;
  })
}