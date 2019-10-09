const data = require('./users');
const userData = data.userData;
console.log("Hello World");

function createUsers(data) {
  let userList = [];
  data.forEach(function(user) {
    const newUser = new User(
      user.id,
      user.name,
      user.address,
      user.email,
      user.strideLength,
      user.dailyStepGoal,
      user.friends
    );
    userList.push(newUser);
  })
  const newRepository = new UserRepository(userList)
}

createUsers(userData)

function getFriends(user) {
  let friendId = user.friends[0];
  let myFriend = userData.find(function(homie) {
    homie.id === friendId;
    return myFriend;
  })
  document.querySelector('.friend-names').innerText = myFriend.name;
  document.querySelector('.friend-steps').innerText = myFriend.dailyStepGoal;
}

getFriends(userData[0]);