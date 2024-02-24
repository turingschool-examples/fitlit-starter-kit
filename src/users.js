import account from '../src/data/users-test-data'

// ----- * Users * ----- //

function generateRandomUser() {
    const randomIndex = Math.floor(Math.random() * account.users.length);
    return account.users[randomIndex];
}

function getAccountFriends(user) {
    var friendArr = user.friends
    var friendNames = account.users.reduce((acc, account) => {
    if (friendArr.includes(account.id)) {
        acc.push(account.name)
    }
    return acc
    }, [])
    return friendNames.join(" - ")
}

function getAverageStepGoal(account) {
    const totalStepsGoal = account.users.reduce((total, user) => total + user.dailyStepGoal, 0);
    return totalStepsGoal / account.users.length;
    }


export {
    generateRandomUser,
    getAccountFriends,
    getAverageStepGoal,
}

