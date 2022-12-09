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
            data: hydration.count
          }, 
          {
            label: sleepQuality.label,
            data: sleepQuality.count
          },
          {
            label: sleepHours.label,
            data: sleepHours.count
          }
        ] 
      },
      // options: {
      //   scales: {
      //     hydration: {
      //       type: 'linear',
      //       position: 'left'
      //     },

      //   }
      // }
    }
  )
}

export { createChart }