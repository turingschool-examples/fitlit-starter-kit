
const repo = new UserRepository(sampleData);
const user = new User(repo.getUserData(getRandomNumber()))
  ;
const hydroRepo = new HydrationRepository(sampleHydration);
const userHydro = new Hydration(hydroRepo.getUserData(user.id));

const sleepRepo = new SleepRepository(sampleSleep);
const sleepyPerson = new Sleep(sleepRepo.getUserData(user.id));

const activeRepo = new ActivityRepository(sampleActivity);
const activePerson = new Activity(activeRepo.getUserData(user.id), user);

const sampleDate = '2019/06/25'

const userName = user.getUserFirstName()
$('.header__div-userName').text(`${userName}`);

$('.header__div__user-stepgoal').text(`${user.dailyStepGoal}`);

$('.header__div__allusers-stepgoal').text(`${repo.getAllUsersAvgStepGoal()}`);

$('.hydration__container--consumed--today').text(`${userHydro.userHydrationByDate(sampleDate)}`);

userHydro.getHydroArray(sampleDate)

$('.hydration__container--consumed--this--week').text(`${userHydro.getWeeklyHydroAvg()}`);


$('.sleep__container--hours--today').text(`${sleepyPerson.getSleepHoursByDate(sampleDate)}`)

$('.sleep__container--hours--this--week').text(`Average hours slept this week: ${sleepyPerson.getWeeklyAvg(sampleDate, 'hoursSlept')} hours`)

$('.sleep--week--avg').after(`<p class="main__sleep__average--all-users">
              Hours slept this week: ${sleepRepo.getAvgSleepStatsAllUsers(sleepRepo.getWeekOfUsers(sampleDate), 'hoursSlept')} hours
            </p>
            <p class="main__sleep__average--all-users">
              Sleep quality this week: ${sleepRepo.getAvgSleepStatsAllUsers(sleepRepo.getWeekOfUsers(sampleDate), 'sleepQuality')}
            </p>`)

$('.activity__container--user--steps--today').text(`Steps Today: ${activePerson.getStatsFromDay(sampleDate, 'numSteps')}`)

$('.activity__container--user--active--today').text(`Active Minutes Today: ${activePerson.getStatsFromDay(sampleDate, 'minutesActive')}`)

$('.activity__container--user--miles--today').text(`Miles walked Today: ${activePerson.getMiles(sampleDate, 'numSteps')} miles`) 

$('.activity__container--allusers--steps--today').text(`Steps Today: ${activeRepo.getAvgActivityStatsAllUsers(sampleDate, 'numSteps')}`)

$('.activity__container--allusers--active--today').text(`Active Minutes Today: ${activeRepo.getAvgActivityStatsAllUsers(sampleDate, 'minutesActive')}`)

$('.activity__container--allusers--flights--today').text(`Flights climbed Today: ${activeRepo.getAvgActivityStatsAllUsers(sampleDate, 'flightsOfStairs')} flights of stairs`)

const hydroChart = $('#hydroChart--thisWeek');

let weekOfDates = sleepyPerson.getWeek(sampleDate).map(day => milisecondsToDate(day.date));


var myChart = new Chart(hydroChart, {
  type: 'bar',
  data: {
    labels: weekOfDates,
    datasets: [{
      label: 'Oz',
      data: userHydro.getHydroArray(sampleDate).map(day => day.numOunces),
      backgroundColor: [
        'rgba(0, 121, 223, 1)',
        'rgba(0, 121, 223, 1)',
        'rgba(0, 121, 223, 1)',
        'rgba(0, 121, 223, 1)',
        'rgba(0, 121, 223, 1)',
        'rgba(0, 121, 223, 1)',
        'rgba(0, 121, 223, 1)',
      ]
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
const sleepChart = $('#sleepChart--thisWeek');


var mixedChart = new Chart(sleepChart, {
  type: 'bar',
  data: {
    datasets: [{
      label: 'Hours Slept',
      data: sleepyPerson.getWeek(sampleDate).map(day => day.hoursSlept),
      backgroundColor: [

        'rgba(37, 36, 92, .8 )',
        'rgba(37, 36, 92, .8 )',
        'rgba(37, 36, 92, .8 )',
        'rgba(37, 36, 92, .8 )',
        'rgba(37, 36, 92, .8 )',
        'rgba(37, 36, 92, .8 )',
        'rgba(37, 36, 92, .8 )',
      ],
    }, {
      type: 'line',
      label: 'Sleep Quality',
      data: sleepyPerson.getWeek(sampleDate).map(day => day.sleepQuality),
      backgroundColor: [
        'rgba(61, 175, 9, .6)',
        'rgba(61, 175, 9, .6)',
        'rgba(61, 175, 9, .6)',
        'rgba(61, 175, 9, .6)',
        'rgba(61, 175, 9, .6)',
        'rgba(61, 175, 9, .6)',
        'rgba(61, 175, 9, .6)',
      ],
    }],
    labels: weekOfDates
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


const activitySteps = $('#activitySteps--thisWeek')

var myChart = new Chart(activitySteps, {
  type: 'bar',
  data: {
    labels: weekOfDates,
    datasets: [{
      label: 'Steps',
      data: activePerson.getWeek(sampleDate).map( day => day.numSteps),

      backgroundColor: [
        'rgba(215, 4, 0, .8)',
        'rgba(215, 4, 0, .8)',
        'rgba(215, 4, 0, .8)',
        'rgba(215, 4, 0, .8)',
        'rgba(215, 4, 0, .8)',
        'rgba(215, 4, 0, .8)',
        'rgba(215, 4, 0, .8)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    
  }
});

const activityFlights = $('#activityFlights--thisWeek')

var myChart = new Chart(activityFlights, {
  type: 'line',
  data: {
    labels: weekOfDates,
    datasets: [{
      label: 'Flights of Stairs',
      data: activePerson.getWeek(sampleDate).map(day => day.flightsOfStairs),

      backgroundColor: [
        'rgba(61, 175, 9, .8)',
        'rgba(61, 175, 9, .8)',
        'rgba(61, 175, 9, .8)',
        'rgba(61, 175, 9, .8)',
        'rgba(61, 175, 9, .8)',
        'rgba(61, 175, 9, .8)',
        'rgba(61, 175, 9, .8)'
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

const activityMins = $('#activityMins--thisWeek')

var myChart = new Chart(activityMins, {
  type: 'line',
  data: {
    labels: weekOfDates,
    datasets: [{
      label: 'Minutes Active',
      data: activePerson.getWeek(sampleDate).map(day => day.minutesActive),
      backgroundColor: [
        'rgba(37, 36, 92, .85)',
        'rgba(37, 36, 92, .85)',
        'rgba(37, 36, 92, .85)',
        'rgba(37, 36, 92, .85)',
        'rgba(37, 36, 92, .85)',
        'rgba(37, 36, 92, .85)',
        'rgba(37, 36, 92, .85)'
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

const friends = user.friends.map(friend => {
  let newUser = new User(repo.getUserData(friend))
  let newFriend = new Activity(activeRepo.getUserData(friend), newUser).getWeek(sampleDate).reduce((newObj, day) => {
    if (!newObj['id']) {
      newObj['id'] = day.userID;
      newObj['name'] = newUser.name;
      newObj['steps'] = 0;
    } newObj['steps'] += day.numSteps
    return newObj
  }, {})
  return newFriend
})

const compareFriendsSteps = () => {
  friends.push({ id: user.id, name: user.name, steps: (activePerson.getWeeklyAvg(sampleDate, 'numSteps') * 7) });
  friends.sort((personA, personB) => {
    return personB.steps - personA.steps
  })
}

friend = compareFriendsSteps();

const stepChallange = $('#step--challange')

var myChart = new Chart(stepChallange, {
  type: 'horizontalBar',
  data: {
    labels: friends.map(friend => friend.name),
    datasets: [{
      label: 'steps',
      data: friends.map(friend => friend.steps),
      // borderColor: [
      //   'rgba(255, 99, 132, 1)'
      // ],
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

const threeDayStreak = $('#3--day--streak')

let streak = activePerson.returnIncreasedStepDays(sampleDate).splice(-3, 3).reverse()


function checkStreak() {
  if (!streak.length) {
    $('.main__trends--3--day--streak').hide()
    $('.main__trends--3--day--streak').after(`No recent Streaks. Keep walking!`)
  }
}

checkStreak();



var myChart = new Chart(threeDayStreak, {
  type: 'horizontalBar',
  data: {
    labels: streak.map(day => milisecondsToDate(day.date)), 
    datasets: [{
      label: 'steps',
      data: streak.map(day => day.numSteps),
      // borderColor: [
      //   'rgba(255, 99, 132, 1)'
      // ],
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

function displayFourteeners() {
  let fourteeners = activePerson.findFourteeners();
  if (fourteeners < 1) {
    message = 'Keep Climbing!'
  } else {
    message = fourteeners
  }
  $('.main__trends--14er').after(`<p class="fourteener--result"> ${message} </p>`)
}

displayFourteeners();





function buildWeeklyHTMLActivity() {
  const weeklyMap = activePerson.getWeek(sampleDate).map(function (day) {
    return insertWeeklyActivityStats(day)
  })
  return weeklyMap.join(' ');
}

function insertWeeklyActivityStats(obj) {
  return `<p class="inserted--p"> ${milisecondsToDate(obj.date)}: <br> ${obj.numSteps} steps <br> ${obj.minutesActive} minutes active <br> ${obj.flightsOfStairs} flights of stairs </p>`
}
  
function buildWeeklyHTMLSleep() {
  const weeklyMap = sleepyPerson.getWeek(sampleDate).map(function (day) {
    return insertWeeklySleepStats(day)
  })
  return weeklyMap.join(' ');
}

function insertWeeklySleepStats(obj) {
  return `<p class="inserted--p"> ${milisecondsToDate(obj.date)}: ${obj.hoursSlept} hours slept with a sleep quality of ${obj.sleepQuality}  </p>`
}

function milisecondsToDate(miliseconds) {
  return new Date(miliseconds).toString().slice(0, 10)
}

function buildWeeklyHTML(unit) {
  const weeklyMap = userHydro.weeklyArr.map(function(day) {
    return insertWeeklyStats(day, unit)
  })
  return weeklyMap.join(' ');
}

function getRandomNumber() {
  return Math.floor(Math.random() * sampleData.length)
}
  
function insertWeeklyStats(obj, unit) {
  return `<p class="inserted--p"> ${milisecondsToDate(obj.date)}: ${obj.numOunces} ${unit} </p>`
}

