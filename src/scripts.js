$(function() {

  const randomUser = Math.floor(Math.random() * 50) +1 
  const userRepository = new UserRepository(userData);
  const hydration = new Hydration(userData[randomUser]);
  const user = new User(userData[randomUser]);
  const sleep = new Sleep(userData);
  // const sleepRepository = new SleepRepository();
  const activity = new Activity(activityData);
  var activityRepository = new ActivityRepository(activityData);

  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 700,
    fitWidth: true,
});
  
  $('#random-user-span').text(user.getFirstName());
  $('#article__user--name').text(user.getFirstName());
  $('#article__user--address').text(userData[randomUser].address);
  $('#article__user--email').text(userData[randomUser].email);
  $('#article__user--stridelength').text(userData[randomUser].strideLength);
  $('#article__user--stepgoal').text(userData[randomUser].dailyStepGoal);
  $('#article__user--stepcompare').text(userRepository.calcStepGoalAvg());
  $('#article__user--currentsleep').text(sleep.findAvgHoursSlept('2019/06/18'));
  // $('#article__user--weekssleep').text();
  // $('#article__user--avgsleep').text();
  $('#article__user--todaysteps').text(activityData[randomUser].numSteps);
  $('#article__user--activemins').text(activity.minsUserActive(randomUser, '2019/06/15'));
  $('#article__user--todaydistance').text(activity.milesUserWalked(randomUser, '2019/06/15', userData));
  $('#article__user--weeklyview').text(activity.weeklyAvgMins(randomUser, '2019/06/15'));
  $('#article__user--comparesteps').text(activityRepository.avgStepsClimbed('2019/06/15'));
  $('#article__user--comparemins').text(activityRepository.avgStepsTaken('2019/06/15'));
  $('#article__user--comparestairs').text(activityRepository.avgMinutesActive('2019/06/15'));
  $('#daily-hydration-output').text(`Today, you have consumed ${hydration.findWaterByDate('2019/06/15')} ounces of water.`);

  const weeklyWaterIntake = new Chart($('#weekly-hydration-chart'), {
    type: 'bar',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: 'Weekly Hydration',
        data: hydration.findWeeklyWaterCons(),
        backgroundColor: [
          '#73A9BB', 
          '#FC5D79', 
          '#B6E7EC', 
          '#fda8b7', 
          '#8573BB',
          '#fc7d93',
          '#73A9BB'
        ],
        borderColor: [
          '#73A9BB',
          '#FC5D79',
          '#B6E7EC',
          '#fda8b7',
          '#8573BB',
          '#fc7d93',
          '#73A9BB', 
        ],
        borderWidth: 2 
      }]
    },
    options: {
      title: {
        display: true,
        fontColor: 'black',
        text: 'Weekly Water Intake (fl oz)'
      },
      layout: {
        padding: {
          left: 10,
          right: 0,
          top: 0,
          bottom: 10,
        }
      },
    	responsive: false,
    		scales: {
    		    yAxes: [{
    		        ticks: {
    		            beginAtZero: true
    		        }
    		    }]
    		}
    }
  });

  const weeklySleepAverages = new Chart($('#weekly-sleep-chart'), {
    type: 'horizontalBar',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: 'Weekly Sleep Chart',
        data: [sleep.findSleepQualityWeek('2019/06/18'), sleep.findSleepHoursWeek('2019/06/18')],
        backgroundColor: [
          '#73A9BB', 
          '#FC5D79', 
          '#B6E7EC', 
          '#fda8b7', 
          '#8573BB',
          '#fc7d93',
          '#73A9BB'
        ],
        borderColor: [
          '#73A9BB',
          '#FC5D79',
          '#B6E7EC',
          '#fda8b7',
          '#8573BB',
          '#fc7d93',
          '#73A9BB', 
        ],
        borderWidth: 2 
      }]
    },
    options: {
      title: {
        display: true,
        fontColor: 'black',
        text: 'Weekly Sleep Chart'
      },
      layout: {
        padding: {
          left: 10,
          right: 0,
          top: 0,
          bottom: 10,
        }
      },
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  
      const allTimeAvgSleepChart = new Chart($('#alltime-average-sleep-chart'), {
        type: 'pie',
        data: {
          labels: ['Average Sleep Quality', 'Average Hours of Sleep'],
          datasets: [{
            label: 'All-time Averages of Sleep',
            data: [8, 4.5],
            // [sleep.(), sleep.()]''
            backgroundColor: [
              '#B6E7EC',
              '#FC5D79', 
            ],
            borderColor: [
              '#B6E7EC', 
              '#FC5D79',
            ],
            borderWidth: 2 
          }]
        },
        options: {
            title: {
                display: true,
                fontColor: 'black',
                text: 'All-time Sleep Averages'
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10,
                        }
                    },
            }                
      }); 
    const dailyStepComparisonChart = new Chart($('#compare-user-steps-chart'), {
        type: 'doughnut',
        data: {
          labels: ['Your Steps', 'All Users Steps'],
          datasets: [{
            label: 'Daily Step Comparison',
            data: [activityData[randomUser].numSteps, activityRepository.avgStepsTaken('2019/06/15')
            ],
            backgroundColor: [
              '#73A9BB',
              '#FC5D79', 
            ],
            borderColor: [
              '#73A9BB', 
              '#FC5D79',
            ],
            borderWidth: 2 
          }]
        },
        options: {
            title: {
                display: true,
                fontColor: 'black',
                text: 'Daily Step Comparison'
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10,
                        }       
      },
    }                
  });

  var dailyMinsComparisonChart = new Chart($('#compare-minutes-active-chart'), {
    type:  'polarArea',
    data: {
      labels: ['Your Minutes Active', 'All User\'s Minutes Active'],
      datasets: [{
        label: ['Your Minutes Active', 'All User\'s Minutes Active'],
        data: [activityData[randomUser].minutesActive, activityRepository.avgMinutesActive('2019/06/15')
        ],
        backgroundColor: [
          '#73A9BB',
          '#FC5D79', 
        ],
        borderColor: [
          '#73A9BB', 
          '#FC5D79',
        ],
        borderWidth: 2 
      }]
    },
    options: {
      title: {
        display: true,
        fontColor: 'black',
        text: 'Daily Minutes Active Comparison'
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        }
      },
    }                
  });


  var dailyStairsComparisonChart = new Chart($('#compare-user-stairs-chart'), {
    type: 'pie',
    data: {
      labels: ['Your Stairs Climbed', 'All User\'s Stair Climbed'],
      datasets: [{
        label: 'Daily Stairs Comparison',
        data: [activityData[randomUser].flightsOfStairs, activityRepository.avgStepsClimbed('2019/06/15')
        ],
        backgroundColor: [
          '#73A9BB',
          '#FC5D79', 
        ],
        borderColor: [
          '#73A9BB', 
          '#FC5D79',
        ],
        borderWidth: 2 
      }]
    },
    options: {
      title: {
        display: true,
        fontColor: 'black',
        text: 'Daily Stairs Comparison'
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        }
      },
    }                
  });
});