/**
 * You can always split off pieces of fucntionality into new files
 * So all the charts could live here and it adds another layer 
 * of organization and modularity to the code.
 * 
 * When you start doing more react and such you'll be doing stuff like 
 * this all the time.  It's just like the fect file you had.  ASll the fetch 
 * stuff is in a file :) 
 * 
 * Making these charts is inherently verbose and the func names are great
 * so you really only need to know what's happening here if you're working on it
 * 
 * It makes the scripts file a little easier to read if all this 
 * stuff lives here and you can look at this file if you need to see what's
 * going on here but it's not super important for the scirpts file, which kind
 * of serves as the entry point for your app.  The more succinct that is for
 * "this is what our app does" the better
 */
import Chart from 'chart.js/auto';

export const generateStepGoalChart = (currentUser, allUsers, ctx) => {
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Yours', 'Community Average'],
      datasets: [{
        label: 'Steps',
        data: [
          `${currentUser.dailyStepGoal}`,
          `${allUsers.calculateAvgStepGoal()}`
        ],
        backgroundColor: ['#ba4afe', '#4AB2FE'],
        borderColor: ['#ba4afe', '#4AB2FE']
      }],
    },
    options: {
      elements: {
        bar: {
          borderRadius: 10,
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Daily Step Goals',
          font: {
            size: 20
          }
        }
      },
    }
  })
}

export const generateWeekWaterChart = (ouncesByWeek, ctx) => {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: ouncesByWeek.map(waterEntry => waterEntry.date),
      datasets: [{
        label: 'Your daily intake (oz)',
        data: ouncesByWeek.map(waterEntry => waterEntry.numOunces),
        backgroundColor: '#ba4afe',
        borderColor: '#ba4afe'
      },
      {
        label: 'Recommended',
        data: [64, 64, 64, 64, 64, 64, 64],
        backgroundColor: '#17D290',
        borderColor: '#17D290'
      }],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            pointStyle: 'rectRounded'
          }
        },
        title: {
          display: true,
          text: 'Weekly Summary',
          font: {
            size: 20
          }
        }
      }
    }
  })
}

export const generateDayWaterChart = (ouncesByDay, ctx) => {
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Your intake (oz)', 'Recommended 64 (oz)'],
      datasets: [{
        label: 'Ounces',
        data: [`${ouncesByDay}`, 64],
        backgroundColor: ['#ba4afe', '#17D290'],
        borderColor: ['#ba4afe', '#17D290']
      }],
    },
    options: {
      elements: {
        bar: {
          borderRadius: 10,
        }
      },
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Latest Entry',
          font: {
            size: 20
          }
        }
      },
    }
  })
}

export const generateWeekSleepChart = (userSleep, ctx) => {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: userSleep.map(sleepEntry => sleepEntry.date),
      datasets: [{
        label: 'Hours Slept per Day',
        data: userSleep.map(sleepEntry => sleepEntry.hoursSlept),
        backgroundColor: '#17D290',
        borderColor: '#17D290'
      }, {
        label: 'Sleep Quality per Day',
        data: userSleep.map(sleepEntry => sleepEntry.sleepQuality),
        backgroundColor: '#4AB2FE',
        borderColor: '#4AB2FE'
      }],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            pointStyle: 'rectRounded'
          }
        },
        title: {
          display: true,
          text: 'Weekly Summary',
          font: {
            size: 20
          }
        }
      }
    }
  })
}

export const generateAvgSleepChart = (sleepComparisonData, ctx) => {
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [`${sleepComparisonData.date}`, 'Overall Average'],
      datasets: [{
        label: 'Hours Slept',
        data: [
          `${sleepComparisonData.hoursSleptOnDate}`,
          `${sleepComparisonData.hoursSleptAvg}`
        ],
        backgroundColor: '#17D290',
        borderColor: '#17D290'
      }, {
        label: 'Sleep Quality',
        data: [
          `${sleepComparisonData.sleepQualityOnDate}`,
          `${sleepComparisonData.sleepQualityAvg}`
        ],
        backgroundColor: '#4AB2FE',
        borderColor: '#4AB2FE'
      }],
    },
    options: {
      elements: {
        bar: {
          borderRadius: 10,
        }
      },
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            pointStyle: 'rectRounded'
          }
        },
        title: {
          display: true,
          text: 'Day/Average Comparison',
          font: {
            size: 20
          }
        }
      }
    }
  })
}