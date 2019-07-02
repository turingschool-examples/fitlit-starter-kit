const dataset = require('../data/users.js')
const UserRepository = require('../src/userRepository.js')

const data = dataset.userData
const randomId = Math.floor(Math.random()*50 + 1)
const userRepository = new UserRepository(data, randomId)

