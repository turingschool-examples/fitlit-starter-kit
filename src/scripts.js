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
console.log('hydration: ', hydration)
let sleep = new Sleep()
let daySleep = sleep.hoursSleptOnDay("10/05/2019");
let qualitySleep = sleep.qualityOnDay("10/05/2019");
let weekSleep = sleep.hoursSleptGivenWeek("10/05/2019")
let weekQualSleep = sleep.sleepQualityGivenWeek("10/05/2019")
let alltimeHoursSleep = sleep.averageSleepHoursAllTime("10/05/2019")
let alltimeQualSleep = sleep.averageSleepQualAllTime("10/05/2019")

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
document.getElementById('userSleep').innerText = `You slept ${daySleep} hours today.`;
document.getElementById('userSleepQual').innerText = `Your quality of sleep today was ${qualitySleep}`;
document.getElementById('sleepWeek').innerText = `You slept ${weekSleep} hours this week.`;
document.getElementById('sleepQualWeek').innerText = `Your sleep quality this week was ${weekSleep}`;
document.getElementById('userSleepHoursAll').innerText = `Your average hours of sleep per night all time is ${alltimeHoursSleep}`;
document.getElementById('userSleepQualAll').innerText = `Your average quality of sleep per night all time is ${alltimeQualSleep}`;
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