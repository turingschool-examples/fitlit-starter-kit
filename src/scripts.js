$(function() {
  const randomUser = Math.floor(Math.random() * 50) + 1  
    
  const user = new User(userData[randomUser]);
  const usersRepo = new UsersRepo(userData);
  const userSleep = new UserSleep(userData);
  //   const usersSleepRepo = new UsersSleepRepo();
  const userHydration = new UserHydration(userData[randomUser], hydrationData);
  //   const userActivity = new UserActivity();
  //   const usersActivityRepo = UsersActivityRepo();
  let today = '2019/06/25'


  $('.span__currentUser').text(user.getUserFirstName())  
  $('.user__address').text(userData[randomUser].address);
  $('.user__email').text(userData[randomUser].email);
  $('.user__stride').text(userData[randomUser].strideLength);
  $('.user__step').text(userData[randomUser].dailyStepGoal);
  $('.user__friends').text(userData[randomUser].friends);
  $('.compare__user-steps-to-all').text(usersRepo.avgStepGoal())
  $('.user__dailyWater').text(userHydration.userOuncesToday())
  $('.sleep__user-current-sleepHours').text(userSleep.userSleepHoursByDate(randomUser, today));
  $('.sleep__user-current-sleepQuality').text(userSleep.userSleepQualityByDate(randomUser, today))

  const usersWeeklyWater = new Chart($('#weeklyUserDailyWater'), {
    type: 'bar',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: 'Water Consumed Per',
        data: userHydration.userOuncesByWeek(),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2
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
        backgroundColor: [
          'black',
          'black',
          'black', 
          'black', 
          'black',
          'black',
          '#fc7d93'
        ],
        // borderWidth: 2
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
        backgroundColor: [
          'black',
          'black', 
          'black',
          'black', 
          'black',
          'black',
          '#1F768A'
        ],
        // borderWidth: 2 
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



});