$(document).ready(function() {
  const userRepo = new UserRepository(userData);
  let userID = Math.floor((Math.random() * 50) + 1);
  const specificUser = userRepo.returnUserData(userID);
  const user = new User(specificUser);
  const hydrationRepo = new HydrationRepository(hydrationData);
  
  console.log(userID);
  
  $('#js-first-name').html(user.returnFirstName());
  $('#js-full-name').html(user.name);

  let foundUser = hydrationRepo.returnUserHydrationData(userID);
  const hydration = new Hydration(foundUser);
  $('#js-water-consumed-today').html(hydration.returnFluidOunces("2019/06/15"));

  $('.nav-list').on('click', () => {
    $('.list-item').addClass('.list-item-active');
  })







  
});