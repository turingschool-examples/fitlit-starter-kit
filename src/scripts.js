$( document ).ready( () => {

  var randomFitLitUser = '';
  function getRandomId(min = 1, max = 50 ) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomFitLitUser = (Math.floor(Math.random() * max - min + 1) + min);
    console.log(randomFitLitUser)
  }
  getRandomId(1, 50);

$('.main__user').html(`${userData[randomFitLitUser].name} <br>
    ${userData[randomFitLitUser].email} <br>
    Friends: ${userData[randomFitLitUser].friends}`);
$('.main__sleep').html(`${sleepData[randomFitLitUser].date} <br> Hours Slept: ${sleepData[randomFitLitUser].hoursSlept} hours<br>
    Sleep Quality: ${sleepData[randomFitLitUser].sleepQuality}`);

$('.main__hydration').html(`<div>
  <p>Hydration: ${hydrationData[randomFitLitUser].numOunces} oz</p></div>`);

$('.main__activity').html(`<div><p>Steps: ${activityData[randomFitLitUser].numSteps} <br>
  Mins Active: ${activityData[randomFitLitUser].minutesActive} <br>
  Flishts Stairs: ${activityData[randomFitLitUser].flightsOfStairs} </p></div>`);

// $('.main__friends').html(`${}`)



}); // end jquery






// var mainUser = document.querySelector('.main__user');
// var mainHydration = document.querySelector('.main__hydration');
// var mainSleep = document.querySelector('.main__sleep');
// var mainActivity = document.querySelector('.main__activity');
