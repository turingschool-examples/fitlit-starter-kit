console.log("Hello World");
// const userRepository = require("../src/user-repository");

globalRepo = new UserRepository(userData);
currentUser = new User(globalRepo.returnUser(1));
console.log(currentUser);

$(document).ready(function(){
    $(".user-name").text(currentUser.returnFirstName())
    $(".user-steps").text(currentUser.dailyStepGoal)
    $(".avg-step-goal").text(globalRepo.returnAvgStepGoal())
    $("li").eq(0).text(currentUser.email)
    $("li").eq(1).text(currentUser.dailyStepGoal)
    $("li").eq(2).text(currentUser.strideLength)
    $("li").eq(3).text(currentUser.friends)


});