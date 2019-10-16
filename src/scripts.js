const userRepo = new UserRepo(userData);
const user = new User(userData[12]);
const hydration = new Hydration(user.userID);
const sleep = new Sleep(user.id);
const activity = new Activity(user);

$('.user-name')
  .text(user.returnFirstName());
$('.address')
  .text(user.address);
$('.email')
  .text(user.email);
$('.stride')
  .text(user.strideLength);
$('.step-goal')
  .text(user.dailyStepGoal);
$('.user-avg')
  .text(userRepo.calculateAvgStepGoal());
$('.hydration-today')
  .text(hydration.findOzByDay(3, '2019/06/22', hydrationData));

$('#day-1')
  .text(`Day 1: ${hydration.findOzByWeek(3, '2019/06/22', hydrationData)[0]}`);
$('#day-2')
  .text(`Day 2: ${hydration.findOzByWeek(3, '2019/06/22', hydrationData)[1]}`);
$('#day-3')
  .text(`Day 3: ${hydration.findOzByWeek(3, '2019/06/22', hydrationData)[2]}`);
$('#day-4')
  .text(`Day 4: ${hydration.findOzByWeek(3, '2019/06/22', hydrationData)[3]}`);
$('#day-5')
  .text(`Day 5: ${hydration.findOzByWeek(3, '2019/06/22', hydrationData)[4]}`);
$('#day-6')
  .text(`Day 6: ${hydration.findOzByWeek(3, '2019/06/22', hydrationData)[5]}`);
$('#day-7')
  .text(`Day 7: ${hydration.findOzByWeek(3, '2019/06/22', hydrationData)[6]}`);

$('#hours-slept')
  .text(sleep.showSleep(sleep.userID, '2019/06/22', 'hoursSlept', sleepData));
$('#sleep-quality')
  .text(sleep.showSleep(sleep.userID, '2019/06/22', 'sleepQuality', sleepData));
$('#hours-slept-all')
  .text(sleep.calculateAvgSleep(sleep.userID, 'hoursSlept', sleepData));
$('#sleep-quality-all')
  .text(sleep.calculateAvgSleep(sleep.userID, 'sleepQuality', sleepData));

$('#hours-1')
  .text(sleep.findSleepWeek(sleep.userID, '2019/06/22', 'hoursSlept', sleepData)[0]);
$('#quality-1')
  .text(sleep.findSleepWeek(sleep.userID, '2019/06/22', 'sleepQuality', sleepData)[0]);
$('#hours-2')
  .text(sleep.findSleepWeek(sleep.userID, '2019/06/22', 'hoursSlept', sleepData)[1]);
$('#quality-2')
  .text(sleep.findSleepWeek(sleep.userID, '2019/06/22', 'sleepQuality', sleepData)[1]);
$('#hours-3')
  .text(sleep.findSleepWeek(sleep.userID, '2019/06/22', 'hoursSlept', sleepData)[2]);
$('#quality-3')
  .text(sleep.findSleepWeek(sleep.userID, '2019/06/22', 'sleepQuality', sleepData)[2]);
$('#hours-4')
  .text(sleep.findSleepWeek(sleep.userID, '2019/06/22', 'hoursSlept', sleepData)[3]);
$('#quality-4')
  .text(sleep.findSleepWeek(sleep.userID, '2019/06/22', 'sleepQuality', sleepData)[3]);
$('#hours-5')
  .text(sleep.findSleepWeek(sleep.userID, '2019/06/22', 'hoursSlept', sleepData)[4]);
$('#quality-5')
  .text(sleep.findSleepWeek(sleep.userID, '2019/06/22', 'sleepQuality', sleepData)[4]);
$('#hours-6')
  .text(sleep.findSleepWeek(sleep.userID, '2019/06/22', 'hoursSlept', sleepData)[5]);
$('#quality-6')
  .text(sleep.findSleepWeek(sleep.userID, '2019/06/22', 'sleepQuality', sleepData)[5]);
$('#hours-7')
  .text(sleep.findSleepWeek(sleep.userID, '2019/06/22', 'hoursSlept', sleepData)[6]);
$('#quality-7')
  .text(sleep.findSleepWeek(sleep.userID, '2019/06/22', 'sleepQuality', sleepData)[6]);

$('#frnd1').text(userRepo.findUser(user.friends[0]).name);
$('#frnd1-step').text(userRepo.findUser(user.friends[0]).dailyStepGoal);
$('#frnd2').text(userRepo.findUser(user.friends[1]).name);
$('#frnd2-step').text(userRepo.findUser(user.friends[1]).dailyStepGoal);
$('#frnd3').text(userRepo.findUser(user.friends[2]).name);
$('#frnd3-step').text(userRepo.findUser(user.friends[2]).dailyStepGoal);
$('#frnd4').text(userRepo.findUser(user.friends[3]).name);
$('#frnd4-step').text(userRepo.findUser(user.friends[3]).dailyStepGoal);
$('#frnd5').text(userRepo.findUser(user.friends[4]).name);
$('#frnd5-step').text(userRepo.findUser(user.friends[4]).dailyStepGoal);

$('#steps-today').text(activity.prevDayActivity(activityData, '2019/06/22', 'numSteps'));
$('#mins-active-today').text(activity.prevDayActivity(activityData, '2019/06/22', 'minutesActive'));
$('#miles-walked-today').text(activity.returnUserMiles(activityData, '2019/06/22'));

$('#user-steps').text(activity.prevDayActivity(activityData, '2019/06/22', 'numSteps'));
$('#avg-steps').text(activity.checkUserAvgs('2019/06/22', 'numSteps', activityData));
$('#user-mins').text(activity.prevDayActivity(activityData, '2019/06/22', 'minutesActive'));
$('#avg-mins').text(activity.checkUserAvgs('2019/06/22', 'minutesActive', activityData));
$('#user-stairs').text(activity.prevDayActivity(activityData, '2019/06/22', 'flightsOfStairs'));
$('#avg-stairs').text(activity.checkUserAvgs('2019/06/22', 'flightsOfStairs', activityData));


$('#user-steps-1').text(activity.returnWeekStats('2019/06/22', activityData, 'numSteps')[0]);
$('#user-steps-2').text(activity.returnWeekStats('2019/06/22', activityData, 'numSteps')[1]);
$('#user-steps-3').text(activity.returnWeekStats('2019/06/22', activityData, 'numSteps')[2]);
$('#user-steps-4').text(activity.returnWeekStats('2019/06/22', activityData, 'numSteps')[3]);
$('#user-steps-5').text(activity.returnWeekStats('2019/06/22', activityData, 'numSteps')[4]);
$('#user-steps-6').text(activity.returnWeekStats('2019/06/22', activityData, 'numSteps')[5]);
$('#user-steps-7').text(activity.returnWeekStats('2019/06/22', activityData, 'numSteps')[6]);

$('#user-stairs-1').text(activity.returnWeekStats('2019/06/22', activityData, 'flightsOfStairs')[0]);
$('#user-stairs-2').text(activity.returnWeekStats('2019/06/22', activityData, 'flightsOfStairs')[1]);
$('#user-stairs-3').text(activity.returnWeekStats('2019/06/22', activityData, 'flightsOfStairs')[2]);
$('#user-stairs-4').text(activity.returnWeekStats('2019/06/22', activityData, 'flightsOfStairs')[3]);
$('#user-stairs-5').text(activity.returnWeekStats('2019/06/22', activityData, 'flightsOfStairs')[4]);
$('#user-stairs-6').text(activity.returnWeekStats('2019/06/22', activityData, 'flightsOfStairs')[5]);
$('#user-stairs-7').text(activity.returnWeekStats('2019/06/22', activityData, 'flightsOfStairs')[6]);

$('#user-mins-1').text(activity.returnWeekStats('2019/06/22', activityData, 'minutesActive')[0]);
$('#user-mins-2').text(activity.returnWeekStats('2019/06/22', activityData, 'minutesActive')[1]);
$('#user-mins-3').text(activity.returnWeekStats('2019/06/22', activityData, 'minutesActive')[2]);
$('#user-mins-4').text(activity.returnWeekStats('2019/06/22', activityData, 'minutesActive')[3]);
$('#user-mins-5').text(activity.returnWeekStats('2019/06/22', activityData, 'minutesActive')[4]);
$('#user-mins-6').text(activity.returnWeekStats('2019/06/22', activityData, 'minutesActive')[5]);
$('#user-mins-7').text(activity.returnWeekStats('2019/06/22', activityData, 'minutesActive')[6]);
