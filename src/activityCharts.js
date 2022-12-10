import { Chart } from "chart.js/auto";
import { userRepo } from './scripts';
// import { getRelativePosition } from "chart.js/helpers";

//query selects for the canvases
const stepChart = document.getElementById("stepGoalChart").getContext('2d'); //bar graph
const sleepChart = document.getElementById("weeksSleepChart").getContext('2d'); //double line graph??? or 2 graphs
const hydroDayChart = document.getElementById("todaysHydrationChart").getContext('2d'); //doughnut chart
const hydroWeekChart = document.getElementById("weeksHydrationChart").getContext('2d');//line graph

//variables that will be chart names
let stepComparisonChart;
let sleepDblDataChart;
let todaysHydroChart;
let weeksHydroChart;


// functions to update charts (data passed in as parameter)

const findHydroPercentage = (numDrunk, goal) => {
    // if (numDrunk < goal) {
    //  return goal - numDrunk >> the second datapoint in doughnut chart
    // } else {
    //     return 0; >> so that doughnut chart remains full
    // }
    return numDrunk < goal ? goal - numDrunk : 0;
}
const updateHydroDateChart = () => {
    const todaysDate = userRepo.selectedUser.findLatestDate(userRepo.selectedUser.hydrationData);
    const numDrunk = userRepo.selectedUser.findDaysHydration(todaysDate).numOunces;
    const goal = 64;
    const ozLeft = findHydroPercentage(numDrunk, goal);
    console.log('ounces left: ', ozLeft);
    todaysHydroChart = new Chart(hydroDayChart, {
        type: 'doughnut',
        data: {
            labels: ['Today\'s Intake', 'Recommended Daily Intake'],
            datasets: [
                {
                    //label: optional and probably not helpful here
                    data: [ numDrunk, ozLeft ],
                    backgroundColor: [ '#BF1363', '#F39237' ]
                }
            ],
        }
        //options
    })
} //sizing of this done in CSS

// const updateHydroDateChart = (ozToday) => {
// todaysHydroChart = new Chart(hydroDayChart, {
//     type: 'doughnut',
//     data: {
//         labels: ['Today\'s Intake', 'Recommended Daily Intake'],
//         datasets: [
//             {
//                 //label: optional and probably not helpful here
//                 //
//                 //set max as a const (64)
//                 data: [ 50, 25 ], //[ ozToday, conditional parameter? if larger than 64, this is 0. else (64 - ozToday)]
//                 backgroundColor: [ '#BF1363', '#F39237' ]
//             }
//         ],
//     }
//     //options
// })
// }

// const updateHydroChart = (ozToday) => {
//     weeksHydroChart

// }

const updateStepChart = () => {
    const userStepGoal = userRepo.selectedUser.dailyStepGoal
    console.log(userStepGoal)
    const avgStepGoal = userRepo.averageSteps()
    console.log(avgStepGoal)
    stepComparisonChart = new Chart(stepChart, {
        type: 'bar',
        data: {
            labels: ['Average Step Goal', 'Your Step Goal'],
            datasets: [{
              label: 'Step Goal',
              data: [avgStepGoal, userStepGoal],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
              ],
              borderWidth: 1
            }]
          },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }}
    })
  }

const updateSleepChart = () => {
  const todaysDate = userRepo.selectedUser.findLatestDate(userRepo.selectedUser.sleepData);
  const userSleepWeek = userRepo.selectedUser.findWeekSleep(todaysDate);
  userSleepWeek.reverse();
  console.log(userSleepWeek);
  sleepDblDataChart = new Chart(sleepChart, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Hours Slept',
            data: [userSleepWeek[0].hoursSlept, userSleepWeek[1].hoursSlept, userSleepWeek[2].hoursSlept, userSleepWeek[3].hoursSlept, userSleepWeek[4].hoursSlept, userSleepWeek[5].hoursSlept, userSleepWeek[6].hoursSlept],
            // this dataset is drawn below
            order: 2
        }, {
            label: 'Sleep Quality',
            data: [userSleepWeek[0].sleepQuality, userSleepWeek[1].sleepQuality, userSleepWeek[2].sleepQuality, userSleepWeek[3].sleepQuality, userSleepWeek[4].sleepQuality, userSleepWeek[5].sleepQuality, userSleepWeek[6].sleepQuality],
            type: 'line',
            // this dataset is drawn on top
            order: 1
        }],
        labels: [`${userSleepWeek[0].date}`, `${userSleepWeek[1].date}`, `${userSleepWeek[2].date}`, `${userSleepWeek[3].date}`, `${userSleepWeek[4].date}`, `${userSleepWeek[5].date}`, `${userSleepWeek[6].date}`]
    },
    // options: options
  });
}

export default { updateHydroDateChart, todaysHydroChart, updateStepChart, updateSleepChart };