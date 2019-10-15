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
    $('.sleep1').text(`Your was hours slept each day over past week was${sleep.calculateHoursSleptEachDayByUserOverSpecificWeek()}`);
    $('.hydration1').text(`Your water intake today was ${hydration.calculateAmtDrankByUserSpecificDate(currentDate)} oz of water`);
    $('.hydration2').text(`Your water intake over the last week was ${hydration.returnDrinkAmtEachDayOverWeekByUser()} oz of water`);
    $('.sleep2').text(`Your hours slept today ${sleep.returnHoursSleptByUserOnSpecificDate(currentDate)}`);
    $('.sleep3').text(`Your sleep quality today ${sleep.returnSleepQualityByUserOnSpecificDate(currentDate)}`);
    $('.sleep4').text(`Your sleep quality over the last week was ${sleep.calculateEachDaysSleepQualityForUserOverSpecificWeek()}`);
    $('.sleep5').text(`Your all time average sleep quality was ${sleep.calculateAvgSleepQualityPerDayByUser()}`);
    $('.sleep6').text(`Your all time average of hours slept has been ${sleep.calculateAvgHoursSleptPerDayByUser()}`);
    $('.activity1').text(`Your distance traveled in miles based on your stepcount for the latest day was ${activity.calculateMilesUserWalkedOnSpecificDate(currentDate)}`);




    

    






    $(".sleep-btn").click(function () {
    });

    $(".hydration-btn").click(function () {
    });

    $(".activity-btn").click(function () {
    });

    $(".profile-btn").click(function () {
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
