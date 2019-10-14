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

$(document).ready(function() {

  $('.login button').on('click', function() {
    const nameGiven = `${$('.first-name').val()} ${$('.last-name').val()}`;
    const currentUser = userRepository.findUserByName(nameGiven);
    user = new User(currentUser);
    $('.login-header, .page-header, .empty-board, .board').fadeToggle(100);
    fillUserInfo();
    getFriends(user.findFriends(userRepository));
    showHydration();
    showSleep();
  });

  $('.bio-info').on('click', function () {
    $('.bio-info main').fadeToggle();
  });

  $('.compare').on('click', function() {
    $('.compare-block').fadeToggle();
    $(this).text($(this).text() === 'compare with others' ? 'close' : 'compare with others');
  });

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
    const currentHydration = hydrationData.find(hydro => {
      return hydro.userID === userRepository.currentUserId
    })
    $('.current-hydro').text(currentHydration.numOunces)
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

  // WEEK DAYS SWITCHER
  $('.dayly-show footer img').on('click', function() {
    const $widgetType = $(this).closest('.widget').attr('data-type');
    const $dayIndex = parseInt($(this).attr('data-index'));
    $(this).attr('src', '../images/circle-clicked.svg').siblings().attr('src', '../images/circle.svg');
    if ($widgetType === 'sleep') updateWeekDay(this, $dayIndex);
  });

  function updateWeekDay(target, index) {
    const $weekInfo = sleep.getWeekFullInfo(userRepository);
    let $qualities = sleep.getWeeklyInfo(userRepository, 'quality');
    $(target).closest('.widget').find('.date').text($weekInfo[index].date);
    $(target).closest('.widget').find('.section__number').text($weekInfo[index].hoursSlept);
    const $quality = sleep.splitQuality($qualities[index]);
    setQuality($quality);
  }

  // DROPDOWN MENU SCRIPTS
  $('.dropdown header').on('click', function() {
    $(this).siblings('div').toggle();
  });

  $('.dropdown div p').on('click', function() {
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
      }
    }

    if ($dayEntered === 'All time') {
      $(this).closest('.widget').find('.date, footer').hide();
      if ($widgetType === 'sleep') {
        sleep.changeDate(userRepository, 'All day');
        updateSleep();
      };
    }
  });

  $('.search label').on('click', function() {
    $(this).parent().children().toggle();
    $(this).parent().siblings('.dropdown').toggle();
  });

  $('.search button').on('click', function() {
    const $widgetType = $(this).closest('.widget').attr('data-type');
    const $dayEntered = $(this).siblings('input').val();
    const $dateVal = /^\d{1,4}\/\d{1,2}\/\d{1,2}$/
    const $dropdown = $(this).parent().siblings('.dropdown');
    $(this).parent().children().toggle();
    $dropdown.toggle();
    $(this).closest('.widget').find('.date, footer').hide();
    if ($dateVal.test($dayEntered)) {
      $dropdown.children('header').children('p').text($dayEntered);
      $dropdown.children('input').text($dayEntered);
      $('.compare-block').hide();
      $('.compare').text('compare with others').show();
      if ($widgetType === 'sleep') {
        sleep.changeDate(userRepository, $dayEntered);
        updateSleep();
      };
    }
    $(this).siblings('input').val('');
  });
});
