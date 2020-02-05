const randomUser = Math.ceil(Math.random() * 50);
const userRepository = new UserRepository(userData);
const user = new User(userRepository.getUserData(randomUser));


function populateUserInfo() {
  document.getElementById("user-name").innerText = user.returnUserFirstName();
  document.getElementById('user-address').innerText = user.address;
  document.getElementById('user-email').innerText = user.email;
  document.getElementById('user-stride').innerText = user.strideLength;
  document.getElementById('user-step-goal').innerText = user.dailyStepGoal;
  document.getElementById('user-friends').innerText = user.findFriendsNames(userData);
}

populateUserInfo();

function populateCurrentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  document.getElementById('current-date').innerText = today;
}

function calcStepPercentage() {
  document.getElementById('step-goal-comparison').innerText = user.dailyStepGoal;
  document.getElementById('all-user-step-goal').innerText = userRepository.calcAverageStepGoal();
}

calcStepPercentage();

populateCurrentDate();

//
