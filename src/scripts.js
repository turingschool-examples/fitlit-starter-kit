let userRepository = new UserRepository();

userData.forEach(user => {
  user = new User(user);
  userRepository.users.push(user)
});

// let userRepository = new UserRepository([userData]);

var headerName = document.querySelector('#header-name');

headerName.innerText = `${userRepository.users[0].getFirstName()}'S `;
