import Chart from "chart.js/auto";

const myChart = document.getElementById("myChart");

const buildSleepChart = (userData) => {
  const sleepChart = new Chart(myChart, {
    type: "bar",
    data: {
      labels: [
        `${userData[0].date}`,
        `${userData[1].date}`,
        `${userData[2].date}`,
        `${userData[3].date}`,
        `${userData[4].date}`,
        `${userData[5].date}`,
        `${userData[6].date}`,
      ],
      datasets: [
        {
          label: "hours slept",
          data: [
            userData[0].hoursSlept,
            userData[1].hoursSlept,
            userData[2].hoursSlept,
            userData[3].hoursSlept,
            userData[4].hoursSlept,
            userData[5].hoursSlept,
            userData[6].hoursSlept,
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

export { buildSleepChart };
