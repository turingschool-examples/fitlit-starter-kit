

let welcomeDisplay = document.querySelector('.display-name');



window.onload = function() {
   const usersRepository = new UsersRepository(2);
   const userInfo = usersRepository.getUserDataById(userData);
   const user = new User(userInfo);
   welcomeDisplay.innerText = `Welcome, ${user.returnUserFirstName()}`;
   console.log(user.returnUserFirstName());
}
