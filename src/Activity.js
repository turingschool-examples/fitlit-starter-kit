// const data = require('../data/activity');
// const activityData = data.activityData;
// const scripts = require('./scripts');
//
// const User = require('../src/User');

class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }
  //need to add self to user array
  getFriendsActivity(user, userRepo) {
    let data = this.activityData;
    let userDatalist = user.friends.map(function(friend){
      return userRepo.getDataFromUserID(friend, data)
    });
    return userDatalist.reduce(function(arraySoFar, listItem) {
       return arraySoFar.concat(listItem);
    }, []);
  }
  getFriendsAverageStepsForWeek(user, date, userRepo) {
    let friendsActivity = this.getFriendsActivity(user, userRepo);
    let timeline = userRepo.chooseWeekDataForAllUsers(friendsActivity, date);
    return userRepo.combineRankedUserIDsAndAveragedData(friendsActivity, date, 'numSteps', timeline)
  }
  showChallengeListAndWinner(user, date, userRepo) {
    let rankedList = this.getFriendsAverageStepsForWeek(user, date, userRepo);

    return rankedList.map(function(listItem) {
      let userID = Object.keys(listItem)[0];
      let userName = userRepo.getDataFromID(parseInt(userID)).name;
      return `${userName}: ${listItem[userID]}`
    })
  }
  showcaseWinner(user, date, userRepo) {
    let namedList = this.showChallengeListAndWinner(user, date, userRepo);
    return this.showChallengeListAndWinner(user, date, userRepo).shift()
  }
  getStepStreak(userRepo, id) {
    let data = this.activityData;
    let sortedUserArray = (userRepo.makeSortedUserArray(id, data)).reverse();
    let streaks =  sortedUserArray.filter(function(element, index) {
      if (index >= 2) {
      return (sortedUserArray[index-2].numSteps < sortedUserArray[index-1].numSteps && sortedUserArray[index-1].numSteps < sortedUserArray[index].numSteps)
      // return element.numSteps === sortedUserArray[index].numSteps
      }
    });
    return streaks.map(function(streak) {
      return streak.date;
    })
  }
}


if (typeof module !== 'undefined') {
  module.exports = Activity;
}
