const barColors = [
  "rgb(255, 0, 0, .6)", 
  "rgb(255, 125, 0, .6)",
  "rgb(255, 255, 0, .6)",
  "rgb(0, 255, 0, .6)",
  "rgb(0, 0, 255, .6)",
  "rgb(75, 0, 130, .6)",
  "rgb(150, 0, 210, .6)"
]

export function createAvgGoalChart(currentUser, userRepo) {

  new Chart("compare-avg-goal", {
    type: "bar",
    data: {
      labels: ["Your goal", "AVG Goal"], 
      datasets: [{
        label: 'Your Goal Vs. FitLit Average',
        backgroundColor: [barColors[3], barColors[1]],
        data: [currentUser.dailyStepGoal, userRepo.calculateAvgStepGoal()]
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
}
    
export function createStepFriendsChart(currentUser, userRepo) {
  const friendsNames = currentUser.friends.map(friend => userRepo.findUserData(friend).name)
  const friendsGoals = currentUser.friends.map(friend => userRepo.findUserData
  (friend).dailyStepGoal)

  new Chart("steps-friends-chart", {
    type: "bar",
    data: {
      labels: friendsNames, 
      datasets: [{
        label: 'Your Friends Goals',
        backgroundColor: barColors,
        data: friendsGoals
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
}

export function createWeeklyHydroChart(hydrationData, currentUser, todaysDate) {
  const weeklyHydration = hydrationData.findWeeklyHydration(currentUser.id, todaysDate)
  const hydroData = weeklyHydration.reduce((acc,cur) => {
    acc.dates.push(cur.date)
    acc.ounces.push(cur.numOunces)
    return acc
  },{dates:[], ounces:[]})

  new Chart("week-in-water", {
    type: "bar",
    data: {
      labels:  hydroData.dates,
      datasets: [{
        label: 'Weekly Hydration',
        backgroundColor: barColors[4],
        data: hydroData.ounces
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
}

export function createWeeklySleepData(currentUser, sleepData, todaysDate) {
  const thisWeeksSleepData = sleepData.findWeeklySleepData(currentUser.id, todaysDate)
  const sleepChartData = thisWeeksSleepData.reduce((acc,cur) => {
    acc.dates.push(cur.date)
    acc.hours.push(cur.hoursSlept)
    acc.qualities.push(cur.sleepQuality)
    return acc
  },{dates:[], hours:[], qualities:[]} )

  new Chart("sleep-graph", {
    type: "bar",
    data: {
      labels: sleepChartData.dates,
      datasets: [{
        label: 'Hours of Sleep',
        backgroundColor: barColors[5],
        data: sleepChartData.hours
      },
      {
        label: 'Quality of Sleep',
        backgroundColor: barColors[6],
        data: sleepChartData.qualities
      }]
    },
    options: {
      indexAxis: 'y',
    }  
  }) 
}
