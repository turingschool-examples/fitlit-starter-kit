let userRepo = new UserRepository(userData);

const userName = document.querySelector('.user-name');
const userAddress = document.querySelector('.user-address');
const userEmail = document.querySelector('.user-email');
const userStride = document.querySelector('.user-stride-length');
const userStepGoal = document.querySelector('.user-step-goal')
const userGoalAverage = document.querySelector('.step-goal-average');

function populateUserInfo(id) {
  let user = new User(userRepo.getUserData(id))
  userName.innerHTML = user.name;
  userAddress.innerHTML = user.address;
  userEmail.innerHTML = user.email;
  userStride.innerHTML = user.strideLength;
  userStepGoal.innerHTML = user.dailyStepGoal;
  userGoalAverage.innerHTML = userRepo.getStepGoalAverage();
}

populateUserInfo(42)