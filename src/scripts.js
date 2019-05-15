
$( document ).ready(function() {
let userRepo = new UserRepository(userData, 1)
let user = new User(userRepo.currentUser)

let hydrationRepo = new HydrationRepository(hydrationData, 1)
let hydration = new Hydration(hydrationRepo.currentUser)

let sleepRepo = new SleepRepository(sleepData, 1)
let sleep = new Sleep(sleepData)

//Header and Card

$('.user').prepend("<div class='user-card' aria-expanded='true' hidden></div>")
$('span.user-name').html(user.returnFirstName());
$('img.user-image').click(function() {
$('div.user-card').slideToggle('slow');
})
$('div.user-card').append("<h6> Name: <span class='name-span user-info'></span></h6><h6>Address: <span class='address-span user-info'></span></h6><h6> Email: <span class='email-span user-info'></span></h6><h6>Daily Step Goal: <span class ='goal-span user-info'></span></h6><h6>Average Step Goal: <span class ='av-goal-span user-info'></span></h6>")
$('span.name-span').text(`${user.user.name}`)
$('span.address-span').text(`${user.user.address}`)
$('span.email-span').text(`${user.user.email}`)
$('span.goal-span').text(`${user.user.dailyStepGoal}`)
$('span.av-goal-span').text(userRepo.findAverageStepGoal())

//Activity

$('.activity').append("<h4>Your Steps Today: <span class='steps-today'></span></h3")
$('.activity').append("<h4>Your Minutes Active Today: <span class='steps-today'></span></h3")
$('.activity').append("<h4>Your Miles Walked Today: <span class='miles-today'></span></h3")
$('.activity').append("<h4>How You Stack Up: <span class='activity-compare-today'></span></h3")
// $('.activity').append("<h4>Weekly Stats: <span class='weekly-stats'></span></h3")
stepsDayOne = 4000;
stepsDayTwo = 5000;
stepsDayThree = 3000;
stepsDayFour = 9000;
stepsDayFive = 10000;
stepsDaySix = 4000;
stepsDaySeven = 12000;

//For a user, the number of steps for the latest day
//For a user, the number minutes active for the latest day
//For a user, the distance they have walked (in miles) for the latest day based on their step count
//How their number of steps, minutes active, and flights of stairs climbed compares to all users for the latest day
//Make a metric of your own! Document it, calculate it, and display it.

new Chart(document.getElementById("activity-chart"), {
  type: 'bar',
  data: {
    labels: ["Day One", "Day Two", "Day Three", "Day Four", "Day Five", "Day Six", "Day Seven"],
    datasets: [
      {
        label: "Steps",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2", "#3cba9f"],
        data: [stepsDaySeven, stepsDaySix, stepsDayFive, stepsDayFour, stepsDayThree, stepsDayTwo, stepsDayOne]
      } 
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Steps Walked This Week',
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
                min: 2000,
                max: 12000,
                stepSize: 1000,
                }
            }]
}
}

});

//Hydration
$('.hydration').append("<h4>Your H2O Intake Today: <span class='water-today'></span> oz</h4")
$('.water-today').text(hydration.findFluidOzByDay('15/05/2019'))

waterDayOne = hydration.findWeeklyWater('15/05/2019')[0]
waterDayTwo = hydration.findWeeklyWater('15/05/2019')[1]
waterDayThree = hydration.findWeeklyWater('15/05/2019')[2]
waterDayFour = hydration.findWeeklyWater('15/05/2019')[3]
waterDayFive = hydration.findWeeklyWater('15/05/2019')[4]
waterDaySix = hydration.findWeeklyWater('15/05/2019')[5]
waterDaySeven = hydration.findWeeklyWater('15/05/2019')[6]

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
$('.sleep-today').text(sleep.findHoursSleptByDay(1,'15/05/2019'))
$('.sleep-quality-today').text(sleep.findSleepQualityByDay(1,'15/05/2019'))
$('.sleep-average').text(Number(sleep.findAvgHoursSlept(1)).toFixed(1))
$('.sleep-quality').text(Number(sleep.findAvgSleepQuality(1)).toFixed(1))

sleepDayOne = sleep.findHoursSleptByWeek(1,'15/05/2019')[0]
sleepDayTwo = sleep.findHoursSleptByWeek(1,'15/05/2019')[1]
sleepDayThree = sleep.findHoursSleptByWeek(1,'15/05/2019')[2]
sleepDayFour = sleep.findHoursSleptByWeek(1,'15/05/2019')[3]
sleepDayFive = sleep.findHoursSleptByWeek(1,'15/05/2019')[4]
sleepDaySix = sleep.findHoursSleptByWeek(1,'15/05/2019')[5]
sleepDaySeven = sleep.findHoursSleptByWeek(1,'15/05/2019')[6]
qualDayOne = sleep.findSleepQualityByWeek(1,'15/05/2019')[0]
qualDayTwo = sleep.findSleepQualityByWeek(1,'15/05/2019')[1]
qualDayThree = sleep.findSleepQualityByWeek(1,'15/05/2019')[2]
qualDayFour = sleep.findSleepQualityByWeek(1,'15/05/2019')[3]
qualDayFive = sleep.findSleepQualityByWeek(1,'15/05/2019')[4]
qualDaySix = sleep.findSleepQualityByWeek(1,'15/05/2019')[5]
qualDaySeven = sleep.findSleepQualityByWeek(1,'15/05/2019')[6]

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