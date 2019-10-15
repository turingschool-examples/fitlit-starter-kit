$(document).ready(() => {
    currentDate = "2019/09/16"
    const userRepository = new UserRepository(userData);
    const randomId = Math.ceil(Math.random() * 50 - 1);
    userRepository.returnCurrentUser(randomId)
    const currentPerson = userRepository.currentUser
    console.log(currentPerson)
    const user = new User(currentPerson);
    const firstName = currentPerson.name.split(' ');
    const hydration = new Hydration(hydrationData, currentPerson.id);
    const sleep = new Sleep(sleepData, currentPerson.id, userData)
    const activity = new Activity(activityData, currentPerson.id, userData)
    console.log(activity)
    activity.findCurrentUserActivityData()
    console.log(hydration.findCurrentUserHydrationData());
    console.log(sleep.findCurrentUserSleepData())
    console.log(sleep.calculateHoursSleptEachDayByUserOverSpecificWeek())
    console.log(hydration.calculateAmtDrankByUserSpecificDate(currentDate))
    // console.log(sleep.returnHoursSleptByUserOnSpecificDate(currentDate)
    // console.log(calculateMilesUserWalkedOnSpecificDate(currentDate))




    $('.date').text(currentDate);
    $('.welcome-user').text(firstName[0]);
    $('.profile-name').text(currentPerson.name);
    $('.profile-address').text(currentPerson.address);
    $('.profile-email').text(currentPerson.email);
    $('.average-stepGoal').text(`Your Daily Step Goal was ${currentPerson.dailyStepGoal}, while everyone else was at ${userRepository.calculateAvgStepGoalAllUsers()}`);
    $('.hydration1').text(`Your water intake for the past day: ${hydration.calculateAmtDrankByUserSpecificDate(currentDate)} oz`);
    $('.hydration2').text(`Your water intake over each day of the last week: ${hydration.returnDrinkAmtEachDayOverWeekByUser().join(', ')} (oz)`);
    $('.sleep1').text(`Time spent sleeping for each night of the past week: ${sleep.calculateHoursSleptEachDayByUserOverSpecificWeek().join(', ')} (hours)`);
    $('.sleep2').text(`Your hours slept for the past day: ${sleep.returnHoursSleptByUserOnSpecificDate(currentDate)}`);
    $('.sleep3').text(`Your sleep quality today: ${sleep.returnSleepQualityByUserOnSpecificDate(currentDate)}`);
    $('.sleep4').text(`Your sleep quality over each night of the last week: ${sleep.calculateEachDaysSleepQualityForUserOverSpecificWeek().join(', ')} (hours)`);
    $('.sleep5').text(`Your average sleep quality: ${sleep.calculateAvgSleepQualityPerDayByUser()}`);
    $('.sleep6').text(`Your average hours of sleep per night: ${sleep.calculateAvgHoursSleptPerDayByUser()}`);
    $('.activity1').text(`Your number of steps traveled for the latest day: ${activity.returnNumberOfStepsForUserOnSpecificDate(currentDate)}`);
    $('.activity2').text(`The average number of steps completed by other users on the same date: ${activity.calculateAvgStepsTakenOnSpecificDateAllUsers(currentDate)}`);
    $('.activity3').text(`Your total activity for the latest day: ${activity.returnMinutesActiveByUserOnSpecificDate(currentDate)} minutes`);
    $('.activity4').text(`The average activity for other users on the same date: ${activity.calculateAvgMinutesActiveOnSpecificDateAllUsers(currentDate)} minutes`);
    $('.activity5').text(`Your total flights of stairs climbed for the latest day: ${activity.returnNumberOfStairsClimbedForUserOnSpecificDate(currentDate)}`);
    $('.activity6').text(`The average number of flights of stairs climbed for other users on the same date: ${activity.calculateAvgStairsClimbedOnSpecificDateAllUsers(currentDate)}`);
    $('.activity7').text(`Your total distance walked based on your stepcount for the latest day: ${activity.calculateMilesUserWalkedOnSpecificDate(currentDate)} miles`);
    $('.activity8').text(`Over the last week, you have averaged ${activity.calculateAvgMinutesActiveForUserOnSpecificWeek()} minutes of activity, ${activity.calculateAvgFlightsOfStairsClimbedForUserOnSpecificWeek()} flights of stairs, and ${activity.calculateAvgStepsTakenByUserOnSpecificWeek()} steps.`);
















    $(".sleep-btn").on('click', function() {
      $(".sleep-container").toggle()
    });

    $(".hydration-btn").on('click', function() {
      $(".hydration-container").toggle()
    });

    $(".activity-btn").on('click', function() {
      $(".activity-container").toggle()
    });

    $(".profile-btn").on('click', function() {
    });



    // $('#myChart').text(hydration.calculateAvgDailyAmtDrankByUserIdAllTime())
    //       var myChart = new Chart($('#myWeekChart'), {
    //           type: 'bar',
    //           data: {
    //               labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6","Day 7"],
    //               datasets: [{
    //                   label: 'Daily Amount Water For Week',
    //                   data: hydration.returnDrinkAmtEachDayOverWeekByUser(),
    //                   backgroundColor: [
    //                       'rgba(255, 99, 132, 0.2)',
    //                       'rgba(54, 162, 235, 0.2)',
    //                       'rgba(255, 206, 86, 0.2)',
    //                       'rgba(75, 192, 192, 0.2)',
    //                       'rgba(153, 102, 255, 0.2)',
    //                       'rgba(255, 159, 64, 0.2)'
    //                   ],
    //                   borderColor: [
    //                       'rgba(255,99,132,1)',
    //                       'rgba(54, 162, 235, 1)',
    //                       'rgba(255, 206, 86, 1)',
    //                       'rgba(75, 192, 192, 1)',
    //                       'rgba(153, 102, 255, 1)',
    //                       'rgba(255, 159, 64, 1)'
    //                   ],
    //                   borderWidth: 1
    //               }]
    //           },
    //           options: {
    //               scales: {
    //                   yAxes: [{
    //                       ticks: {
    //                           fontSize: 40
    //                         //   beginAtZero:true
    //                       }
    //                   }]
    //               }
    //           }
    //       });

    //     //   $('#myChart').text(hydration.calculateAvgDailyAmtDrankByUserIdAllTime(currentPerson.id))
    // var myChart = new Chart($('#myDayChart'), {
    //     // myChart.height(500);
    //           type: 'line',
    //           data: {
    //               labels: ["Day 1"],
    //               datasets: [{
    //                   label: 'Water Consumption For Day',
    //                   data: [5,6],
    //                   backgroundColor: [
    //                       'rgba(255, 99, 132, 0.2)',
    //                       'rgba(54, 162, 235, 0.2)',
    //                       'rgba(255, 206, 86, 0.2)',
    //                       'rgba(75, 192, 192, 0.2)',
    //                       'rgba(153, 102, 255, 0.2)',
    //                       'rgba(255, 159, 64, 0.2)'
    //                   ],
    //                   borderColor: [
    //                       'rgba(255,99,132,1)',
    //                       'rgba(54, 162, 235, 1)',
    //                       'rgba(255, 206, 86, 1)',
    //                       'rgba(75, 192, 192, 1)',
    //                       'rgba(153, 102, 255, 1)',
    //                       'rgba(255, 159, 64, 1)'
    //                   ],
    //                   borderWidth: 1
    //               }]
    //           },
    //           options: {
    //               scales: {
    //                   yAxes: [{
    //                       ticks: {
    //                           beginAtZero:true
    //                       }
    //                   }]
    //               }
    //           }
    //       });

})
