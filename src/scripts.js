//instantiate users
//choose user
//Get user from
//Get user stuff and put it places
// const User = ('./User');


const data = ('../data/users');

var sidebarName = document.getElementById('sidebarName');
var stepGoalCard = document.getElementById('stepGoalCard');
var headerText = document.getElementById('headerText');
var userAddress = document.getElementById('userAddress');
var userEmail = document.getElementById('userEmail');
var userStridelength = document.getElementById('userStridelength');

function startApp() {
  let userList = [];
  makeUsers(userList);
  let userRepo = new UserRepo(userList);
  let userNow = getUserById(pickUser(), userList);
  addInfoToSidebar(userNow)
}

function makeUsers(array) {
  userData.forEach(function(dataItem) {
    let user = new User(dataItem);
    array.push(user);
  })
}

function pickUser() {
  // return array.sort(a, b) => (array[Math.floor(Math.random() * (a + 1))] - array[Math.floor(Math.random() * (b + 1))]);
  return Math.floor(Math.random() * 51);
}

function getUserById(id, array) {
  return array.find((user) => (user.id === id));
};

function addInfoToSidebar(user) {
  sidebarName.innerText = user.name;
  headerText.innerText = `${user.getFirstName()}'s Activity Tracker`;
  stepGoalCard.innerText = `Your daily step goal is ${user.dailyStepGoal}. The average daily step goal is`;
  userAddress.innerText = user.address;
  userEmail.innerText = user.email;
  userStridelength.innerText = `Your stridelength is ${user.strideLength} meters.`;
};

startApp();



console.log("Hello World");
