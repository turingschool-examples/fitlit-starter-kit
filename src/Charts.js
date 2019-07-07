let avgActivityChart = new Chart($('.activity__chart-day-allUsers'), {
    type: 'bar',
    data: {
      labels: ["Number of steps", "Minutes active", "Flights of stairs climbed"],
      datasets: [
        {
          label: "Your stats",
          backgroundColor: "#3e95cd",
          data: []
        }, {
          label: "The average stats of all users",
          backgroundColor: "#8e5ea2",
          data: []
        }
      ]
    },
    options: {
    title: {
        display: true,
        text: 'Your stats compared to all users'
      }
    }
  });

let userWeeklyChart = new Chart($(".activity__chart-weeklyView-oneUser"), {
    type: 'line',
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [{ 
          data: [],
          label: "Step count",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [],
          label: "Flights of stairs climbed",
          borderColor: "#8e5ea2",
          fill: false
        }, { 
          data: [],
          label: "Minutes active",
          borderColor: "#3cba9f",
          fill: false
        }   
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Weekly overview'
      }
    }
  });