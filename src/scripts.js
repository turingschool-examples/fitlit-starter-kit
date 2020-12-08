// ~~~~~ QUERY SELECTORS ~~~~~
const userNameGreeting = document.querySelector(".user-greeting");

// ~~~~~ EVENT LISTENERS ~~~~~
window.onload = start;

// ~~~~~ GLOBAL VARIABLES ~~~~~


// ~~~~~ FUNCTIONS ~~~~~
function start() {
  const users = userData.map(userObject => {
    const user = new User(userObject);
    return user;
  });
  const userRepository = new UserRepository(users);
  userNameGreeting.innerText = `Hello, ${users[5].returnFirstName()}`
}
