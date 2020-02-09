let userNameDisplay = document.querySelector('.nav-bar');
console.log(userNameDisplay);
let currentUser;
let allUsers;

window.onload = loadHandler;

function loadHandler() {
  loadUser()
  loadAllUsers()
  console.log(allUsers)
  displayUserInfo()
  console.log(allUsers.averageStepsAllUsers());
}

function loadUser() {
  shuffleUser(userData);
  currentUser = new User(userData[0]);
}

function loadAllUsers() {
  allUsers = new UserRepo(userData);
}

function displayUserInfo() {
  userNameDisplay.innerHTML = `
  <h1>Welcome to Activity Tracker!</h1>
  <h2 class = 'user-name'>Hello ${currentUser.returnUserName()}!</h2>
  <h2 class = 'user-step-goal'>Check Out Your Current Daily Step Goal: ${currentUser.dailyStepGoal}</h2>
  <h2 class = 'users-step-average'>All Users Step Average: ${allUsers.averageStepsAllUsers()}</h2>
  <h2 class = 'user-stride-length'>Here is your Current Stride Length:${currentUser.strideLength}</h2>`;
}

function shuffleUser(array) {
  array.sort(() => Math.random() - 0.5);
}
