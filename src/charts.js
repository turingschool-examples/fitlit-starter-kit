import Chart from 'chart.js/auto';

let charts = [];

let displayChart = (weekData, location, chartLabel) => {

  const data = [    { day: "", activity:"" },    { day: "", activity:"" },    { day: "", activity:"" },    { day: "", activity:"" },    { day: "", activity: "" },    { day: "", activity: "" },    { day: "", activity: "" },  ];

  let chart = new Chart(
    location,
    {
      type: 'line',
      color:'#000000',
      data: {
        labels: data.map(row => row.day),
        datasets: [
          {
            label: chartLabel,
            data: weekData,
            pointRadius: 5,
            borderColor: "#042048",
            pointBackgroundColor: 'rgb(86, 153, 248)',
            backgroundColor: 'rgba(86, 153, 248, 0.5)'
          }
        ]
      },
      options: {
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          }
        }
      },
      alt: 'Informational Chart on User Data'
    }
  );

  charts.push(chart)
};

let displayChallengeChart = (location, user, friends) => {
  friends.unshift(user)
  const friendsArray = friends;
  const data = friends.map(person => person.daysReached)
  
  new Chart(
    location,
    {
      type: 'bar',
      color:'#042048',
      data: {
        labels: friendsArray.map(row => row.name),
        datasets: [
          {
            backgroundColor: "#042048",
            barThickness: 6,
            label: "Days Your Friends Met Their Goal",
            data: data,
            borderRadius: 1,
            borderColor: "#042048",
            borderWidth: 3,
            backgroundColor: 'rgba(86, 153, 248, 0.5)'
          }
        ]
      },
      options:{
        scales:{
          y:{
            beginAtZero: true
          }
        }
      },
      alt: "Challenge Chart with User's Friends"
    }
  );
};

export { displayChallengeChart };
export { displayChart };
export { charts }

