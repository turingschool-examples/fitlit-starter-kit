console.log("Hello World");
const UserRepository = require("../src/user-repository");
const userData = require("../data/users");
const User = require("../src/user")
const Hydration = require("../src/hydration")
console.log(userData)
const globalRepo = new UserRepository(userData);
let currentUser = new User(globalRepo.returnUser(1));
currentHydration = new Hydration(currentUser);
// currentUser.findHydrationData();

console.log(currentUser);

// $(document).ready(function(){
//     $(".user-name").text(currentUser.returnFirstName())
//     $(".user-steps").text(currentUser.dailyStepGoal)
//     $(".avg-step-goal").text(globalRepo.returnAvgStepGoal())
//     $("li").eq(0).text(currentUser.email)
//     $("li").eq(1).text(currentUser.dailyStepGoal)
//     $("li").eq(2).text(currentUser.strideLength)
//     $("li").eq(3).text(currentUser.friends)
// });