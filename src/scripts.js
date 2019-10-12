$(function() {
  const randomUser = Math.floor(Math.random() * 50) + 1  
    
  const user = new User(userData[randomUser]);
  const usersRepo = new UsersRepo(userData);
  const userSleep = new UserSleep(userData[randomUser]);
  //   const usersSleepRepo = new UsersSleepRepo(sleepData);
  const userHydration = new UserHydration(userData[randomUser], hydrationData);
  //   const userActivity = new UserActivity(activityData);
  //   const usersActivityRepo = UsersActivityRepo(activityData);
  let today = '2019/06/25';

  let $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    columnWidth: 100,
    // rowHeight: 40,
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

  function orderItems() {
    var itemElems = $grid.packery('getItemElements');
    $( itemElems ).each( function( i, itemElem ) {
      $( itemElem ).text( i + 1 );
    });
  }
  
  $grid.on( 'layoutComplete', orderItems );
  $grid.on( 'dragItemPositioned', orderItems );
  
 
  $('.span__currentUser').text(user.getUserFirstName())  
  $('.user__address').text(userData[randomUser].address);
  $('.user__email').text(userData[randomUser].email);
  $('.user__stride').text(userData[randomUser].strideLength);
  $('.user__step').text(userData[randomUser].dailyStepGoal);
  $('.user__friends').text(userData[randomUser].friends);
  $('.compare__user-steps-to-all').text(usersRepo.avgStepGoal())
  $('.user__dailyWater').text(userHydration.userOuncesToday())
  $('.sleep__user-current-sleepHours').text(userSleep.userSleepHoursByDate(randomUser, today));
  $('.sleep__user-current-sleepQuality').text(userSleep.userSleepQualityByDate(randomUser, today));

  const usersWeeklyWater = new Chart($('#weeklyUserDailyWater'), {
    type: 'bar',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: 'Water Consumed Per',
        data: userHydration.userOuncesByWeek(),
        backgroundColor: [
          'rgb(112, 28, 1, 0.7)',
          'rgb(112, 56, 1, 0.7)',
          'rgb(112, 84, 1, 0.7)',
          'rgb(112, 111, 1, 0.7)',
          'rgb(85, 112, 1, 0.7)',
          'rgb(57, 112, 1, 0.7)',
          'rgb(112, 28, 1, 0.7)'
        ],
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
          'rgb(112, 84, 1, 0.7)',
          'rgb(112, 84, 1, 0.7)',
          'rgb(112, 84, 1, 0.7)', 
          'rgb(112, 84, 1, 0.7)', 
          'rgb(112, 84, 1, 0.7)',
          'rgb(112, 84, 1, 0.7)',
          'rgb(112, 84, 1, 0.7)'
        ],
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
          'rgb(85, 112, 1, 0.7)',
          'rgb(85, 112, 1, 0.7)', 
          'rgb(85, 112, 1, 0.7)',
          'rgb(85, 112, 1, 0.7)', 
          'rgb(85, 112, 1, 0.7)',
          'rgb(85, 112, 1, 0.7)',
          'rgb(85, 112, 1, 0.7)'
        ],
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