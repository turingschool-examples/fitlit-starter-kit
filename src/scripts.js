// Variables
let dynamicUser = Math.floor(Math.random() * (50 - 1 + 1)) + 1;

let userRepo = new UserRepo();
console.log('userRepo: ', userRepo)
let user = new User(dynamicUser)
let userStep = userRepo.averageStepGoal();
console.log('user: ', user)
let hydration = new Hydration()
hydration.findHydrationData();
console.log('hydration: ', hydration)
let sleep = new Sleep()
console.log(sleep)

// Event Listeners
// User Info
document.getElementById('userName').innerText = `Welcome ${user.user.name}!`;
document.getElementById('userAddress').innerText = user.user.address;
document.getElementById('userEmail').innerText = user.user.email;
document.getElementById('userStepGoal').innerText = `Daily Step Goal: ${user.user.dailyStepGoal}`;
document.getElementById('userStrideLength').innerText = `Stride Length ${user.user.strideLength}`;
document.getElementById('compStepGoal').innerText = `You: ${user.user.dailyStepGoal}`;
document.getElementById('compTheirStepGoal').innerText = `Them: ${userStep}`;
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