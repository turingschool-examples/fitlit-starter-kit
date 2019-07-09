let randomId = Math.floor(Math.random() * 50 + 1)
let userRepository = new UserRepository(userData, randomId)
let user = new User(userRepository.getUserData())
let hydration = new Hydration(hydrationData)
let activityRepository = new ActivityRepository(userData, randomId)
let activity = new Activity(userData, activityData)
let sleepRepository = new SleepRepository(sleepData, randomId)
let currentUser = userRepository.getUserData()
let date = $('#date-calendar').val()
let formattedDate = date.replace(/-/gi, "/")

$(document).ready(() => {
/** User Information Display **/ 
$("#user-name__display").text(user.getFirstName())
$("#user-full-name__display").text(user.name)
$("#user-address__display").text(user.address)
$("#user-email__display").text(user.email)
var dateSubmitBtn = $("#submit-date__button")

/** Hydration **/ 
dateSubmitBtn.on("click", updateHydrationByDate)

var waterDisplay = $("#daily-water__display")
waterDisplay.text(hydration.getDailyOunces(randomId, formattedDate))

function updateHydrationByDate() {
    let date = $('#date-calendar').val()
    let formattedDate = date.replace(/-/gi, "/")
    waterDisplay.text(hydration.getDailyOunces(randomId, formattedDate))
}

/** Activity **/ 
var userDailyStepGoal = $("#user-daily-step-goal__display");
userDailyStepGoal.text(user.dailyStepGoal);
var stepCount = $('[id=step-count__display]');
stepCount.text(activity.dailyStepCount(randomId, formattedDate));
var minutesActive = $('[id=minutes-active__display]');
minutesActive.text(activity.getDailyMinutesActive(randomId, formattedDate));
var milesWalked = $('#miles-walked__display');
milesWalked.text(activity.calculateMiles(randomId, formattedDate));
var flightsClimbed = $('#stairs-climbed__display');
flightsClimbed.text(activity.getUserStairClimb(randomId));
var allUserSteps = $('#all-user-step-count');
allUserSteps.text(activity.getAllUsersStepsAverage(formattedDate));
var allUserStairs = $('#all-user-stair-count');
allUserStairs.text(activity.getAllUsersStairClimbingAverage(formattedDate));
var allUserMinutesActive = $('#all-user-minutes-active');
allUserMinutesActive.text(activity.getAllUsersMinutesActiveAverage(formattedDate));

dateSubmitBtn.on("click", updateActivityByDate)
function updateActivityByDate(chart) {
    let date = $('#date-calendar').val()
    let myFormattedDate = date.replace(/-/gi, "/")
    minutesActiveChart.data = activity.getWeeklyMinutesActive(randomId, myFormattedDate)
    console.log(minutesActiveChart.data)
}

/** Charts **/ 
const options = {
    title: {
        display: true,
        text: 'Data'
    },
    responsive: true,
    maintainAspectRatio: false,
}
// Water Chart
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

// Minutes Active Weekly Chart
var minutesActiveChart = $('#minutes-active-weekly__display');
var myMinutesActiveChart = new Chart(minutesActiveChart, {
    type: 'bar',
    data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [{
            label: "Minutes Active",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#6BBFC3", "#e8c3b9", "#c45850", "pink", "orange"],
            data: activity.getWeeklyMinutesActive(randomId, formattedDate)
        }]
    },
    options
});
myMinutesActiveChart.canvas.parentNode.style.height = '300px';
myMinutesActiveChart.canvas.parentNode.style.width = '300px';

// Stairs Climbed Weekly Chart
var stairsClimbedWeeklyChart = $('#stairs-climbed-weekly__display');
var myStairsClimbedWeeklyChart = new Chart(stairsClimbedWeeklyChart, {
    type: 'bar',
    data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [{
            label: "Stairs Climbed",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#6BBFC3", "#e8c3b9", "#c45850", "pink", "orange"],
            data: activity.getWeeklyStairsClimbed(randomId, formattedDate)
        }]
    },
    options
});
myStairsClimbedWeeklyChart.canvas.parentNode.style.height = '300px';
myStairsClimbedWeeklyChart.canvas.parentNode.style.width = '300px';

// Step Count Weekly Chart
var stepCountChart = $('#step-count-weekly__display');
var myStepCountChart = new Chart(stepCountChart, {
    type: 'bar',
    data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [{
            label: "Step Count",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#6BBFC3", "#e8c3b9", "#c45850", "pink", "orange"],
            data: activity.getWeeklyStepCount(randomId, formattedDate)
        }]
    },
    options
});
myStepCountChart.canvas.parentNode.style.height = '300px';
myStepCountChart.canvas.parentNode.style.width = '300px';
});