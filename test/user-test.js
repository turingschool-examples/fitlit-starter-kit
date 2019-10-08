const chai = require('chai');
const expect = chai.expect;

const User = require('../src/user');

describe('User', function() {
  it('should be a function', function() {
    const user = new User ({id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3,dailyStepGoal: 10000, friends: [16, 4, 8]});

    expect(User).to.be.a('function');
  })

  it('should be an instance of User', function() {
    const user = new User ({id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3,dailyStepGoal: 10000, friends: [16, 4, 8]});

    expect(user).to.be.an.instanceOf(User);
  })

  it('should store an ID', function() {
    const user = new User ({id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3,dailyStepGoal: 10000, friends: [16, 4, 8]});

    expect(user.id).to.equal(1);
  })

  it('should store a name', function() {
    const user = new User ({id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3,dailyStepGoal: 10000, friends: [16, 4, 8]});

    expect(user.name).to.equal('Luisa Hane');
  })

  it('should store an address', function() {
    const user = new User ({id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3,dailyStepGoal: 10000, friends: [16, 4, 8]});

    expect(user.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
  })

  it('should store a name', function() {
    const user = new User ({id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3,dailyStepGoal: 10000, friends: [16, 4, 8]});

    expect(user.email).to.equal('Diana.Hayes1@hotmail.com');
  })

  it('should store a users stride length in feet', function() {
    const user = new User ({id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3,dailyStepGoal: 10000, friends: [16, 4, 8]});

    expect(user.strideLength).to.equal(4.3);
  })

  it('should store a users daily step goal', function() {
    const user = new User ({id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3,dailyStepGoal: 10000, friends: [16, 4, 8]});

    expect(user.dailyStepGoal).to.equal(10000);
  })

  it('should store the friends of a user', function() {
    const user = new User ({id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3,dailyStepGoal: 10000, friends: [16, 4, 8]});

    expect(user.friends).to.deep.equal([16, 4, 8]);
  })

  it('should give back only the first name of a user', function() {
    const user = new User ({id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3,dailyStepGoal: 10000, friends: [16, 4, 8]});

    expect(user.getFirstName()).to.equal('Luisa');
  })
})