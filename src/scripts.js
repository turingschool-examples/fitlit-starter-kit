// const Sleep = require('../src/Sleep');
// const SleepRepo = require('../src/SleepRepo');
// const User = require('../src/User');
// const UsersRepo = require('../src/UserRepo');
// const Hydration = require('../src/Hydration');
// const Activity = require('../src/Activity');
// const ActivityRepo = require('../src/ActivityRepo');

// const sleepData = require('../data/sleep');
// const usersData = require('../data/users');
// const hydrationData = require('../data/hydration');
// const activityData = require('../data/activity');

const currentUser = new User(userData[0]);
const currentDate = "2019/09/22";

const sleep = new Sleep(currentUser.id, sleepData);
console.log(sleep);
const sleepRepo = new SleepRepo(sleepData);
const usersRepo = new UsersRepo(userData);
const hydration = new Hydration(currentUser.id, hydrationData);
const activity = new Activity(currentUser.id, activityData, userData);
const activityRepo =new ActivityRepo(activityData);

let weekSleepHours = sleep.getWeeklySleepHours("2019/06/15");
console.log(weekSleepHours);

var ctx = document.getElementById("myChart").getContext("2d");


var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Day 1", " ", " ", " ", " ", " ", "Day 7"],
      datasets: [
        {
          label: "Weekly Sleep Hours",
          data: weekSleepHours,
          fill: false,
          backgroundColor: [
            "rgba(153, 102, 255, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Weekly Sleep Hours",
      }
    }
  });
