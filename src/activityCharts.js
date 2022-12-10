import { Chart } from "chart.js/auto";
import { userRepo } from './scripts';

const stepChart = document.getElementById("stepGoalChart").getContext('2d');
const sleepChart = document.getElementById("weeksSleepChart").getContext('2d');
const hydroDayChart = document.getElementById("todaysHydrationChart").getContext('2d');
const hydroWeekChart = document.getElementById("weeksHydrationChart").getContext('2d');

let stepComparisonChart;
let sleepDblDataChart;
let todaysHydroChart;
let weeksHydroChart;

const findHydroPercentage = (numDrunk, goal) => {
    return numDrunk < goal ? goal - numDrunk : 0;
}
const updateHydroDateChart = () => {
    const todaysDate = userRepo.selectedUser.findLatestDate('hydrationData');
    const numDrunk = userRepo.selectedUser.findDaysHydration(todaysDate).numOunces;
    const goal = 64; //can be dynamic later with user input
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
    });
};

const updateHydroWeeklyChart = () => {
    const todaysDate = userRepo.selectedUser.findLatestDate('hydrationData');
    const weeklyHydration = userRepo.selectedUser.findWeekHydration(todaysDate);
    weeklyHydration.reverse();
    weeksHydroChart = new Chart(hydroWeekChart, {
        type: 'bar',
        data: {
            labels: ['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6', 'Day 7'],
            datasets: [
                {
                    label: 'Daily Intake',
                    data: [weeklyHydration[0].numOunces, weeklyHydration[1].numOunces, weeklyHydration[2].numOunces, weeklyHydration[3].numOunces,weeklyHydration[4].numOunces, weeklyHydration[5].numOunces, weeklyHydration[6].numOunces],
                    type: 'line',
                    backgroundColor: ['#BF1263'],
                }
            ],
        }
    })
};

const updateStepChart = () => {
    const userStepGoal = userRepo.selectedUser.dailyStepGoal
    const avgStepGoal = userRepo.averageSteps();
    stepComparisonChart = new Chart(stepChart, {
        type: 'bar',
        data: {
            labels: ['Average Step Goal', 'Your Step Goal'],
            datasets: [{
              label: 'Step Goal',
              data: [avgStepGoal, userStepGoal],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
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
  };

const updateSleepChart = () => {
  const todaysDate = userRepo.selectedUser.findLatestDate('sleepData');
  const userSleepWeek = userRepo.selectedUser.findWeekSleep(todaysDate);
  userSleepWeek.reverse();
  sleepDblDataChart = new Chart(sleepChart, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Hours Slept',
            data: [userSleepWeek[0].hoursSlept, userSleepWeek[1].hoursSlept, userSleepWeek[2].hoursSlept, userSleepWeek[3].hoursSlept, userSleepWeek[4].hoursSlept, userSleepWeek[5].hoursSlept, userSleepWeek[6].hoursSlept],
            backgroundColor: ['#78C1E7'],
            order: 2
        }, {
            label: 'Sleep Quality',
            data: [userSleepWeek[0].sleepQuality, userSleepWeek[1].sleepQuality, userSleepWeek[2].sleepQuality, userSleepWeek[3].sleepQuality, userSleepWeek[4].sleepQuality, userSleepWeek[5].sleepQuality, userSleepWeek[6].sleepQuality],
            type: 'line',
            backgroundColor: ['#BF1263'],
            order: 1
        }],
        labels: [`${userSleepWeek[0].date}`, ``, ``, `${userSleepWeek[3].date}`, ``, ``, `${userSleepWeek[6].date}`]
    },
  });
}

export default { updateHydroDateChart, updateStepChart, updateSleepChart, updateHydroWeeklyChart };