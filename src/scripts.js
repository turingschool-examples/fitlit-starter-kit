$(document).ready(() => {
  const repo = new UserRepository(sampleData);
  user = new User(repo.getUserData(getRandomNumber()));
  $('.header__div--h2').text(`Hi, ${user.getUserFirstName()}!`);

  $('.header__div__user-stepgoal').text(`Your step goal: ${user.dailyStepGoal} steps`);

  $('.header__div__allusers-stepgoal').text(`Average User Goal: ${repo.getAllUsersAvgStepGoal()} steps`)


})
      


function getRandomNumber() {
  return Math.floor(Math.random() * sampleData.length)
}