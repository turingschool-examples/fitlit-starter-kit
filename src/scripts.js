console.log("Hello World");

const idRandom = Math.ceil(Math.random() * 50 - 1);
const userRepository = new UserRepository(userData);
const userDataArray = userRepository.fetchUserData(idRandom);
const currentUser = new User(userDataArray);

$(document).ready(() => {
 

  const $profileInfoSection = $('.profile-info');
  const $sleepinfo = $('.sleep-info');
  const $hydrationInfo = $('.hydration-info');
  const $activityInfo = $('.activity-info');


  $('.profile-name').text(currentUser.name)



});


