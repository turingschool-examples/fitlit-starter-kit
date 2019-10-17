$( document ).ready( () => {

$('.main__user').html(`<h2>${userDataClass.name} </h2>
    Address: ${userDataClass.address} <br>
    Email: ${userDataClass.email} <br>
    Daily Step Goal: ${userDataClass.dailyStepGoal} steps <br>
    Stride Length: ${userDataClass.strideLength} <br>
    Friends: ${userDataClass.friends} `);
$('.main__sleep').html(`<p>Sleep:</p>${sleepData[randomFitLitUser].date} <br> Hours Slept: ${sleepData[randomFitLitUser].hoursSlept} hours<br>
    Sleep Quality: ${sleepData[randomFitLitUser].sleepQuality}`);

$('.main__hydration').html(`<div>
  <p>Date: ${hydrationDataClass.hydrationData.date} <br>
  Hydration: ${hydrationDataClass.hydrationData.numOunces} oz <br>
  Weekly Average: ${hydrationDataClass.weeklyAverageHydo} oz</p></div>`);

$('.main__activity').html(`<div><p>Steps: ${activityData[randomFitLitUser].numSteps} <br>
  Mins Active: ${activityData[randomFitLitUser].minutesActive} <br>
  Flights Stairs: ${activityData[randomFitLitUser].flightsOfStairs} </p></div>`);

  $('.friend-1').html(`<div class='friends'>${intFriend1.name} <br>
    <p>Stride Length: ${intFriend1.strideLength}</p></div>`);

  $('.friend-2').html(`<div class='friends'>${intFriend2.name} <br>
    <p>Stride Length: ${intFriend2.strideLength}</p></div>`);

  $('.friend-3').html(`<div class='friends'>${intFriend3.name} <br>
    <p>Strinde Length: ${intFriend3.strideLength}</p></div>`);

}); // end jquery
