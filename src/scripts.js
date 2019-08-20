// eslint-disable-next-line no-undef
let userRepository = new UserRepository(userData);
const name = $('#name');
const address = $('#address');
const email = $('#email');
const strideLength = $('#strideLength');
const dailyStepGoal = $('#stepGoal');

$(document).ready(() => {
  updateUserDataDOM();
});

function updateUserDataDOM () {
  name.text(userRepository.getUserData(33).name);
  address.text(userRepository.getUserData(33).address);
  email.text(userRepository.getUserData(33).email);
  strideLength.text(userRepository.getUserData(33).strideLength);
  dailyStepGoal.text(userRepository.getUserData(33).dailyStepGoal);
}