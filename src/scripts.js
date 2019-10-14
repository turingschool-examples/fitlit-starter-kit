let randomNum = null;
let user = undefined;
let hydro  = undefined;
let sleep = undefined;
let activity = undefined;
let userRepository = undefined;
let hydroRepository = undefined;
let sleepRepository = undefined;
let activityRepository = undefined;

function getRandomNum() {
  randomNum = Math.floor((Math.random() * 50) + 1);
}

$(window).on('load', function () {
  getRandomNum();
  makeUsers(userData);
  makeHydro(hydrationData);
  makeSleep(sleepData);
  makeActivity(activityData);
  eventHandler();
  graphs();
})


$('.datepicker_button').on('click', function() {
    let date = $('#datepicker').val()
    console.log(date)
    graphs(date)
    $('.hydro_day').text(hydro.findFluidDate(date));
    $('.hydro_week').text(hydro.findFluidWeek(date).join(' '));
    $('.sleep_date').text(date);
    $('.sleep_hours_day').text(sleep.findHoursDay(date));
    $('.sleep_quality_day').text(sleep.findQualDay(date));
    $('.activity_date').text(date);
    $('.activity_steps_day').text(activity.stepGoalReached(date));
    $('.activity_min_active_day').text(activity.minutesActiveGivenDay(date));
    $('.activity_miles_walked_day').text(activity.milesWalked(date));
    $('.div_activity_steps_other_users_p').text(activityRepository.numberofStepsGivenDate(date));
    $('.div_activity_min_active_other_users_p').text(activityRepository.avgMinutesActiveGivenDate(date));
    $('.div_activity_stairs_other_users_p').text(activityRepository.numberofStepsGivenDate(date));
    $('.activity_min_active_week').text(activity.minActiveWeek(date).join(' '));
    $('.activity_steps_week').text(activity.stepsWeek(date).join(' '));
    $('.activity_stairs_week').text(activity.stairsWeek(date).join(' '));
    });

    $(function () {
        $('#datepicker').datepicker({ dateFormat: 'yy/mm/dd' });
    });


  function eventHandler() {
    $('.header_h1_span').text(`${user.returnFirstName()}`);
    $('.user_name').text(`${user.name.join(' ')}`);
    $('.user_email').text(`${user.email}`);
    $('.user_address').text(`${user.address}`);
    $('.user_stride_length').text(`${user.strideLength}`);
    $('.user_step_goal').text(`${user.dailyStepGoal}`);
    $('.user_friends').text(`${user.friends.length}`);
    $('.div_steps_other_users_p').text(`${userRepository.calculateAverageStepGoal()}`);
    $('.hydro_day').text(hydro.findFluidDate('2019/09/15'));
    $('.sleep_date').text('2019/09/15');
    $('.sleep_hours_day').text(sleep.findHoursDay('2019/09/15'));
    $('.sleep_quality_day').text(sleep.findQualDay('2019/09/15'));
    $('.sleep_hours_avg').text(sleep.findAvgSleepAll());
    $('.sleep_quality_avg').text(sleep.findAvgQualAll());
    $('.activity_date').text("2019/09/15");
    $('.activity_steps_day').text(activity.stepGoalReached('2019/09/15'));
    $('.activity_min_active_day').text(activity.minutesActiveGivenDay('2019/09/15'));
    $('.activity_miles_walked_day').text(activity.milesWalked('2019/09/15'));
    $('.div_activity_steps_other_users_p').text(activityRepository.numberofStepsGivenDate('2019/09/15'));
    $('.div_activity_min_active_other_users_p').text(activityRepository.avgMinutesActiveGivenDate('2019/09/15'));
    $('.div_activity_stairs_other_users_p').text(activityRepository.numberofStepsGivenDate('2019/09/15'));
  }


    function graphs(date = '2019/09/15') {

    var ctx = document.getElementById("myChartHydro").getContext('2d');
    var myChart = new Chart (ctx, {
        type: 'bar',
        data: {
            labels: ["Day-1", "Day-2", "Day-3", "Day-4", "Day-5", "Day-6", "Day-7"],
            datasets: [{
                label: 'Ounces This Week',
                data: hydro.findFluidWeek(date),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(30, 178, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(30, 178, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
  
                        beginAtZero:true
                    }
                }]
            }
        }
    });
  
  
    var ctx = document.getElementById("myChartStairsWeek").getContext('2d');
    var myChart = new Chart (ctx, {
        type: 'bar',
        data: {
            labels: ["Day-1", "Day-2", "Day-3", "Day-4", "Day-5", "Day-6", "Day-7"],
            datasets: [{
                label: 'Stairs this Week',
                data: activity.stairsWeek(date),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(30, 178, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(30, 178, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
  
                        beginAtZero:true
                    }
                }]
            }
        }
    });


    var ctx = document.getElementById("myChartStepsWeek").getContext('2d');
    var myChart = new Chart (ctx, {
        type: 'bar',
        data: {
            labels: ["Day-1", "Day-2", "Day-3", "Day-4", "Day-5", "Day-6", "Day-7"],
            datasets: [{
                label: 'Steps this Week',
                data: activity.stepsWeek(date),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(30, 178, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(30, 178, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
  
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    
    var ctx = document.getElementById("myChartMinActiveWeek").getContext('2d');
    var myChart = new Chart (ctx, {
        type: 'bar',
        data: {
            labels: ["Day-1", "Day-2", "Day-3", "Day-4", "Day-5", "Day-6", "Day-7"],
            datasets: [{
                label: 'Minutes Active',
                data: activity.minActiveWeek(date),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(30, 178, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(30, 178, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
  
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}






function makeUsers(data) {
  userRepository = new UserRepository(data);
  userRepository.findUser(randomNum);
  user = new User(userRepository.currentUser);
}

function makeHydro(data) {
  hydroRepository = new HydroRepository(data);
  hydroRepository.findUserId(randomNum);
  hydro = new Hydro(hydroRepository.currentUser);
}

function makeSleep(data) {
  sleepRepository = new SleepRepository(data);
  sleepRepository.findUserId(randomNum);
  sleep = new Sleep(sleepRepository.currentUser);
}

function makeActivity(data) {
  activityRepository = new ActivityRepository(data);
  activityRepository.findUserId(randomNum);
  activity = new Activity(activityRepository.currentUser, user);
}