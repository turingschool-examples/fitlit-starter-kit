const randomUser = Math.ceil(Math.random() * 50);
const userRepository = new UserRepository(userData);
const user = new User(userRepository.getUserData(randomUser));

function userHandler() {

}
