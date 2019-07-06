console.log("Hello World");

let randomUser = Math.floor(Math.random() * 50 )+ 1
let userRepository = new UserRepository(userData);
let hydration = new Hydration(hydrationData);
let sleep = new Sleep(sleepData);
let sleepRepository = new SleepRepository(sleepData);
let activity = new Activity(activityData);
let activityRepository = new ActivityRepository(activityData);
let activeUser = new User(userData[randomUser]);
// console.log(activeUser)
// let randomNumber 

$(document).ready(function(){
  // generateRandomNumber();
  $(".first-name").text(activeUser.displayUsersFirstName())
})

console.log(randomUser)

// function generateRandomNumber() {
//   console.log('in the function')
//  let randomNumber = Math.floor(Math.random() * 50) + 1 
//   console.log(randomNumber)
//   return randomNumber
// }






