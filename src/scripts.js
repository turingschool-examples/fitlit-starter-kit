console.log("Hello World");

const globalRepo = new UserRepository(userData);
let currentUser = new User(globalRepo.returnUser(getRandomNumber()));
let currentHydration = new Hydration(hydrationData, currentUser.id);
console.log(currentHydration)


// console.log(currentHydration);

$(document).ready(function(){
    $(".user-name").text(currentUser.returnFirstName())
    $(".user-steps").text(currentUser.dailyStepGoal)
    $(".avg-step-goal").text(globalRepo.returnAvgStepGoal())
    $("li").eq(0).text(currentUser.email)
    $("li").eq(1).text(currentUser.dailyStepGoal)
    $("li").eq(2).text(currentUser.strideLength)
    $("li").eq(3).text(currentUser.friends)
    $('.main__section--daily-intake').text(currentHydration.returnIntakeByDay("2019/06/23"))
    $('.main__section--average-intake').text(currentHydration.returnDailyAverage())
    $('.main__section--hydration-canvas').text(currentHydration.returnWeekIntake())
});

function getRandomNumber() {
    let randNum = (Math.random() * 50) + 1;
    randNum = Math.floor(randNum);
    console.log(randNum);
    return randNum;
}