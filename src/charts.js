import { Chart } from 'chart.js/auto'

const createChart= function(data) {
  new Chart(
    document.getElementById('weeklyChart'), 
    {
      type: 'bar',
      data: {
        labels: data.dates,
        datasets: [
          {
            label: data.label,
            data: data.count
          }
        ] 
      }
    }
  )
}

export { createChart }