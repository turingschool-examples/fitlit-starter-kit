$( document ).ready(() => {
  populateUser();
});

$('canvas').hide();
$('.section--right__friend-chart').on('mouseenter', () => {
  $('#doughnut-chart').show()
}).on('mouseleave', () => {
  $('#doughnut-chart').hide();
});

$('.section--right__sleep-chart').on('mouseenter', () => {
  $('#mixed-chart').show()
}).on('mouseleave', () => {
  $('#mixed-chart').hide();
});

 var friendChallengeChart = new Chart(document.getElementById('doughnut-chart'), {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      label: 'Population (millions)',
      backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850', '#f1c40f'],
      data: []
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Friend Step Challenge',
      fontColor: 'white',
      fontSize: 26,
      fontFamily: 'Roboto Mono'
    },
    legend: { display: true,
      labels: {
        fontColor: 'white',
        fontSize: 20,
        fontFamily: 'Roboto Mono'
      }
    },
  }
});

var sleepChart = new Chart(document.getElementById("mixed-chart"), {
  type: 'bar',
  data: {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [{
      label: 'Hours',
      type: 'line',
      borderColor: '#d35400',
      data: [],
      fill: true,
    }, {
      label: 'Quality',
      type: 'line',
      borderColor: '#f1c40f',
      data: [],
      fill: true
    }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Sleep',
      fontColor: 'white',
      fontSize: 26,
      fontFamily: 'Roboto Mono'
    },
    legend: { 
      display: true,
      labels: {
        fontColor: 'white',
        fontSize: 20,
        fontFamily: 'Roboto Mono'
      }
    },
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          color: 'white',
          display: false
        },
        scaleLabel: {
          display: true,
          fontColor: 'white',
          fontSize: 20,
          labelString: 'Week'
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: 'white',
          display: false
        },
        scaleLabel: {
          display: true,
          fontColor: 'white',
          fontSize: 20,
          labelString: 'Sleep Hours & Quality'
        }
      }]
    }
  }
});

function populateFrndChallChart(user, activity) {
  let chartLabels = activity.wklyStepsChallenge(user.id, '2019/06/15');
  let labeledNames = chartLabels.map((nameOfFriends) => nameOfFriends.name);
  let stepsData = chartLabels.map((nameOfFriends) => nameOfFriends.wklyStepTotal);
  friendChallengeChart.data.labels = labeledNames;
  friendChallengeChart.data.datasets[0].data = stepsData;
  friendChallengeChart.update();
}

function populateSleepChart(user, sleep) {
  let chartHours = sleep.dailyHoursSleptPerWeek(user.id, '2019/06/15');
  let chartQuality = sleep.dailySleepQualityPerWk(user.id, "2019/06/15");
  sleepChart.data.datasets[0].data = chartHours;
  sleepChart.data.datasets[1].data = chartQuality;
  sleepChart.update();
}

function populateUser() {
  let randomUser = Math.round(Math.random() * (50 - 1) + 1);
  const userRepository = new UserRepository(userData);
  const userInfo = userRepository.returnUserData(randomUser);
  const user = new User(userInfo);
  const activity = new Activity(activityData);
  populateUserCard(user, activity);
  populateMainPage(user, activity);
  populateHydrationWidget(user);
  populateSleepwidget(user);
  populateActivity(user, activity);
  let name = user.returnUserName();
  $('.user__name').text(`${name}`);
  populateWeeklyActivity(user, activity);
  weeklyMilesMessage(user, activity);
  populateFrndChallChart(user, activity);
}

function populateActivity(user, activity) {
  let milesToday = activity.milesWalkedInDay('2019/06/15', userData);
  $('.day-act-miles').text(`${milesToday}`);
  let minsActive = activity.minutesActive(user.id, '2019/06/15');
  $('.user-mins-active').text(`${minsActive}`);
  let avgMinsActAll = activity.averageActivity('2019/06/15', 'minutesActive');
  $('.avg-mins-active-amng-all-users').text(`${avgMinsActAll}`);
  let allUserSteps = activity.averageActivity('2019/06/15', 'numSteps');
  $('.avg-steps-amng-all-users').text(`${allUserSteps}`);
  let allUsersFlights = activity.averageActivity('2019/06/15', 'flightsOfStairs');
  $('.avg-flights-amng-all-users').text(`${allUsersFlights}`);
  let userFlightsToday = activity.stairFlightsInDay('2019/06/15', user.id);
  $('.user-flights').text(`${userFlightsToday}`);
}

function populateUserCard(userData, actData) {
  let avgUserSteps = actData.averageActivity('2019/09/22', 'numSteps');
  $('.user__address').text(`${userData.address}`);
  $('.user__email').text(`${userData.email}`);
  $('.user__strideLength').text(`${userData.strideLength}`);
  $('.user__dailyStepGoal').text(`${userData.dailyStepGoal}`);
  $('.average__dailyStepGoal').text(`${avgUserSteps}`);
}

function populateMainPage(userData, actData) {
  let stepsToday = actData.totalUserStepsDaily(userData.id, '2019/09/22');
  $('.steps').text(`${stepsToday}`);
  $('.user-steps').text(`${stepsToday}`);
}

function populateHydrationWidget(user) {
  const hydration = new Hydration(hydrationData);
  let waterIntakeToday = hydration.totalOuncesDaily('2019/09/22', user.id);
  $('.ounces').text(`${waterIntakeToday}`);
  hydrationMoreInfo(hydration, user);
}

function hydrationMoreInfo(instance, user) {
  const weeklyOunces = instance.dailyOuncesPerWeek(user.id);
  $('.day-1').text(`${weeklyOunces[0]}`);
  $('.day-2').text(`${weeklyOunces[1]}`);
  $('.day-3').text(`${weeklyOunces[2]}`);
  $('.day-4').text(`${weeklyOunces[3]}`);
  $('.day-5').text(`${weeklyOunces[4]}`);
  $('.day-6').text(`${weeklyOunces[5]}`);
  $('.day-7').text(`${weeklyOunces[6]}`);
}

function populateSleepwidget(user) {
  const sleep = new Sleep(sleepData);
  let hoursSleptToday = sleep.hoursSleptByDate('2019/06/15', user.id);
  $('.hrsSlept').text(`${hoursSleptToday}`);
  let qualSleepToday = sleep.sleepQualityByDate('2019/06/15', user.id)
  $('.qualSlept').text(`${qualSleepToday}`);
  displaySleepComp(user, sleep);
  let dailyHoursSleptForWeek = sleep.dailyHoursSleptPerWeek(3, "2019/06/15");
  let dailyQualitySleepForWk = sleep.dailySleepQualityPerWk(3, "2019/06/15");
  sleepHoursWkInfo(dailyHoursSleptForWeek);
  sleepQualityWkInfo(dailyQualitySleepForWk);
  let avgWklyHrsSleep = sleep.averageHoursSlept(user.id);
  $('.day-sleep-avg').text(`${avgWklyHrsSleep}`);
  let avgWklySleepQual = sleep.averageQualitySleep(user.id);
  $('.day-sleep-q-avg').text(`${avgWklySleepQual}`);
  populateSleepChart(user, sleep);
}

function sleepHoursWkInfo(listOfDailyHours) {
  $('.day-sleep-1').text(`${listOfDailyHours[0]}`);
  $('.day-sleep-2').text(`${listOfDailyHours[1]}`);
  $('.day-sleep-3').text(`${listOfDailyHours[2]}`);
  $('.day-sleep-4').text(`${listOfDailyHours[3]}`);
  $('.day-sleep-5').text(`${listOfDailyHours[4]}`);
  $('.day-sleep-6').text(`${listOfDailyHours[5]}`);
  $('.day-sleep-7').text(`${listOfDailyHours[6]}`);
}

function sleepQualityWkInfo(listOfDailySleepQual) {
  $('.day-sleep-q-1').text(`${listOfDailySleepQual[0]}`);
  $('.day-sleep-q-2').text(`${listOfDailySleepQual[1]}`);
  $('.day-sleep-q-3').text(`${listOfDailySleepQual[2]}`);
  $('.day-sleep-q-4').text(`${listOfDailySleepQual[3]}`);
  $('.day-sleep-q-5').text(`${listOfDailySleepQual[4]}`);
  $('.day-sleep-q-6').text(`${listOfDailySleepQual[5]}`);
  $('.day-sleep-q-7').text(`${listOfDailySleepQual[6]}`);
}

function populateWeeklyActivity(user, activity) {
  let weeklySteps = activity.dailyStepsPerWeek(user.id, "2019/06/15");
  $('.steps-day-1').text(`${weeklySteps[0]}`);
  $('.steps-day-2').text(`${weeklySteps[1]}`);
  $('.steps-day-3').text(`${weeklySteps[2]}`);
  $('.steps-day-4').text(`${weeklySteps[3]}`);
  $('.steps-day-5').text(`${weeklySteps[4]}`);
  $('.steps-day-6').text(`${weeklySteps[5]}`);
  $('.steps-day-7').text(`${weeklySteps[6]}`);
  let weeklyMinsActive = activity.dailyMinsActivePerWeek(user.id, "2019/06/15");
  $('.mins-day-1').text(`${weeklyMinsActive[0]}`);
  $('.mins-day-2').text(`${weeklyMinsActive[1]}`);
  $('.mins-day-3').text(`${weeklyMinsActive[2]}`);
  $('.mins-day-4').text(`${weeklyMinsActive[3]}`);
  $('.mins-day-5').text(`${weeklyMinsActive[4]}`);
  $('.mins-day-6').text(`${weeklyMinsActive[5]}`);
  $('.mins-day-7').text(`${weeklyMinsActive[6]}`);
  let weeklyFlights = activity.dailyStairFlightsPerWeek(user.id, "2019/06/15");
  $('.flights-day-1').text(`${weeklyFlights[0]}`);
  $('.flights-day-2').text(`${weeklyFlights[1]}`);
  $('.flights-day-3').text(`${weeklyFlights[2]}`);
  $('.flights-day-4').text(`${weeklyFlights[3]}`);
  $('.flights-day-5').text(`${weeklyFlights[4]}`);
  $('.flights-day-6').text(`${weeklyFlights[5]}`);
  $('.flights-day-7').text(`${weeklyFlights[6]}`);
}

function weeklyMilesMessage(user, activity) {
  let marathon = Math.round(activity.milesWalkedInWeek(user.id, "2019/06/15", userData) / 26);
  $('.marathon__message').text(`You walked ${marathon} marathons this week!`)
}

function displaySleepComp(user, sleep) {
  if (sleep.sleepComp('2019/06/15', user.id)) {
    $('.sleep__message').text('Great Sleep! Keep it up!');
  } else {
    $('.sleep__message').text('You need good sleep for great health!');
  }
}



