// var Chart = require('chart.js');

$( document ).ready(function() {
let userRepo = new UserRepository(userData, 1)
let user = new User(userRepo.currentUser)

let hydrationRepo = new HydrationRepository(hydrationData, 1)
let hydration = new Hydration(hydrationRepo.currentUser)

let sleepRepo = new SleepRepository(sleepData)
let sleep = new Sleep(sleepRepo.currentUser)

$('span.user-name').html(user.returnFirstName());
$('.user').append("<div class='user-card' aria-expanded='true' hidden></div>")
$('img.user-image').click(function() {
$('div.user-card').toggle();
})
$('div.user-card').append("<h6> Name: <span class='name-span'></span></h6><h6>Address: <span class='address-span'></span></h6><h6> Email: <span class='email-span'></span></h6><h6>Daily Step Goal: <span class ='goal-span'></span></h6><h6>Average Step Goal: <span class ='av-goal-span'></span></h6>")
$('span.name-span').text(`${user.user.name}`)
$('span.address-span').text(`${user.user.address}`)
$('span.email-span').text(`${user.user.email}`)
$('span.goal-span').text(`${user.user.dailyStepGoal}`)
$('span.av-goal-span').text(userRepo.findAverageStepGoal())


$('.activity').append("<h4>Your Steps Today: <span class='steps-today'></span></h3")
$('.activity').append("<h4>Your Minutes Active Today: <span class='steps-today'></span></h3")
$('.activity').append("<h4>Your Miles Walked Today: <span class='miles-today'></span></h3")
$('.activity').append("<h4>How You Stack Up: <span class='activity-compare-today'></span></h3")
$('.activity').append("<h4>Weekly Stats: <span class='weekly-stats'></span></h3")

//For a user, the number of steps for the latest day
//For a user, the number minutes active for the latest day
//For a user, the distance they have walked (in miles) for the latest day based on their step count
//How their number of steps, minutes active, and flights of stairs climbed compares to all users for the latest day

$('.hydration').append("<h4>Your H2O Intake Today: <span class='water-today'></span> oz</h4")
$('.hydration').append("<h4>Your H2O Intake This Week: <span class='water-dayone'></span></h4") //put in a chart
$('.water-today').text(hydration.findFluidOzByDay('15/05/2019'))
$('.water-dayone').text((hydration.findWeeklyWater('15/05/2019')[0]))
$('.water-daytwo').text((hydration.findWeeklyWater('15/05/2019')[0]))


//A display to show how much water they have consumed today (these displays are often called “widgets” in the FE tech world)
//A display to show much water they have consumed each day over the course of the latest week

$('.sleep').append("<h4>Your Hours of Sleep Today: <span class='sleep-today'> </span></h4")
$('.sleep').append("<h4>Your Quality of Sleep Today: <span class='sleep-quality-today'> </span></h4")
$('.sleep').append("<h4>Your Sleep This Week: <span class='sleep-week'></span></h4") // put in chart
$('.sleep').append("<h4>Your Average Tracked Sleep: <span class='sleep-average'></span></h4") 
// $('.sleep-week').append(sleepChart)//put in chart

// const sleepCanvas = $("#sleep-chart");

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;

// const sleepQuality = {
//   label: 'Sleep Quality',
//   data: [5.5, 3.4],
//   backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)'],
//   borderColor:['rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)'],
//   borderWidth: 1,
// };

// const sleepHours = {
//   label: 'Sleep Hours',
//   data: [3.7, 5.7],
//   backgroundColor: ['rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)'],
//   borderColor:['rgba(54, 162, 235, 1)','rgba(54, 162, 235, 1)'],
//   borderWidth: 1,
// };

// const sleepData = {
//   labels: ["Average", "You"],
//   datasets: [sleepQuality, sleepHours]
// };


// const sleepChart = new Chart(sleepCanvas, {
//   type: 'bar',
//   data: sleepData,
//     options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero: true
//         }
//       }]
//     }
//   }
// });

//For a user, their sleep data for the latest day (hours slept and quality of sleep)
//For a user, their sleep data over the course of the latest week (hours slept and quality of sleep)
//For a user, their all-time average sleep quality and all-time average number of hours slept

});