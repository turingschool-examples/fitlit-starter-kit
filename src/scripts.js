console.log("Hello World");

function getFriends(user) {
  let friendId = user.friends[0];
  let myFriend = userData.find(function(homie) {
    homie.id === friendId;
    return myFriend
  })
  let domFriends = document.querySelector('.friend-names');
  let domFriendSteps = document.querySelector('.friend-steps');
  domFriends.innerText = myFriend.name;
  domFriendSteps.innerText = myFriend.dailyStepGoal;
}

