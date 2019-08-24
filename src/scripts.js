$(document).ready(() => {
  const repo = new UserRepository(sampleData);
  const user = new User(repo.getUserData(getRandomNumber()))
  ;
  const hydroRepo = new HydrationRepository(sampleHydration);
  const userHydro = new Hydration(hydroRepo.getUserData(user.id));

  const sleepRepo = new SleepRepository(sampleSleep);
  const sleepyPerson = new Sleep(sleepRepo.getUserData(user.id));

  const sampleDate = '2019/06/25'

  $('.header__div--h2').text(`Hi, ${user.getUserFirstName()}!`);

  $('.header__div__user-stepgoal').text(`Your step goal: ${user.dailyStepGoal} steps`);

  $('.header__div__allusers-stepgoal').text(`Average User Goal: ${repo.getAllUsersAvgStepGoal()} steps`);

  $('.hydration__container--consumed--today').text(`Consumed today: ${userHydro.userHydrationByDate(sampleDate)}oz`);

  userHydro.getHydroArray(sampleDate);

  $('.hydration__container--consumed--this--week').text(`Daily average consumed this week: ${userHydro.getWeeklyHydroAvg()}oz`);

  $('.main__hydration--thisWeek').after(`${buildWeeklyHTML('oz')}`)

  $('.sleep--week-byDay').after(buildWeeklyHTMLSleep())

  $('.sleep__container--hours--today').text(`Hours slept today: ${sleepyPerson.getSleepHoursByDate(sampleDate)} hours`)

  $('.sleep__container--hours--this--week').text(`Average hours slept this week: ${sleepyPerson.getWeeklyAvg(sampleDate, 'hoursSlept')} hours`)

  $('.sleep--week--avg').after(`<p class="main__sleep__average--all-users">
              Hours slept this week: ${sleepRepo.getAvgSleepStatsAllUsers(sleepRepo.getWeekOfUsers(sampleDate), 'hoursSlept')} hours
            </p>
            <p class="main__sleep__average--all-users">
              Sleep quality this week: ${sleepRepo.getAvgSleepStatsAllUsers(sleepRepo.getWeekOfUsers(sampleDate), 'sleepQuality')}
            </p>`)


  function buildWeeklyHTMLSleep() {
    const weeklyMap = sleepyPerson.getWeek(sampleDate).map(function (day) {
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
      


