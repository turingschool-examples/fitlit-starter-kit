$(document).ready(() => {
  const repo = new UserRepository(sampleData);
  const user = new User(repo.getUserData(getRandomNumber()))
  ;
  const hydroRepo = new HydrationRepository(sampleHydration);
  const userHydro = new Hydration(hydroRepo.getUserData(user.id));

  const sleepRepo = new SleepRepository(sampleSleep);
  const sleepyPerson = new Sleep(sleepRepo.getUserData(user.id));

  $('.header__div--h2').text(`Hi, ${user.getUserFirstName()}!`);

  $('.header__div__user-stepgoal').text(`Your step goal: ${user.dailyStepGoal} steps`);

  $('.header__div__allusers-stepgoal').text(`Average User Goal: ${repo.getAllUsersAvgStepGoal()} steps`);

  $('.hydration__container--consumed--today').text(`Consumed today: ${userHydro.userHydrationByDate('2019/06/25')}oz`);

  userHydro.getHydroArray('2019/06/25');

  $('.hydration__container--consumed--this--week').text(`Daily average consumed this week: ${userHydro.getWeeklyHydroAvg()}oz`);

  $('.main__hydration--thisWeek').after(`${buildWeeklyHTML('oz')}`)

  $('.main__sleep--thisWeek').after(`${buildWeeklyHTMLSleep()}`)


  function buildWeeklyHTMLSleep() {
    const weeklyMap = sleepyPerson.getWeek('2019/06/25').map(function (day) {
      return insertWeeklySleepStats(day)
    })
    return weeklyMap.join(' ');
  }

  function insertWeeklySleepStats(obj) {
    return `<p class="inserted--p"> ${milisecondsToDate(obj.date)}: ${obj.hoursSlept} hours slept with a sleep quality of ${obj.sleepQuality}  </p>`
  }

  function milisecondsToDate(miliseconds) {
    return new Date(miliseconds).toString().slice(0, 10)
  }

  function buildWeeklyHTML(unit) {
    const weeklyMap = userHydro.weeklyArr.map(function(day) {
      return insertWeeklyStats(day, unit)
    })
    return weeklyMap.join(' ');
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * sampleData.length)
  }
  
  function insertWeeklyStats(obj, unit) {
    return `<p class="inserted--p"> ${milisecondsToDate(obj.date)}: ${obj.numOunces} ${unit} </p>`
  }

})
      


