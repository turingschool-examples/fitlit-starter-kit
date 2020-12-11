const currentUser = new User(userData[0]);
let firstNameDisplay = document.querySelector('.first-name-section');

const displayUsersFirstName = () => {
  firstNameDisplay.innerText = `Hello ${currentUser.provideUsersFirstName()}!`
}
