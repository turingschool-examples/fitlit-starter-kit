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
document.getElementById('userName').innerText = `Welcome ${user.userData.name}!`;
document.getElementById('userAddress').innerText = user.userData.address;
document.getElementById('userEmail').innerText = user.userData.email;
document.getElementById('userStepGoal').innerText = `Daily Step Goal: ${user.userData.dailyStepGoal}`;
document.getElementById('userStrideLength').innerText = `Stride Length ${user.userData.strideLength}`;
document.getElementById('compStepGoal').innerText = `You: ${user.userData.dailyStepGoal}`;
document.getElementById('compTheirStepGoal').innerText = `Them: ${userStep}`;
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