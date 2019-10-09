$(document).ready(() => {
    currentDate = new Date();
    const userRepository = new UserRepository(userData);
    const randomId = Math.ceil(Math.random() * 50 - 1);
    userRepository.returnCurrentUser(randomId)
    const currentPerson = userRepository.currentUser
    console.log(currentPerson)
    console.log(userRepository.returnCurrentUser())
    // const user = new User(randomUser);


    $('.date').text(currentDate);
    $('.welcome-user').text(currentPerson.name);
    

})