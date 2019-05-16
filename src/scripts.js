$(document).ready(function() {
const ourUser = 5;
const date = '16/05/2019'
let userRepo = new UserRepository(userData, ourUser)
let user = new User(userRepo.currentUser)

let userRepo2 = new UserRepository(userData, 5)
let user2 = new User(userRepo2.currentUser)
let activity2 = new Activity(activityData,userData[4], 5)
let userRepo3 = new UserRepository(userData, 7)
let user3 = new User(userRepo3.currentUser)
let activity3 = new Activity(activityData,userData[6], 7)
let userRepo4 = new UserRepository(userData, 10)
let user4 = new User(userRepo4.currentUser)
let activity4 = new Activity(activityData,userData[9], 10)


let hydrationRepo = new HydrationRepository(hydrationData, ourUser)
let hydration = new Hydration(hydrationRepo.currentUser)

let sleepRepo = new SleepRepository(sleepData, ourUser)
let sleep = new Sleep(sleepData)

let activityRepo = new ActivityRepository(activityData)
let activity = new Activity(activityData, userData[0], ourUser)

//Header and Card
$('.user').prepend("<div class='user-card' aria-expanded='true' hidden></div>")
$('span.user-name').html(user.returnFirstName());
$('img.user-image').click(function() {
$('div.user-card').slideToggle('slow');
})
$('div.user-card').append("<h6> Name: <span class='name-span user-info'></span></h6><h6>Address: <span class='address-span user-info'></span></h6><h6> Email: <span class='email-span user-info'></span></h6><h6>Daily Step Goal: <span class ='goal-span user-info'></span></h6><h6>Average Steps: <span class ='av-goal-span user-info'></span></h6>")
$('span.name-span').text(`${user.user.name}`)
$('span.address-span').text(`${user.user.address}`)
$('span.email-span').text(`${user.user.email}`)
$('span.goal-span').text(`${user.user.dailyStepGoal}`)
$('span.av-goal-span').text(userRepo.findAverageStepGoal())

//Friends Challenge Card
$('.user').append("<div class='friends' aria-expanded='true' hidden></div>")
$('h2.friend-tag').click(function() {
  $('.friends').slideToggle('slow');
  })

  $('.friends').append("<h6> You have <span class='you'></span> steps this week</h6>")
  $('.friends').append("<h6><span class='friend-1'></span> has <span class='steps-1'></span> steps this week</h6>")
  $('.friends').append("<h6><span class='friend-2'></span> has <span class='steps-2'></span> steps this week</h6>")
  $('.friends').append("<h6><span class='friend-3'></span> has <span class='steps-3'></span> steps this week</h6>")
  $('span.you').text(activity.findStepsForWeek(date))
  $('span.friend-1').html(user2.returnFirstName());
  $('span.steps-1').text(activity2.findStepsForWeek(date))
  $('span.friend-2').html(user3.returnFirstName());
  $('span.steps-2').text(activity3.findStepsForWeek(date))
  $('span.friend-3').html(user4.returnFirstName());
  $('span.steps-3').text(activity4.findStepsForWeek(date))



//Activity
$('.activity').append("<h4>Your Steps Today: <span class='steps-today'></span></h4>")
$('.activity').append("<h4>Your Minutes Active Today: <span class='mins-today'></span></h4>")
$('.activity').append("<h4>Your Miles Walked Today: <span class='miles-today'></span></h4>")
$('.activity').append("<h4>Your Calories Burned Today: <span class='calories'></span></h4>")
$('.activity').append("<h4>Your Steps:<span class='stack-steps'></span> Average: <span class='avg-steps'></span></h4>")
$('.activity').append("<h4>Your Flights of Stairs: <span class='stack-stairs'></span> Average: <span class='avg-stairs'></span></h4>")
$('.activity').append("<h4>Your Activity Minutes: <span class='stack-mins'></span> Average: <span class='avg-mins'></span></h4>")
$('.steps-today').text(activity.findStepsByDay(date))
$('.mins-today').text(activity.findMinutesActiveByDay(date))
$('.miles-today').text(activity.findMilesWalkedByDay(date))
$('.calories').text(activity.findCaloriesBurnedByDay(date))
$('.stack-steps').text(activity.findStepsByDay(date))
$('.avg-steps').text(activityRepo.findAvgSteps(date))
$('.stack-stairs').text(activity.findStairsByDay(date))
$('.avg-stairs').text(activityRepo.findAvgStairsClimbed(date))
$('.stack-mins').text(activity.findMinutesActiveByDay(date))
$('.avg-mins').text(activityRepo.findAvgActivity(date))
flightsDayOne = activity.findStairsByDay(date)
flightsDayTwo = activity.findStairsByDay('15/05/2019')
flightsDayThree = activity.findStairsByDay('14/05/2019')
flightsDayFour = activity.findStairsByDay('13/05/2019')
flightsDayFive = activity.findStairsByDay('12/05/2019')
flightsDaySix = activity.findStairsByDay('11/05/2019')
flightsDaySeven = activity.findStairsByDay('10/05/2019')
milesDaySeven = activity.findMilesWalkedByDay(date)
milesDaySix = activity.findMilesWalkedByDay('15/05/2019')
milesDayFive = activity.findMilesWalkedByDay('14/05/2019')
milesDayFour = activity.findMilesWalkedByDay('13/05/2019')
milesDayThree = activity.findMilesWalkedByDay('12/05/2019')
milesDayTwo = activity.findMilesWalkedByDay('11/05/2019')
milesDayOne = activity.findMilesWalkedByDay('10/05/2019')
actDaySeven = activity.findHoursActiveByDay(date)
actDaySix = activity.findHoursActiveByDay('15/05/2019')
actDayFive = activity.findHoursActiveByDay('14/05/2019')
actDayFour = activity.findHoursActiveByDay('13/05/2019')
actDayThree = activity.findHoursActiveByDay('12/05/2019')
actDayTwo = activity.findHoursActiveByDay('11/05/2019')
actDayOne = activity.findHoursActiveByDay('10/05/2019')
//Make a metric of your own! Document it, calculate it, and display it.

new Chart(document.getElementById("activity-chart"), {
  type: 'bar',
  data: {
    labels: ["Day One", "Day Two", "Day Three", "Day Four", "Day Five", "Day Six", "Day Seven"],
    datasets: [
      {
        label: "Flights of Stairs",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2", "#3cba9f"],
        data: [flightsDaySeven, flightsDaySix, flightsDayFive, flightsDayFour, flightsDayThree, flightsDayTwo, flightsDayOne]
      },
       {
        label: "Miles Walked",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2", "#3cba9f"],
        data: [milesDaySeven, milesDaySix, milesDayFive, milesDayFour, milesDayThree, milesDayTwo, milesDayOne]
      },
      {
        label: "Activity(hours)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2", "#3cba9f"],
        data: [actDaySeven, actDaySix, actDayFive, actDayFour, actDayThree, actDayTwo, actDayOne]
      } 
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Weekly Activity Wrap-Up',
      fontColor: "white",
      fontSize: 16,
    },
      scales: {
      xAxes: [{
          ticks: {
              fontColor: "white",
              fontSize: 8,
            }
          }],
        yAxes: [{
            ticks: {
                fontColor: "white",
                fontSize: 10,
                maxTicksLimit: 4,
                min: 0,
                max: 40,
                stepSize: 10,
                }
            }]
}
}

});

//Hydration
$('.hydration').append("<h4>Your H2O Intake Today: <span class='water-today'></span> oz</h4")
$('.water-today').text(hydration.findFluidOzByDay(date))

waterDayOne = hydration.findWeeklyWater(date)[0]
waterDayTwo = hydration.findWeeklyWater(date)[1]
waterDayThree = hydration.findWeeklyWater(date)[2]
waterDayFour = hydration.findWeeklyWater(date)[3]
waterDayFive = hydration.findWeeklyWater(date)[4]
waterDaySix = hydration.findWeeklyWater(date)[5]
waterDaySeven = hydration.findWeeklyWater(date)[6]

new Chart(document.getElementById("water-chart"), {
  type: 'bar',
  data: {
    labels: ["Day One", "Day Two", "Day Three", "Day Four", "Day Five", "Day Six", "Day Seven"],
    datasets: [
      {
        label: "Water(oz)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2", "#3cba9f"],
        data: [waterDaySeven, waterDaySix, waterDayFive, waterDayFour, waterDayThree, waterDayTwo, waterDayOne]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Amount of Water Consumed This Week',
      fontColor: "white",
      fontSize: 16,
    },
      scales: {
      xAxes: [{
          ticks: {
              fontColor: "white",
              fontSize: 8,
            }
          }],
        yAxes: [{
            ticks: {
                fontColor: "white",
                fontSize: 10,
                maxTicksLimit: 4,
                min: 30,
                max: 100,
                stepSize: 20,
                }
            }]
    }
}

});

//Sleep

$('.sleep').append("<h4>Your Hours of Sleep Today: <span class='sleep-today'> </span></h4")
$('.sleep').append("<h4>Your Quality of Sleep Today: <span class='sleep-quality-today'> </span></h4")
$('.sleep').append("<h4>Your Average Tracked Sleep Hours: <span class='sleep-average'></span></h4") 
$('.sleep').append("<h4>Your Average Tracked Sleep Quality: <span class='sleep-quality'></span></h4") 
$('.sleep-today').text(sleep.findHoursSleptByDay(ourUser, date))
$('.sleep-quality-today').text(sleep.findSleepQualityByDay(ourUser, date))
$('.sleep-average').text(Number(sleep.findAvgHoursSlept(1)).toFixed(1))
$('.sleep-quality').text(Number(sleep.findAvgSleepQuality(1)).toFixed(1))

sleepDayOne = sleep.findHoursSleptByWeek(ourUser, date)[0]
sleepDayTwo = sleep.findHoursSleptByWeek(ourUser, date)[1]
sleepDayThree = sleep.findHoursSleptByWeek(ourUser, date)[2]
sleepDayFour = sleep.findHoursSleptByWeek(ourUser, date)[3]
sleepDayFive = sleep.findHoursSleptByWeek(ourUser, date)[4]
sleepDaySix = sleep.findHoursSleptByWeek(ourUser, date)[5]
sleepDaySeven = sleep.findHoursSleptByWeek(ourUser, date)[6]
qualDayOne = sleep.findSleepQualityByWeek(ourUser, date)[0]
qualDayTwo = sleep.findSleepQualityByWeek(ourUser, date)[1]
qualDayThree = sleep.findSleepQualityByWeek(ourUser, date)[2]
qualDayFour = sleep.findSleepQualityByWeek(ourUser, date)[3]
qualDayFive = sleep.findSleepQualityByWeek(ourUser, date)[4]
qualDaySix = sleep.findSleepQualityByWeek(ourUser, date)[5]
qualDaySeven = sleep.findSleepQualityByWeek(ourUser, date)[6]

//For a user, their sleep data for the latest day (hours slept and quality of sleep)
//For a user, their sleep data over the course of the latest week (hours slept and quality of sleep)
//For a user, their all-time average sleep quality and all-time average number of hours slept
//Make a metric of your own! Document it, calculate it, and display it.
new Chart(document.getElementById("sleep-chart"), {
  type: 'bar',
  data: {
    labels: ["Day One", "Day Two", "Day Three", "Day Four", "Day Five", "Day Six", "Day Seven"],
    datasets: [
      {
        label: "Sleep(hours)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2", "#3cba9f"],
        data: [sleepDaySeven, sleepDaySix, sleepDayFive, sleepDayFour, sleepDayThree, sleepDayTwo, sleepDayOne]
      },
      {
        label: "Sleep(quality)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2", "#3cba9f"],
        data: [qualDaySeven, qualDaySix, qualDayFive, qualDayFour, qualDayThree, qualDayTwo, qualDayOne]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Amount & Quality of Sleep This Week',
      fontColor: "white",
      fontSize: 16,
    },
      scales: {
      xAxes: [{
          ticks: {
              fontColor: "white",
              fontSize: 8,
            }
          }],
        yAxes: [{
            ticks: {
                fontColor: "white",
                fontSize: 10,
                maxTicksLimit: 4,
                min: 2,
                max: 12,
                stepSize: 2,
                }
            }]
}
}

});

});