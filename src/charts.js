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

export { displayChart }