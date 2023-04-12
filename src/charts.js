import Chart from 'chart.js/auto';

let displayChart = (weekData, location) => {
  const data = [
    { day: "", activity:"" },
    { day: "", activity:"" },
    { day: "", activity:"" },
    { day: "", activity:"" },
    { day: "", activity: "" },
    { day: "", activity: "" },
    { day: "", activity: "" },
  ];

  new Chart(
    location,
    {
      type: 'line',
      color:'#000000',
      data: {
        labels: data.map(row => row.day),
        datasets: [
          {
            label: "",
            data: weekData,
            pointRadius: 0,
            borderColor: "#042048"
          }
        ]
      }
    }
  );
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
            label: "",
            data: data,
            pointRadius: 0,
            borderColor: "#042048"
          }
        ]
      }
    }
  );
};

export { displayChallengeChart }
export { displayChart }