$(document).ready(function() {
  // const hydrationRepo = new HydrationRepository(hydrationData);
  
  $('#js-h2--user').hide();

  $('#js-change-user').click(function() {
    const userRepo = new UserRepository(userData);
    let userID = Math.floor((Math.random() * 50) + 1);
    const specificUser = userRepo.returnUserData(userID);
    const user = new User(specificUser);
 
    $('#js-first-name').html(user.returnFirstName());
    $('#js-full-name').html(user.name);
    $('#js-address').html(user.address);
    $('#js-email').html(user.email);
    $('#js-friends').html(userRepo.makeFriendNames(userID));
    $('#js-h2--welcome').hide();
    $('#js-h2--user').show();
    console.log(userID);
  });

  // let foundUser = hydrationRepo.returnUserHydrationData(userID);
  // const hydration = new Hydration(foundUser);
  // $('#js-water-consumed-today').html(hydration.returnFluidOunces("2019/06/15"));

  
});