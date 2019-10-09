const expect = require('chai').expect;
const User = require('../src/User');
const userData = require('../subData.js/usersSubData');

describe('Users', () => {
  let user;

  beforeEach(() => {
    user = new User({
      id: 5,
      name: 'Erick Schaden',
      address: '514 Mayert Walk, Jordaneside SC 55023-6523',
      email: 'Vanessa_Gerhold@gmail.com',
      strideLength: 3.1,
      dailyStepGoal: 8000,
      friends: [13, 44, 49, 33, 10]
    });
  });
  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should return first name only', () => {
    const firstName = user.getFirstName();
    expect(firstName).to.equal('Erick')
  })
})  