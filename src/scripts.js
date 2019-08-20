// const userRepository = new UserRepository(data, id);
const userNameDisplay = $('.header__h1--title');
const user = new User(userRepository.findUserData())
$(document).ready(() => {
  $(userNameDisplay).text(user.name)
});