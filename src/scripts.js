console.log("Hello World");

let randomUser = Math.floor(Math.random() * 50 ) + 1
// let randomUserId = randomUser + 1
let userRepository = new UserRepository(userData);
let hydration = new Hydration(hydrationData);
let sleep = new Sleep(sleepData);
let sleepRepository = new SleepRepository(sleepData);
let activity = new Activity(activityData);
let activityRepository = new ActivityRepository(activityData);
let activeUser = new User(userData[randomUser]);


$(document).ready(function(){
  $('.first-name').text(activeUser.displayUsersFirstName())
  $('#personal-stride').text(userData[randomUser].strideLength)
  $('#personal-email').text(userData[randomUser].email)
})

console.log('userData', userData[randomUser].strideLength)
console.log(randomUser)
// console.log(randomUserId)
console.log(userRepository[randomUser])








