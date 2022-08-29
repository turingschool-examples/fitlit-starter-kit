const chai = require('chai');
const expect = chai.expect;

describe('User', function() {

  it('should be a function', function() {
    var user = new User();

    expect(User)to.be.a('function')
  });

  it('should take in user information', function() {
    var user = new User(data);

    expect()to.()
  });

  it('should represent single user', function() {
    var user = new User(data);

    expect(data.name)to.equal('')
  });

  it('each user should have an ID', function() {
    var user = new User(data);

    expect()to.()
  });

  it('each user should have address', function() {
    var user = new User(data);

    expect()to.()
  });

  it('each user should have email', function() {
    var user = new User(data);

    expect()to.()
  });

  it('each user should have stride length', function() {
    var user = new User(data);

    expect()to.()
  });

  it('each user should have daily step goal', function() {
    var user = new User(data);

    expect()to.()
  });

  it('each user should have friends', function() {
    var user = new User(data);

    expect()to.()
  });

  it('should be return user first name only', function() {
    var user = new User(data);

    user.returnUserFirstName()

    expect(user.name)to.equal('')
  });

});
