//Generate random user 
const uniqueUserIndex = Math.floor(Math.random() * (50 - 1 + 1)) + 1;


//Repo variables
const userRepo = new UserRepo(userData);
const sleepRepo = new SleepRepo(sleepData);
const activityRepo = new ActivityRepo(activityData);

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


//Packery Items 
let $grid = $('.grid').packery({
  itemSelector: '.grid-item',
  columnWidth: 100
});

$grid.find('.grid-item').each(function (i, gridItem) {
  let draggie = new Draggabilly(gridItem)
  $grid.packery('bindDraggabillyEvents', draggie)
});

$(".draggable").draggabilly("enable");

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
        'rgba(92, 117, 218, 0.2)',
        'rgba(242, 188, 51, 0.2)',
        'rgba(126, 221, 255, 0.2)',
        'rgba(92, 117, 218, 0.2)',
        'rgba(242, 188, 51, 0.2)',
        'rgba(126, 221, 255, 0.2)',
        'rgba(92, 117, 218, 0.2)'
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
      borderColor: "rgba(92, 117, 218, 0.2)",
      fill: false
    },
    {
      data: Array(7).fill(sleep.returnAvgSleepHours()),
      label: "Average Hours of Sleep",
      borderColor: "rgba(92, 117, 218, 0.2)",
      fill: false
    },
    {
      data: sleep.returnWeekOfSleepQuality(1),
      label: "Quality of Sleep",
      borderColor: "rgba(242, 188, 51, 0.2)",
      fill: false
    },
    {
      data: Array(7).fill(sleep.returnAvgSleepQuality()),
      label: "Average Quality of Sleep",
      borderColor: "rgba(242, 188, 51, 0.2)",
      fill: false
    }
    ]

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
          labelString: 'hours'
        }
      }]
    }
  }
});

//Activity Section

var bar = new ProgressBar.Circle('.number-of-steps-day', {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  svgStyle: {
    display: 'block',

    // Important: make sure that your container has same
    // aspect ratio as the SVG canvas. See SVG canvas sizes above.
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
  // Set default step function for all animate calls
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


$('.number-of-steps-goal').text(`Daily Step Goal: ${user.dailyStepGoal}`);
$('.avg-number-of-steps-goal').text(`Average User Step Goal: ${userRepo.returnAverageStepGoal()}`);
$('.number-of-minutes-active-day').text(`${activity.returnMinutesActive(date)} minutes active`);
$('.distance-of-miles-day').text(`${activity.returnMilesWalked()} miles`);
$('.number-of-steps-week').text(`${activity.returnAverageStepsForWeek()} steps`);

// Friends
// activity.returnFriendsStepCount()