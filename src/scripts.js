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

  $('.login button').on('click', function() {
    const nameGiven = `${$('.first-name').val()} ${$('.last-name').val()}`;
    const currentUser = userRepository.findUserByName(nameGiven);
    user = new User(currentUser);
    hydration = new Hydration(userRepository);
    $('.login-header, .page-header, .empty-board').fadeToggle(100);
    $('.board').css('display', 'flex');
    fillUserInfo();
    getFriends(user.findFriends(userRepository));
    showHydration();
    showSleep();
    showActivity();
  });

  $('.log-out').on('click', function() {
    location.reload();
  })

  $('.bio-info').on('click', function () {
    $('.bio-info main').fadeToggle();
  });

  $('.compare').on('click', function() {
    $('.compare-block').fadeToggle();
    $(this).text($(this).text() === 'compare with others' ? 'close' : 'compare with others');
    let $steps, $flights, $mins;
    if ($(this).parents('.widget').find('header .dropdown input').val() === 'Today') {
      $steps = userRepository.findAverageActivityValueForToday('numSteps');
      $flights = userRepository.findAverageActivityValueForToday('flightsOfStairs');
      $mins = userRepository.findAverageActivityValueForToday('minutesActive');
    }
    if ($(this).parents('.widget').find('header .dropdown input').val() === 'All time') {
      $steps = userRepository.findAverageActivityValue('numSteps');
      $flights = userRepository.findAverageActivityValue('flightsOfStairs');
      $mins = userRepository.findAverageActivityValue('minutesActive');
    }
    updateAllUserActivity($steps, $flights, $mins);
  });

  function updateAllUserActivity(steps, flights, mins) {
    $('.compare-block .steps').text(steps);
    $('.compare-block .flights').text(flights);
    $('.compare-block .mins').text(mins);
  }

  $('.steps-goal footer p').on('click', function() {
    $('.steps-goal .average').fadeToggle();
    $(this).text($(this).text() === 'see average' ? 'close' : 'see average');
  });

  function fillUserInfo() {
    $('.page-header header h2').text(user.getFirstName());
    $('.info .name').text(user.name);
    $('.info .email').text(user.email);
    $('.info .address').text(user.address);
    $('.body .step').text(`${user.strideLength} feet`);
    $('.steps-goal .goal').text(user.dailyStepGoal);
    $('.steps-goal .average-goal').text(userRepository.calculateAverageStepGoal());
  }

  function getFriends(friends) {
    friends.forEach(friend => {
      $('.friend-names').append(`
      <h5>${friend.name}</h5>
      <p>step goal: ${friend.dailyStepGoal}</p>`);
    })
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
      $('.stars img').attr('src', '../images/star-empty.svg');
      $('.stars p').text($quality.join('.'))
    }
  }

  function setQuality(quality) {
    let $star = $('.stars').children(`img:nth-child(${quality[0]})`);
    $star.siblings('p').text(quality.join('.'))
    $star.prevAll().attr('src', '../images/star-full.svg');
    $star.attr('src', '../images/star-full.svg');
    if (quality[1] < 5) {
      $star.next().attr('src', '../images/star-halfless.svg');
      $star.next().nextAll().attr('src', '../images/star-empty.svg');
    }
    if (quality[1] > 5) {
      $star.next().attr('src', '../images/star-halfmore.svg');
      $star.next().nextAll().attr('src', '../images/star-empty.svg');
    }
    if (quality[1] === 5) {
      $star.next().attr('src', '../images/star-half.svg');
      $star.next().nextAll().attr('src', '../images/star-empty.svg');
    }
    if (!quality[1]) {
      $star.next().nextAll().attr('src', '../images/star-empty.svg');
    }
  }

  function showActivity() {
    activity = new Activity(userRepository);
    activity.changeDate(userRepository);
    updateActivity();
  }

  function updateActivity() {
    let $steps = activity.numSteps;
    let $minutes = activity.minutesActive;
    let $flights = activity.flightsOfStairs;
    let $miles = activity.findMiles(user.strideLength);
    $('.activity-widget').find('.steps').text($steps);
    $('.activity-widget').find('.mins').text($minutes);
    $('.activity-widget').find('.flights').text($flights);
    $('.activity-widget').find('.miles').text($miles);
  }

  // WEEK DAYS SWITCHER
  $('.dayly-show footer img').on('click', function() {
    const $widgetType = $(this).closest('.widget').attr('data-type');
    const $dayIndex = parseInt($(this).attr('data-index'));
    $(this).attr('src', '../images/circle-clicked.svg').siblings().attr('src', '../images/circle.svg');
    if ($widgetType === 'sleep') updateWeekDay(this, $dayIndex);
    if ($widgetType === 'activity') updateActiveWeekDay(this, $dayIndex);
    if ($widgetType === 'water') updateHydrationWeekDay(this, $dayIndex);
  });

  function updateActiveWeekDay(target, index) {
    const $weekDays = userRepository.getWeekDates(activity.date);
    $(target).closest('.widget').find('.date').text($weekDays[index]);
    activity.changeDate(userRepository, $weekDays[index]);
    activity.findMiles(user.strideLength);
    updateActivity();
  }

  function updateWeekDay(target, index) {
    const $weekInfo = sleep.getWeekFullInfo(userRepository);
    let $qualities = sleep.getWeeklyInfo(userRepository, 'quality');
    $(target).closest('.widget').find('.date').text($weekInfo[index].date);
    $(target).closest('.widget').find('.section__number').text($weekInfo[index].hoursSlept);
    const $quality = sleep.splitQuality($qualities[index]);
    setQuality($quality);
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
    const $widgetType = $(this).closest('.widget').attr('data-type');
    const $dayEntered = $(this).parent().siblings('input').val();

    if ($dayEntered === 'Week') {
      $(this).closest('.widget').find('.date, footer').show();

      if ($widgetType === 'sleep') {
        $(this).closest('.widget').find('.date').text(sleep.date);
        sleep.updateInfo(userRepository);
        updateSleep();
      }
      if ($widgetType === 'activity') {
        $('.compare-block, .compare').hide();
        $(this).closest('.widget').find('.date').text(activity.date);
        activity.updateInfo(userRepository.activityUsersData)
        updateActivity();
      }
      if ($widgetType === 'water') {
        $(this).closest('.widget').find('.date').text(hydration.date);
        showHydration();
      }
    }

    if ($dayEntered === 'Today') {
      $(this).closest('.widget').find('.date, footer').hide();
      if ($widgetType === 'sleep') {
        sleep.changeDate(userRepository);
        updateSleep();
      };
      if ($widgetType === 'activity') {
        $('.compare').text('compare with others').show();
        activity.changeDate(userRepository);
        updateActivity();
      }

      if ($widgetType === 'water') {
        showHydration();
      }
    }

    if ($dayEntered === 'All time') {
      $(this).closest('.widget').find('.date, footer').hide();
      if ($widgetType === 'sleep') {
        sleep.changeDate(userRepository, 'All day');
        updateSleep();
      }
      if ($widgetType === 'activity') {
        $('.compare-block').hide();
        $('.compare').text('compare with others').show();
        activity.changeDate(userRepository, 'All days');
        updateActivity();
      }
      if ($widgetType === 'water') {
        let allAvg = hydration.calcAvgFluidConsumption(userRepository.hydrationUsersData);
        $('.current-hydro').text(allAvg);
      }
    }
  });

  $('.search label').on('click', function() {
    $('.alert').text('');
    $(this).parent().children().toggle();
    $(this).parent().siblings('.dropdown').toggle();
  });

  $('.search button').on('click', function() {
    const $widgetType = $(this).closest('.widget').attr('data-type');
    const $dayEntered = $(this).siblings('input').val();
    const $dateVal = /^\d{4}\/\d{2}\/\d{2}$/;
    const $dropdown = $(this).parent().siblings('.dropdown');
    $(this).parent().children().toggle();
    $dropdown.toggle();
    $(this).closest('.widget').find('.date, footer').hide();
    const validDate = userRepository.hydrationUsersData.find(data => {
      return data.date === $dayEntered;
    });
    if ($dateVal.test($dayEntered) && validDate) {
      $dropdown.children('header').children('p').text($dayEntered);
      $dropdown.children('input').text($dayEntered);
      $('.compare-block, .compare').hide();
      if ($widgetType === 'sleep') {
        sleep.changeDate(userRepository, $dayEntered);
        updateSleep();
      };
      if ($widgetType === 'activity') {
        activity.changeDate(userRepository, $dayEntered);
        updateActivity();
      };
      if ($widgetType === 'water') {
        hydration.date = $dayEntered;
        $('.hydro-date').text($dayEntered);
        $('.current-hydro').text(hydration.findDayFluid(userRepository.hydrationUsersData));
      };
    } else {
      $(this).closest('.widget').find('.alert').text('Enter a valid date!').css('color', '#af4040');
    }
    $(this).siblings('input').val('');
  });
});
