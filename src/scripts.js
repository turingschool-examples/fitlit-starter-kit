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
                    label: 'weekly step overview',
                    data: activity.displayWeeklyStepsList(randomUser + 1),
                    backgroundColor: [
                        'rgba(250, 250, 250, 0.4)',
                        'rgba(0, 0, 0, 0.4)', // 0 red, 0 blue, 0 green, 40% opacity
                        'rgba(50, 50, 50, 0.4)', // 50 red, 50 blue, 50 green, 40% opacity
                        'rgba(100, 100, 100, 0.4)', //alternatively use a hex code
                        'rgba(150, 150, 150, 0.4)',
                        'rgba(200, 200, 200, 0.4)',
                        'rgba(250, 250, 250, 0.4)'
                    ],
                    borderColor: [
                        'rgba(0,0,0,1)', //full black border
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)', //full black border
                    ],
                    borderWidth: 2 //2 pixel border
                }]
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
                        'rgba(250, 250, 250, 0.4)',
                        'rgba(0, 0, 0, 0.4)', // 0 red, 0 blue, 0 green, 40% opacity
                        'rgba(50, 50, 50, 0.4)', // 50 red, 50 blue, 50 green, 40% opacity
                        'rgba(100, 100, 100, 0.4)', //alternatively use a hex code
                        'rgba(150, 150, 150, 0.4)',
                        'rgba(200, 200, 200, 0.4)',
                        'rgba(250, 250, 250, 0.4)'
                    ],
                    borderColor: [
                        'rgba(0,0,0,1)', //full black border
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)', //full black border
                    ],
                    borderWidth: 2 //2 pixel border
                }]
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
                        'rgba(250, 250, 250, 0.4)',
                        'rgba(0, 0, 0, 0.4)', // 0 red, 0 blue, 0 green, 40% opacity
                        'rgba(50, 50, 50, 0.4)', // 50 red, 50 blue, 50 green, 40% opacity
                        'rgba(100, 100, 100, 0.4)', //alternatively use a hex code
                        'rgba(150, 150, 150, 0.4)',
                        'rgba(200, 200, 200, 0.4)',
                        'rgba(250, 250, 250, 0.4)'
                    ],
                    borderColor: [
                        'rgba(0,0,0,1)', //full black border
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)', //full black border
                    ],
                    borderWidth: 2 //2 pixel border
                }]
            }
        });


    var stepGoalComparisonGraph = new Chart($('#step-goal-chart'), {
            type: 'horizontalBar',
            data: {
                labels: ["me", "all users"],
                datasets: [{
                    label: 'my step goal versus all users',
                    data: [userData[randomUser].dailyStepGoal, userRepository.calculateAverageStepGoal()],
                    backgroundColor: [
                        'rgba(250, 250, 250, 0.4)',
                        'rgba(0, 0, 0, 0.4)', // 0 red, 0 blue, 0 green, 40% opacity
                    ],
                    borderColor: [
                        'rgba(0,0,0,1)', //full black border
                        'rgba(0,0,0,1)',
              
                    ],
                    borderWidth: 2 //2 pixel border
                }]
            }
        });


      var weeklyWaterConsumptionChart = new Chart($('#water-chart'), {
            type: 'bar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    label: 'weekly active minutes overview',
                    data: hydration.displayWeeklyFluidOunce(randomUser + 1),
                    backgroundColor: [
                        'rgba(250, 250, 250, 0.4)',
                        'rgba(0, 0, 0, 0.4)', // 0 red, 0 blue, 0 green, 40% opacity
                        'rgba(50, 50, 50, 0.4)', // 50 red, 50 blue, 50 green, 40% opacity
                        'rgba(100, 100, 100, 0.4)', //alternatively use a hex code
                        'rgba(150, 150, 150, 0.4)',
                        'rgba(200, 200, 200, 0.4)',
                        'rgba(250, 250, 250, 0.4)'
                    ],
                    borderColor: [
                        'rgba(0,0,0,1)', //full black border
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)',
                        'rgba(0,0,0,1)', //full black border
                    ],
                    borderWidth: 2 //2 pixel border
                }]
            }
        });



})


console.log(randomUser)
console.log(randomUser + 1)







