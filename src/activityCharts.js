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

const updateHydroWeeklyChart = () => {
    const todaysDate = userRepo.selectedUser.findLatestDate(userRepo.selectedUser.hydrationData)
    const weeklyHydration = userRepo.selectedUser.findWeekHydration(todaysDate)
    weeklyHydration.reverse();
    weeksHydroChart = new Chart(hydroWeekChart, {
        type: 'bar',
        data: {
            labels: ['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6', 'Day 7'],
            datasets: [
                {
                    label: 'Daily Intake in Ounces',
                    data: [weeklyHydration[0].numOunces, weeklyHydration[1].numOunces, weeklyHydration[2].numOunces, weeklyHydration[3].numOunces,weeklyHydration[4].numOunces, weeklyHydration[5].numOunces, weeklyHydration[6].numOunces],
                    type: 'line',
                    backgroundColor: ['#BF1263'],
                }
            ],
        }
        //options
    })
}
const updateStepChart = () => {
    const userStepGoal = userRepo.selectedUser.dailyStepGoal
    const avgStepGoal = userRepo.averageSteps()
    stepComparisonChart = new Chart(stepChart, {
        type: 'bar',
        data: {
            labels: ['Average Step Goal', 'Your Step Goal'],
            datasets: [{
              label: 'Step Goal',
              data: [avgStepGoal, userStepGoal],
              backgroundColor: ['#BF1363', '#F39237'],
            }]
          },
        options: {
          scales: {
            y: {
              beginAtZero: true
            },
          },
          // this removes the legend
          plugins: {
            legend: {
                display: false
            },
          },
        }
    })
  }

const updateSleepChart = () => {
  const todaysDate = userRepo.selectedUser.findLatestDate(userRepo.selectedUser.sleepData);
  const userSleepWeek = userRepo.selectedUser.findWeekSleep(todaysDate);
  userSleepWeek.reverse();
  sleepDblDataChart = new Chart(sleepChart, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Hours Slept',
            data: [userSleepWeek[0].hoursSlept, userSleepWeek[1].hoursSlept, userSleepWeek[2].hoursSlept, userSleepWeek[3].hoursSlept, userSleepWeek[4].hoursSlept, userSleepWeek[5].hoursSlept, userSleepWeek[6].hoursSlept],
            backgroundColor: ['#78C1E7'],
            // this dataset is drawn below
            order: 2
        }, {
            label: 'Sleep Quality',
            data: [userSleepWeek[0].sleepQuality, userSleepWeek[1].sleepQuality, userSleepWeek[2].sleepQuality, userSleepWeek[3].sleepQuality, userSleepWeek[4].sleepQuality, userSleepWeek[5].sleepQuality, userSleepWeek[6].sleepQuality],
            type: 'line',
            backgroundColor: ['#BF1263'],
            // this dataset is drawn on top
            order: 1
        }],
        labels: ['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6', 'Day 7']
    },
    // options: {
    //   aspect-ratio: {1000 / 500};
    // }
  });
}

export default { updateHydroDateChart, todaysHydroChart, updateStepChart, updateSleepChart, updateHydroWeeklyChart };