// Variables

let userRepo = new UserRepo()
console.log('userRepo: ', userRepo)
let user = new User(1)
console.log('user: ', user)
let hydration = new Hydration(1)
console.log('hydration: ', hydration)
let sleep = new Sleep(1)
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