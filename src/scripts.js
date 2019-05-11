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
let weekSleep = sleep.hoursSleptGivenWeek("10/05/2019")
console.log(weekSleep)
let weekQualSleep = sleep.sleepQualityGivenWeek("10/05/2019")
console.log(weekQualSleep)
let alltimeHoursSleep = sleep.averageSleepHoursAllTime()
console.log(alltimeHoursSleep)
let alltimeQualSleep = sleep.averageSleepQualAllTime()

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
// user hydration
document.getElementById('userWater').innerText = `You have consumed ${dayHydration} ounces today.`;
document.getElementById('waterWeek').innerText = `You have consumed ${weekHydration} ounces this week.`;

// user sleep

// days
document.getElementById('user-sleep-hour-today').innerText = `You slept ${daySleep} hours today.`;
document.getElementById('user-sleep-qual-today').innerText = `Your quality of sleep today was ${qualitySleep}`;
// document.getElementById('sleep-week').innerText = `You slept ${weekSleep} hours this week.`;
// document.getElementById('user-sleep-qual-all').innerText = `Your sleep quality this week was ${alltimeQualSleep}`;

// week
let sleepQual = document.getElementById('qual-slept-week-chart').getContext('2d');
// console.log(weekSleep[0].hoursSlept)
var sleepHours = document.getElementById('hours-slept-week-chart').getContext('2d');

// all time
document.getElementById('user-sleep-hours-all').innerText = `Your average hours of sleep per night all time is ${alltimeHoursSleep}`;
document.getElementById('user-sleep-qual-all').innerText = `Your average quality of sleep per night all time is ${alltimeQualSleep}`;



// Hydration Info


// Functions



// $(document).ready(() => {
//   displayUserName()
//   // startClock()
//   // $btnUpdateRange.attr('disabled', 'disbaled')
//   // $('.tagline').fadeIn(1000)
// })



let hoursSleptChart = new Chart(sleepHours, {
  type: 'bar',
  data: {
    labels: [`${(weekSleep[0].date)}`, `${(weekSleep[1].date)}`, `${(weekSleep[2].date)}`, `${(weekSleep[3].date)}`, `${(weekSleep[4].date)}`, `${(weekSleep[5].date)}`, `${(weekSleep[6].date)}`],
    datasets: [{
      label: '#hours slept',
      data: [(weekSleep[0].hoursSlept), (weekSleep[1].hoursSlept), (weekSleep[2].hoursSlept), (weekSleep[3].hoursSlept), (weekSleep[4].hoursSlept), (weekSleep[5].hoursSlept), (weekSleep[6].hoursSlept)],
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

var sleepQualityChart = new Chart(sleepQual, {
  type: 'bar',
  data: {
    labels: [`${(weekQualSleep[0].date)}`, `${(weekQualSleep[1].date)}`, `${(weekQualSleep[2].date)}`, `${(weekQualSleep[3].date)}`, `${(weekQualSleep[4].date)}`, `${(weekQualSleep[5].date)}`, `${(weekQualSleep[6].date)}`],
    datasets: [{
      label: '#hours slept',
      data: [(weekQualSleep[0].quality), (weekQualSleep[1].quality), (weekQualSleep[2].quality), (weekQualSleep[3].quality), (weekQualSleep[4].quality), (weekQualSleep[5].quality), (weekQualSleep[6].quality)],
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