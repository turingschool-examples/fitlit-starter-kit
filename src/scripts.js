$(document).ready(function() {
  const randomIndex = Math.floor(Math.random() * (userData.length - 1) + 1)       
  const randomUser = userData.find(user => user.id === randomIndex)
  const user = new User(randomUser);
  const users = new UserRepo(userData);
  const hydro = new Hydration(hydrationData);
  const sleep = new Sleep(sleepData);
  const activity = new Activity(activityData);
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()
  const today = "2019/07/10"


  var cardOne= document.querySelector('.card-1');
  cardOne.addEventListener( 'click', function() {
    cardOne.classList.toggle('is-flipped');
  });

  var cardTwo = document.querySelector('.card-2');
  cardTwo.addEventListener( 'click', function() {
    cardTwo.classList.toggle('is-flipped');
  });

  var cardThree = document.querySelector('.card-3');
  cardThree.addEventListener( 'click', function() {
    cardThree.classList.toggle('is-flipped');
  });

  var cardFour = document.querySelector('.card-4');
  cardFour.addEventListener( 'click', function() {
    cardFour.classList.toggle('is-flipped');
  });


  $('.user-name').text(`${user.returnFirstName(randomUser)}`);
  $('#user-address').text(`Address: ${user.randomUser.address}`);
  $('#user-email').text(`Email: ${user.randomUser.email}`);
  $('#user-stride').text(`Your stride length is ${user.randomUser.strideLength} ft.`);
  $('#user-stepGoal').text(`Your step goal is set to ${user.randomUser.dailyStepGoal} steps.`);
  $('#avg-stepGoal').text(`The average step goal among all users ${user.randomUser.dailyStepGoal} steps.`);
  $('#daily-water').text(`Today you have consumed ${hydro.fluidOzsPerDay(randomIndex, today)} ounces of water.`);
  $('#latest-user-steps').text(`Your step count for today is ${activity.userStepsWalkedPerDay(randomIndex, today)} steps.`);
  $('#latest-user-minActive').text(`You've been active for ${activity.userMinActivePerDay(randomIndex, today)} minutes today.`);
  $('#latest-user-miles-walked').text(`You've walked ${activity.userMilesWalkedPerDay(randomIndex, today, userData)} miles today.`);
  $('#step-report').text(`${activity.hasUserMetStepGoal(randomIndex, today, userData)}`);
  $('#user-least-sleep').text(`Your fewest recorded hours slept is ${sleep.userFewestHoursSlept(randomIndex)}`);
  $('#user-most-sleep').text(`Your highest recorded hours slept is ${sleep.userMostHoursSlept(randomIndex)}`);

  const userVsAvgGoalSteps = new Chart($('#user-vs-avg-steps'), {
    type: 'bar',
    data: {
      labels: ['Your Goal', 'Avg User Goal'],
      datasets: [{
        label: 'Steps',
        data: [user.randomUser.dailyStepGoal, users.averageGoalSteps()],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          '#ef1de7',
          '#afff14'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {display: false},
      labels: {
        fontColor: "black",
        fontSize: 20
      },
      title: {
        display: true,
        fontColor: 'black',
        text: 'You VS Everyone (Step Goal)'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black',
            fontSize: 16
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black',
            fontSize: 16
          }
        }],
      }
    }
  });

  const weeklyWaterIntake = new Chart($('#weekly-water-intake'), {
    type: 'line',
    data: {
      labels: Object.keys(hydro.userFluidsPerWeek(randomIndex, today)),
      datasets: [{
        label: 'fl Oz',
        data: Object.values(hydro.userFluidsPerWeek(randomIndex, today)),
        backgroundColor: [                             
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          '#afff14'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {display: false},
      labels: {
        fontColor: 'black',
        fontSize: 15
      },
      title: {
        display: true,
        fontColor: 'black',
        text: 'Weekly Water Intake (fl oz)'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black',
            fontSize: 14
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black',
            fontSize: 14
          }
        }],
      }
    }
  });

  const stepsUserVsAll = new Chart($('#user-vs-avg-steps-day'), {
    type: 'bar',
    data: {
      labels: ['Your Steps Today', 'Avg User Steps'],
      datasets: [{
        label: 'Steps',
        data: [activity.userStepsWalkedPerDay(randomIndex, today), activity.avgStepsAllUsers(today)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          '#ef1de7',
          '#afff14'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: 'Today: You VS Everyone (steps)'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  const stairsUserVsAll = new Chart($('#user-vs-avg-stairs'), {
    type: 'bar',
    data: {
      labels: ['Stairs Climbed', 'Avg User Stairs Climbed'],
      datasets: [{
        label: 'Flights',
        data: [activity.userStairsClimbedPerDay(randomIndex, today), activity.avgStairsAllUsers(today)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          '#ef1de7',
          '#afff14'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: 'Today: You VS Everyone (flights)'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  const activeMinutesUserVsAll = new Chart($('#user-vs-avg-activeMin'), {
    type: 'bar',
    data: {
      labels: ['Your Minutes Active', 'Avg User Minutes Active'],
      datasets: [{
        label: 'Minutes',
        data: [activity.userMinActivePerDay(randomIndex, today), activity.avgMinActiveAllUsers(today)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          '#ef1de7',
          '#afff14'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: 'Today: You VS Everyone (min Active)'
      },
      labels: {
        fontColor: "black",
        fontSize: 14
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: 'black',
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: 'black',
          fontSize: 16
        }
      }],
    }
  });

  const weeklyUserSteps = new Chart($('#weekly-user-steps'), {
    type: 'line',
    data: {
      labels: Object.keys(activity.userStepsPerWeek(randomIndex, today)),
      datasets: [{
        label: 'fl Oz',
        data: Object.values(activity.userStepsPerWeek(randomIndex, today)),
        backgroundColor: [                
          'rgba(255, 99, 132, 0.2)',     
        ],
        borderColor: [
          '#afff14'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: 'Weekly Step Count'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  const weeklyStairsClimbed = new Chart($('#weekly-stairs-climbed'), {
    type: 'line',
    data: {
      labels: Object.keys(activity.userStairsPerWeek(randomIndex, today)),
      datasets: [{
        label: 'fl Oz',
        data: Object.values(activity.userStairsPerWeek(randomIndex, today)),
        backgroundColor: [                
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          '#ef1de7'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: 'Weekly Stairs Climbed (flights)'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  const weeklyMinutesActive = new Chart($('#weekly-minutes-active'), {
    type: 'line',
    data: {
      labels: Object.keys(activity.userMinutesActivePerWeek(randomIndex, today)),
      datasets: [{
        label: 'fl Oz',
        data: Object.values(activity.userMinutesActivePerWeek(randomIndex, today)),
        backgroundColor: [                
          'rgba(255, 99, 132, 0.2)',  
        ],
        borderColor: [
          '#afff14'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: 'Weekly Minutes Active'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  const userVsAvgSleepHours = new Chart($('#user-vs-avg-sleep-hours'), {
    type: 'bar',
    data: {
      labels: ['Latest Hrs', 'Avg Hrs'],
      datasets: [{
        label: 'Hours',
        data: [sleep.hrsSleepForSpecificDay(randomIndex, today), sleep.avgHoursSleepPerUser(randomIndex)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          '#ef1de7',
          '#afff14'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {display: false},
      labels: {
        fontColor: 'black',
        fontSize: 20
      },
      title: {
        display: true,
        fontColor: 'black',
        text: 'Your Latest VS Avg Hours Slept'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black',
            fontSize: 16
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black',
            fontSize: 16
          }
        }],
      }
    }
  });

  const userVsAvgSleepQuality = new Chart($('#user-vs-avg-sleep-quality'), {
    type: 'bar',
    data: {
      labels: ['Latest SQ', 'Avg SQ'],
      datasets: [{
        label: 'Hours',
        data: [sleep.sleepQualityForSpecificDay(randomIndex, today), sleep.avgSleepQualityAllTime(randomIndex)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          '#ef1de7',
          '#afff14'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {display: false},
      labels: {
        fontColor: "black",
        fontSize: 20
      },
      title: {
        display: true,
        fontColor: 'black',
        text: 'Your Latest VS Avg Sleep Quality (SQ)'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black',
            fontSize: 16
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black',
            fontSize: 16
          }
        }],
      }
    }
  });

  const weeklySleepHours = new Chart($('#weekly-hours-sleep'), {
    type: 'line',
    data: {
      labels: Object.keys(sleep.userHrsSleepPerWeek(randomIndex, today)),
      datasets: [{
        label: 'Hours Sleep',
        data: Object.values(sleep.userHrsSleepPerWeek(randomIndex, today)),
        backgroundColor: [                
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          '#ef1de7'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: 'Daily Hours Sleep Per Week'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  const weeklySleepQuality = new Chart($('#weekly-sleep-quality'), {
    type: 'line',
    data: {
      labels: Object.keys(sleep.userSleepQualityPerWeek(randomIndex, today)),
      datasets: [{
        label: 'Hours Sleep',
        data: Object.values(sleep.userSleepQualityPerWeek(randomIndex, today)),
        backgroundColor: [                
          'rgba(255, 99, 132, 0.2)' 
        ],
        borderColor: [
          '#afff14'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: 'Daily Sleep Quality Per Week'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  
})

