llet userNameDisplay = document.querySelector('.nav-bar');
let hydrationDisplay = document.querySelector('.hydration-section')
let currentUser;
let allUsers;
let allHydration;

window.onload = loadHandler;

function loadHandler() {
  loadUser()
  loadAllUsers()
  displayUserInfo()
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
  <h1>Welcome to Activity Tracker!</h1>
  <h2 class = 'user-name'>Hello! ${currentUser.returnUserName()}</h2>
  <h2 class = 'user-step-goal'>Step Goal: ${currentUser.dailyStepGoal}</h2>
  <h2 class = 'users-step-average'>All Users Step Goal Average: ${allUsers.averageStepsAllUsers()}</h2>
  <h2 class = 'user-stride-length'>Stride Length:${currentUser.strideLength}</h2>`
}

function displayHydrationInfo() {
 hydrationDisplay.innerHTML = `
 <h2>Hydration Data</h2>
 <h3>-Average Fluid Consumed All Time: ${allHydration.fluidConsumedALlTime(currentUser.id)}</h3>
 <h3>-Fluid consumed today:</h3>
 <h3>-Fluid consumed over a week: ${allHydration.fluidConsumededWeekly(currentUser.id)}</h3>`
}

function shuffleUser(array) {
  array.sort(() => Math.random() - 0.5);
}
