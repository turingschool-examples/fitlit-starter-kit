// Variables
let dynamicUser = Math.floor(Math.random() * (50 - 1 + 1)) + 1;

let userRepo = new UserRepo();
console.log('userRepo: ', userRepo)
let user = new User(dynamicUser)
let userStep = userRepo.averageStepGoal();
console.log('user: ', user)
let hydration = new Hydration(dynamicUser)
hydration.findHydrationData();
console.log('hydration: ', hydration)
let sleep = new Sleep(dynamicUser)
console.log(sleep)

// Event Listeners
// User Info
document.getElementById('userName').innerText = `Welcome ${user.userObj.name}!`;
document.getElementById('userAddress').innerText = user.userObj.address;
document.getElementById('userEmail').innerText = user.userObj.email;
document.getElementById('userStepGoal').innerText = `Daily Step Goal: ${user.userObj.dailyStepGoal}`;
document.getElementById('userStrideLength').innerText = `Stride Length ${user.userObj.strideLength}`;
document.getElementById('compStepGoal').innerText = `You: ${user.userObj.dailyStepGoal}`;
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