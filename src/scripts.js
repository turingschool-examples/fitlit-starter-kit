let userRepo = new UserRepository(userData);

const userName = document.querySelector('.user-name');
const userAddress = document.querySelector('.user-address');
const userEmail = document.querySelector('.user-email');
const userStride = document.querySelector('.user-stride-length');
const userStepGoal = document.querySelector('.user-step-goal');
const userGoalAverage = document.querySelector('.step-goal-average');
const friendsList = document.querySelector('.friends-list');
const stepComparison = document.querySelector('.step-goal-comparison')

function populateUserInfo(id) {
  let user = new User(userRepo.getUserData(id))
  userName.innerHTML = user.name;
  userAddress.innerHTML = user.address;
  userEmail.innerHTML = user.email;
  userStride.innerHTML = user.strideLength;
  userStepGoal.innerHTML = user.dailyStepGoal;
  userGoalAverage.innerHTML = userRepo.getStepGoalAverage();
  stepComparison.innerHTML = `Your goal is ${Math.floor((user.dailyStepGoal / userRepo.getStepGoalAverage()) * 100 - 100)}%
    under/over the average step goal of all users`
  user.getUserFriendNames()
  friendsList.innerHTML = user.friendsNames;
}

populateUserInfo(41);