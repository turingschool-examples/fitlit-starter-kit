// eslint-disable-next-line no-undef
let userRepository = new UserRepository(userData);
const h1 = $('h1');

$(document).ready(() => {
  (() => h1.text(userRepository.getUserData(33).name))();
});