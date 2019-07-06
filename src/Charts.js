let stepGoalChart = new Chart($('.activity__chart-day-allUsers'), {
    type: 'bar',
    data: {
      labels: ['Personal Step Goal', 'The Average'],
      datasets: [{
        label: 'Step Goal',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
        }]
      },
        beginAtZero: true
  });