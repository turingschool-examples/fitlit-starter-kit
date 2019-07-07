console.log("Hello World");

const globalRepo = new UserRepository(userData);
let currentUser = new User(globalRepo.returnUser(getRandomNumber()));
let currentHydration = new Hydration(hydrationData, currentUser.id);
let currentSleep = new Sleep(sleepData, currentUser.id);
let sleepRepo = new SleepRepository(sleepData)
// console.log(currentSleep.returnWeekHours("2019/06/23"))
// console.log(currentHydration);
let activity = new Activity(activityData, getRandomNumber());
let activityDay = activity.returnDay("2019/06/23");
let activityRepo = new ActivityRepository(activityData)
console.log(activityRepo)

// console.log(currentHydration);

$(document).ready(function() {

  var $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    columnWidth: 50,
    rowHeight: 40,
    gutter: 0,
  });

  var $draggables = $('.grid-item').draggabilly({
    // contain to parent element
    containment: true
  });

  // make all grid-items draggable
  $grid.find('.grid-item').each( function( i, gridItem ) {
    var draggie = new Draggabilly( gridItem );
    // bind drag events to Packery
    $grid.packery( 'bindDraggabillyEvents', draggie );
  });

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
  $('.main__section--daily-sleep-hours').text(currentSleep.returnDayHours("2019/06/23"))
  $('.main__section--daily-sleep-quality').text(currentSleep.returnDayQual("2019/06/23"))
  $('.main__section--week-sleep-hours').text(currentSleep.returnWeekHours("2019/06/23"))
  $('.main__section--week-sleep-quality').text(currentSleep.returnWeekHours("2019/06/23"))
  $('.main__section--average-sleep-hours').text(currentSleep.returnAllTimeAvgHours())
  $('.main__section--average-sleep-quality').text(currentSleep.returnAllTimeAvgQual())
  $('.main__section--activity--steps span').text(activityDay.numSteps.toLocaleString())
  $('.main__section--activity--miles span').text(activity.returnDailyMiles("2019/06/23"))
  $('.main__section--activity--minutes span').text(activityDay.minutesActive)
  $('.main__section--activity--flights span').text(activityDay.flightsOfStairs)
  $('.main__section--activity--empire span').text(activity.returnEmpireCount())
  $('.main__section--sleep--last-night span').first().text(currentSleep.returnDayHours("2019/06/23"))
  $('.main__section--sleep--last-night span').eq(1).text(currentSleep.returnDayQual("2019/06/23"))
  $('.main__section--sleep--averages span').first().text(currentSleep.returnAllTimeAvgHours())
  $('.main__section--sleep--averages span').eq(1).text(currentSleep.returnAllTimeAvgQual())
  $('.main__section--activity--world table tr td').eq(1).text(activityDay.numSteps.toLocaleString())
  $('.main__section--activity--world table tr td').eq(2).text(activityRepo.returnAvgSteps("2019/06/23").toLocaleString())
  $('.main__section--activity--world table tr td').eq(4).text(activityDay.minutesActive)
  $('.main__section--activity--world table tr td').eq(5).text(activityRepo.returnAvgMins("2019/06/23"))
  $('.main__section--activity--world table tr td').eq(7).text(activityDay.flightsOfStairs)
  $('.main__section--activity--world table tr td').eq(8).text(activityRepo.returnAvgStairs("2019/06/23"))
  $('.main__section--sleep--worst span').first().text(currentSleep.returnWorstDay("2019/06/23").date)
  $('.main__section--sleep--worst span').eq(1).text(currentSleep.returnWorstDay("2019/06/23").sleepQuality)
  $('.main__section--hydration--today span').text(currentHydration.returnIntakeByDay("2019/06/23"))


});

function getRandomNumber() {
  let randNum = (Math.random() * 50) + 1;
  randNum = Math.floor(randNum);
  console.log(randNum);
  return randNum;
}