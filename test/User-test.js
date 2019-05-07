const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

describe('User', function() {

  it('should be a function', function() {
    const user = new User();
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    const user = new User();
    expect(user).to.be.an.instanceof(User);
  }); 

  it('should store an id', function() {
    const user = new User(5, "Grady Wolff", "45657 Lindgren Ramp, New Marysechester MT 41312", "Isadore42@gmail.com", 5.5, 11000);
    expect(user.id).to.equal(5);
  });  

  it('should store a name', function() {
    const user = new User(5, "Grady Wolff", "45657 Lindgren Ramp, New Marysechester MT 41312", "Isadore42@gmail.com", 5.5, 11000);
    expect(user.name).to.equal("Grady Wolff");
  });  

  it('should store the address of the user', function() {
    const user = new User(5, "Grady Wolff", "45657 Lindgren Ramp, New Marysechester MT 41312", "Isadore42@gmail.com", 5.5, 11000);
    expect(user.address).to.equal("45657 Lindgren Ramp, New Marysechester MT 41312");
  });
  
  it('should store the email address of the user', function() {
    const user = new User(5, "Grady Wolff", "45657 Lindgren Ramp, New Marysechester MT 41312", "Isadore42@gmail.com", 5.5, 11000);
    expect(user.email).to.equal("Isadore42@gmail.com");
  });

  it('should store the strideLength of the user', function() {
    const user = new User(5, "Grady Wolff", "45657 Lindgren Ramp, New Marysechester MT 41312", "Isadore42@gmail.com", 5.5, 11000);
    expect(user.strideLength).to.equal(5.5);
  });

  it('should store the dailyStepGoal of the user', function() {
    const user = new User(5, "Grady Wolff", "45657 Lindgren Ramp, New Marysechester MT 41312", "Isadore42@gmail.com", 5.5, 11000);
    expect(user.dailyStepGoal).to.equal(11000);
  });

  it('should return the first name of the user', function() {
    const user = new User(5, "Grady Wolff", "45657 Lindgren Ramp, New Marysechester MT 41312", "Isadore42@gmail.com", 5.5, 11000);
    expect(user.returnFirstName()).to.equal("Grady");
  });


});