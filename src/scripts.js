$(function() {

const randomUser = Math.floor(Math.random() * 50 ) 
const userRepository = new UserRepository(userData);
const hydration = new Hydration(userData);
const user = new User(userData[randomUser]);
// const sleep = new Sleep();
// const sleepRepository = new SleepRepository();
// const activity = new Activity();
// const activityRepository = new ActivityRepository();

//the above code is commented out until we finish each of those iterations
const date = new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/');

$('.product-photo').on('mouseenter', event => {
    $(event.currentTarget).addClass('photo-active')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('photo-active')
  })


    $('#random-user-span').text(user.getFirstName());
    $('#article__user--name').text(user.getFirstName());
    $('#article__user--address').text(userData[randomUser].address);
    $('#article__user--email').text(userData[randomUser].email);
    $('#article__user--stridelength').text(userData[randomUser].strideLength);
    $('#article__user--stepgoal').text(userData[randomUser].dailyStepGoal);
    $('#article__user--stepcompare').text(userRepository.calcStepGoalAvg());
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
        label: 'Weekly Hydration',
        data: hydration.findWeeklyWaterCons(date),
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
          labels: {
            fontColor: 'black',
            fontSize: 15
          },
          layout: {
            padding: {
                left: 50,
                right: 50,
                top: 0,
                bottom: 50,
            }
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