//instantiate users
//choose user
//Get user from
//Get user stuff and put it places
// const User = ('./User');
const data = ('../data/users');

var sidebarName = document.getElementById('sidebarName');

function startApp() {
  let userList = [];
  makeUsers(userList);
  console.log(userList);
  let userNow = getUserById(pickUser(), userList);
  console.log(userNow);
  sidebarName.innerText = userNow.data.name;
  console.log(userList);

}

function makeUsers(array) {
  userData.forEach(function(data) {
    let user = new User(data);
    array.push(user);
  })
}

function pickUser() {
  return 1
  //make this a random id
}

function getUserById(id, array) {
  return array.find((user) => (user.data.id === id));
}

startApp();



console.log("Hello World");
