import { updateUserInfo } from "./domUpdates";

function getUserData(userID, users) {
  let findUser = users.find((user) => {
    return user.id === userID;
  });
  let updatedFriends = findUser.friends.map((friend) => {
    return users.find((match) => {
      return match.id === friend;
    });
  });
  findUser.friends = updatedFriends;
  return findUser;
}

function getAverageSteps(users) {
  let totalSteps = users.reduce((total, user) => {
    total += user.dailyStepGoal;
    return total;
  }, 0);
  return Math.round(totalSteps / users.length);
}

export { 
  getUserData,
  getAverageSteps
}
