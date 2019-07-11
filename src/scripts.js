$(document).ready(function() {
  const randomIndex = Math.floor(Math.random() * (userData.length - 1) + 1)       
  const randomUser = userData.find(user => user.id === randomIndex)
  const user = new User(randomUser);
  const users = new UserRepo(userData);
  const hydro = new Hydration(hydrationData);
  const sleep = new Sleep(sleepData);
  const activity = new Activity(activityData);
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()
//   const todaysDate = year + "/" + "0" + month + "/" + "0" + day;
  const today = "2019/07/10"


  var cardOne= document.querySelector('.card-1');
cardOne.addEventListener( 'click', function() {
  cardOne.classList.toggle('is-flipped');
});

var cardTwo = document.querySelector('.card-2');
cardTwo.addEventListener( 'click', function() {
  cardTwo.classList.toggle('is-flipped');
});

var cardThree = document.querySelector('.card-3');
cardThree.addEventListener( 'click', function() {
  cardThree.classList.toggle('is-flipped');
});

var cardFour = document.querySelector('.card-4');
cardFour.addEventListener( 'click', function() {
  cardFour.classList.toggle('is-flipped');
});


  $('.user-name').text(`${user.returnFirstName(randomUser)}`)
  $('#user-address').text(`Address: ${user.randomUser.address}`)
  $('#user-email').text(`Email: ${user.randomUser.email}`)
  $('#user-stride').text(`Your stride length is ${user.randomUser.strideLength}`)
//   $('#user-stepGoal').text(`Your daily step goal is set to ${user.randomUser.dailyStepGoal} steps.`)
//   $('#avg-stepGoal').text(`The average step goal among all users is ${users.averageGoalSteps()}.`)

  $('#daily-water').text(`Today you have consumed ${hydro.fluidOzsPerDay(randomIndex, today)} ounces of water.`)
  $('#weekly-water').text(`In the past week, you've consumed the following amounts of water per day ${hydro.userFluidsPerWeek(randomIndex, today)}.`)
//   console.log(`${Object.keys(hydro.userFluidsPerWeek(randomIndex, today))}`)


const userVsAvg = new Chart($('#user-vs-avg-steps'), {
    type: 'bar',
    data: {
      labels:['Your Steps', 'Avg User Steps'],
      datasets: [{
        label: 'Steps',
        data: [user.randomUser.dailyStepGoal, users.averageGoalSteps()],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          '#ef1de7',
          '#afff14'
        ],
        borderWidth: 1
      }]
    },
    options: {
     legend: { display: false,
       labels: {
         fontColor: "black",
         fontSize: 20
       }
     },
     title: {
       display: true,
       fontColor: 'black',
       text: 'You VS Everyone (steps)'
     },
     scales: {
       yAxes: [{
         ticks: {
          beginAtZero: true,
           fontColor: 'black',
           fontSize: 16
         }
       }],
       xAxes: [{
         ticks: {
          beginAtZero: true,
           fontColor: 'black',
           fontSize: 16
         }
       }],
     }
   }
});

const weeklyWaterIntake = new Chart($('#weekly-water-intake'), {
    type: 'line',
    data: {
        labels: Object.keys(hydro.userFluidsPerWeek(randomIndex, today)),
        datasets: [{
            label: 'Your Weekly Water Intake (fl Oz)',
            data: Object.values(hydro.userFluidsPerWeek(randomIndex, today)),
            backgroundColor: [                
            'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                '#afff14'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: { display: true,
       labels: {
         fontColor: "black",
         fontSize: 14
       }
     },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: 'black',
                }
            }],
            xAxes: [{
         ticks: {
          beginAtZero: true,
           fontColor: 'black',
           fontSize: 16
         }
       }],
        }
    }
});



})

