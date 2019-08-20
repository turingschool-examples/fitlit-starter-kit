let userRepository = new UserRepository(userData);
const userName = $('.header__h1--title');

$(document).ready(() => {
  (() => userName.text(userRepository.getUserData(19).name))();
});