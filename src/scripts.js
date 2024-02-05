// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
// import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png';

// An example of how you tell webpack to use a JS file
import users from './data/users';

// Example of one way to import functions from the domUpdates file.  You will delete these examples.
// import { exampleFunction1, exampleFunction2 } from './domUpdates';

// exampleFunction1('Travis');
// exampleFunction2('Travis')

export function getUserData(userID, users) {
    let findUser = users.find((user) => {
        return user.id === userID;
    });
    // let findUser1 = findUser.friends.map((friend) => {
    //     users.filter((user) => {
    //         return user.id === friend
    //     })
    // })
    // console.log('here', findUser1)
    // let findUser2 = findUser1.map((friend) => {
    //     return {name: friend.name, dailyStepGoal: friend.dailyStepGoal}
    // })
    // // console.log('here', findUser2)
    // return findUser2;
    let friendsList = [];
    findUser.friends.forEach(friend => {
        friendsList.push(findFriend(friend))
        
    });
    // let updatedFriends = findUser.friends.map((friend) => {
        
    // })
    // console.log(findUser);
    
}

export function getAverageSteps(users) {
    let totalSteps = users.reduce((total, user) => {
        total += user.dailyStepGoal;
        return total;
    }, 0)
    return Math.round(totalSteps / users.length);
}
