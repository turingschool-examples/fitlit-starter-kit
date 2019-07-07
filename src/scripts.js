$(document).ready(function() {
  // const hydrationRepo = new HydrationRepository(hydrationData);
  const today = '2019/06/15';
  $('#js-h2--user').hide();
  $('#js-user-profile').hide();
  $('#js-step-goal-chart').hide();
  $('#js-hydration-line-chart').hide();
  $('.sleep-charts').hide();
  $('.num-of-steps-charts').hide();
  $('.num-mins-active-charts').hide();
  $('.distance-miles-charts').hide();

  $('#js-change-user').click(function() {
    const userRepo = new UserRepository(userData);
    const hydrationRepo = new HydrationRepository(hydrationData);
    const sleepRepo = new SleepRepository(sleepData);
    const activityRepo = new ActivityRepository(activityData);

    const userID = Math.floor((Math.random() * 50) + 1);
    const specificUser = userRepo.returnUserData(userID);
    const user1 = new User(specificUser);
    const hydrationUser = hydrationRepo.returnUserHydrationData(userID);
    const hydration = new Hydration(hydrationUser);
    const sleepUser = sleepRepo.returnUserSleepData(userID);
    const sleep = new Sleep(sleepUser);
    const activityUser = activityRepo.returnUserActivityData(userID);
    const activity = new Activity(user1, activityUser);
    
    removeClasses();
    $('#js-change-user').removeClass('list-item--active');
    $('#js-user').addClass('list-item--active');

    $('#js-first-name').html(user1.returnFirstName());
    $('#js-full-name').html(user1.name);
    $('#js-address').html(user1.address);
    $('#js-email').html(user1.email);
    $('#js-friends').html(userRepo.makeFriendNames(userID));

    $('#js-h2--welcome').hide();
    $('#js-step-goal-chart').hide();
    $('#js-hydration-line-chart').hide();
    $('.sleep-charts').hide();
    $('.num-of-steps-charts').hide();
    $('.num-mins-active-charts').hide();
    $('.distance-miles-charts').hide();

    $('#js-user-profile').show();
    $('#js-h2--user').show();
    updateCharts(user1, hydration, sleep, activity, activityRepo);
  });

  $('#js-user').click(function() {
    $('#js-user-profile').show();
    $('#js-step-goal-chart').hide();
    $('#js-hydration-line-chart').hide();
    $('.sleep-charts').hide();
    $('.num-of-steps-charts').hide();
    $('.num-mins-active-charts').hide();
    $('.distance-miles-charts').hide();
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
    $('.distance-miles-charts').hide();
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
    $('.distance-miles-charts').hide();
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
    $('.distance-miles-charts').hide();
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
    $('.distance-miles-charts').hide();
    removeClasses();
    addClasses();
  });

  $('#js-distance').click(function() {
    $('.distance-miles-charts').show();
    $('#js-hydration-line-chart').hide();
    $('.num-mins-active-charts').hide();
    $('#js-user-profile').hide();
    $('#js-step-goal-chart').hide();
    $('.num-of-steps-charts').hide();
    $('.num-mins-active-charts').hide();
    removeClasses();
    addClasses();
  });

  $('#js-flights').click(function() {
    $('.num-of-steps-charts').show();
    $('#js-hydration-line-chart').hide();
    $('.sleep-charts').hide();
    $('#js-user-profile').hide();
    $('#js-step-goal-chart').hide();
    $('.num-mins-active-charts').hide();
    $('.distance-miles-charts').hide();
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
    // numMinActiveLineChart.data.datasets[0].data = 
    numMinActiveChart.update();
    numMinActiveLineChart.update();
  }

  function distanceTraveledCharts(activity, activityRepo) {
    
  }

  function flightsClimbedCharts(activity, activityRepo) {

  }

  function updateCharts(user, hydration, sleep, activity, activityRepo) {
    updateStepGoalChart(user);
    updateHydrationLineChart(hydration);
    updateSleepCharts(sleep);
    minsActiveCharts(activity, activityRepo);
    distanceTraveledCharts(activity, activityRepo);
    flightsClimbedCharts(activity, activityRepo);
  }







  var stepGoalChart = new Chart($("#js-step-goal-chart"), {
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
      legend: { display: false },
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
    type: 'line',
    data: {
      labels: ['06/15', '06/16', '06/17', '06/18', '06/19', '06/20', '06/21'],
      datasets: [{ 
        data: [],
        label: "",
        borderColor: "#3e95cd",
        fill: true
      } 
      ]
    },
    options: {
      legend: { display: false },
      responsive: false,
      maintainAspectRatio: false,
      title: {
        display: false,
      }
    }
  });

  var sleepQualityLineChart = new Chart($('#js-sleepQuality-line-chart'), {
    type: 'line',
    data: {
      labels: ['06/15', '06/16', '06/17', '06/18', '06/19', '06/20', '06/21'],
      datasets: [{ 
        data: [],
        label: "",
        borderColor: "#3e95cd",
        fill: true
      } 
      ]
    },
    options: {
      legend: { display: false },
      responsive: false,
      maintainAspectRatio: false,
      title: {
        display: false,
      }
    }
  });

  var sleepHoursLineChart = new Chart($('#js-sleepHours-line-chart'), {
    type: 'line',
    data: {
      labels: ['06/15', '06/16', '06/17', '06/18', '06/19', '06/20', '06/21'],
      datasets: [{ 
        data: [],
        label: "",
        borderColor: "#3e95cd",
        fill: true
      } 
      ]
    },
    options: {
      legend: { display: false },
      responsive: false,
      maintainAspectRatio: false,
      title: {
        display: false,
      }
    }
  });

  
  var numOfStepsChart = new Chart($("#js-num-of-steps-chart"), {
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
      legend: { display: false },
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
    type: 'line',
    data: {
      labels: ['06/15', '06/16', '06/17', '06/18', '06/19', '06/20', '06/21'],
      datasets: [{ 
        data: [],
        label: "",
        borderColor: "#3e95cd",
        fill: true
      } 
      ]
    },
    options: {
      legend: { display: false },
      responsive: false,
      maintainAspectRatio: false,
      title: {
        display: false,
      }
    }
  });

  var numMinActiveChart = new Chart($("#js-num-mins-active-chart"), {
    type: 'bar',
    data: {
      labels: ["", "All Users"],
      datasets: [
        {
          label: "Daily Step Goal",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [0, 0]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      legend: { display: false },
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
    type: 'line',
    data: {
      labels: ['06/15', '06/16', '06/17', '06/18', '06/19', '06/20', '06/21'],
      datasets: [{ 
        data: [],
        label: "",
        borderColor: "#3e95cd",
        fill: true
      } 
      ]
    },
    options: {
      legend: { display: false },
      responsive: false,
      maintainAspectRatio: false,
      title: {
        display: false,
      }
    }
  });

  var distanceMilesChart = new Chart($("#js-distance-miles-chart"), {
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
      legend: { display: false },
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

  var flightsClimbedLineChart = new Chart($('#js-flights-climbed-line-chart'), {
    type: 'line',
    data: {
      labels: ['06/15', '06/16', '06/17', '06/18', '06/19', '06/20', '06/21'],
      datasets: [{ 
        data: [],
        label: "",
        borderColor: "#3e95cd",
        fill: true
      } 
      ]
    },
    options: {
      legend: { display: false },
      responsive: false,
      maintainAspectRatio: false,
      title: {
        display: false,
      }
    }
  });
});