$( document ).ready( () => {
  $('.main__user').html(`${userData[0].name} <br>
    ${userData[0].email} <br>
    Friends: ${userData[0].friends}`);

  console.log(hydrationData[0].numOunces)

$('.main__sleep').html(`${sleepData[0].date} <br> Hours Slept: ${sleepData[0].hoursSlept} hours<br>
    Sleep Quality: ${sleepData[0].sleepQuality}`);

$('.main__hydration').html(`Hydration: ${hydrationData[0].numOunces} oz`);

$('.main__activity').html(`Steps: ${activityData[0].numSteps} <br>
  Mins Active: ${activityData[0].minutesActive} <br>
  Flishts Stairs: ${activityData[0].flightsOfStairs}`);

// $('.main__friends').html(`${}`)

}); // end jquery

// activityData = [
//   {
//     "userID": 1,
//     "date": "2019/06/15",
//     "numSteps": 3577,
//     "minutesActive": 140,
//     "flightsOfStairs": 16
//   }




// var mainUser = document.querySelector('.main__user');
// var mainHydration = document.querySelector('.main__hydration');
// var mainSleep = document.querySelector('.main__sleep');
// var mainActivity = document.querySelector('.main__activity');
