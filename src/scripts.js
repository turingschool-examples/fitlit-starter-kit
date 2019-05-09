// Variables
let dynamicUser = Math.floor(Math.random() * (50 - 1 + 1)) + 1;

let userRepo = new UserRepo()
console.log('userRepo: ', userRepo)
let user = new User(dynamicUser)
console.log('user: ', user)
let hydration = new Hydration(dynamicUser)
console.log('hydration: ', hydration)
let sleep = new Sleep(dynamicUser)
console.log(sleep)

// Event Listeners

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