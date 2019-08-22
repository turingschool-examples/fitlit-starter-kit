// const data = require('../data/users.js');
const uniqueUserIndex = 1;
// Math.floor(Math.random() * (50 - 1 + 1)) +1;
// const uniqueUserId = uniqueUserIndex + 1;
const userRepo = new UserRepository(userData);
// const currentUser = userRepo.data.find(function(user) {
//   return user.id === uniqueUserIndex
// })
const currentUser = userRepo.data.find(user => user.id === uniqueUserIndex)
const user = new User(currentUser);

$('.user_card-name-span').text(user.getUserFirstName(1));
$('.step_goal-user-span').text(`${user.dailyStepGoal}`);
$('.step_goal-all-average-span').text(userRepo.averageStepGoal());

funtion findToday() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
}