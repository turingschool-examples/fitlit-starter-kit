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
  userName.innerText = user.name;
  userAddress.innerText = user.address;
  userEmail.innerText = user.email;
  userStride.innerText = user.strideLength;
  userStepGoal.innerText = user.dailyStepGoal;
  userGoalAverage.innerText = userRepo.getStepGoalAverage();
  stepComparison.innerText  = (user.dailyStepGoal > userRepo.getStepGoalAverage()) ? 
  `You're step goal is ${user.dailyStepGoal - userRepo.getStepGoalAverage()} steps above the average` :
    `You're step goal is ${userRepo.getStepGoalAverage() - user.dailyStepGoal} steps below the average`
  friendsList.innerHTML = friendsList.innerHTML = user.friends.map
  (friendID => userRepo.getUserData(friendID).name)
}

populateUserInfo(41);