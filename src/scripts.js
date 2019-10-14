//instantiate users
//choose user
//Get user from
//Get user stuff and put it places
// const User = ('./User');


const data = ('../data/users');
const hydration = ('../data/hydration');
const sleep = ('..data/sleep');

var sidebarName = document.getElementById('sidebarName');
var stepGoalCard = document.getElementById('stepGoalCard');
var headerText = document.getElementById('headerText');
var userAddress = document.getElementById('userAddress');
var userEmail = document.getElementById('userEmail');
var userStridelength = document.getElementById('userStridelength');
var friendList = document.getElementById('friendList');
var hydrationToday = document.getElementById('hydrationToday');
var hydrationThisWeek = document.getElementById('hydrationThisWeek');
var hydrationEarlierWeek = document.getElementById('hydrationEarlierWeek');
var sleepToday = document.getElementById('sleepToday');
var sleepThisWeek = document.getElementById('sleepThisWeek');
var sleepEarlierWeek = document.getElementById('sleepEarlierWeek');

function startApp() {
  let userList = [];
  makeUsers(userList);
  let userRepo = new UserRepo(userList);
  let hydrationRepo = new Hydration(hydrationData);
  let sleepRepo = new Sleep(sleepData);
  var userNowId = pickUser();
  let userNow = getUserById(userNowId, userRepo);
  let today = makeToday(userRepo, userNowId, hydrationData);
  let randomHistory = makeRandomDate(userRepo, userNowId, hydrationData);
  addInfoToSidebar(userNow, userRepo);
  addHydrationInfo(userNowId, hydrationRepo, today, userRepo, randomHistory);
  addSleepInfo(userNowId, sleepRepo, today, userRepo, randomHistory);
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
  return user.getFriendsNames(userStorage).map(friendName => `<li>${friendName}</li>`).join('');
}

function makeToday(userStorage, id, dataSet) {
  var sortedArray = userStorage.makeSortedUserArray(id, dataSet);
  console.log(sortedArray)
  return sortedArray[0].date;
}

function makeRandomDate(userStorage, id, dataSet) {
  var sortedArray = userStorage.makeSortedUserArray(id, dataSet);
  return sortedArray[Math.floor(Math.random() * sortedArray.length + 1)].date

}

function addHydrationInfo(id, hydrationInfo, dateString, userStorage, laterDateString) {
  hydrationToday.innerText = `You drank ${hydrationInfo.calculateDailyOunces(id, dateString)} oz water today. Your average water intake is ${hydrationInfo.calculateAverageOunces(id)} oz per day`;
  hydrationThisWeek.insertAdjacentHTML('afterBegin', makeHydrationHTML(id, hydrationInfo, userStorage,  hydrationInfo.calculateFirstWeekOunces(userStorage, id)));
  hydrationEarlierWeek.insertAdjacentHTML('afterBegin', makeHydrationHTML(id, hydrationInfo, userStorage, hydrationInfo.calculateRandomWeekOunces(laterDateString, id, userStorage)));
}

function makeHydrationHTML(id, hydrationInfo, userStorage, method) {
  return method.map(drinkData => `<li>On ${drinkData}oz water</li>`).join('');
}

function addSleepInfo(id, sleepInfo, dateString, userStorage, laterDateString) {
  sleepToday.innerText = `You slept ${sleepInfo.calculateDailySleep(id, dateString)} hours today. Your average night's sleep is ${sleepInfo.calculateAverageSleep(id)} oz per day. Your sleep quality was ${sleepInfo.calculateDailySleepQuality(id, dateString)}.Your average sleep quality is ${sleepInfo.calculateAverageSleepQuality(id)}. The average user's sleep quality is ${sleepInfo.calculateAllUserSleepQuality()}.`;
  sleepThisWeek.insertAdjacentHTML('afterBegin', makeSleepHTML(id, sleepInfo, userStorage, sleepInfo.calculateWeekSleep(dateString, id, userStorage)));
  sleepEarlierWeek.insertAdjacentHTML('afterBegin', makeSleepHTML(id, sleepInfo, userStorage, sleepInfo.calculateWeekSleep(laterDateString, id, userStorage)));
}

function makeSleepHTML(id, sleepInfo, userStorage, method) {
  return method.map(sleepData => `<li>On ${sleepData}hours of sleep</li>`).join('');
}

function makeSleepQualityHTML(id, sleepInfo, userStorage, method) {
  return method.map(sleepQualityData => `<li>On ${sleepQualityData}/5 quality of sleep</li>`).join('');
}

startApp();



console.log("Hello World");
