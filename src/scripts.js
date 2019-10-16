$( document ).ready( () => {


$('.main__user').html(`${userDataClass.name} <br>
    ${userDataClass.email} <br>
    Friends: <a href='#' >${userDataClass.friends}</a>`);
$('.main__sleep').html(`<p>Sleep:</p>${sleepData[randomFitLitUser].date} <br> Hours Slept: ${sleepData[randomFitLitUser].hoursSlept} hours<br>
    Sleep Quality: ${sleepData[randomFitLitUser].sleepQuality}`);

$('.main__hydration').html(`<div>
  <p>Hydration: ${hydrationDataClass.numOunces} oz</p></div>`);

$('.main__activity').html(`<div><p>Steps: ${activityData[randomFitLitUser].numSteps} <br>
  Mins Active: ${activityData[randomFitLitUser].minutesActive} <br>
  Flights Stairs: ${activityData[randomFitLitUser].flightsOfStairs} </p></div>`);

  $('.friend-1').html(`<div class='friends'>${intFriend1.name} <br>
    <p>Stride Length: ${intFriend1.strideLength}</p></div>`);

  $('.friend-2').html(`<div class='friends'>${intFriend2.name} <br>
    <p>Stride Length: ${intFriend2.strideLength}</p></div>`);

  $('.friend-3').html(`<div class='friends'>${intFriend3.name} <br>
    <p>Strinde Length: ${intFriend3.strideLength}</p></div>`);


  // console.log(randomFitLitUser)


}); // end jquery

// https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
// clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
