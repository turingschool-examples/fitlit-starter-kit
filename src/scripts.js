let randomId = Math.floor(Math.random() * 50 + 1)
let userRepository = new UserRepository(userData, randomId)
let user = new User(userRepository.getUserData())
let hydration = new Hydration(hydrationData)
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
var userDailyStepGoal = $("#user-daily-step-goal__display")
var waterDisplay = $("#daily-water__display")
userDailyStepGoal.text(user.dailyStepGoal)
waterDisplay.text(hydration.getDailyOunces(randomId))
var dateSubmitBtn = $("#submit-date__button")
dateSubmitBtn.on("click", getWaterData)
function getWaterData() {
    let date = $('#date-calendar').val()
    let formattedDate = date.replace(/-/gi, "/")
    waterDisplay.text(hydration.getDailyOunces(randomId, formattedDate))
}
var weeklyWaterChart = $('#weeklyWaterChart');
var myWaterChart = new Chart(weeklyWaterChart, {
    type: 'polarArea',
    data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [{
            label: "Water Drank (ounces)",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#6BBFC3", "#e8c3b9", "#c45850", "pink", "orange"],
            data: hydration.getWeeklyOunces(randomId)
        }]
    },
    options
});
myWaterChart.canvas.parentNode.style.height = '300px';
myWaterChart.canvas.parentNode.style.width = '300px';
});