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
  userNameDisplay.innerHTML = 
  `<h1>Welcome to Activity Tracker!</h1>
  <h2 class = 'user-name'>Hello ${currentUser.returnUserName()}!</h2>
  <div class = 'user-step-info'>
  <h4 class = 'user-step-goal'>Check Out Your Current Daily Step Goal: ${currentUser.dailyStepGoal}</h2>
  <h4 class = 'user-stride-length'>Here is your Current Stride Length:${currentUser.strideLength}</h2>
  <h4 class = 'users-step-average'>All Users Step Average: ${allUsers.averageStepsAllUsers()}</h2>
  </div>`
}

function displayPersonalInfo() {
  personalDisplay.innerHTML = `
  <h2>Personal Info</h2>
  <h3>Email: ${currentUser.email}</h3>
  <h3>Address: ${currentUser.address}</h3>  `
}

function displayFriends() {
  let homies = currentUser.findFriendsNames(userData);
  console.log(homies)
  homies.forEach(homie => {
  friendDisplay.innerHTML +=`
  <h3>Name: ${homie.name}</h3>
  <h3>steps: ${homie.stepGoal}</h3>  `
  })
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
