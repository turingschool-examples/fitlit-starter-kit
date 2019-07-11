
let randomId = Math.floor(Math.random() * 50 + 1)
let userRepository = new UserRepository(userData, randomId)
let user = new User(userRepository.getUserData())
let hydration = new Hydration(hydrationData)
let activityRepository = new ActivityRepository(userData, randomId)
let activity = new Activity(userData, activityData)
let sleepRepository = new SleepRepository(sleepData, randomId)
let sleep = new Sleep(sleepRepository.getUserData(), findTodaysDate())
let currentUser = userRepository.getUserData()
let challenges = new Challenges(userData, randomId)
let date = null
let formattedDate 
let waterMethod = []
let minutesActiveMethod = []
let stairsClimbedMethod = []
let stepCountMethod = []
// let friendDisplayChart = []

function findTodaysDate () {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();
  today = yyyy + '/' + mm + '/' + dd;
  return `${today}`
}


$(document).ready(() => {

  /** Packery and Draggable **/ 
  $('.grid').packery({
    // options
    itemSelector: '.grid-item',
    gutter: 30,
    percentPosition: true,
    columnWidth: 100,
  });

  var $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    columnWidth: 100
  });
  var $draggable = $('.draggable').draggabilly({
    // options...
  })
  $draggable.draggabilly('enable')

  $grid.find('.grid-item').each(function (i, gridItem) {
    var draggie = new Draggabilly(gridItem);
    $grid.packery('bindDraggabillyEvents', draggie)
  });

  /** User Information Display **/ 
  $("#user-name__display").text(user.getFirstName())
  $("#user-full-name__display").text(user.name)
  $("#user-address__display").text(user.address)
  $("#user-email__display").text(user.email)
  date = $('#date-calendar').val()
  formattedDate = date.replace(/-/gi, "/")
  var dateSubmitBtn = $("#submit-date__button")
  minutesActiveMethod = activity.getWeeklyMinutesActive(randomId, formattedDate);
  stairsClimbedMethod = activity.getWeeklyStairsClimbed(randomId, formattedDate);
  stepCountMethod = activity.getWeeklyStepCount(randomId, formattedDate)
  waterMethod = hydration.getWeeklyOunces(randomId)
  // friendMethod = challenges.findFriendWeek(userData, formattedDate, randomId)


  /** Hydration **/ 
  dateSubmitBtn.on("click", updateHydrationByDate)

  var waterDisplay = $("#daily-water__display")
  waterDisplay.text(hydration.getDailyOunces(randomId, formattedDate))

  function updateHydrationByDate() {
    date = $('#date-calendar').val()
    formattedDate = date.replace(/-/gi, "/")
    waterDisplay.text(hydration.getDailyOunces(randomId, formattedDate))
  }

  /** Activity **/ 
  let userDailyStepGoal = $("#user-daily-step-goal__display");
  userDailyStepGoal.text(user.dailyStepGoal);
  let stepCount = $('[id=step-count__display]');
  stepCount.text(activity.dailyStepCount(randomId, formattedDate));
  let minutesActive = $('[id=minutes-active__display]');
  minutesActive.text(activity.getDailyMinutesActive(randomId, formattedDate));
  let milesWalked = $('#miles-walked__display');
  milesWalked.text(activity.calculateMiles(randomId, formattedDate));
  let flightsClimbed = $('#stairs-climbed__display');
  flightsClimbed.text(activity.getUserStairClimb(randomId));
  let allUserSteps = $('#all-user-step-count');
  allUserSteps.text(activity.getAllUsersStepsAverage(formattedDate));
  let allUserStairs = $('#all-user-stair-count');
  allUserStairs.text(activity.getAllUsersStairClimbingAverage(formattedDate));
  let allUserMinutesActive = $('#all-user-minutes-active');
  allUserMinutesActive.text(activity.getAllUsersMinutesActiveAverage(formattedDate));

  dateSubmitBtn.on("click", updateByDate)

  function updateByDate(e) {
    date = $('#date-calendar').val()
    formattedDate = date.replace(/-/gi, "/")
    myWaterChart.data.datasets[0].data = activity.getWeeklyMinutesActive(randomId, formattedDate)
    myWaterChart.update()
    myMinutesActiveChart.data.datasets[0].data = activity.getWeeklyMinutesActive(randomId, formattedDate)
    myMinutesActiveChart.update()
    myStairsClimbedWeeklyChart.data.datasets[0].data = activity.getWeeklyStairsClimbed(randomId, formattedDate)
    myStairsClimbedWeeklyChart.update()
    myStepCountChart.data.datasets[0].data = activity.getWeeklyStepCount(randomId, formattedDate)
    myStepCountChart.update()
    // myFriendDisplayChart.data.datasets[0].data = activity.getWeeklyStepCount(randomId, formattedDate)
    // myFriendDisplayChart.update()
  }

  /** Charts **/ 

  // Water Chart
  var weeklyWaterChart = $('#weeklyWaterChart');
  var myWaterChart = new Chart(weeklyWaterChart, {
    type: 'bar',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: "Water Drank (ounces)",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#6BBFC3", "#e8c3b9", "#c45850", "pink", "orange"],
        data: waterMethod,
      }]
    },
    options: options = {
      title: {
        display: true,
        text: 'Your Water Intake'
      },
      responsive: true,
      maintainAspectRatio: false,
    }
  });
  myWaterChart.canvas.parentNode.style.height = '200px';
  myWaterChart.canvas.parentNode.style.width = '200px';

  // Minutes Active Weekly Chart
  var minutesActiveChart = $('#minutes-active-weekly__display');
  var myMinutesActiveChart = new Chart(minutesActiveChart, {
    type: 'bar',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: "Minutes Active",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#6BBFC3", "#e8c3b9", "#c45850", "pink", "orange"],
        data: minutesActiveMethod
      }]
    },
    options: options = {
      title: {
        display: true,
        text: 'Todays Minutes Active'
      },
      responsive: true,
      maintainAspectRatio: false,
    }

  });
  myMinutesActiveChart.canvas.parentNode.style.height = '200px';
  myMinutesActiveChart.canvas.parentNode.style.width = '200px';


  // Stairs Climbed Weekly Chart
  var stairsClimbedWeeklyChart = $('#stairs-climbed-weekly__display');
  var myStairsClimbedWeeklyChart = new Chart(stairsClimbedWeeklyChart, {
    type: 'bar',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: "Stairs Climbed",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#6BBFC3", "#e8c3b9", "#c45850", "pink", "orange"],
        data: stairsClimbedMethod
      }]
    },
    options: options = {
      title: {
        display: true,
        text: 'Your Weekly Stair Climbs'
      },
      responsive: true,
      maintainAspectRatio: false,
    }

  });
  myStairsClimbedWeeklyChart.canvas.parentNode.style.height = '200px';
  myStairsClimbedWeeklyChart.canvas.parentNode.style.width = '200px';


  // Step Count Weekly Chart
  var stepCountChart = $('#step-count-weekly__display');
  var myStepCountChart = new Chart(stepCountChart, {
    type: 'bar',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: "Step Count",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#6BBFC3", "#e8c3b9", "#c45850", "pink", "orange"],
        data: stepCountMethod
      }]
    },
    options: options = {
      title: {
        display: true,
        text: 'Your Weekly Step Count'
      },
      responsive: true,
      maintainAspectRatio: false,
    }
  });
  
  myStepCountChart.canvas.parentNode.style.height = '200px';
  myStepCountChart.canvas.parentNode.style.width = '200px';
});
// Friend Weekly Chart
// var friendDisplgayChart = $('#friend__display');
// var myFriendDisplayChart = new Chart(friendDisplayChart, {
//     type: 'line',
//     data: {
//         labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
//         datasets: [{
//             label: "Friend Info",
//             backgroundColor: ["#3e95cd", "#8e5ea2", "#6BBFC3", "#e8c3b9", "#c45850", "pink", "orange"],
//             data: friendMethod
//         }, {
//             label: "Friend Info",
//             backgroundColor: ["#3e95cd", "#8e5ea2", "#6BBFC3", "#e8c3b9", "#c45850", "pink", "orange"],
//             data: friendMethod
//         }]
//     },
//     options: options = {
//         title: {
//             display: true,
//             text: 'Friend Info'
//         },
//         responsive: true,
//         maintainAspectRatio: false,
//     }
// });
// myFriendDisplayChart.canvas.parentNode.style.height = '200px';
// myFriendDisplayChart.canvas.parentNode.style.width = '200px';


//Sleep hours and quality chart//

const sleepHoursQualityPerDay = $('#sleep-hours-quality__display');
let sleepHourQuality = new Chart(sleepHoursQualityPerDay, {
  type: "bar",
  data: {
    labels: ["Hours Slept", "Sleep Quality"],
    datasets: [
      {
        label: "Sleep Hours and Quality",
        data: [sleep.getHoursPerDay(), sleep.getQualityPerDay()],
        backgroundColor: ["#F8B9D4", "#FA8BD6"],
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

//Sleep Hours and Quality over A week//

var sleepHoursQualityWeek = $("#sleep-hours-quality-week__display");
var sleepHoursQuality = new Chart(sleepHoursQualityWeek, {
  type: "bar",
  data: {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Sleep Hours",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#6BBFC3",
          "#e8c3b9",
          "#c45850",
          "pink",
          "orange"
        ],
        data: sleep.getWeeklyData("hoursSlept")
      },
      {
        type: 'bar',
        label: "Sleep Quality",
        backgroundColor: [
          "#E0BBE4",
          "#957DAD",
          "#D291BC",
          "#FEC8D8",
          "#FFDFD3",
          "#5BC0BE",
          "#F694C1"
        ],
        data: sleep.getWeeklyData("sleepQuality")
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Sleep Hours and Quality Per Day"
    },
    
    responsive: true,
    maintainAspectRatio: false
  }
});
// myMinutesActiveChart.canvas.parentNode.style.height = "200px";
// myMinutesActiveChart.canvas.parentNode.style.width = "200px";

const sleepHoursQualityAvg = $("#sleep-total-average__display");
let sleepAverage = new Chart(sleepHoursQualityAvg, {
  type: "bar",
  data: {
    labels: ["Hours Slept Average", "Sleep Quality Average"],
    datasets: [
      {
        label: "Sleep Hours and Quality Average",
        data: [
          sleepRepository.getUserAvg("sleepQuality"),
          sleepRepository.getUserAvg("hoursSlept")
        ],
        backgroundColor: ["#E4C1F9", "#D3F8E2"],
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
var friendStepChallenge = $("#friends-week-step__display");
var friendsSteps = new Chart(friendStepChallenge, {
  type: "bar",
  data: {
    labels: ["Friend 1", "Friend 2", "Friend 3", "Friend 4"],
    datasets: [
      {
        label: ["Friend Steps Per Week"],
        backgroundColor: ["#E0BBE4",
          "#957DAD",
          "#D291BC",
          "#FEC8D8"],
        data: challenges
          .addUserToFriends(activityData, findTodaysDate(), 'numSteps')
          .map(el => {
            return el.weekData.reduce((acc, day) => (acc += day), 0);
          })
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Friend Steps Per Day"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    responsive: true,
    maintainAspectRatio: false
  }
});

var friendHydrationChallenge = $("#friends-week-hydration__display");
var friendHydration = new Chart(friendHydrationChallenge, {
  type: "bar",
  data: {
    labels: ["Friend 1", "Friend 2", "Friend 3", "Friend 4"],
    datasets: [
      {
        label: ["Friend Ounces Drank Per Week"],
        backgroundColor: ["#FEC8D8", "#FFDFD3", "#5BC0BE", "#F694C1"],
        data: challenges
          .addUserToFriends(hydrationData, findTodaysDate(), "numOunces")
          .map(el => {
            return el.weekData.reduce((acc, day) => (acc += day), 0);
          })
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Friend Ounces Per Week"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    responsive: true,
    maintainAspectRatio: false
  }
});

var friendSleepChallenge = $("#friends-week-sleep__display");
var friendSleep = new Chart(friendSleepChallenge, {
  type: "bar",
  data: {
    labels: ["Friend 1", "Friend 2", "Friend 3", "Friend 4"],
    datasets: [
      {
        label: ["Friend Hours Slept Per Week"],
        backgroundColor: ["#3e95cd", "#8e5ea2", "#6BBFC3", "#e8c3b9"],
        data: challenges
          .addUserToFriends(sleepData, findTodaysDate(), "sleepQuality")
          .map(el => {
            let friendTotal = el.weekData.reduce((acc, day) => (acc += day), 0)
            return Math.floor(friendTotal)
          }) 
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Friend Sleep Quality Per Week"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },

    responsive: true,
    maintainAspectRatio: false
  }
});