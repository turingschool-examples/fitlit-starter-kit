let userRepo = new UserRepository(userData);
let hydration = new Hydration(hydrationData);

const userName = document.querySelector('.user-name');
const userAddress = document.querySelector('.user-address');
const userEmail = document.querySelector('.user-email');
const userStride = document.querySelector('.user-stride-length');
const userStepGoal = document.querySelector('.user-step-goal');
const userGoalAverage = document.querySelector('.step-goal-average');
const friendsList = document.querySelector('.friends-list');
const stepComparison = document.querySelector('.step-goal-comparison')
const dayHydrationBox = document.querySelector('.hydration-day')
const weekHydradtionBox = document.querySelector('.hydration-week')

function populateUserInfo() {
  let user = new User(userRepo.getUserData(42));
  userName.innerText = user.name;
  userAddress.innerText = user.address;
  userEmail.innerText = user.email;
  userStride.innerText = user.strideLength;
  userStepGoal.innerText = user.dailyStepGoal;
  userGoalAverage.innerText = userRepo.getStepGoalAverage();
  stepComparison.innerText  = (user.dailyStepGoal > userRepo.getStepGoalAverage()) ? 
    `You're step goal is ${user.dailyStepGoal - userRepo.getStepGoalAverage()} steps above the average` :
    `You're step goal is ${userRepo.getStepGoalAverage() - user.dailyStepGoal} steps below the average`
  friendsList.innerHTML = friendsList.innerHTML = user.friends.map(friendID => userRepo.getUserData(friendID).name)
}

function populateHydrationInfo(id, date) {
  dayHydrationBox.innerHTML = hydration.getDay(id, date);
  let weekObj = hydration.getWeek(id, date);
  weekHydradtionBox.innerHTML = weekObj.map(obj => obj.numOunces)
}

populateUserInfo();
populateHydrationInfo(42, "2019/08/02");