// Variables
// $.getScript("../data/users", function () {
//   alert("Script loaded but not necessarily executed.");
// })

let userRepo = new UserRepo('/data/users.js')
console.log(userRepo)
let user = new User(userRepo.returnUserData(userRepo.usersData, 1))

// Event Listeners

// Functions



// $(document).ready(() => {
//   displayUserName()
//   // startClock()
//   // $btnUpdateRange.attr('disabled', 'disbaled')
//   // $('.tagline').fadeIn(1000)
// })



const displayUserName = () => {
  console.log(user.returnUserFirstName())
}