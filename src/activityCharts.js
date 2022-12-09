import { Chart } from "chart.js/auto";
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

new Chart(hydroDayChart, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


// new Chart(hydroDayChart, {
//     type: 'doughnut',
//     data: {
//         labels: ['Today\'s Intake', 'Recommended Daily Intake'],
//         datasets: [
//             {
//                 label: 'Make it to 64oz!', //maybe interpolate how close they are to meeting the goal?
//                 data: [ 45, 64 ]
//                 backgroundColor: [ '#BF1363', '#F39237' ]
//             }
//         ];
//     }
// })

// functions to update charts (data passed in as parameter)

// const updateHydroChart = (data) => {
//     todaysHydroChart = new Chart(stepChart, {
//         type: 'doughnut',
//         data: {
//             labels: ['Today\'s Intake', 'Recommended Daily Intake'],
//             datasets: [
//                 {
//                     label: 'Make it to 64oz!', //maybe interpolate how close they are to meeting the goal?
//                     data: [ data, 64 ] //data
//                     backgroundColor: [ #BF1363, #F39237 ]
//                 }
//             ];
//         }
//     })
// }