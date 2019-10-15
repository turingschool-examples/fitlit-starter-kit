var randomFitLitUser = 0;
function getRandomId(min = 0, max = 50 ) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomFitLitUser = (Math.floor(Math.random() * max - min + 1) + min);
  console.log(randomFitLitUser)
}
getRandomId(0, 50);
// classes instageated

let userDataClass = {};
let sleepDataClass = {};
let hydrationDataClass = {};
let activityDataClass = {};

let randomUser = userData[randomFitLitUser];
let randomSleepData = sleepData[randomFitLitUser];
let randomHydrationClass = hydrationData[randomFitLitUser];
let activityClass = activityData[randomFitLitUser];

function makeUserClass(user) {
  userDataClass = new User(user);
};

function makeHydrationClass(hydroClass) {
hydrationDataClass = new Hydration(hydroClass)
console.log(hydrationDataClass)
}

makeUserClass(randomUser);
makeHydrationClass(randomHydrationClass);

// sending data to the DOM
