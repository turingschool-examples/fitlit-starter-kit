// Variables
let dynamicUser = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var dt = new Date();

// instantiations

let userRepo = new UserRepo();
let user = new User(dynamicUser)
let hydration = new Hydration()
let sleep = new Sleep()
var dt = new Date();

// methods called

hydration.findHydrationData();
let userStep = userRepo.averageStepGoal();


console.log('user: ', user)
console.log('userRepo: ', userRepo)
console.log('hydration: ', hydration)
console.log('sleep: ', sleep)


const sleepWeek = sleep.hoursSleptGivenWeek('06/05/2019')
let dayHydration = hydration.amountHydratedByDay("10/05/2019");
let weekHydration = hydration.waterForWeek("10/05/2019")
console.log('hydration: ', hydration)
let daySleep = sleep.hoursSleptOnDay("10/05/2019");
let qualitySleep = sleep.qualityOnDay("10/05/2019");
// let weekSleep = sleep.hoursSleptGivenWeek("10/05/2019")
let weekQualSleep = sleep.sleepQualityGivenWeek("10/05/2019")
let alltimeHoursSleep = sleep.averageSleepHoursAllTime("10/05/2019")
let alltimeQualSleep = sleep.averageSleepQualAllTime("10/05/2019")

document.getElementById("datetime").innerHTML = dt.toLocaleDateString();


// Event Listeners
document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"/"+ (("0"+(dt.getMonth()+1)).slice(-2)) +"/"+ (dt.getFullYear());
// User Info
document.getElementById('userName').innerText = `Welcome ${user.user.name}!`;
document.getElementById('userAddress').innerText = user.user.address;
document.getElementById('userEmail').innerText = user.user.email;
document.getElementById('userStepGoal').innerText = `Daily Step Goal: ${user.user.dailyStepGoal}`;
document.getElementById('userStrideLength').innerText = `Stride Length ${user.user.strideLength}`;
document.getElementById('compStepGoal').innerText = `You: ${user.user.dailyStepGoal}`;
document.getElementById('compTheirStepGoal').innerText = `Them: ${userStep}`;

document.getElementById('userWater').innerText = `You have consumed ${dayHydration} ounces today.`;
document.getElementById('waterWeek').innerText = `You have consumed ${weekHydration} ounces this week.`;
document.getElementById('userSleep').innerText = `You slept ${daySleep} hours today.`;
document.getElementById('userSleepQual').innerText = `Your quality of sleep today was ${qualitySleep}`;
document.getElementById('sleepWeek').innerText = `You slept ${weekSleep} hours this week.`;
document.getElementById('sleepQualWeek').innerText = `Your sleep quality this week was ${weekSleep}`;
document.getElementById('userSleepHoursAll').innerText = `Your average hours of sleep per night all time is ${alltimeHoursSleep}`;
document.getElementById('userSleepQualAll').innerText = `Your average quality of sleep per night all time is ${alltimeQualSleep}`;

// Hydration Info


// Functions



// $(document).ready(() => {
//   displayUserName()
//   // startClock()
//   // $btnUpdateRange.attr('disabled', 'disbaled')
//   // $('.tagline').fadeIn(1000)
// })

let ctx = document.getElementById('myChart').getContext('2d');
console.log(sleepWeek[0].hoursSlept)
var sleepHours = document.getElementById('hours-slept-chart').getContext('2d');

let hoursSleptChart = new Chart(sleepHours, {
  type: 'bar',
  data: {
    labels: [`${(sleepWeek[0].date)}`, `${(sleepWeek[1].date)}`, `${(sleepWeek[2].date)}`, `${(sleepWeek[3].date)}`, `${(sleepWeek[4].date)}`, `${(sleepWeek[5].date)}`, `${(sleepWeek[6].date)}`],
    datasets: [{
      label: '#hours slept',
      data: [(sleepWeek[0].hoursSlept), (sleepWeek[1].hoursSlept), (sleepWeek[2].hoursSlept), (sleepWeek[3].hoursSlept), (sleepWeek[4].hoursSlept), (sleepWeek[5].hoursSlept), (sleepWeek[6].hoursSlept)],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});


// const displayUserName = () => {
  
//   console.log(user.returnUserFirstName())
// }