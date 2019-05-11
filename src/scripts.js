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



const displayUserName = () => {
  
  console.log(user.returnUserFirstName())
}