console.log("Hello World");

const globalRepo = new UserRepository(userData);
let currentUser = new User(globalRepo.returnUser(getRandomNumber()));
let currentHydration = new Hydration(hydrationData, currentUser.id);
console.log(currentHydration);
let activity = new Activity(activityData, getRandomNumber());
let activityDay = activity.returnDay("2019/06/23")


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
    $('.main__section--activity span').eq(0).text(activityDay.numSteps)
    $('.main__section--activity span').eq(1).text(activity.returnDailyMiles("2019/06/23"))
    $('.main__section--activity span').eq(2).text(activityDay.minutesActive)
    $('.main__section--activity span').eq(3).text(activityDay.flightsOfStairs)
    $('.main__section--activity span').eq(4).text(activity.returnEmpireCount())
});

function getRandomNumber() {
    let randNum = (Math.random() * 50) + 1;
    randNum = Math.floor(randNum);
    console.log(randNum);
    return randNum;
}