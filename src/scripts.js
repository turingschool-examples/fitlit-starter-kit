const data = {
  users: userData,
  hydration: hydrationData,
  sleep: sleepData,
  activity: activityData
}

const userRepository = new UserRepository(data);
userRepository.findToday();
let user;
let sleep;
let hydration;
let activity;

$(document).ready(function() {

  // LOG IN FUNCTIONALLITY
  $('.login button').on('click', function() {
    $('.login-header, .page-header, .empty-board').fadeToggle(100);
    $('.board').css('display', 'flex');
    createUser();
    fillUserInfo();
    getFriends();
    setChallengeWidget();
    showHydration();
    showSleep();
    showActivity();
  });

  // LOG OUT FUNCTIONALLITY
  $('.log-out').on('click', function() {
    location.reload();
  });

  // BIO INFO SHOWING
  $('.bio-info').on('click', function () {
    $('.bio-info main').fadeToggle();
  });

  // STEP GOAL SHOWING
  $('.steps-goal footer p').on('click', function() {
    $('.steps-goal .average').fadeToggle();
    $(this).text($(this).text() === 'see average' ? 'close' : 'see average');
  });

  function createUser() {
    const $nameGiven = `${$('.first-name').val()} ${$('.last-name').val()}`;
    const $currentUser = userRepository.findUserByName($nameGiven);
    user = new User($currentUser);
    hydration = new Hydration(userRepository);
  }

  $('.compare').on('click', function() {
    $value = $(this).parents('.widget').find('header .dropdown input').val();
    $('.compare-block').fadeToggle();
    $(this).text($(this).text() === 'compare with others' ? 'close' : 'compare with others');
    const $data = getActivityInfo($value)
    updateAllUserActivity($data);
  });

  function getActivityInfo(value) {
    let $data = {};
    switch (value) {
      case 'Today':
        $data.steps = userRepository.findAverageActivityValueForToday('numSteps');
        $data.flights = userRepository.findAverageActivityValueForToday('flightsOfStairs');
        $data.mins = userRepository.findAverageActivityValueForToday('minutesActive');
        break;
      case 'All time':
        $data.steps = userRepository.findAverageActivityValue('numSteps');
        $data.flights = userRepository.findAverageActivityValue('flightsOfStairs');
        $data.mins = userRepository.findAverageActivityValue('minutesActive');
        break;
    }
    return $data;
  }

  function updateAllUserActivity(data) {
    $('.compare-block .steps').text(data.steps);
    $('.compare-block .flights').text(data.flights);
    $('.compare-block .mins').text(data.mins);
  }

  function fillUserInfo() {
    $('.page-header header h2').text(user.getFirstName());
    $('.info .name').text(user.name);
    $('.info .email').text(user.email);
    $('.info .address').text(user.address);
    $('.body .step').text(`${user.strideLength} feet`);
    $('.steps-goal .goal').text(user.dailyStepGoal);
    $('.steps-goal .average-goal').text(userRepository.calculateAverageStepGoal());
  }

  function getFriends() {
    const $friends = user.findFriends(userRepository);
    $friends.forEach(friend => {
      $('.friend-names').append(`
      <h5>${friend.name}</h5>
      <p>step goal: ${friend.dailyStepGoal}</p>`);
    })
  }

  // function showStepComp() {
  //   activity = new Activity(userRepository);
  //   activity.getWeekTotal(userRepository.activityData, );
  // }

  function setChallengeWidget() {
    const $challengeFriends = user.findFriends(userRepository);
    let activityNew = new Activity(userRepository);
    let friendOneAmount = activityNew.getWeekTotal(userRepository.activityUsersData, $challengeFriends[0].id);
    let friendTwoAmount = activityNew.getWeekTotal(userRepository.activityUsersData, $challengeFriends[1].id);
    let youChallengerAmount = activityNew.getWeekTotal(userRepository.activityUsersData, user.id);
    let winner = activityNew.findStepWinner(youChallengerAmount, $challengeFriends[0].name, friendOneAmount, $challengeFriends[1].name, friendTwoAmount)
    $('.friend1-challenge').text($challengeFriends[0].name);
    $('.friend2-challenge').text($challengeFriends[1].name);
    $('.friend1-challenge-steps').text(friendOneAmount);
    $('.friend2-challenge-steps').text(friendTwoAmount);
    $('.you-challenge-steps').text(youChallengerAmount);
    $('.step-winner').text(winner);

  }

  function showHydration() {
    hydration.findDayFluid(userRepository.hydrationUsersData)
    hydration.findWeeksFluid(userRepository.hydrationUsersData);
    $('.current-hydro').text(hydration.numOunces);
  }

  function showSleep() {
    sleep = new Sleep(userRepository);
    sleep.changeDate(userRepository);
    updateSleep();
  }

  function updateSleep() {
    let $hours = sleep.hoursSlept;
    let $quality = sleep.splitQuality();
    $('.sleep-widget main').children('p').text($hours);
    if ($quality[0] !== 0) {
      setQuality($quality)
    } else {
      $('.stars img').attr('src', '../images/star-empty.svg').siblings('p').text($quality.join('.'));
    }
  }

  function setQuality(quality) {
    let $star = $('.stars').children(`img:nth-child(${quality[0]})`);
    $star.attr('src', '../images/star-full.svg');
    $star.prevAll().attr('src', '../images/star-full.svg');
    $star.siblings('p').text(quality.join('.'));
    if (quality[1] < 5) { changeStar($star, 'halfless'); }
    if (quality[1] > 5) { changeStar($star, 'halfmore'); }
    if (quality[1] === 5) { changeStar($star, 'half'); }
  }

  function changeStar(star, style) {
    star.next().attr('src', `../images/star-${style}.svg`);
    star.next().nextAll().attr('src', '../images/star-empty.svg');
  }

  function showActivity() {
    activity = new Activity(userRepository);
    activity.changeDate(userRepository);
    updateActivity();
  }

  function updateActivity() {
    let $miles = activity.findMiles(user);
    $('.activity-widget').find('.steps').text(activity.numSteps);
    $('.activity-widget').find('.mins').text(activity.minutesActive);
    $('.activity-widget').find('.flights').text(activity.flightsOfStairs);
    $('.activity-widget').find('.miles').text($miles);
  }

  // WEEK DAYS SWITCHER
  $('.dayly-show footer img').on('click', function() {
    const $widgetType = $(this).closest('.widget').attr('data-type');
    const $dayIndex = parseInt($(this).attr('data-index'));
    $(this).attr('src', '../images/circle-clicked.svg').siblings().attr('src', '../images/circle.svg');
    if ($widgetType === 'sleep') { updateSleepWeekDay(this, $dayIndex); }
    if ($widgetType === 'activity') { updateActiveWeekDay(this, $dayIndex); }
    if ($widgetType === 'water') { updateHydrationWeekDay(this, $dayIndex); }
  });

  function updateSleepWeekDay(target, index) {
    const $weekInfo = sleep.getWeekFullInfo(userRepository);
    let $qualities = sleep.getWeeklyInfo(userRepository, 'quality');
    $(target).closest('.widget').find('.date').text($weekInfo[index].date);
    $(target).closest('.widget').find('.section__number').text($weekInfo[index].hoursSlept);
    const $quality = sleep.splitQuality($qualities[index]);
    setQuality($quality);
  }

  function updateActiveWeekDay(target, index) {
    const $weekDays = userRepository.getWeekDates(activity.date);
    $(target).closest('.widget').find('.date').text($weekDays[index]);
    activity.changeDate(userRepository, $weekDays[index]);
    activity.findMiles(user);
    updateActivity();
  }

  function updateHydrationWeekDay(target, index) {
    const $weekInfo = hydration.findWeeksFluid(userRepository.hydrationUsersData);
    $(target).closest('.widget').find('.date').text($weekInfo[index].date);
    $(target).closest('.widget').find('.section__number').text($weekInfo[index].numOunces);
  }

  // DROPDOWN MENU SCRIPTS
  $('.dropdown header').on('click', function() {
    $(this).siblings('div').toggle();
  });

  $('.dropdown div p').on('click', function() {
    $('.alert').text('');
    $(this).parent().siblings('header').children('p').text($(this).text());
    $(this).parent().siblings('input').val($(this).text());
    $(this).parent().hide();
    $(this).closest('.widget').find('footer .last').attr('src', '../images/circle-clicked.svg').siblings().attr('src', '../images/circle.svg');
    switchDays(this);
  });

  function switchDays(target) {
    const $widgetType = $(target).closest('.widget').attr('data-type');
    const $dayEntered = $(target).parent().siblings('input').val();
    switch ($dayEntered) {
      case 'Today':
        startActivityForToday($widgetType, target);
        break;
      case 'Week':
        startActivityForWeek($widgetType, target);
        break;
      case 'All time':
        startActivityForAll($widgetType, target);
        break;
    }
  }

  function startActivityForToday(widget, target) {
    $(target).closest('.widget').find('.date, footer').hide();
    switch (widget) {
      case 'sleep':
        sleep.changeDate(userRepository);
        updateSleep();
        break;
      case 'activity':
        $('.compare').text('compare with others').show();
        activity.changeDate(userRepository);
        updateActivity();
        break;
      case 'water':
        showHydration();
        break;
    }
  }

  function startActivityForWeek(widget, target) {
    $(target).closest('.widget').find('.date, footer').show();
    switch (widget) {
      case 'sleep':
        $('.sleep-widget').find('.date').text(sleep.date);
        sleep.updateInfo(userRepository);
        updateSleep();
        break;
      case 'activity':
        $('.compare-block, .compare').hide();
        $('.activity-widget').find('.date').text(activity.date);
        activity.updateInfo(userRepository);
        updateActivity();
        break;
      case 'water':
        $('.water-widget').find('.date').text(hydration.date);
        showHydration();
        break;
    }
  }

  function startActivityForAll(widget, target) {
    $(target).closest('.widget').find('.date, footer').hide();
    switch (widget) {
      case 'sleep':
        sleep.changeDate(userRepository, 'All time');
        updateSleep();
        break;
      case 'activity':
        $('.compare-block').hide();
        $('.compare').text('compare with others').show();
        activity.changeDate(userRepository, 'All time');
        updateActivity();
        break;
      case 'water':
        let allAvg = hydration.calcAvgFluidConsumption(userRepository.hydrationUsersData);
        $('.current-hydro').text(allAvg);
        break;
    }
  }

  $('.search label').on('click', function() {
    $('.alert').text('');
    $(this).parent().children().toggle();
    $(this).parent().siblings('.dropdown').toggle();
  });

  $('.search button').on('click', function() {
    const $widgetType = $(this).closest('.widget').attr('data-type');
    const $dayEntered = $(this).siblings('input').val();
    const $dropdown = $(this).parent().siblings('.dropdown');
    $(this).parent().children().toggle();
    $dropdown.toggle();
    $dropdown.children('div').hide();
    $(this).closest('.widget').find('.date, footer').hide();
    if (userRepository.validateDate($dayEntered)) {
      showInfoForChosenDate($dayEntered, $widgetType, $dropdown);
    } else {
      $(this).closest('.widget').find('.alert').text('Enter a valid date!').css('color', '#af4040');
    }
    $(this).siblings('input').val('');
  });

  function showInfoForChosenDate(day, widget, menu) {
    menu.children('header').children('p').text(day);
    menu.children('input').text(day);
    $('.compare-block, .compare').hide();
    showInfoForThisDay(day, widget);
  }

  function showInfoForThisDay(day, widget) {
    switch (widget) {
      case 'sleep':
        sleep.changeDate(userRepository, day);
        updateSleep();
        break;
      case 'activity':
        activity.changeDate(userRepository, day);
        updateActivity();
        break;
      case 'water':
        hydration.date = day;
        $dayFluid = hydration.findDayFluid(userRepository.hydrationUsersData)
        $('.current-hydro').text($dayFluid);
        break;
    }
  }
});
