import Chart from 'chart.js/auto';

const myChart = document.getElementById("myChart")

const buildSleepChart = (userData) => {
    const sleepChart = new Chart (myChart, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: '# of Votes',
              data: [userData[1].hoursSlept, userData[2].hoursSlept, userData[3].hoursSlept, userData[4].hoursSlept, userData[5].hoursSlept, userData[6].hoursSlept],
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
    })
}


export { buildSleepChart };