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


//User Section
$('.username').text(`${user.returnUserName()}`)

//Date Section
$('.date').text(`${formattedDate}`);

//Hydration
$('.water-consumed').text(`Today: \n${hydration.returnDailyFluidOunces(date)} ounces`);

const weeklyOuncesChart = new Chart(document.getElementById('water-consumed-week').getContext('2d'), {
  type: 'horizontalBar',
  data: {
    labels: dropYear(hydration.returnWeek()),
    datasets: [{
      data: hydration.returnWeeklyNumOunces(),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(75, 180, 20, 0.2)'
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
$('.hours-slept-day').text(`Hours Slept Last Night: ${sleep.returnSleepHours(date)}`);
$('.hours-slept-week').text(`Hours Slept Last Week: ${sleep.returnWeekOfSleepHours(1)}`);
$('.hours-slept-all-time').text(`Hours Slept On Average: ${sleep.returnAvgSleepHours()}`);
$('.quality-sleep-day').text(`Quality of Sleep Last Night: ${sleep.returnSleepQuality(date)}`);
$('.quality-sleep-week').text(`Quality of Sleep Last Week: ${sleep.returnWeekOfSleepQuality(1)}`);
$('.quality-sleep-all-time').text(`Quality of Sleep On Average: ${sleep.returnAvgSleepQuality()}`);

//Activity Section

var bar = new ProgressBar.Circle('.number-of-steps-day', {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
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


$('.user-step-goal').text(`Daily Step Goal: ${user.dailyStepGoal}`);
$('.average-step-goal').text(`Average Step Goal: ${userRepo.returnAverageStepGoal()}`);
$('.number-of-minutes-active-day').text(`Daily Minutes Active: ${activity.returnMinutesActive(date)}`);
$('.distance-of-miles-day').text(`Daily Miles Walked: ${activity.returnMilesWalked()}`);
$('.number-of-steps-week').text(`Weekly Number Of Steps: ${activity.returnAverageStepsForWeek()}`);