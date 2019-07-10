
let randomId = Math.floor(Math.random() * 50 + 1)
let userRepository = new UserRepository(userData, randomId)
let user = new User(userRepository.getUserData())
let hydration = new Hydration(hydrationData)
let activityRepository = new ActivityRepository(userData, randomId)
let activity = new Activity(userData, activityData)
let sleepRepository = new SleepRepository(sleepData, randomId)
let sleep = new Sleep(sleepRepository.getUserData(), findTodaysDate())
let currentUser = userRepository.getUserData()
let date 
let formattedDate 
let minutesActiveMethod = []
let stairsClimbedMethod = []
let stepCountMethod = []

function findTodaysDate () {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();

  today = yyyy + '/' + mm + '/' + dd;

  return `${today}`
}




$(document).ready(() => {


  /** Packery **/ 
  $('.grid').packery({
    // options
    itemSelector: '.grid-item',
    gutter: 10,
    percentPosition: true,
    columnWidth: 100,
  });

  var $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    columnWidth: 100
  });
  var $draggable = $('.draggable').draggabilly({
    // options...
  })
  $draggable.draggabilly('enable')

  $grid.find('.grid-item').each(function (i, gridItem) {
    var draggie = new Draggabilly(gridItem);
    $grid.packery('bindDraggabillyEvents', draggie)
  });

  // var $items = $grid.find('.grid-item').draggable();
  // $grid.packery('bindUIDraggableEvents', $items);


  /** User Information Display **/ 
  $("#user-name__display").text(user.getFirstName())
  $("#user-full-name__display").text(user.name)
  $("#user-address__display").text(user.address)
  $("#user-email__display").text(user.email)
  date = $('#date-calendar').val()
  formattedDate = date.replace(/-/gi, "/")
  var dateSubmitBtn = $("#submit-date__button")
  minutesActiveMethod = activity.getWeeklyMinutesActive(randomId, formattedDate);
  stairsClimbedMethod = activity.getWeeklyStairsClimbed(randomId, formattedDate);
  stepCountMethod = activity.getWeeklyStepCount(randomId, formattedDate)

  /** Hydration **/ 
  dateSubmitBtn.on("click", updateHydrationByDate)

  var waterDisplay = $("#daily-water__display")
  waterDisplay.text(hydration.getDailyOunces(randomId, formattedDate))

  function updateHydrationByDate() {
    date = $('#date-calendar').val()
    formattedDate = date.replace(/-/gi, "/")
    waterDisplay.text(hydration.getDailyOunces(randomId, formattedDate))
  }

  /** Activity **/ 
  let userDailyStepGoal = $("#user-daily-step-goal__display");
  userDailyStepGoal.text(user.dailyStepGoal);
  let stepCount = $('[id=step-count__display]');
  stepCount.text(activity.dailyStepCount(randomId, formattedDate));
  let minutesActive = $('[id=minutes-active__display]');
  minutesActive.text(activity.getDailyMinutesActive(randomId, formattedDate));
  let milesWalked = $('#miles-walked__display');
  milesWalked.text(activity.calculateMiles(randomId, formattedDate));
  let flightsClimbed = $('#stairs-climbed__display');
  flightsClimbed.text(activity.getUserStairClimb(randomId));
  let allUserSteps = $('#all-user-step-count');
  allUserSteps.text(activity.getAllUsersStepsAverage(formattedDate));
  let allUserStairs = $('#all-user-stair-count');
  allUserStairs.text(activity.getAllUsersStairClimbingAverage(formattedDate));
  let allUserMinutesActive = $('#all-user-minutes-active');
  allUserMinutesActive.text(activity.getAllUsersMinutesActiveAverage(formattedDate));

  dateSubmitBtn.on("click", updateByDate)

  function updateByDate(e) {
    date = $('#date-calendar').val()
    formattedDate = date.replace(/-/gi, "/")
    myMinutesActiveChart.data.datasets[0].data = activity.getWeeklyMinutesActive(randomId, formattedDate)
    myMinutesActiveChart.update()
    myStairsClimbedWeeklyChart.data.datasets[0].data = activity.getWeeklyStairsClimbed(randomId, formattedDate)
    myStairsClimbedWeeklyChart.update()
    myStepCountChart.data.datasets[0].data = activity.getWeeklyStepCount(randomId, formattedDate)
    myStepCountChart.update()
  }

  /** Charts **/ 

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
    options: options = {
      title: {
        display: true,
        text: 'Your Water Intake'
      },
      responsive: true,
      maintainAspectRatio: false,
    }
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
        data: minutesActiveMethod
      }]
    },
    options: options = {
      title: {
        display: true,
        text: 'Todays Minutes Active'
      },
      responsive: true,
      maintainAspectRatio: false,
    }
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
        data: stairsClimbedMethod
      }]
    },
    options: options = {
      title: {
        display: true,
        text: 'Your Weekly Stair Climbs'
      },
      responsive: true,
      maintainAspectRatio: false,
    }
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
        data: stepCountMethod
      }]
    },
    options: options = {
      title: {
        display: true,
        text: 'Your Weekly Step Count'
      },
      responsive: true,
      maintainAspectRatio: false,
    }
  });
  myStepCountChart.canvas.parentNode.style.height = '300px';
  myStepCountChart.canvas.parentNode.style.width = '300px';
});

//Sleep hours and quality chart//

const sleepCanvas = $('#sleep-hours-quality__display');
let sleepHourQuality = new Chart(sleepCanvas, {
  type: 'bar',
  data: {
    labels: ['Hours Slept', 'Sleep Quality'],
    datasets: [{
      label: 'Sleep Hours and Quality',
      data: [sleep.getHoursPerDay(), sleep.getQualityPerDay()],
      backgroundColor: [
        'rgba(50, 205, 50, .25)',
        'rgba(255, 99, 132, .25)',
      ],
      borderColor: [
        'rgba(34, 139, 34)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
})