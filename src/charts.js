import { Chart } from 'chart.js/auto'

const createChart = function(hydration, sleepQuality, sleepHours) {
  new Chart(
    document.getElementById('weeklyChart'), 
    {
      type: 'bar',
      data: {
        labels: hydration.dates,
        datasets: [
          {
            label: hydration.label,
            yAxisID: 'hydration',
            data: hydration.count
          }, 
          {
            label: sleepQuality.label,
            yAxisID: 'sleep',
            data: sleepQuality.count
          },
          {
            label: sleepHours.label,
            yAxisID: 'sleep',
            data: sleepHours.count
          }
        ] 
      },
      options: {
        scales: {
          hydration: {
            type: 'linear',
            position: 'left'
          },
          sleep: {
            type: 'linear',
            position: 'right',
            ticks: {
              max: 15,
              min: 0
          }
          },
        }
      }
    }
  )
}

export { createChart }