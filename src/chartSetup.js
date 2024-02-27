import { Chart, registerables } from 'chart.js/auto';
Chart.register(...registerables);

const chartOptions = document.querySelector('.chartUpdate');

function setCharts() {
let chartCanvas = document.querySelectorAll('canvas');
Array.from(chartCanvas).reduce((acc, chart) => {
  let id = chart.id.replace('Chart', '') + 'Ctx';
  acc[id] = {
    ctx: chart.getContext('2d'),
    canvas: {
      width: chart.width,
      height: chart.height,
    }
  };
  return acc;
}, {});

}


const stepCtx = document.getElementById('stepChart').getContext('2d');
const wklyHydCtx = document.getElementById('wklyHydChart').getContext('2d');
const hydCtx = document.getElementById('hydChart').getContext('2d');
const avgSleepCtx = document.getElementById('avgSleepChart').getContext('2d');
const wklySleepCtx = document.getElementById('wklySleepChart').getContext('2d');
const sleepCtx = document.getElementById('sleepChart').getContext('2d');
const adminCtx = document.getElementById('adminChart').getContext('2d');
const adminSleepCtx = document.getElementById('adminSleepChart').getContext('2d');
const adminHydrationCtx = document.getElementById('adminHydrationChart').getContext('2d');
const adminActivityCtx = document.getElementById('adminActivityChart').getContext('2d');



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
    borderWidth: 1,
    borderRadius: 20,
    hoverBorderColor: 'red'
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
    borderWidth: 1,
    borderRadius: 20,
    hoverBorderColor: 'red'
  }]
};

const hydChartData = {
  labels: ['Average Daily Hyd', 'Hydration For Spec Day'],
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
    borderWidth: 1,
    borderRadius: 20,
    hoverBorderColor: 'red'
  }]
};

const wklySleepChartData = {
  labels: ['Wkly Hrs Slept / Day', 'Sleep Qual / Day'],
  datasets: [
    {
      label: 'Day1',
      data: ['sleep'],
      stack: 'Stack 0',
      backgroundColor: [
        '#1a1a1a',
        '#1a1a1a',
      ],
      borderColor: [
        '#1a1a1a',
        '#1a1a1a',
      ]
    },
    {
      label: 'Day2',
      data: [],
      stack: 'Stack 1',
      backgroundColor: [
        '#1a1a1a',
        '#1a1a1a',
      ],
      borderColor: [
        '#1a1a1a',
        '#1a1a1a',
      ]
    },
    {
      label: 'Day3',
      data: [],
      stack: 'Stack 2',
      backgroundColor: [
        '#1a1a1a',
        '#1a1a1a',
      ],
      borderColor: [
        '#1a1a1a',
        '#1a1a1a',
      ]
    },
    {
      label: 'Day4',
      data: [],
      stack: 'Stack 3',
      backgroundColor: [
        '#1a1a1a',
        '#1a1a1a',
      ],
      borderColor: [
        '#1a1a1a',
        '#1a1a1a',
      ]
    },
    {
      label: 'Day5',
      data: [],
      stack: 'Stack 4',
      backgroundColor: [
        '#1a1a1a',
        '#1a1a1a',
      ],
      borderColor: [
        '#1a1a1a',
        '#1a1a1a',
      ]
    },
    {
      label: 'Day6',
      data: [],
      stack: 'Stack 5',
      backgroundColor: [
        '#1a1a1a',
        '#1a1a1a',
      ],
      borderColor: [
        '#1a1a1a',
        '#1a1a1a',
      ]
    },
    {
      label: 'Day7',
      data: [],
      stack: 'Stack 6',
      backgroundColor: [
        '#1a1a1a',
        '#1a1a1a',
      ],
      borderColor: [
        '#1a1a1a',
        '#1a1a1a',
      ]
    }
  ]
};
//////
const avgSleepChartData = {
  labels: ['Avg Hrs Slept / Day', 'Avg Sleep Qual / Day'],
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
    borderWidth: 1,
    borderRadius: 20,
    hoverBorderColor: 'red'
  }]
};

const sleepChartData = {
  labels: ['Hrs Slept / Rec Day', 'Sleep Qual / Rec Day'],
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
    borderWidth: 1.5,
    borderRadius: 20,
    hoverBorderColor: 'red'
  }]
};

const adminChartData = {
  labels: [],
  datasets: [{
    label: 'Day1',
    data: [],
    stack: 'Stack 0',
    backgroundColor: [
      '#1a1a1a',
      '#1a1a1a',
    ],
    borderColor: [
      '#1a1a1a',
      '#1a1a1a',
    ]
  }]
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
  options: vertOptions
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

const adminChart = new Chart(adminCtx, {
  type: 'bar', 
  data: adminChartData,
  options: vertOptions
});

const wklySleepChart = new Chart(wklySleepCtx, {
  type: 'bar',
  data: wklySleepChartData,
  options: {
    plugins: {
      title: {
        display: true,
      },
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: 'black',
          max: 10
        }
      },
      y: {
        stacked: true,
        ticks: {
          color: 'black',
          max: 10
        }
      }
    }
  }
})

const adminSleepChart = new Chart(adminSleepCtx, {
  type: 'bar', 
  data: {
      labels: ['Average Sleep Hours', 'Average Sleep Quality'], 
      datasets: [{          
      backgroundColor: ['#1a1a1a'],
      borderColor: ['#1a1a1a'],
      borderWidth: 1,}]
  },
  options: vertOptions
});


const adminHydrationChart = new Chart(adminHydrationCtx, {
  type: 'bar', 
  data: {
      labels: ['Average Ounces Drank'], 
      datasets: [{
          label: 'Hydration Data',
          data: [],
          backgroundColor: ['#1a1a1a'],
          borderColor: ['#1a1a1a'],
          borderWidth: 1,
      }]
  },
  options: vertOptions
});

const adminActivityChart = new Chart(adminActivityCtx, {
  type: 'bar', 
  data: {
      labels: ['Active Average', 'Flights of Steps Average'], 
      datasets: [{
          label: 'Sleep Data',
          data: [],
          backgroundColor: ['#1a1a1a'],
          borderColor: ['#1a1a1a'],
          borderWidth: 1,
      }]
  },
  options: vertOptions
});

const chartColors = ['#480000','#610000', '#7B0000', '#940000', '#AE0000', '#C30000', '#A90000', '#900000', '#760000', '#5D0000']

export {
    stepChart,
    wklyHydChart,
    hydChart,
    sleepChart,
    avgSleepChart,
    wklySleepChart,
    adminChart,
    adminSleepChart,
    adminHydrationChart,
    adminActivityChart,
    chartColors,
    setCharts
}