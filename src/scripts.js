const currentUserRepo = new UserRepository(userData, Math.floor(Math.random() * 50) + 1);
const user = currentUserRepo.findUser();
const currentUser = new User({...user});

console.log(currentUser)

$('.userFirstName').text(currentUser.giveName());