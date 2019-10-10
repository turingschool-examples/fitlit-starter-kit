//instantiate users
//choose user
//Get user from
//Get user stuff and put it places
// const User = ('./User');


const data = ('../data/users');
const hydration = ('../data/hydration')

var sidebarName = document.getElementById('sidebarName');
var stepGoalCard = document.getElementById('stepGoalCard');
var headerText = document.getElementById('headerText');
var userAddress = document.getElementById('userAddress');
var userEmail = document.getElementById('userEmail');
var userStridelength = document.getElementById('userStridelength');
var friendList = document.getElementById('friendList');
var hydrationToday = document.getElementById('hydrationToday');
var hydrationThisWeek = document.getElementById('hydrationThisWeek');

function startApp() {
  let userList = [];
  makeUsers(userList);
  let userRepo = new UserRepo(userList);
  let hydrationRepo = new Hydration(hydrationData);
  let today = "2019/06/15"
  var userNowId = pickUser();
  let userNow = getUserById(userNowId, userRepo);
  addInfoToSidebar(userNow, userRepo);
  addHydrationInfo(userNowId, hydrationRepo, today);
}

function makeUsers(array) {
  userData.forEach(function(dataItem) {
    let user = new User(dataItem);
    array.push(user);
  })
}

function pickUser() {
  return Math.floor(Math.random() * 51);
}

function getUserById(id, listRepo) {
  // return array.find((user) => (user.id === id));
  return listRepo.getDataFromID(id);
};

function addInfoToSidebar(user, userStorage) {
  sidebarName.innerText = user.name;
  headerText.innerText = `${user.getFirstName()}'s Activity Tracker`;
  stepGoalCard.innerText = `Your daily step goal is ${user.dailyStepGoal}. The average daily step goal is ${userStorage.calculateAverageStepGoal()}`;
  userAddress.innerText = user.address;
  userEmail.innerText = user.email;
  userStridelength.innerText = `Your stridelength is ${user.strideLength} meters.`;
  friendList.insertAdjacentHTML('afterBegin', makeFriendHTML(user, userStorage))
};

function makeFriendHTML(user, userStorage) {
  return user.getFriendsNames(userStorage).map((friendName) => (`<li>${friendName}</li>`));
}
//
function addHydrationInfo(id, hydrationInfo, dateString) {
  hydrationToday.innerText = `You drank ${hydrationInfo.getHydrationByDate(id, dateString)} oz water today. Your average water intake is ${hydrationInfo.getTotalAverageHydration(id)} oz per day`;
  // hydrationThisWeek.innerText =
}

startApp();



console.log("Hello World");
