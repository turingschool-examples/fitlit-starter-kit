// Variables
let dynamicUser = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var dt = new Date();

let userRepo = new UserRepo();
console.log('userRepo: ', userRepo)
let user = new User(dynamicUser)
let userStep = userRepo.averageStepGoal();
console.log('user: ', user)
let hydration = new Hydration()
let dayHydration = hydration.amountHydratedByDay("10/05/2019");
let weekHydration = hydration.waterForWeek("10/05/2019")
console.log(weekHydration)
console.log('hydration: ', hydration)
let sleep = new Sleep()
console.log(sleep)
var dt = new Date(); 

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
document.getElementById('userWater').innerText = `You have consumed ${dayHydration} ounces today.`;
document.getElementById('waterWeek').innerText = `You have consumed ${weekHydration} ounces this week.`;

// Hydration Info

// Functions



$(document).ready(() => {
  displayUserName()
  // startClock()
  // $btnUpdateRange.attr('disabled', 'disbaled')
  // $('.tagline').fadeIn(1000)
})

var ctx = document.getElementById('myChart').getContext('2d');

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


const displayUserName = () => {
  
  console.log(user.returnUserFirstName())
}