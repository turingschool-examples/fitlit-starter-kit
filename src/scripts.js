$(document).ready(() => {
  const repo = new UserRepository(sampleData);
  const user = new User(repo.getUserData(getRandomNumber()));
  // hydroRepo = new HydrationRep(sampleHydration);
  //const uderHydro = new Hydration(user.id)
  $('.header__div--h2').text(`Hi, ${user.getUserFirstName()}!`);

  $('.header__div__user-stepgoal').text(`Your step goal: ${user.dailyStepGoal} steps`);

  $('.header__div__allusers-stepgoal').text(`Average User Goal: ${repo.getAllUsersAvgStepGoal()} steps`)


})
      


function getRandomNumber() {
  return Math.floor(Math.random() * sampleData.length)
}