import { Chart, registerables } from 'chart.js/auto';
Chart.register(...registerables);

const stepCtx = document.getElementById('stepChart').getContext('2d');
const hydCtx = document.getElementById('hydChart').getContext('2d');

stepCtx.canvas.height = 100;
stepCtx.canvas.width = 500; 
hydCtx.canvas.height = 100;
hydCtx.canvas.width = 500;


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

const horizOptions = {
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

const vertOptions = {
  indexAxis: 'x',
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: 'black'
      }
    },
    x: {
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

const stepChart = new Chart(stepCtx, {
  type: 'bar', 
  data: stepChartData,
  options: horizOptions
});

const hydChartData = {
  labels: ['Average daily hydration', 'Daily hydration', 'Weekly Hydration'],
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


const hydChart = new Chart(hydCtx, {
  type: 'bar', 
  data: hydChartData,
  options: vertOptions
});

export {
    hydCtx,
    stepCtx,
    stepChartData,
    hydChartData,
    horizOptions,
    vertOptions,
    stepChart,
    hydChart
}