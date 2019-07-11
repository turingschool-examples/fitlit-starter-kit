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


function findTodaysDate () {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); 
  let yyyy = today.getFullYear();
  today = yyyy + '/' + mm + '/' + dd;
  return `${today}`
}


$(document).ready(() => {

  let date = $("#date-calendar").val();
  let formattedDate = date.replace(/-/gi, "/");
  let minutesActiveMethod = activity.getWeeklyMinutesActive(randomId, findTodaysDate());
  let stairsClimbedMethod = activity.getWeeklyStairsClimbed(randomId, findTodaysDate());
  let stepCountMethod = activity.getWeeklyStepCount(randomId, findTodaysDate());
  let waterMethod = hydration.getWeeklyOunces(randomId, findTodaysDate());
  let $grid = $('.grid').packery({itemSelector: '.grid-item', columnWidth: 100});

  $("#submit-date__button").on("click", updateByDate);
  $('.grid').packery({itemSelector: '.grid-item', gutter: 15, percentPosition: true, columnWidth: 100, });
  $(".draggable").draggabilly("enable");
  $("#user-name__display").text(user.getFirstName());
  $("#user-full-name__display").text(user.name);
  $("#user-address__display").text(user.address);
  $("#user-email__display").text(user.email);
  $('#current-date__display').text(findTodaysDate())
  $("#daily-water__display").text(hydration.getDailyOunces(randomId, findTodaysDate()));
  $("#user-daily-step-goal__display").text(user.dailyStepGoal);
  $("[id=step-count__display]").text(activity.dailyStepCount(randomId, formattedDate));
  $("[id=minutes-active__display]").text(activity.getDailyMinutesActive(randomId, formattedDate));
  $("#miles-walked__display").text(activity.calculateMiles(randomId, formattedDate));
  $("#stairs-climbed__display").text(activity.getUserStairClimb(randomId));
  $("#all-user-step-count").text(activity.getAllUsersStepsAverage(formattedDate));
  $("#all-user-stair-count").text(activity.getAllUsersStairClimbingAverage(formattedDate));
  $("#all-user-minutes-active").text(activity.getAllUsersMinutesActiveAverage(formattedDate));

  $grid.find('.grid-item').each(function (i, gridItem) {
    let draggie = new Draggabilly(gridItem)
    $grid.packery('bindDraggabillyEvents', draggie)
  });
  

  function updateByDate() {
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
  }

  let weeklyWaterChart = $('#weekly-water-chart');
  let myWaterChart = new Chart(weeklyWaterChart, {
    type: 'bar',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: "Water Drank (ounces)",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#6BBFC3", "#e8c3b9", "#c45850", "pink", "orange"],
        data: waterMethod,
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Your Water Intake'
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
      maintainAspectRatio: false,
    }
  });

  let minutesActiveChart = $('#minutes-active-weekly__display');
  let myMinutesActiveChart = new Chart(minutesActiveChart, {
    type: 'bar',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: "Minutes Active",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#6BBFC3", "#e8c3b9", "#c45850", "pink", "orange"],
        data: minutesActiveMethod
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Todays Minutes Active'
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
      maintainAspectRatio: false,
    }

  });

  let stairsClimbedWeeklyChart = $('#stairs-climbed-weekly__display');
  let myStairsClimbedWeeklyChart = new Chart(stairsClimbedWeeklyChart, {
    type: 'bar',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: "Stairs Climbed",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#6BBFC3", "#e8c3b9", "#c45850", "pink", "orange"],
        data: stairsClimbedMethod
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Your Weekly Stair Climbs'
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
      maintainAspectRatio: false,
    }

  });

  let stepCountChart = $('#step-count-weekly__display');
  let myStepCountChart = new Chart(stepCountChart, {
    type: 'bar',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: "Step Count",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#6BBFC3", "#e8c3b9", "#c45850", "pink", "orange"],
        data: stepCountMethod
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Your Weekly Step Count'
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
      maintainAspectRatio: false,
    }
  });
});

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

let sleepHoursQualityWeek = $("#sleep-hours-quality-week__display");
let sleepHoursQuality = new Chart(sleepHoursQualityWeek, {
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

let friendStepChallenge = $("#friends-week-step__display");
let friendsSteps = new Chart(friendStepChallenge, {
  type: "bar",
  data: {
    labels: ["Friend 1", "Friend 2", "Friend 3", "User"],
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

let friendHydrationChallenge = $("#friends-week-hydration__display");
let friendHydration = new Chart(friendHydrationChallenge, {
  type: "bar",
  data: {
    labels: ["Friend 1", "Friend 2", "Friend 3", "User"],
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

let friendSleepChallenge = $("#friends-week-sleep__display");
let friendSleep = new Chart(friendSleepChallenge, {
  type: "bar",
  data: {
    labels: ["Friend 1", "Friend 2", "Friend 3", "User"],
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