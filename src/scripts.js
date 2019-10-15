$(document).ready(() => {
    currentDate = "2019/09/16"
    const userRepository = new UserRepository(userData);
    const randomId = Math.ceil(Math.random() * 50 - 1);
    console.log(randomId)
    userRepository.returnCurrentUser(randomId)
    const currentPerson = userRepository.currentUser
    const currentPersonFriends = userRepository.returnCurrentUserFriends()
    console.log(currentPersonFriends)
    console.log(currentPerson)
    const user = new User(currentPerson);
    const firstName = currentPerson.name.split(' ');
    const hydration = new Hydration(hydrationData, currentPerson.id);
    hydration.findCurrentUserHydrationData()
    const sleep = new Sleep(sleepData, currentPerson.id, userData)
    sleep.findCurrentUserSleepData()
    const activity = new Activity(activityData, currentPerson.id, userData)
    activity.findCurrentUserActivityData()
    const friend1EntireData = activity.findFriend1ActivityData(currentPersonFriends);
    const friend2EntireData = activity.findFriend2ActivityData(currentPersonFriends);
    const friend3EntireData = activity.findFriend3ActivityData(currentPersonFriends);
    const friend1WeekData = activity.friendsStepCountForWeek()
    console.log(friend1EntireData[0].userID)
    const friend1Data = userData.find(user => {
        return friend1EntireData[0].userID === user.id
    })
    const friend2Data = userData.find(user => {
        return friend2EntireData[1].userID === user.id
    })
    // const friend3Data = userData.find(user => {
    //     return friend3EntireData[2].userID === user.id
    // })
    const friend1Name = friend1Data.name;
    const friend2Name = friend2Data.name;
// const friend3Name = friend3Data.name;
    
    
    const friend2WeekData = activity.friend2StepCountForWeek()
    const friend3WeekData = activity.friend3StepCountForWeek()
    const userStepCountDataForWeek = activity.userStepCountForWeek()
    console.log(userStepCountDataForWeek)
    console.log(activity.findHighestStepCount())
    const highestWeekStepsDisplay = activity.findHighestStepCount()
    console.log(activity.increasingStepsFor3OrMoreDays())



    $('.date').text(currentDate);
    $('.welcome-user').text(firstName[0]);
    $('.profile-name').text(currentPerson.name);
    $('.profile-address').text(currentPerson.address);
    $('.profile-email').text(currentPerson.email);
    $('.average-stepGoal').text(`Your Daily Step Goal was ${currentPerson.dailyStepGoal}, while everyone else was at ${userRepository.calculateAvgStepGoalAllUsers()}`);
    $('.hydration1').text(`Your water intake for the day has been: ${hydration.calculateAmtDrankByUserSpecificDate(currentDate)} oz`);
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
    $('.friend1').text(`${friend1Name} took ${friend1WeekData} steps this week!`)
    $('.friend2').text(`${friend2Name} took ${friend2WeekData} steps this week!`)
    // $('.friend3').text(`${friend3Name} took ${friend3WeekData} steps this week!`)
    $(".currentUserActivity").text(`You took ${userStepCountDataForWeek} steps this week!`)
    $(".winnerActivity").text(highestWeekStepsDisplay)




    $(".sleep-btn").on('click', function() {
        $(".sleep-container").toggle()
        $(".hydration-container").hide()
        $(".activity-container").hide()
    });

    $(".hydration-btn").on('click', function() {
        $(".hydration-container").toggle()
        $(".activity-container").hide()
        $(".sleep-container").hide()
    });

    $(".activity-btn").on('click', function() {
        $(".activity-container").toggle()
        $(".hydration-container").hide()
        $(".sleep-container").hide()
    });

    $(".profile-btn").on('click', function () {
        $(".profile-container").toggle()
    });

    $(".friends-btn").on('click', function () {
        $(".friends-container").toggle() 
    });

});
