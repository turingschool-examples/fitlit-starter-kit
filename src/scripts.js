$(function() {

const randomUser = Math.floor(Math.random() * 50) +1 
const userRepository = new UserRepository(userData);
const hydration = new Hydration(userData);
const user = new User(userData[randomUser]);
const sleep = new Sleep(userData);
// const sleepRepository = new SleepRepository();
const activity = new Activity(activityData);
var activityRepository = new ActivityRepository(activityData);

    $('#random-user-span').text(user.getFirstName());
    $('#article__user--name').text(user.getFirstName());
    $('#article__user--address').text(userData[randomUser].address);
    $('#article__user--email').text(userData[randomUser].email);
    $('#article__user--stridelength').text(userData[randomUser].strideLength);
    $('#article__user--stepgoal').text(userData[randomUser].dailyStepGoal);
    $('#article__user--stepcompare').text(userRepository.calcStepGoalAvg());
    $('#article__user--currentsleep').text();
    $('#article__user--weekssleep').text();
    $('#article__user--avgsleep').text();
    $('#article__user--todaysteps').text(activityData[randomUser].numSteps);
    $('#article__user--activemins').text(activity.minsUserActive(randomUser, '2019/06/15'));
    $('#article__user--todaydistance').text(activity.milesUserWalked(randomUser, '2019/06/15', userData));
    $('#article__user--weeklyview').text(activity);
    $('#article__user--comparesteps').text(activityRepository.avgStepsClimbed('2019/06/15'));
    $('#article__user--comparemins').text(activityRepository.avgStepsTaken('2019/06/15'));
    $('#article__user--comparestairs').text(activityRepository.avgMinutesActive('2019/06/15'));

    const weeklyWaterIntake = new Chart($('#weekly-hydration-chart'), {
        type: 'bar',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: 'Weekly Hydration',
        data: [ 43, 39, 61, 51, 52, 29, 57 ],
        // hydration.findWeeklyWaterCons(randomUser),
        backgroundColor: [
          '#2FB5B6', 
          '#FC5D79', 
          '#B6E7EC', 
          '#fda8b7', 
          '#1F768A',
          '#fc7d93',
          '#346081'
        ],
        borderColor: [
          '#2FB5B6',
          '#FC5D79',
          '#B6E7EC',
          '#fda8b7',
          '#1F768A',
          '#fc7d93',
          '#346081', 
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

    
    var dailyStepComparisonChart = new Chart($('#compare-user-steps-chart'), {
        type: 'pie',
        data: {
          labels: ['you', 'all users'],
          datasets: [{
            label: 'Daily Step Comparison',
            data: [activityData[randomUser].numSteps, activityRepository.avgStepsTaken('2019/06/15')
            ],
            backgroundColor: [
              '#2FB5B6',
              '#FC5D79', 
            ],
            borderColor: [
              '#2FB5B6', 
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
                    right: 0,
                    top: 0,
                    bottom: 10,
                        }
       
                    },
            }                
      });

      var dailyMinsComparisonChart = new Chart($('#compare-minutes-active-chart'), {
        type: 'pie',
        data: {
          labels: ['you', 'all users'],
          datasets: [{
            label: 'Daily Minutes Comparison',
            data: [activityData[randomUser].minutesActive, activityRepository.avgMinutesActive('2019/06/15')
            ],
            backgroundColor: [
              '#2FB5B6',
              '#FC5D79', 
            ],
            borderColor: [
              '#2FB5B6', 
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
                    right: 0,
                    top: 0,
                    bottom: 10,
                        }
       
                    },
            }                
      });

      var dailyMinsComparisonChart = new Chart($('#compare-user-stairs-chart'), {
        type: 'pie',
        data: {
          labels: ['you', 'all users'],
          datasets: [{
            label: 'Daily Stairs Comparison',
            data: [activityData[randomUser].flightsOfStairs, activityRepository.avgStepsClimbed('2019/06/15')
            ],
            backgroundColor: [
              '#2FB5B6',
              '#FC5D79', 
            ],
            borderColor: [
              '#2FB5B6', 
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
                    right: 0,
                    top: 0,
                    bottom: 10,
                        }
       
                    },
            }                
      });
    
   
  
    
    

});