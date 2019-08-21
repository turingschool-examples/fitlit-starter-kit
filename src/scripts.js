// eslint-disable-next-line no-undef
let userRepository = new UserRepository(userData);
const name = $('#name');
const address = $('#address');
const email = $('#email');
const strideLength = $('#strideLength');
const dailyStepGoal = $('#stepGoal');
const stepCompare = $('#step-compare');

$(document).ready(() => {
  updateUserDataDOM();
  compareStepGoal();
});

function updateUserDataDOM () {
  name.text(userRepository.getUserData(33).name);
  address.text(userRepository.getUserData(33).address);
  email.text(userRepository.getUserData(33).email);
  strideLength.text(userRepository.getUserData(33).strideLength);
  dailyStepGoal.text(userRepository.getUserData(33).dailyStepGoal);
}

function compareStepGoal() {
  const numSteps = Math.abs(userRepository.getAvgStep() - userRepository.getUserData(33).dailyStepGoal);
  const stepStatus = userRepository.getAvgStep() > userRepository.getUserData(33).dailyStepGoal ? `under` : `over`;
  stepCompare.text(`You are ${numSteps} steps ${stepStatus} the average daily goal!`);
}