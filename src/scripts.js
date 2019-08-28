//Generate random user 
const uniqueUserIndex = Math.floor(Math.random() * (50 - 1 + 1)) + 1;

//Repo variables
const userRepo = new UserRepo(userData);
const sleepRepo = new SleepRepo(sleepData);
const activityRepo = new ActivityRepo(activityData, userData);

//Individual Class Repos
const user = new User(userData[uniqueUserIndex]);
const hydration = new Hydration(hydrationData, user.id);
const sleep = new Sleep(sleepData, user.id);
const activity = new Activity(activityData, user);

//Date
const date = activityData.reverse()[0].date;
const dateObject = new Date(date);
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const formattedDate = dateObject.toLocaleString('en', options)

function dropYear(dates) {
  const reformattedDates = dates.map(date => {
    const splitDate = date.split('/');
    return [splitDate[1], splitDate[2]].join('/');
  })
  return reformattedDates
}
$(document).ready(function () {

  //Packery Items 
  let $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    columnWidth: 50,
    rowHeight: 30,
    gutter: 4,
  });

  let $draggable = $('.draggable').draggabilly({
    containment: true
  });

  $grid.find('.grid-item').each(function (i, gridItem) {
    let draggie = new Draggabilly(gridItem)
    $grid.packery('bindDraggabillyEvents', draggie)
  });


  // Function to find user name
  function findUserName(id) {
    return userData.find(user => user.id === id).name;
  }

  //User Section
  $('.username').text(`${user.returnUserName()}`)

  //Date Section
  $('.date').text(`${formattedDate}`);

  //Hydration
  $('.water-consumed').text(`${hydration.returnDailyFluidOunces(date)} ounces \n\n`);

  const weeklyOuncesChart = new Chart(document.getElementById('water-consumed-week').getContext('2d'), {
    type: 'horizontalBar',
    data: {
      labels: dropYear(hydration.returnWeek()),
      datasets: [{
        data: hydration.returnWeeklyNumOunces(),
        backgroundColor: [
          'rgba(92, 117, 218, 0.6)',
          'rgba(242, 188, 51, 0.6)',
          'rgba(126, 221, 255, 0.6)',
          'rgba(92, 117, 218, 0.6)',
          'rgba(242, 188, 51, 0.6)',
          'rgba(126, 221, 255, 0.6)',
          'rgba(92, 117, 218, 0.6)'
        ],
      }]
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: '# of Ounces'
          }
        }]
      }
    }
  });

  //Sleep
  $('.hours-slept-day').text(`${sleep.returnSleepHours(date)} hours | ${sleep.returnSleepQuality(date)} quality`);

  const weeklySleepChart = new Chart(document.getElementById('sleep-week').getContext('2d'), {
    type: 'line',
    data: {
      labels: dropYear(sleep.returnWeek(1)),
      datasets: [{
        data: sleep.returnWeekOfSleepHours(1),
        label: "Sleep Hours",
        borderColor: "rgba(92, 117, 218, 0.6)",
        fill: false,
        lineTension: 0.1
      },
      {
        data: Array(7).fill(sleep.returnAvgSleepHours()),
        label: "Average Hours of Sleep",
        borderColor: "rgba(92, 117, 218, 0.6)",
        fill: false,
        borderDash: [10, 5]
      },
      {
        data: sleep.returnWeekOfSleepQuality(1),
        label: "Quality of Sleep",
        borderColor: "rgba(242, 188, 51, 0.6)",
        fill: false,
        lineTension: 0.1
      },
      {
        data: Array(7).fill(sleep.returnAvgSleepQuality()),
        label: "Average Quality of Sleep",
        borderColor: "rgba(242, 188, 51, 0.6)",
        fill: false,
        borderDash: [10, 5]
      }
      ]

    },
    options: {
      elements: {
        point: {
          radius: 0
        }
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: 'hours'
          },

        }, {
          id: 'Quality of Sleep',
          type: 'linear',
          position: 'right',
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 10
          },
          scaleLabel: {
            display: true,
            labelString: 'quality'
          }
        }]
      }
    }
  });

  $('.longest-sleepers').text(`${findUserName(sleepRepo.returnWeeklyLongestSleepers(1)[1])}: ${sleepRepo.returnWeeklyLongestSleepers(1)[0]} hours`);

  //Activity Section

  var bar = new ProgressBar.Circle('.number-of-steps-day', {
    color: '#aaa',
    svgStyle: {
      display: 'block',
      width: '100%'
    },
    strokeWidth: 5,
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: true
    },
    from: {
      color: '#fff940',
      width: 2
    },
    to: {
      color: '#f2bc33',
      width: 5
    },

    step(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = circle.value();
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(`${activity.returnNumStepsDay(date)} steps`);
      }

    }
  });

  let percentSteps = activity.returnNumStepsDay(date) / user.dailyStepGoal;
  bar.animate(percentSteps > 1 ? percentSteps = 1 : percentSteps); // Number from 0.0 to 1.0

  $('.number-of-steps-goal').text(`Step Goal: ${user.dailyStepGoal}`);
  $('.avg-number-of-steps-goal').text(`Average Step Goal: ${userRepo.returnAverageStepGoal()}`);
  $('.number-of-minutes-active-day').text(`${activity.returnMinutesActive(date)}`);
  $('.average-minutes-active').text(`${activityRepo.returnAverage(date, 'minutesActive')}`)
  $('.distance').text(`${activity.returnNumStepsDay(date)}`);
  $('.average-distance').text(`${activityRepo.returnAverage(date, 'numSteps')}`)
  $('.stairs').text(`${activity.returnFlightsOfStairs(date)}`);
  $('.average-stairs').text(`${activityRepo.returnAverage(date, 'flightsOfStairs')}`)
  $('.distance-in-miles').text(`${activity.returnMilesWalked()} Miles`);
  $('.most-active').text(`${activityRepo.returnMostActive()[0]}: ${activityRepo.returnMostActive()[1]} minutes`);
  $('.week-review-minutes').text(`${activity.returnAverageMinutesActiveForWeek(1)} minutes active`);
  $('.week-review-steps').text(`${activity.returnAverageStepsForWeek(1)} steps taken`);
  $('.week-review-stairs').text(`${activity.returnAverageStairsForWeek(1)} flights of stairs`);

  // Friends

  let userIDs = Object.keys(activity.returnFriendsStepCount()[0]);

  function insertFriendSteps() {
    let list = `<ul class="friends_ul">`
    userIDs.forEach(userID => {
      let userName = findUserName(Number(userID));
      list += `<li class="friends_li">
             <p class="friends--steps"><b>${userName}</b>:</p>
             <p>${activity.returnFriendsStepCount()[0][userID]} steps</p>`;
    });
    list += `</ul>`;
    return list;
  }

  $('.friends-step').html(`${insertFriendSteps()}`);

  // Challenges

  function insertStepStreak() {
    let list = `<ul class="steps_ul">`
    activity.returnThreeDayStepStreak().forEach(day => {
      list += `<li class="date_li">
             <p class="dates"> ${day}`
    })
    list += `</ul>`;
    return list;
  }

  $('.increasing-steps').html(`${insertStepStreak()}`);

  function insertStairStreak() {
    let list = `<ul class="stairs_ul">`
    activity.returnTwoDayStairStreak().forEach(day => {
      list += `<li class="date_li">
             <p class="dates"> ${day}`
    })
    list += `</ul>`;
    return list;
  }

  $('.increasing-stairs').html(`${insertStairStreak()}`);

})