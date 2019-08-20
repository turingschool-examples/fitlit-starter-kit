const userRepository = new UserRepository(userData);
const userNameDisplay = $('.header__h1--name');
const user = new User(userRepository.findUserData(1))
$(document).ready(() => {
  $('strong').text(user.returnFirstName())
});