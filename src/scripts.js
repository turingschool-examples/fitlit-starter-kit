let randomId = Math.floor(Math.random() * 50 + 1)
let userRepository = new UserRepository(userData, randomId)
let user = new User(userRepository.getUserData())
let hydration = new Hydration(hydrationData, "2019/06/15")
let sleepRepository = new SleepRepository(sleepData, randomId)
let currentUser = userRepository.getUserData()

const options = {
    title: {
        display: true,
        text: 'User Hydration'
    },
    responsive: true,
    maintainAspectRatio: false,
}

$(document).ready(() => {
 
$("#user-name__display").text(user.getFirstName())
$("#user-full-name__display").text(user.name)
$("#user-address__display").text(user.address)
$("#user-email__display").text(user.email)
$("#user-daily-step-goal__display").text(user.dailyStepGoal)
var weeklyWaterChart = $('#weeklyWaterChart');
var myWaterChart = new Chart(weeklyWaterChart, {
    type: 'polarArea',
    data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [{
            label: "Water Drank (ounces)",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "pink", "orange"],
            data: hydration.getWeeklyOunces()
        }]
    },
    options
});
myWaterChart.canvas.parentNode.style.height = '300px';
myWaterChart.canvas.parentNode.style.width = '300px';

});