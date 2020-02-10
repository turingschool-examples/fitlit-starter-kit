let userNameDisplay = document.querySelector('.nav-bar');
let hydrationDisplay = document.querySelector('.hydration-section');
let personalDisplay = document.querySelector('.personal-info');
let friendDisplay = document.querySelector('.friends-list')
let currentUser;
let allUsers;
let allHydration;

window.onload = loadHandler;

function loadHandler() {
  loadUser()
  loadAllUsers()
  displayUserInfo()
  displayFriends()
  displayPersonalInfo()
  loadHydrationData()
  displayHydrationInfo()
}

function loadUser() {
  shuffleUser(userData);
  currentUser = new User(userData[0]);
}

function loadAllUsers() {
  allUsers = new UserRepo(userData);
}

function loadHydrationData() {
  allHydration = new Hydration(hydrationData, currentUser.id)
}

function displayUserInfo() {
  userNameDisplay.innerHTML = `
  <h2>Welcome to Activity Tracker!</h2>
  <h3 class = 'user-name'>Hello! ${currentUser.returnUserName()}</h3>
  <h3 class = 'user-step-goal'>Step Goal: ${currentUser.dailyStepGoal}</h3>
  <h3 class = 'users-step-average'>All Users Step Goal Average: ${allUsers.averageStepsAllUsers()}</h3>
  <h3 class = 'user-stride-length'>Stride Length: ${currentUser.strideLength}</h3>`
}

function displayPersonalInfo() {
  personalDisplay.innerHTML = `
  <h2>Personal Info</h2>
  <h3>Email: ${currentUser.email}</h3>
  <h3>Address: ${currentUser.address}</h3>  `
}

function displayFriends() {
  console.log(currentUser.findFriendsNames(userData))

  friendDisplay.innerHTML = `
  <h2>Personal Info</h2>
  <h3>Friends: ${currentUser.findFriendsNames(userData)}</h3>
  `
}

function displayHydrationInfo() {
 hydrationDisplay.innerHTML = `
 <h2>Hydration Data</h2>
 <h3>-Average Fluid Consumed All Time: ${allHydration.fluidConsumedALlTime(currentUser.id)}</h3>
 <h3>-Fluid consumed today: ${allHydration.fluidConsumedByDate("2019/06/16")}</h3>
 <h3>-Fluid consumed over a week: ${allHydration.fluidConsumededWeekly(currentUser.id)}</h3>`
}

function shuffleUser(array) {
  array.sort(() => Math.random() - 0.5);
}
