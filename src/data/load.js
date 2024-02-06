// const { default: users } = require("./users")
import users from "./users"
console.log("load:", users)

var randomUser = []

function generateUser(id) {
    return users.users.find(user => user.id === id)
};

/* */

function getAverageStepGoal() {
  const totalStepsGoal = users.users.reduce((total, user) => total + user.dailyStepGoal, 0);
  let averageSteps = totalStepsGoal / users.users.length;  
  return averageSteps
}

module.exports = {
    generateUser,
    getAverageStepGoal
}