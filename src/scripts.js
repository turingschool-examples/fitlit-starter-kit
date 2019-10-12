$( document ).ready( () => {
  $('.main__user').html(`${userData[0].name} <br>
    ${userData[0].email} <br>
    Friends: ${userData[0].friends}`);

  console.log(hydrationData[0].numOunces)

$('.main__sleep').html(`${sleepData[0].date} <br> Hours Slept: ${sleepData[0].hoursSlept} hours<br>
    Sleep Quality: ${sleepData[0].sleepQuality}`);

$('.main__hydration').html(`<div>
  <p>Hydration: ${hydrationData[0].numOunces} oz</p></div>`);

$('.main__activity').html(`<div><p>Steps: ${activityData[0].numSteps} <br>
  Mins Active: ${activityData[0].minutesActive} <br>
  Flishts Stairs: ${activityData[0].flightsOfStairs} </p></div>`);

// $('.main__friends').html(`${}`)

}); // end jquery






// var mainUser = document.querySelector('.main__user');
// var mainHydration = document.querySelector('.main__hydration');
// var mainSleep = document.querySelector('.main__sleep');
// var mainActivity = document.querySelector('.main__activity');
