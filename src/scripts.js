$(document).ready(function() {

const randomUser = Math.floor(Math.random() * 50 ) 
const userRepository = new UserRepository(userData);
const hydration = new Hydration(hydrationData);
const user = new User(userData[randomUser]);
// const sleep = new Sleep();
// const sleepRepository = new SleepRepository();
// const activity = new Activity();
// const activityRepository = new ActivityRepository();

//the above code is commented out until we finish each of those iterations


    $('#random-user-span').text(user.getFirstName());
    $('#article__user--name').text(user.getFirstName());
    $('#article__user--address').text(userData[randomUser].address);
    $('#article__user--email').text(userData[randomUser].email);
    $('#article__user--stridelength').text(userData.strideLength);
    $('#article__user--stepgoal').text(userData.dailyStepGoal);
    $('#article__user--stepcompare').text();
    $('#article__user--currentsleep').text();
    $('#article__user--weekssleep').text();
    $('#article__user--avgsleep').text();
    $('#article__user--todaysteps').text();
    $('#article__user--activemins').text();
    $('#article__user--todaydistance').text();
    $('#article__user--weeklyview').text();
    $('#article__user--comparesteps').text();
    $('#article__user--comparemins').text();
    $('#article__user--comparestairs').text();

    const weeklyWaterIntake = new Chart($('#weekly-hydration-chart'), {
        type: 'bar',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [{
        label: 'weekly active minutes overview',
        data: hydration.findWeeklyWaterCons(),
        backgroundColor: [
          '#2FB5B6',
          '#FC5D79', 
          '#B6E7EC', 
          '#fda8b7', 
          '#1F768A',
          '#fc7d93',
          '#346081'
        ],
        borderColor: [
          '#2FB5B6',
          '#FC5D79',
          '#B6E7EC',
          '#fda8b7',
          '#1F768A',
          '#fc7d93',
          '#346081', 
        ],
        borderWidth: 2 
      }]
    },
        options: {
          legend: {display: false},
          labels: {
            fontColor: 'black',
            fontSize: 15
          },
          title: {
            display: true,
            fontColor: 'black',
            text: 'Weekly Water Intake (fl oz)'
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontColor: 'black',
                fontSize: 14
              }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: true,
                fontColor: 'black',
                fontSize: 14
              }
            }],
          }
        }
      });
    
    

});