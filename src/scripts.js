
$(document).ready(function() {

  const today = '2019/06/15';
  $('#js-step-goal-chart').hide();
  $('#js-hydration-line-chart').hide();
  $('.sleep-charts').hide();
  $('.num-of-steps-charts').hide();
  $('.num-mins-active-charts').hide();
  $('.flights-climbed-charts').hide();



  $('#js-change-user').click(function() {
    const userRepo = new UserRepository(userData);
    const hydrationRepo = new HydrationRepository(hydrationData);
    const sleepRepo = new SleepRepository(sleepData);
    const activityRepo = new ActivityRepository(activityData);

    const userID = Math.floor((Math.random() * 50) + 1);
    const specificUser = userRepo.returnUserData(userID);
    const user = new User(specificUser);
    const hydrationUser = hydrationRepo.returnUserHydrationData(userID);
    const hydration = new Hydration(hydrationUser);
    const sleepUser = sleepRepo.returnUserSleepData(userID);
    const sleep = new Sleep(sleepUser);

    const activityUser = activityRepo.returnUserActivityData(userID);
    const activity = new Activity(user, activityUser);

    $('#js-first-name').html(user.returnFirstName());
    $('#js-full-name').html(user.name);
    $('#js-address').html(user.address);
    $('#js-email').html(user.email);
    $('#js-friends').html(userRepo.makeFriendNames(userID));
    $('#js-miles').html(activity.milesWalked(today));
    $('#js-h2--welcome').hide();
    $('#js-h2--user').show();

    updateCharts(user, hydration, sleep, activity, activityRepo);
  });

  $('#js-user').click(function() {
    $('#js-user-profile').show();
    $('#js-step-goal-chart').hide();
    $('#js-hydration-line-chart').hide();
    $('.sleep-charts').hide();
    $('.num-of-steps-charts').hide();
    $('.num-mins-active-charts').hide();
    $('.flights-climbed-charts').hide();

    removeClasses();
    addClasses();
  });

  $('#js-step-goal').click(function() {
    $('#js-step-goal-chart').show();
    $('#js-user-profile').hide();
    $('#js-hydration-line-chart').hide();
    $('.sleep-charts').hide();
    $('.num-of-steps-charts').hide();
    $('.num-mins-active-charts').hide();
    $('.flights-climbed-charts').hide();

    removeClasses();
    addClasses();
  });

  $('#js-hydration').click(function() {
    $('#js-hydration-line-chart').show();
    $('#js-user-profile').hide();
    $('#js-step-goal-chart').hide();
    $('.sleep-charts').hide();
    $('.num-of-steps-charts').hide();
    $('.num-mins-active-charts').hide();
    $('.flights-climbed-charts').hide();

    removeClasses();
    addClasses();
  });

  $('#js-sleep').click(function() {
    $('.sleep-charts').show();
    $('#js-hydration-line-chart').hide();
    $('#js-user-profile').hide();
    $('#js-step-goal-chart').hide();
    $('.num-of-steps-charts').hide();
    $('.num-mins-active-charts').hide();
    $('.flights-climbed-charts').hide();

    removeClasses();
    addClasses();
  });

  $('#js-min-active').click(function() {
    $('.num-mins-active-charts').show();
    $('.sleep-charts').hide();
    $('#js-hydration-line-chart').hide();
    $('#js-user-profile').hide();
    $('#js-step-goal-chart').hide();
    $('.num-of-steps-charts').hide();
    $('.flights-climbed-charts').hide();

    removeClasses();
    addClasses();
  });

  $('#js-steps').click(function() {
    $('.num-of-steps-charts').show();
    $('#js-hydration-line-chart').hide();
    $('.num-mins-active-charts').hide();
    $('#js-user-profile').hide();
    $('#js-step-goal-chart').hide();
    $('.flights-climbed-charts').hide();
    $('.sleep-charts').hide();

    removeClasses();
    addClasses();
  });

  $('#js-flights').click(function() {
    $('.flights-climbed-charts').show();
    $('#js-hydration-line-chart').hide();
    $('.sleep-charts').hide();
    $('#js-user-profile').hide();
    $('#js-step-goal-chart').hide();
    $('.num-mins-active-charts').hide();
    $('.num-of-steps-charts').hide();

    removeClasses();
    addClasses();
  });

  function removeClasses() {
    $('.list-item').each(value => {
      let id = $('.list-item')[value].id;
      let clickedID = event.target.id;
      if (id !== clickedID) {
        $(`#${id}`).removeClass('list-item--active');
      }
    })
  }

  function addClasses() {
    let clickedID = event.target.id;
    $(`#${clickedID}`).addClass('list-item--active');
  }

  function updateStepGoalChart(user) {
    stepGoalChart.data.labels[0] = user.name;
    stepGoalChart.data.datasets[0].data[0] = user.dailyStepGoal;
    stepGoalChart.update();
  }

  function updateHydrationLineChart(hydration) {
    hydrationLineChart.data.datasets[0].data = hydration.returnAverageWeeklyFluidOunces(today);
    hydrationLineChart.update();
  }

  function updateSleepCharts(sleep) {
    sleepQualityLineChart.data.datasets[0].data = sleep.userWeeklyQualitySleep(today);
    sleepHoursLineChart.data.datasets[0].data = sleep.userWeeklySleep(today);
    sleepQualityLineChart.update();
    sleepHoursLineChart.update();
  }


  function minsActiveCharts(activity, activityRepo) {
    numMinActiveChart.data.labels[0] = activity.user.name;
    numMinActiveChart.data.datasets[0].data[0] = activity.userMinActiveForDay(today);
    numMinActiveChart.data.datasets[0].data[1] = activityRepo.aveMinutesActiveForDay(today);
    numMinActiveLineChart.data.datasets[0].data = activity.returnWeekViewOfMinsActive(today);
    numMinActiveChart.update();
    numMinActiveLineChart.update();
  }

  function stepsCharts(activity, activityRepo) {
    numOfStepsChart.data.labels[0] = activity.user.name;
    numOfStepsChart.data.datasets[0].data[0] = activity.returnNumOfStepsForDate(today);
    numOfStepsChart.data.datasets[0].data[1] = activityRepo.aveStepsTakenForDay(today);
    numOfStepsLineChart.data.datasets[0].data = activity.returnWeekViewOfSteps(today);
    numOfStepsChart.update();
    numOfStepsLineChart.update();
  }

  function flightsCharts(activity, activityRepo) {
    flightsClimbedChart.data.labels[0] = activity.user.name;
    flightsClimbedChart.data.datasets[0].data[0] = activity.returnFlightsClimbedForDate(today);
    flightsClimbedChart.data.datasets[0].data[1] = activityRepo.aveFlightsOfStairsClimbedForDay(today);
    flightsClimbedLineChart.data.datasets[0].data = activity.returnWeekViewOfFlightsClimbed(today);
    flightsClimbedChart.update();
    flightsClimbedLineChart.update();
  }

  function updateCharts(user, hydration, sleep, activity, activityRepo) {
    updateStepGoalChart(user);
    updateHydrationLineChart(hydration);
    updateSleepCharts(sleep);
    minsActiveCharts(activity, activityRepo);
    stepsCharts(activity, activityRepo);
    flightsCharts(activity, activityRepo);
  }







  var stepGoalChart = new Chart($("#js-step-goal-chart"), {
    plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
      };
    }
  }],
    type: 'bar',
    data: {
      labels: ["", "All Users"],
      datasets: [
        {
          label: "Daily Step Goal",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [0, 6700]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      legend: { display: true,
        labels: {
           fontColor: 'black',
           fontSize: 20
         }
       },
      title: {
        display: false,
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
            maxTicksLimit: 12,
            min: 0,
            max: 12000,
            stepSize: 2000,
          }
        }]
      }
    }
  });

  var hydrationLineChart = new Chart($('#js-hydration-line-chart'), {
    plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
      };
    }
  }],
    type: 'line',
    data: {
      labels: ['06/15', '06/16', '06/17', '06/18', '06/19', '06/20', '06/21'],
      datasets: [{
        data: [],
        label: "Water Consumed",
        borderColor: "#3e95cd",
        fill: true
      }
      ]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
          }
        }]
      },
      legend: { display: true,
       labels: {
          fontColor: 'black',
          fontSize: 20
        },
       },
      responsive: false,
      maintainAspectRatio: false,
      title: {
        display: false,
      }
    }
  });

  var sleepQualityLineChart = new Chart($('#js-sleepQuality-line-chart'), {
    plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
      };
    }
  }],
    type: 'line',
    data: {
      labels: ['06/15', '06/16', '06/17', '06/18', '06/19', '06/20', '06/21'],
      datasets: [{
        data: [],
        label: "Sleep Quality",
        borderColor: "#3e95cd",
        fill: true
      }
      ]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
          }
        }]
      },
      legend: { display: true,
       labels: {
          fontColor: 'black',
          fontSize: 20
        },
       },
      responsive: false,
      maintainAspectRatio: false,
      title: {
        display: false,
      }
    }
  });

  var sleepHoursLineChart = new Chart($('#js-sleepHours-line-chart'), {
    plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
      };
    }
  }],
    type: 'line',
    data: {
      labels: ['06/15', '06/16', '06/17', '06/18', '06/19', '06/20', '06/21'],
      datasets: [{
        data: [],
        label: "Hours Slept",
        borderColor: "#3e95cd",
        fill: true
      }
      ]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
          }
        }]
      },
      legend: { display: true,
       labels: {
          fontColor: 'black',
          fontSize: 20
        },
       },
      responsive: false,
      maintainAspectRatio: false,
      title: {
        display: false,
      }
    }
  });


  var numOfStepsChart = new Chart($("#js-num-of-steps-chart"), {
    plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
      };
    }
  }],
    type: 'bar',
    data: {
      labels: ["", "All Users"],
      datasets: [
        {
          label: "Number of steps!",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [0, 6700]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      legend: { display: true,
        labels: {
           fontColor: 'black',
           fontSize: 20
         }
       },
      title: {
        display: false,
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
            maxTicksLimit: 12,
            min: 0,
            max: 12000,
            stepSize: 2000,
          }
        }]
      }
    }
  });

  var numOfStepsLineChart = new Chart($('#js-num-of-steps-line-chart'), {
    plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
      };
    }
  }],
    type: 'line',
    data: {
      labels: ['06/15', '06/16', '06/17', '06/18', '06/19', '06/20', '06/21'],
      datasets: [{
        data: [],
        label: "Number of Steps this week!",
        borderColor: "#3e95cd",
        fill: true
      }
      ]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
          }
        }]
      },
      legend: { display: true,
       labels: {
          fontColor: 'black',
          fontSize: 20
        },
       },
      responsive: false,
      maintainAspectRatio: false,
      title: {
        display: false,
      }
    }
  });

  var numMinActiveChart = new Chart($("#js-num-mins-active-chart"), {
    plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
      };
    }
  }],
    type: 'bar',
    data: {
      labels: ["", "All Users"],
      datasets: [
        {
          label: "Minutes Active",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [0, 6700]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      legend: { display: true,
        labels: {
           fontColor: 'black',
           fontSize: 20
         }
       },
      title: {
        display: false,
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
            maxTicksLimit: 12,
            min: 0,
            max: 300,
            stepSize: 50,
          }
        }]
      }
    }
  });

  var numMinActiveLineChart = new Chart($('#js-num-mins-active-line-chart'), {
    plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
      };
    }
  }],
    type: 'line',
    data: {
      labels: ['06/15', '06/16', '06/17', '06/18', '06/19', '06/20', '06/21'],
      datasets: [{
        data: [],
        label: "Minutes Active this week",
        borderColor: "#3e95cd",
        fill: true
      }
      ]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
          }
        }]
      },
      legend: { display: true,
       labels: {
          fontColor: 'black',
          fontSize: 20
        },
       },
      responsive: false,
      maintainAspectRatio: false,
      title: {
        display: false,
      }
    }
  });

  var flightsClimbedChart = new Chart($("#js-flights-climbed-chart"), {
    plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
      };
    }
  }],
    type: 'bar',
    data: {
      labels: ["", "All Users"],
      datasets: [
        {
          label: "Daily Step Goal",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [0, 6700]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      legend: { display: true,
        labels: {
           fontColor: 'black',
           fontSize: 20
         }
       },
      title: {
        display: false,
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
            maxTicksLimit: 12,
            min: 0,
            max: 50,
            stepSize: 5,
          }
        }]
      }
    }
  });

  var flightsClimbedLineChart = new Chart($('#js-flights-climbed-line-chart'), {
    plugins: [{
    beforeInit: function(chart, options) {
      chart.legend.afterFit = function() {
        this.height = this.height + 25;
      };
    }
  }],
    type: 'line',
    data: {
      labels: ['06/15', '06/16', '06/17', '06/18', '06/19', '06/20', '06/21'],
      datasets: [{
        data: [],
        label: "Flights climbed this week!",
        borderColor: "#3e95cd",
        fill: true
      }
      ]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
          }
        }]
      },
      legend: { display: true,
       labels: {
          fontColor: 'black',
          fontSize: 20
        },
       },
      responsive: false,
      maintainAspectRatio: false,
      title: {
        display: false,
      }
    }
  });


});
