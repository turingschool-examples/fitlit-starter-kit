
const data = {
  users: userData,
  hydration: hydrationData,
  sleep: sleepData,
  activity: activityData
}
const userRepository = new UserRepository(data);
const user = new User(userRepository.findUserByName('Luisa Hane'));
console.log(user);


function getFriends(user) {
  let friendId = user.friends[0];
  let myFriend = userData.find(function(homie) {
    homie.id === friendId;
    return myFriend;
  })
  document.querySelector('.friend-names').innerHTML = `Name: ${myFriend.name}`;
  document.querySelector('.friend-steps').innerText = myFriend.dailyStepGoal;
}

getFriends(user);