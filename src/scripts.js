console.log("Hello World");

<<<<<<< Updated upstream
const idRandom = Math.ceil(Math.random() * 50 - 1);
const userRepository = new UserRepository(userData);
const userDataArray = userRepository.fetchUserData(idRandom);
const currentUser = new User(userDataArray);


=======
$(document).ready(() => {
 
  const idRandom = Math.ceil(Math.random() * 50 - 1);
  const userRepository = new UserRepository(userData);
  const userDataArray = userRepository.fetchUserData(idRandom);
  const currentUser = new User(userDataArray);

  const $profileInfoSection = $('.profile-info');
  const $sleepinfo = $('.sleep-info');
  const $hydrationInfo = $('.hydration-info');
  const $activityInfo = $('.activity-info');


  $('.profile-name').text(currentUser.name);
  $('.profile-address').text(currentUser.address);
  $('.profile-email').text(currentUser.email);
  $('.profile-stride-length').text(currentUser.strideLength);
  $('.profile-daily-step-goal').text(currentUser.dailyStepGoal);
  
  



});
>>>>>>> Stashed changes


