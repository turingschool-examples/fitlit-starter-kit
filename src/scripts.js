// const fakeHydration = require('../fakeData/fakeHydration');
// const fakeUsers = require('../fakeData/fakeUsers');

let randomId = Math.floor(Math.random() * 50 + 1)

let userRepository = new UserRepository(userData, randomId)
let user = new User(userRepository.getUserData())
let hydration = new Hydration(hydrationData, "2019/06/15")

let currentUser = userRepository.getUserData()

const options = {
    title: {
        display: true,
        text: 'User Hydration'
    }
}

console.log(hydration.getWeeklyOunces())

$(document).ready(() => {
 
$("#user-name__display").text(user.getFirstName())
$("#user-full-name__display").text(user.name)
$("#user-address__display").text(user.address)
$("#user-email__display").text(user.email)
$("#user-daily-step-goal__display").text(user.dailyStepGoal)
var weeklyWaterIntake = $('#weeklyWaterChart');
var myWeeklyWaterChart = new Chart(weeklyWaterIntake, {
    type: 'polarArea',
    data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [{
            label: "Amount of Water Drank (ounces)",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "pink", "orange"],
            data: hydration.getWeeklyOunces()
        }]
    },
    options: options
});
// var dailyWaterIntake = $('#dailyWaterChart');
// var myDailyWaterChart = new Chart(dailyWaterIntake, {
//     type: 'bar',
//     data: {
//         labels: [],
//         datasets: [{
//             label: "Amount of Water Drank (ounces)",
//             backgroundColor: ["yellow", "red", "orange"],
//             data: hydration.getDailyOunces();
//         }]
//     },
//     options: options
// })
});