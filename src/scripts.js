
const data = {
  users: userData,
  hydration: hydrationData,
  sleep: sleepData,
  activity: activityData
}
const userRepository = new UserRepository(data);
const user = new User(userRepository.findUserByName('Luisa Hane'));

function getFriends(user) {
  let friendId = user.friends[0];
  let myFriend = userRepository.usersData.find(function(homie) {
    return homie.id === friendId;
  });
  document.querySelector('.friend-names').innerHTML = `Name: ${myFriend.name}`;
  document.querySelector('.friend-steps').innerText = `Step Goal: ${myFriend.dailyStepGoal}`;
}

getFriends(user);

