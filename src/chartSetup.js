import { Chart, registerables } from 'chart.js/auto';
Chart.register(...registerables);

const ctx = document.getElementById('stepChart').getContext('2d');

ctx.canvas.height = 100;
ctx.canvas.width = 500; 

const stepChartData = {
  labels: ['Your step goal', 'Average step goal'],
  datasets: [{
    label: '',
    data: [],
    backgroundColor: [
      '#1a1a1a',
      '#1a1a1a',
    ],
    borderColor: [
      '#1a1a1a',
      '#1a1a1a',
    ],
    borderWidth: 1
  }]
};

const options = {
  indexAxis: 'y',
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        color: 'black'
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: 'black'
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  },
};

const stepChart = new Chart(ctx, {
  type: 'bar', 
  data: stepChartData,
  options: options
});

export {
    ctx,
    stepChartData,
    options,
    stepChart
}