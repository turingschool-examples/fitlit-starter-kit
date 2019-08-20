const userRepository = new UserRepository(userData);
const userNameDisplay = $('.header__h1--name');
const user = new User(userRepository.findUserData(1))
$(document).ready(() => {
  $('strong').text(user.returnFirstName());
  $('.article__strong--name').text(user.name);
  $('.article__strong--address').text(user.address);
  $('.article__strong--email').text(user.email);
  $('.article__strong--stride').text(user.strideLength)
  
});

