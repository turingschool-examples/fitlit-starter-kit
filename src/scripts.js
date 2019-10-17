const user = new User(userData);
const users = new UserRepo(userData);
const randomNum = Math.floor(Math.random() * 50 + 1);
const randomUser = users.getSingleUserData(randomNum);
const hydration = new Hydration(hydrationData);
const sleep = new Sleep(randomUser.id, sleepData);
const activity = new Activity(activityData, userData);
const mainContainer = document.querySelector('.main__container')
const header = document.querySelector('header');
const widgets = document.querySelector('.daily-widget-container');
const stepComparison = document.querySelector('.average-step-comparison')
const todaysDate = grabDate();
const sleepQualContainer = document.querySelector('.sleep-qual-container')
const hoursSleptContainer = document.querySelector('.hours-slept-container')
// const stairsComparison = document.querySelector('.compare-daily-stairs');




header.insertAdjacentHTML('beforeend', `<h2 class='name--display'>Welcome, ${randomUser.name}</h2>
  <div class='contact-container'>
    <div class='img-user-icon'>
      <img class='user-icon' src='../images/user-icon-final.png'>
    </div>
    <div class='contact--info'>
      <div class='info--wrapper'>
        <label class='contact--label'>Address: </label>
        <p class='user--info'>${randomUser.address}</p>
      </div>
      <div class='info--wrapper'>
        <label class='contact--label'>Email: </label>
        <p class='user--info'>${randomUser.email}</p>
      </div>
      <div class='info--wrapper'>
        <label class='contact--label'>Stride Length: </label> 
        <p class='user--info'>${randomUser.strideLength} ft.</p>
      </div>
      <div class='info--wrapper'>
        <label class='contact--label'>Daily Step Goal: </label>
        <p class='user--info'>${randomUser.dailyStepGoal} steps</p>
      </div>
    </div> 
  </div>
`)


widgets.insertAdjacentHTML('afterbegin', `<div class='hydration--widget'>
        <div class='widget-card-container'>
        <h3 class='widget-hydration-header'>Daily Fluid Intake</h3>
        <p class='widget--informer'>Today you drank</p>
        <img class='water-bottle-icon'src='../images/water_bottle-icon.svg'>
        <p class='widget--variable hydration--variable'>${hydration.calculateDailyIntake(todaysDate, randomUser.id)}oz</p>
        </div>
        </div>
      <div class='sleep--widget'>
        <h3 class='widget-sleep-header'>Last Night's Sleep</h3>
        <p class='widget--informer'>Last night you slept</p>
        <pclass='widget--variable sleep--variable'>${sleep.findHoursSlept(randomUser.id, todaysDate)}hrs</p>
        <img class='bed-icon' src='../images/single-bed-icon.svg'>
        <p class='widget--informer'>Your Sleep Quality: ${sleep.findSleepQuality(randomUser.id, todaysDate)}</p>
      </div>
      <div class='activity--widget'>
        <h3 class='widget-activity-header'>Daily Activity Tracker</h3>
        <p class='widget--informer'>Your steps</p>
        <p class='widget--variable activity--variable'>${activity.findSingleDayInfo(randomUser.id, todaysDate).numSteps}</p>
        <img class='step-icon' src='../images/activity-icon.svg'>
        <div class='activity-details'>
          <p class='widget-activity-informer'>Miles: ${grabDailyMiles(randomUser.id, todaysDate)}</p>
          <p class='widget-activity-informer'>Active minutes: ${grabActiveMinutes(randomUser.id, todaysDate)} min</p>
        </div>
      </div>`)

stepComparison.insertAdjacentHTML('afterbegin', `<div class='user-avg-steps'>
          <p>Your Step Goal:</p>
          <p id='comparison-number'>${randomUser.dailyStepGoal}</p>
          <p>steps</p>
        </div>
        <div class='line-divider'></div>
        <div class='world-avg-steps'>
        <p>Overall Average Step Goal:</p>
        <p id='comparison-number'>${findOverallStepGoals()}</p>
        <p>steps</p>
        </div>`)


sleepQualContainer.insertAdjacentHTML('afterbegin', ` <div class='avg-sleep-qual'>
<h3>Average Sleep Quality</h3>
  <p class='sleep-qual'>${sleep.findAvgSleepQuality(randomUser.id)}</p>
</div>`)

hoursSleptContainer.insertAdjacentHTML('afterbegin', `<div class='avg-hours-slept'>
<h3>Average Hours Slept</h3>
  <p class='hours-slept'>${sleep.findAvgHoursSlept(randomUser.id)}</p>
</div>`)


function grabDate() {
  let index = hydrationData.length - 1;
  return hydrationData[index].date;
}

function grabDailyMiles(id, date) {
  let user = activity.findSingleUserData(id);
  let day = activity.findSingleDayInfo(id, date);
  let stepsPerMi = 5280 / user.strideLength;
  return +((day.numSteps / stepsPerMi).toFixed(2))
}

function grabActiveMinutes(id, date) {
  activity.findSingleDayInfo(id, date);
  return activity.singleDay.minutesActive
}

function findOverallStepGoals() {
  let usersStepAverage = userData.reduce((acc, user) => {
    acc += user.dailyStepGoal
    return acc;
  }, 0)
  return +((usersStepAverage / userData.length - 1).toFixed());
}

findOverallStepGoals();

var ctx = document.getElementById('weekly--water').getContext('2d');
var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: hydration.findAWeek(randomUser.id).map(day => day.date),
    datasets: [{
      label: 'Weekly Water Intake',
      backgroundColor: '#000',
      borderColor: '#79c6f5',
      data: hydration.findAWeek(randomUser.id).map(day => day.numOunces)
    }]
  },
  options: {
    legend: {
      labels: {
        fontColor: '#FFF',
        fontSize: 20
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#FFF'
        },
      }],
      xAxes: [{
        ticks: {
          fontColor: '#FFF'
        },
      }]
    }
  }
});

var sleepInfo = document.getElementById('weekly--sleep').getContext('2d');
var sleepChart = new Chart(sleepInfo, {
  type: 'line',
  data: {
    labels: sleep.findAWeek(randomUser.id).map(day => day.date),
    datasets: [{
      label: 'Weekly Sleep Data',
      backgroundColor: '#000',
      borderColor: '#8A79f5',
      data: sleep.findAWeek(randomUser.id).map(day => day.hoursSlept),
    }]
  },
  options: {
    legend: {
      labels: {
        fontColor: '#FFF',
        fontSize: 20
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#FFF',
        },
      }],
      xAxes: [{
        ticks: {
          fontColor: '#FFF'
        },
      }]
    }
  }
});


function getUsersDailyMetric(id, date, metric) {
  let user = activityData.find(user => user.userID === id && user.date === date)
  return user[metric]
}

// getUsersDailyMetric(randomUser.id, todaysDate, 'numSteps')

function getAvgGroupMetrics(date, metric) {
  let allData = activityData.reduce((acc, user) => {
    if (user.userID !== randomUser.id && user.date === date) {
      acc += user[metric]
    }
    return acc
  }, 0)
  return +((allData / userData.length - 1).toFixed())
}

getAvgGroupMetrics(todaysDate, 'flightsOfStairs')

const compareDailySteps = document.getElementById('compare-daily-steps').getContext('2d');
let compareSteps = new Chart(compareDailySteps, {
  type: 'bar',
  data: {
    labels: ['Your Steps', 'Group Steps'],
    datasets: [{
      label: 'Compare Today\'s Steps',
      backgroundColor: ['#49C468', '#FFF'],
      borderColor: '#49C468',
      data: [getUsersDailyMetric(randomUser.id, todaysDate, 'numSteps'), getAvgGroupMetrics(todaysDate, 'numSteps')]
    }]
  },
  options: {
    legend: {
      labels: {
        fontColor: '#FFF',
        fontSize: 20
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#FFF',
        },
      }],
      xAxes: [{
        barPercentage: 0.4,
        ticks: {
          fontColor: '#FFF'
        },
      }]
    }
  }
}
);


const compareDailyStairs = document.getElementById('compare-daily-stairs').getContext('2d');
let stairsComparisonChart = new Chart(compareDailyStairs, {
  type: 'bar',
  data: {
    labels: ['Your Stairs', 'Group Stairs'],
    datasets: [{
      label: 'Compare Today\'s Stairs Climbed',
      backgroundColor: ['#49C468', '#FFF'],
      borderColor: '#49C468',
      data: [getUsersDailyMetric(randomUser.id, todaysDate, 'flightsOfStairs'), getAvgGroupMetrics(todaysDate, 'flightsOfStairs')]
    }]
  },
  options: {
    legend: {
      labels: {
        fontColor: '#FFF',
        fontSize: 20
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#FFF',
        },
      }],
      xAxes: [{
        barPercentage: 0.4,
        ticks: {
          fontColor: '#FFF'
        },
      }]
    }
  }
}
);

const compareDailyMinutes = document.getElementById('compare-daily-minutes').getContext('2d');
let activeMinutesComparisonChart = new Chart(compareDailyMinutes, {
  type: 'bar',
  data: {
    labels: ['Your Min Active', 'Group Min Active'],
    datasets: [{
      label: 'Compare Today\'s Minutes Active',
      backgroundColor: ['#49C468', '#FFF'],
      borderColor: '#49C468',
      data: [getUsersDailyMetric(randomUser.id, todaysDate, 'minutesActive'), getAvgGroupMetrics(todaysDate, 'minutesActive')]
    }]
  },
  options: {
    legend: {
      labels: {
        fontColor: '#FFF',
        fontSize: 20
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#FFF',
        },
      }],
      xAxes: [{
        barPercentage: 0.4,
        ticks: {
          fontColor: '#FFF'
        },
      }]
    }
  }
}
);


const displayWeeklyWaterIntake = document.getElementById('weekly-water-intake').getContext('2d');
let weeklyWaterIntake = new Chart(displayWeeklyWaterIntake, {
  type: 'line',
  data: {
    labels: hydration.findAWeek(randomUser.id).map(day => day.date),
    datasets: [{
      label: 'Your Water Intake For The Week',
      backgroundColor: '#000',
      borderColor: '#79c6f5',
      data: hydration.getWeeklyOunces(randomUser.id)
    }]
  },
  options: {
    legend: {
      labels: {
        fontColor: '#FFF',
        fontSize: 20
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#FFF',
        },
      }],
      xAxes: [{
        barPercentage: 0.4,
        ticks: {
          fontColor: '#FFF'
        },
      }]
    }
  }
}
);

const displayWeeklySleepInfo = document.getElementById('weekly-sleep-info').getContext('2d');
let weeklySleepInfo = new Chart(displayWeeklySleepInfo, {
  type: 'line',
  data: {
    labels: sleep.findAnyWeek(randomUser.id, todaysDate).map(day => day.date),
    datasets: [{
      label: 'Track Your Sleep',
      backgroundColor: '#000',
      borderColor: '#8A79F5',
      data: sleep.findHoursSleptForWeek(randomUser.id, todaysDate).map(day => day.hoursSlept)
    }]
  },
  options: {
    legend: {
      labels: {
        fontColor: '#FFF',
        fontSize: 20
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#FFF',
        },
      }],
      xAxes: [{
        barPercentage: 0.4,
        ticks: {
          fontColor: '#FFF'
        },
      }]
    }
  }
}
);

const displayWeeklyStepTracker = document.getElementById('weekly-step-tracker').getContext('2d');
let weeklyStepInfo = new Chart(displayWeeklyStepTracker, {
  type: 'line',
  data: {
    labels: activity.findAWeek(randomUser.id, todaysDate).map(day => day.date),
    datasets: [{
      label: 'Track Your Steps',
      backgroundColor: '#000',
      borderColor: '#49C468',
      data: activity.findAWeek(randomUser.id, todaysDate).map(day => day.numSteps)
    }]
  },
  options: {
    legend: {
      labels: {
        fontColor: '#FFF',
        fontSize: 20
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#FFF',
        },
      }],
      xAxes: [{
        barPercentage: 0.4,
        ticks: {
          fontColor: '#FFF'
        },
      }]
    }
  }
}
);

const displayWeeklyStairTracker = document.getElementById('weekly-stairs-tracker').getContext('2d');
let weeklyStairInfo = new Chart(displayWeeklyStairTracker, {
  type: 'bar',
  data: {
    labels: activity.findAWeek(randomUser.id, todaysDate).map(day => day.date),
    datasets: [{
      label: 'Track Flights Of Stairs Climbed',
      backgroundColor: '#49C468',
      borderColor: '#49C468',
      data: activity.findAWeek(randomUser.id, todaysDate).map(day => day.flightsOfStairs)
    }]
  },
  options: {
    legend: {
      labels: {
        fontColor: '#FFF',
        fontSize: 20
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#FFF',
        },
      }],
      xAxes: [{
        barPercentage: 0.4,
        ticks: {
          fontColor: '#FFF'
        },
      }]
    }
  }
}
);

const displayWeeklyMinutesActive = document.getElementById('weekly-minutes-tracker').getContext('2d');
let weeklyMinActive = new Chart(displayWeeklyMinutesActive, {
  type: 'line',
  data: {
    labels: activity.findAWeek(randomUser.id, todaysDate).map(day => day.date),
    datasets: [{
      label: 'Track Minutes Active',
      backgroundColor: '#000',
      borderColor: '#49C468',
      data: activity.findAWeek(randomUser.id, todaysDate).map(day => day.minutesActive)
    }]
  },
  options: {
    legend: {
      labels: {
        fontColor: '#FFF',
        fontSize: 20
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#FFF',
        },
      }],
      xAxes: [{
        barPercentage: 0.4,
        ticks: {
          fontColor: '#FFF'
        },
      }]
    }
  }
} 
);
