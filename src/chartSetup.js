import { Chart, registerables } from 'chart.js/auto';
Chart.register(...registerables);

const stepCtx = document.getElementById('stepChart').getContext('2d');
const wklyHydCtx = document.getElementById('wklyHydChart').getContext('2d');
const hydCtx = document.getElementById('hydChart').getContext('2d');
const avgSleepCtx = document.getElementById('avgSleepChart').getContext('2d');
const wklySleepCtx = document.getElementById('wklySleepChart').getContext('2d');
const sleepCtx = document.getElementById('sleepChart').getContext('2d');

stepCtx.canvas.height = 200;
stepCtx.canvas.width = 500; 

wklyHydCtx.canvas.height = 100;
wklyHydCtx.canvas.width = 500;
hydCtx.canvas.height = 100;
hydCtx.canvas.width = 500;

sleepCtx.canvas.height = 60;
sleepCtx.canvas.width = 500;
avgSleepCtx.canvas.height = 60;
avgSleepCtx.canvas.width = 500;
wklySleepCtx.canvas.height = 60;
wklySleepCtx.canvas.width = 500;


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

const wklyHydChartData = {
  labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7'],
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

const hydChartData = {
  labels: ['Average Daily Hydration', 'Hydration For Specific Day'],
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

const wklySleepChartData = {
  labels: ['Weekly Hours Slept Per Day', 'Weekly Sleep Quality Per Day'],
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

const avgSleepChartData = {
  labels: ['Average Hours Slept Per Day', 'Average Sleep Quality Per Day'],
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

const sleepChartData = {
  labels: ['Hours Slept Per Recent Day', 'Sleep Quality Per Recent Day'],
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

const wklyHydChart = new Chart(wklyHydCtx, {
  type: 'bar', 
  data: wklyHydChartData,
  options: vertOptions
});

const hydChart = new Chart(hydCtx, {
  type: 'bar', 
  data: hydChartData,
  options: vertOptions
});

const wklySleepChart = new Chart(wklySleepCtx, {
  type: 'bar', 
  data: wklySleepChartData,
  options: vertOptions
});

const avgSleepChart = new Chart(avgSleepCtx, {
  type: 'bar', 
  data: avgSleepChartData,
  options: vertOptions
});

const sleepChart = new Chart(sleepCtx, {
  type: 'bar', 
  data: sleepChartData,
  options: vertOptions
});

export {
    wklyHydCtx,
    hydCtx,
    stepCtx,
    stepChartData,
    wklyHydChartData,
    hydChartData,
    horizOptions,
    vertOptions,
    stepChart,
    wklyHydChart,
    hydChart,
    sleepChart,
    avgSleepChart,
    wklySleepChart,
}