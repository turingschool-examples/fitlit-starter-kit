let randomNum = null
let user = undefined
// const data = require('../data/users.js')

function getRandomNum() {
    randomNum = Math.floor((Math.random() * 50) + 1)

}

$(window).on('load', function () {
    console.log(userData)
    getRandomNum()
    makeUsers(userData);

    $('.header_h1_span').text(`${user.returnFirstName()}`);

})

function makeUsers(data) {
    let userRepository = new UserRepository(data)
    userRepository.findUser(randomNum)
    console.log(userRepository.currentUser)
     user = new User(userRepository.currentUser);
    // $('.header_h1_span').text(`${user.returnFirstName()}`);

}