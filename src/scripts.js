$( document ).ready(() => {
  console.log('doc ready');
  populateUser();
});

function populateUser() {
  let randomUser = Math.round(Math.random() * (50 - 1) + 1);
  
  const userRepository = new UserRepository(userData);
  const userInfo = userRepository.returnUserData(randomUser);
  const user = new User(userInfo);

  let name = user.returnUserName();
  $('.user__name').text(`${name}`);

  // const user = new User(userRepository);

  console.log(randomUser, userRepository);
  console.log(userInfo, user)

}
