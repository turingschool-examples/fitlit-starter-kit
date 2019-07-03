// $(document).ready(() => {
 
    // const UserRepository = require('../src/userRepository.js')
   if (const dataset = require('../data/users.js') !== 'undefined'){
       const dataset = require('../data/users.js'
   }
    
    const data = dataset
    let userRepository = new UserRepository(data, randomId)
    
    let randomId = function() {
        Math.floor(Math.random()*50 + 1)
    }
    randomId();
    console.log(randomId)
    let randomUser = randomId
    let currentUser = data.find(user => user.id === randomUser)

    $('user-name__display').text(userRepository.getFirstName(currentUser.name))

// });
