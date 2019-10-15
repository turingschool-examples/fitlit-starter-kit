$(function() {
  const randomUser = Math.floor(Math.random() * 50) + 1

  const user = new User(userData[randomUser]);
  const usersRepo = new UsersRepo(userData);
  const userSleep = new UserSleep(userData[randomUser]);
  const userHydration = new UserHydration(userData[randomUser], hydrationData);
  const userActivity = new UserActivity(userData[randomUser], activityData);

  let today = '2019/06/25';

  let $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    columnWidth: 100,
    rowHeight: 40,
    gutter: 7,
  });

  let $draggable = $('.draggable').draggabilly({
  });

  let $grid1 = $('.grid').packery({
    itemSelector: '.grid-item',
    columnWidth: 100
  });

  $grid.find('.grid-item').each( function( i, gridItem ) {
    let draggie = new Draggabilly( gridItem );
    $grid.packery( 'bindDraggabillyEvents', draggie );
  });

  $('.user__fullName').text(userData[randomUser].name)
  $('.span__currentUser').text(user.getUserFirstName());
  $('.user__address').text(userData[randomUser].address);
  $('.user__email').text(userData[randomUser].email);
  $('.user__stride').text(userData[randomUser].strideLength);
  $('.user__step').text(userData[randomUser].dailyStepGoal);
  $('.user__dailyWater').text(userHydration.userOuncesToday());
  $('.section__sleep--step-feedback').text(userSleep.giveUserSleepFeedback(randomUser, today));
  $('.activity__current--step').text(userActivity.userStepsByDate(randomUser, today));
  $('.activity__minutes--active').text(userActivity.userMinutesActiveByDate(randomUser, today))
  $('.activity__steps--miles').text(userActivity.userMilesByDate(randomUser, today));

  const usersWeeklyWater = new Chart($('#weeklyUserDailyWater'), {
    type: 'horizontalBar',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: 'Water Consumed Per',
        data: userHydration.userOuncesByWeek(),
        backgroundColor: ['rgb(112, 28, 1, 0.7)', 'rgb(112, 56, 1, 0.7)', 'rgb(112, 84, 1, 0.7)', 'rgb(112, 111, 1, 0.7)', 'rgb(85, 112, 1, 0.7)', 'rgb(57, 112, 1, 0.7)', 'rgb(112, 28, 1, 0.7)'],
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  const comparedHoursSleep = new Chart($('#currentHoursSleep'), {
    type: 'bar',
    data: {
      labels: ["Today\'s Hours Sleep", "Today\'s Sleep Quality"],
      datasets: [{
        label: 'Today\'s Sleep Numbers',
        data: [userSleep.userSleepHoursByDate(randomUser, today), userSleep.userSleepQualityByDate(randomUser, today)],
        backgroundColor: ['rgb(112, 56, 1, 0.7)', 'rgb(112, 84, 1, 0.7)', 'rgb(112, 111, 1, 0.7)'],
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  const hoursSleptChart = new Chart($('#weeklyHoursSleep'), {
    type: 'line',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: 'Hours Slept This Week',
        data: userSleep.userDailySleepHoursByWeek(),
        backgroundColor: ['rgb(112, 84, 1, 0.7)', 'rgb(112, 84, 1, 0.7)', 'rgb(112, 84, 1, 0.7)', 'rgb(112, 84, 1, 0.7)', 'rgb(112, 84, 1, 0.7)', 'rgb(112, 84, 1, 0.7)', 'rgb(112, 84, 1, 0.7)'],
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  const qualitySleepChart = new Chart($('#weeklyQualitySleep'), {
    type: 'line',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: 'Quality Sleep This Week',
        data: userSleep.userDailySleepQualityByWeek(),
        backgroundColor: ['rgb(85, 112, 1, 0.7)', 'rgb(85, 112, 1, 0.7)', 'rgb(85, 112, 1, 0.7)', 'rgb(85, 112, 1, 0.7)', 'rgb(85, 112, 1, 0.7)', 'rgb(85, 112, 1, 0.7)', 'rgb(85, 112, 1, 0.7)'],
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  const alltimeAvgSleepNums = new Chart($('#alltimeAvgSleep'), {
    type: 'bar',
    data: {
      labels: ["Alltime Average Hours Slept", "Alltime Average Sleep Quality"],
      datasets: [{
        label: 'Alltime Average Sleep Numebrs',
        data: [userSleep.avgUserHoursSleptPerDay(randomUser), userSleep.avgUserSleepQualityDateAllTime(randomUser)],
        backgroundColor: ['rgb(112, 28, 1, 0.7)', 'rgb(112, 56, 1, 0.7)', 'rgb(112, 28, 1, 0.7)'],
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  const stepGoalComparison = new Chart($('#stepGoalCompared'), {
    type: 'bar',
    data: {
      labels: ['Your Step Goal', 'Average of Users Step Goal'],
      datasets: [{
        label: 'Step Goal Comparison',
        data: [userData[randomUser].dailyStepGoal, usersRepo.avgStepGoal()],
        backgroundColor: ['rgb(112, 56, 1, 0.7)', 'rgb(57, 112, 1, 0.7)', 'rgb(57, 112, 1, 0.7)'],
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });


const friends = user.getFriends();

friends.unshift(userData[randomUser].id);

let friendsActivityLastWeek = friends.map(e => userActivity.userStepsByWeek(e));

  const stepGoalFriends = new Chart($('#stepGoalFriends'), {
    type: 'bar',
    data: {
      labels: ['Your Step Goal', 'Friends', 'Friends', 'Friends', 'Friends'],
      datasets: [{
        label: 'Step Goal Weekly Average',
        data: friendsActivityLastWeek,
        backgroundColor: ['rgb(112, 56, 1, 0.7)', 'rgb(57, 112, 1, 0.7)', 'rgb(57, 112, 1, 0.7)', 'rgb(57, 112, 1, 0.7)', 'rgb(57, 112, 1, 0.7)'],
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  //display this on the dom
let threeDays = userActivity.userThreeDaySteps()
threeDays.map(e => e.date)
});
