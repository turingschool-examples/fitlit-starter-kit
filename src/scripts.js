console.log("Hello World");

let randomUser = Math.floor(Math.random() * 50 ) 
let userRepository = new UserRepository(userData);
let hydration = new Hydration(hydrationData);
let sleep = new Sleep(sleepData);
let sleepRepository = new SleepRepository(sleepData);
let activity = new Activity(activityData);
let activityRepository = new ActivityRepository(activityData);
let activeUser = new User(userData[randomUser]);


$(document).ready(function() {
  $('.first-name').text(activeUser.displayUsersFirstName());
  $('#personal-stride').text(userData[randomUser].strideLength);
  $('#personal-email').text(userData[randomUser].email);
  $('#personal-step-goal').text(userData[randomUser].dailyStepGoal);
  $('#personal-address').text(userData[randomUser].address);
  $('#num-daily-hours-slept').text(sleep.displayHoursSlept(randomUser + 1, "2019/06/15"));
  $('#num-all-time-sleep-hours').text(sleep.displayRecordHoursSlept(randomUser + 1)[1])
  $('#num-all-time-sleep-hours-date').text(sleep.displayRecordHoursSlept(randomUser + 1)[0]);
  $('#num-average-hours-slept').text(sleep.calculateAverageDailySleepHours(randomUser + 1));
  $('#num-daily-quality-slept').text(sleep.displaySleepQuality(randomUser + 1, "2019/06/15"));
  $('#num-all-time-quality-sleep').text(sleep.displayRecordSleepQuality(randomUser + 1)[1])
  $('#num-all-time-quality-sleep-date').text(sleep.displayRecordSleepQuality(randomUser + 1)[0]);
  $('#num-average-quality-slept').text(sleep.calculateAverageSleepQuality(randomUser +1));
  $('#num-daily-miles').text(activity.calculateMilesWalked(randomUser + 1, "2019/06/15"));
  $('#num-steps-today').text(activityData[randomUser].numSteps);
  $('#num-daily-active-minutes').text(activity.displayActiveMinutes(randomUser + 1, "2019/06/15"));
  $('#num-all-time-active-minutes').text(activity.displayRecordActiveDay(randomUser + 1)[1]);
  $('#num-all-time-active-minutes-date').text(activity.displayRecordActiveDay(randomUser + 1)[0]);
  $('#num-weekly-steps-average').text(activity.displayWeeklyStepsAverage(randomUser + 1));
  $('#num-weekly-min-active-average').text(activity.displayWeeklyActiveMinutesAverage(randomUser + 1));
  $('#num-weekly-flights-average').text(activity.displayWeeklyFlightsAverage(randomUser + 1));
  $('#daily-ounces').text(hydration.displayFluidOuncesPerDay(randomUser + 1, "2019/06/15"));




 // $('#num-daily-hours-slept').text(sleep.displayHoursSlept(randomUser + 1, ${dateInput}));







        var weeklyStepsBarGraph = new Chart($('#weekly-steps-chart'), {
            type: 'bar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    data: activity.displayWeeklyStepsList(randomUser + 1),
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
        options: {legend: {display: false}
    }

        });




        var weeklyMinutesActiveBarGraph = new Chart($('#weekly-minutes-active-chart'), {
            type: 'bar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    label: 'weekly active minutes overview',
                    data: activity.displayWeeklyActiveMinutesList(randomUser + 1),
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
            options: {legend: {display: false},
        }
        
        });

  var weeklyFligthsClimbedBarGraph = new Chart($('#weekly-flights-chart'), {
            type: 'bar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    label: 'weekly flights climbed overview',
                    data: activity.displayWeeklyFlightsList(randomUser + 1),
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
        options: {legend: {display: false}}
        });


    var stepGoalComparisonGraph = new Chart($('#step-goal-chart'), {
            type: 'horizontalBar',
            data: {
                labels: ["me", "all users"],
                datasets: [{
                    label: 'my step goal versus all users',
                    data: [userData[randomUser].dailyStepGoal,userRepository.calculateAverageStepGoal()],
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
        options: {legend: {display: false}}
        });


      var weeklyWaterConsumptionChart = new Chart($('#water-chart'), {
            type: 'bar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    label: 'weekly active minutes overview',
                    data: hydration.displayWeeklyFluidOunce(randomUser + 1),
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
        options: {legend: {display: false}}
        });


   var hoursSleptChart = new Chart($('#hours-sleep-chart'), {
            type: 'line',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    label: 'hours slept this week',
                    data: sleep.displayWeeklySleep(randomUser + 1),
                    backgroundColor: [
                        '#9D9BA3',
                        '#9D9BA3',
                        '#9D9BA3', 
                        '#9D9BA3', 
                        '#9D9BA3',
                        '#9D9BA3',
                        '#fc7d93'
                    ],
                    borderWidth: 2
                }]
            },
        options: {legend: {display: false}}
        });

 var qualitySleepChart = new Chart($('#quality-sleep-chart'), {
            type: 'line',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    label: 'quality sleep this week',
                    data: sleep.displayWeeklySleepQuality(randomUser + 1),
                    backgroundColor: [
                        '#9D9BA3',
                        '#9D9BA3', 
                        '#9D9BA3',
                        '#9D9BA3', 
                        '#9D9BA3',
                        '#9D9BA3',
                        '#1F768A'
                    ],
                    borderWidth: 2 
                }]
            },
        options: {legend: {display: false}}
        });


 var dailyStepComparisonChart = new Chart($('#daily-step-comparison-chart'), {
            type: 'pie',
            data: {
                labels: ["me", "all users"],
                datasets: [{
                    label: 'daily step comparison',
                    data: [activityData[randomUser].numSteps, activityRepository.calculateAverageSteps('2019/06/15')
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
            }
        });


 var dailyMinutesActiveComparisonChart = new Chart($('#daily-active-minutes-comparison-chart'), {
            type: 'pie',
            data: {
                labels: ["me", "all users"],
                datasets: [{
                    label: 'daily active minutes comparison',
                    data: [activityData[randomUser].minutesActive, activityRepository.calculateAverageMinutesActive('2019/06/15')
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
            }
        });

 var dailyFlightsClimbedComparisonChart = new Chart($('#daily-flight-comparison-chart'), {
            type: 'pie',
            data: {
                labels: ["me", "all users"],
                datasets: [{
                    label: 'daily flights climbed comparison',
                    data: [activityData[randomUser].flightsOfStairs, activityRepository.calculateAverageStairs('2019/06/15')
                    ],
                    backgroundColor: [
                        '#2FB5B6',
                        '#FC5D79'
                    ],
                    borderColor: [
                        '#2FB5B6',
                        '#FC5D79',
                    ],
                    borderWidth: 2
                }]
            }
        });




})


console.log(randomUser)
console.log(randomUser + 1)







