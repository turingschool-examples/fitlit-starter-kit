$(document).ready(() => {
    currentDate = new Date();
    const userRepository = new UserRepository(userData);
    const randomId = Math.ceil(Math.random() * 50 - 1);
    userRepository.returnCurrentUser(randomId)
    const currentPerson = userRepository.currentUser
    console.log(currentPerson)
    const user = new User(currentPerson);
    const firstName = currentPerson.name.split(' ');
    const hydration = new Hydration(hydrationData, currentPerson.id);
    console.log(hydration.calculateAvgDailyAmtDrankByUserIdAllTime(currentPerson.id))
    // console.log(hydration)


    $('.date').text(currentDate);
    $('.welcome-user').text(firstName[0]);
    $("#myChart")   


})
