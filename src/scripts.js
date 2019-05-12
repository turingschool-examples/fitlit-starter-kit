/*----------------Variables-------------------*/
const dynamicUser = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
const todaysDate = moment().format("DD" + "/" + "MM" + "/" + "YYYY")

document.getElementById("datetime").innerHTML = todaysDate;

/*----------------new instantiations---------*/
const userRepo = new UserRepo();
const user = new User(dynamicUser)
const hydration = new Hydration()
const sleep = new Sleep()
const activity = new Activity()

console.log('user: ', user)
console.log('userRepo: ', userRepo)
console.log('hydration: ', hydration)
console.log('sleep: ', sleep)
console.log('activity: ', activity)

/*------------Methods Called-----------*/

let usersStepAverage = userRepo.averageStepGoal();
const todaysSteps = activity.userStepsTakenToday(todaysDate);
const todaysMinutesActive = activity.activeMinutesPerDay(todaysDate)
let dayHydration = hydration.amountHydratedByDay(todaysDate);
let weekHydration = hydration.waterForWeek(todaysDate)

let daySleep = sleep.hoursSleptOnDay(todaysDate);
let qualitySleep = sleep.qualityOnDay(todaysDate);
let weekSleep = sleep.hoursSleptGivenWeek(todaysDate)
let weekQualSleep = sleep.sleepQualityGivenWeek(todaysDate)
let alltimeHoursSleep = sleep.averageSleepHoursAllTime()
let alltimeQualSleep = sleep.averageSleepQualAllTime()

/*----------------User info---------------*/
document.getElementById('userName').innerText = `Welcome ${user.returnUserFirstName()}!`;
document.getElementById('userAddress').innerText = user.user.address;
document.getElementById('userEmail').innerText = user.user.email;
document.getElementById('userStepGoal').innerText = `Daily Step Goal: ${user.user.dailyStepGoal}`;
document.getElementById('userStrideLength').innerText = `Stride Length ${user.user.strideLength}`;
document.getElementById('user-profile-pic').innerHTML = `<img src="../images/${user.user.id}.jpg">`

/*-------------activity info---------*/

document.getElementById('user-steps').innerText = `You have taken ${todaysSteps} steps today, that means you've walked ${activity.milesWalkedToday(todaysDate)}, miles!!!`
document.getElementById('user-active').innerText = `You have been active for ${activity.minutesActiveForDate(todaysDate)} minutes today`
document.getElementById('user-miles').innerText = `You have walked ${activity.milesWalkedToday(todaysDate)} miles today.`


/*------------Charts----------------*/
const sleepQual = document.getElementById('qual-slept-week-chart').getContext('2d');
const sleepHours = document.getElementById('hours-slept-week-chart').getContext('2d');
const hydrationWeek = document.getElementById('hydration-week-chart').getContext('2d');
const activityWeek = document.getElementById('activity-week-chart').getContext('2d')
const stepGoals = document.getElementById('step-goal-chart').getContext('2d')
const sleepToday = document.getElementById('sleep-chart').getContext('2d')

let hoursSleptChart = new Chart(sleepHours, {
  type: 'bar',
  data: {
    labels: [`${(weekSleep[0].date)}`, `${(weekSleep[1].date)}`, `${(weekSleep[2].date)}`, `${(weekSleep[3].date)}`, `${(weekSleep[4].date)}`, `${(weekSleep[5].date)}`, `${(weekSleep[6].date)}`],
    datasets: [{
      label: '#hours slept',
      data: [(weekSleep[0].hoursSlept), (weekSleep[1].hoursSlept), (weekSleep[2].hoursSlept), (weekSleep[3].hoursSlept), (weekSleep[4].hoursSlept), (weekSleep[5].hoursSlept), (weekSleep[6].hoursSlept)],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
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

let sleepQualityChart = new Chart(sleepQual, {
  type: 'bar',
  data: {
    labels: [`${(weekQualSleep[0].date)}`, `${(weekQualSleep[1].date)}`, `${(weekQualSleep[2].date)}`, `${(weekQualSleep[3].date)}`, `${(weekQualSleep[4].date)}`, `${(weekQualSleep[5].date)}`, `${(weekQualSleep[6].date)}`],
    datasets: [{
      label: '#Sleep Quality',
      data: [(weekQualSleep[0].quality), (weekQualSleep[1].quality), (weekQualSleep[2].quality), (weekQualSleep[3].quality), (weekQualSleep[4].quality), (weekQualSleep[5].quality), (weekQualSleep[6].quality)],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
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

let hydrationWeekChart = new Chart(hydrationWeek, {
  type: 'bar',
  data: {
    labels: [`${(weekHydration[0].date)}`, `${(weekHydration[1].date)}`, `${(weekHydration[2].date)}`, `${(weekHydration[3].date)}`, `${(weekHydration[4].date)}`, `${(weekHydration[5].date)}`, `${(weekHydration[6].date)}`],
    datasets: [{
      label: '#Ounces',
      data: [(weekHydration[0].numOunces), (weekHydration[1].numOunces), (weekHydration[2].numOunces), (weekHydration[3].numOunces), (weekHydration[4].numOunces), (weekHydration[5].numOunces), (weekHydration[6].numOunces)],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
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

let activityWeekChart = new Chart(activityWeek, {
  type: 'bar',
  data: {
    labels: [`${(weekHydration[0].date)}`, `${(weekHydration[1].date)}`, `${(weekHydration[2].date)}`, `${(weekHydration[3].date)}`, `${(weekHydration[4].date)}`, `${(weekHydration[5].date)}`, `${(weekHydration[6].date)}`],
    datasets: [{
      label: '#Ounces',
      data: [(weekHydration[0].numOunces), (weekHydration[1].numOunces), (weekHydration[2].numOunces), (weekHydration[3].numOunces), (weekHydration[4].numOunces), (weekHydration[5].numOunces), (weekHydration[6].numOunces)],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
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

let stepGoalComparisonChart = new Chart(stepGoals, {
  type: 'bar',
  data: {
    labels: [`Your Step Goal`, `Average Step Goal`],
    datasets: [{
      label: '#Goal',
      data: [(user.user.dailyStepGoal), (usersStepAverage)],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1
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

let sleepChart = new Chart(sleepToday, {
  type: 'bar',
  data: {
    labels: [`Hours Slept Today`, `Sleep Quality Today`, `Average Hours Slept`, `Average Sleep Quality`],
    datasets: [{
      label: 'Sleep',
      data: [(daySleep), (qualitySleep), (alltimeHoursSleep), (alltimeQualSleep) ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1
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
})


/*------------Circle Graphs--------*/
const waterPercentage = () => dayHydration / 64 * 100;

const walkingPercentage = () => todaysSteps / user.user.dailyStepGoal * 100

const minutesPercentage = () => todaysMinutesActive / 1440

const determineColor = percentage => {
  if (percentage < 50) {
    return 'red'
  } else if (percentage < 80) {
    return 'orange'
  } else {
    return 'green'
  }
}

document.getElementById('user-water').innerHTML = `<div class="single-chart">
    <svg viewBox="0 0 36 36" class="circular-chart ${determineColor(waterPercentage())}">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="${waterPercentage()}, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">${dayHydration} Oz</text>
    </svg>
  </div>`

document.getElementById('user-steps').innerHTML = `<div class="single-chart">
    <svg viewBox="0 0 36 36" class="circular-chart ${determineColor(walkingPercentage())}">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="${walkingPercentage()}, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">${todaysSteps}</text>
    </svg>
  </div>`

  document.getElementById('user-active').innerHTML = `<div class="single-chart">
    <svg viewBox="0 0 36 36" class="circular-chart ${determineColor(minutesPercentage())}">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="${minutesPercentage()}, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">${todaysMinutesActive}</text>
    </svg>
  </div>`
