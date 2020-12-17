//All Hard-coded Graphs

const { Linter } = require("eslint")

//grab data
let weekActivities = communityActivity.findWeekActivities(startDate, endDate, user)
let weekSleep = communitySleep.calculateSleepStatsWeek(sleep.userID, startDate, endDate)
let weekWater = communityHydration.calculateTotalWeek(hydration.userID, startDate, endDate)

const mapWeek = (week, fitnessType) => week.map(object => object(fitnessType))
const weekDates = weekActivities.map(object => object.date)
const makeYs = (number) => new Array(weekActivities.length).fill(number)
//STEPS
const stepChart = new Chart(stepCanvas, {
    type: 'bar',
    data: {
    labels: weekDates,
    datasets: [{
        label: `Your Steps`,
        data: mapWeek(weekActivities, 'numSteps'),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }, 
    {
        type: 'line',
        label: `Your Step Goal`,
        data: makeYs(user.dailyStepGoal),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    },
    {
        type: 'line', 
        label: `Community Average Step Goal`,
        data: makeYs(community.findAverageStepGoal()),
        backgroundColor: 'rgba(255, 10, 235, 0.2)',
        borderColor: 'rgba(255, 10, 235, 1)',
        borderWidth: 1
    },
    {
        type: 'line', 
        label: `Community Average Steps`,
        data: makeYs(communityActivity.findCommunityAverage(today, 'numSteps')),
        backgroundColor: 'rgba(0, 162, 235, 0.2)',
        borderColor: 'rgba(0, 162, 235, 1)',
        borderWidth: 1
    }]
    }
});
//STAIRS
const stairsChart = new Chart(stairsCanvas, {
    type: 'line',
    data: {
    labels: weekDates,
    datasets: [{
        label: 'Your Stairs Climbed',
        data: mapWeek(weekActivities, 'stairsClimbed'),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }, 
    {
        type: 'line', 
        label: 'Your Record Stairs Climbed',
        data: makeYs(communityActivity.findRecordStairs(user)),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    },
    {
        type: 'line', 
        label: 'Community Average Stairs Climbed',
        data: makeYs(communityActivity.findRecordStairs(user)),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
    }
});
//ACTIVE MINUTES
const activeMinutesChart = new Chart(activeMinutesCanvas, {
    type: 'line',
    data: {
    labels: weekDates,
    datasets: [{
        label: 'Your Active Minutes',
        data: mapWeek(weekActivities, 'minutesActive'),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }, 
    {
        label: 'Community Average Active Minutes',
        data: makeYs(communityActivity.findCommunityAverage(today, 'minutesActive')),
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
    }
});
//WATER
const waterChart = new Chart(waterCanvas, {
    type: 'line',
    data: {
    labels: weekDates,
    datasets: {
        label: 'Your Total Ounces',
        data: mapWeek(weekWater, 'numOunces'),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }, 
    }
});
//SLEEP
const sleepChart = new Chart(sleepCanvas, {
    type: 'line',
    data: {
    labels: weekDates,
    datasets: [{
        label: `Your Hours Slept`,
        data: weekMap(weekSleep, 'hoursSlept'),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }, 
    {
        label: `Your Sleep Quality`,
        data: weekMap(weekSleep, 'sleepQuality'),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    },
    {
        type: 'line', 
        label: `Your All-Time Average Sleep Quality`,
        data: makeYs(communitySleep.calculateAvgSleepQualPerDay(sleep.userID)),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    },
    {
        type: 'line', 
        label: `Your All-Time Average Sleep Quality`,
        data: makeYs(communitySleep.calculateAvgSleepHrsPerDay(sleep.userID)),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
    }
});
// FRIENDS
const friendChart = new Chart(friendCanvas, {
    type: 'line',
    data: {
    labels: weekDates,
    datasets: [{
        label: `Your Steps`,
        data: mapWeek(weekActivities, 'numSteps'),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }, 
    {
        label: `${getFriendName(user.friends[0])}'s Steps`,
        data: findFriendSteps(user.friends[0]),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }, 
    {
        label: `${getFriendName(user.friends[1])}'s Steps`,
        data: findFriendSteps(user.friends[1]),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }, 
    {
        label: `${getFriendName(user.friends[2])}'s Steps`,
        data: findFriendSteps(user.friends[2]),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
    }





//helper functions to Dry up graphs
// const getData = (weekOfUserDataObjects, fitnessType)  => {
//     return {
//       fitnessType: fitnessType,
//       startDate: weekOfUserDataObjects[0].date,
//       endDate: weekOfUserDataObjects[weekOfUserDataObjects.length -1].date,
//       xs: weekOfUserDataObjects.map(object => object.date),
//       ys: weekOfUserDataObjects.map(object => object[fitnessType]) 
//     }
//   const chartIt = (whatCanvas, dataOne, dataTwo) => {
//     const data = dataOne
//     const data2 = dataTwo
//     const chart = new Chart(whatCanvas, {
//       type: 'line',
//       data: {
//         labels: data.xs,
//         datasets: [{
//           label: `Your ${data.fitnessType}`,
//           data: data.ys,
//           backgroundColor: 'rgba(255, 99, 132, 0.2)',
//           borderColor: 'rgba(255, 99, 132, 1)',
//           borderWidth: 1
//         }, 
//         {
//           label: `Your ${data2.fitnessType.split(/(?=[A-Z])/).join(' ')} for the week of ${data2.startDate} - ${data2.endDate}`,
//           data: data2.ys,
//           backgroundColor: 'rgba(54, 162, 235, 0.2)',
//           borderColor: 'rgba(54, 162, 235, 1)',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           yAxes: [{
//             ticks: {
//               beginAtZero: true
//             }
//           }]
//         }
//       }
//     });
//   };
