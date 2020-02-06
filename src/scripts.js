let welcomeDisplay = document.querySelector('.display-name');
let userFullName = document.querySelector('.full-name');
let userAddress = document.querySelector('.address');
let userEmail = document.querySelector('.email');
let userStrideLength = document.querySelector('.stride-length');
let userStepGoal = document.querySelector('.daily-step-goal');
let allUsersAvgStepGoal = document.querySelector('.all-users-step-goal-average');

window.onload = function() {
  const usersRepository = new UsersRepository(getRandomNumber());
  const userInfo = usersRepository.getUserDataById(userData);
  const user = new User(userInfo);
  welcomeDisplay.innerText = `Welcome, ${user.returnUserFirstName()}`;
  userFullName.innerText = `Full Name: ${user.name}`;
  userAddress.innerText = `Address: ${user.address}`;
  userEmail.innerText = `Email: ${user.email}`;
  userStrideLength.innerText = `Stride Length: ${user.strideLength}`;
  userStepGoal.innerText = `Your Daily Step Goal: ${user.dailyStepGoal}`;
  allUsersAvgStepGoal.innerText = `Average User's Step Goal: ${usersRepository.calculateAverageStepGoal(userData)}`
}

function getRandomNumber() {
 randomNumber = Math.floor(Math.random() * (50 - 1) + 1);
 return randomNumber;
}
