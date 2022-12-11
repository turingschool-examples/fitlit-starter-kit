import Chart from 'chart.js/auto';

const myChart = document.getElementById("myChart")

const buildSleepChart = () => {
    const sleepChart = new Chart (myChart, {
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
    })
}


export { buildSleepChart };