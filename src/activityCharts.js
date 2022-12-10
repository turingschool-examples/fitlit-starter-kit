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


//global variables



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
    console.log('test 1')
    const todaysDate = userRepo.selectedUser.findLatestDate(userRepo.selectedUser.hydrationData) //find today method
    console.log(todaysDate)
    const numDrunk = userRepo.selectedUser.findDaysHydration(todaysDate).numOunces
    console.log(numDrunk)
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
    console.log(todaysDate)
    const weeklyHydration = userRepo.selectedUser.findWeekHydration(todaysDate)
    weeklyHydration.reverse();
    console.log(weeklyHydration)
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
        //options
    })
}

export default { updateHydroDateChart, updateHydroWeeklyChart};