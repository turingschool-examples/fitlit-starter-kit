$(document).ready(function() {
    const randomIndex = Math.floor(Math.random() * (userData.length - 1) + 1)       
    const randomUser = userData.find(user => user.id === randomIndex)
    const user = new User(randomUser);
    const users = new UserRepo(userData);
    const hydro = new Hydration(hydrationData);
    const sleep = new Sleep(sleepData);
    const activity = new Activity(activityData);
    $('.user-name').text(`${user.returnFirstName(randomUser)}`)
})

$(document).ready(function() {

})