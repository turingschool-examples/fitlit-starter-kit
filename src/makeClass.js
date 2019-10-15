var randomFitLitUser = 0;
function getRandomId(min = 0, max = 50 ) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomFitLitUser = (Math.floor(Math.random() * max - min + 1) + min);
}
getRandomId(0, 50);
// classes instageated

let userDataClass = {};
let sleepDataClass = {};
let hydrationDataClass = {};
let activityDataClass = {};
let friend1 = {};
let friend2 = {};
let friend3 = {};


let randomUser = userData[randomFitLitUser];
let randomHydrationClass = hydrationData[randomFitLitUser];

function makeUserClass(user) {
  userDataClass = new User(user);
};
makeUserClass(randomUser);

let friendNum1 = randomUser.friends[0];
let intFriend1 = userData[friendNum1];

let friendNum2 = randomUser.friends[1];
let intFriend2 = userData[friendNum2];

let friendNum3 = randomUser.friends[2];
let intFriend3 = userData[friendNum3];

// function makeFriends(one) {
//   friend1 = new User(one);
// }
// makeFriends(intFriend1);

function makeHydrationClass(hydroClass) {
hydrationDataClass = new Hydration(hydroClass)
console.log(hydrationDataClass)
}

makeHydrationClass(randomHydrationClass);

// sending data to the DOM
