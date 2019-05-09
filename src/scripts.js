// Variables

let userRepo = new UserRepo();
console.log('userRepo: ', userRepo)
let userStep = userRepo.averageStepGoal();
let user = new User(1)
console.log('user: ', user)
let hydration = new Hydration(1);
hydration.findHydrationData();
console.log('hydration: ', hydration)
let sleep = new Sleep(1)
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