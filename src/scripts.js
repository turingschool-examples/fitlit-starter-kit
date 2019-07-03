$(document).ready(function() {
  const userRepo = new UserRepository(userData);
  const specificUser = userRepo.returnUserData(2);
  const user = new User(specificUser);
  
  $('#js-first-name').html(user.returnFirstName())
  $('#js-full-name').html(user.name)
  
  //








  
});