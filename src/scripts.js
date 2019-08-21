$(document).ready(() => {
  const repo = new UserRepository(sampleData);
  const user = new User(repo.getUserData(getRandomNumber()))
  ;
  const hydroRepo = new HydrationRepository(sampleHydration);
  const userHydro = new Hydration(hydroRepo.getUserData(user.id));

  $('.header__div--h2').text(`Hi, ${user.getUserFirstName()}!`);

  $('.header__div__user-stepgoal').text(`Your step goal: ${user.dailyStepGoal} steps`);

  $('.header__div__allusers-stepgoal').text(`Average User Goal: ${repo.getAllUsersAvgStepGoal()} steps`);

  $('.hydration__container--consumed--today').text(`Consumed today: ${userHydro.userHydrationByDate('2019/06/25')}oz`);

  userHydro.getHydroArray('2019/06/25');

  $('.hydration__container--consumed--this--week').text(`Daily average consumed this week: ${userHydro.getWeeklyHydroAvg()}oz`);

  $('.main__hydration--thisWeek').after(`${buildWeeklyHTML('oz')}`)


  function buildWeeklyHTML(unit) {

  const weeklyMap = userHydro.weeklyArr.map(function(day) {
    return insertWeeklyStats(day, unit)
  })
return weeklyMap.join(' ');
}

  function getRandomNumber() {
    return Math.floor(Math.random() * sampleData.length)
  }
  
  function insertWeeklyStats(date, unit) {
  return `<p class="inserted--p"> ${date.date}: ${date.numOunces} ${unit} </p>`
   }

})
      


