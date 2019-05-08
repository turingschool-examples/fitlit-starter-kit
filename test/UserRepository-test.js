const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');

const UserRepository = require('../src/UserRepository');

describe('UserRepository', function() {

  it('should be a function', function() {
    const userRepository = new UserRepository();
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    const userRepository = new UserRepository();
    expect(userRepository).to.be.an.instanceof(UserRepository);
  }); 

  it('should return all the user information', function() {
    const user1 = new User(1, "Nyasia Weber", "270 August Meadows, Maribelside SD 36129", "Jordane_Schultz@yahoo.com", 4.7, 8000);
    const user2 = new User(2, "Shayne Swift", "747 Dickinson Gardens, South Helga AR 88484-2240", "Lawson74@yahoo.com", 4.5, 11000);
    const user3 = new User(5, "Grady Wolff", "45657 Lindgren Ramp, New Marysechester MT 41312", "Isadore42@gmail.com", 5.5, 11000);
    
    const userRepository = new UserRepository([user1, user2, user3]);

    expect(userRepository.users.length).to.equal(3);
  });  

  it('should return the data of a user based on the id of the user', function() {
    const user1 = new User(1, "Nyasia Weber", "270 August Meadows, Maribelside SD 36129", "Jordane_Schultz@yahoo.com", 4.7, 8000);
    const user2 = new User(2, "Shayne Swift", "747 Dickinson Gardens, South Helga AR 88484-2240", "Lawson74@yahoo.com", 4.5, 11000);
    const user3 = new User(5, "Grady Wolff", "45657 Lindgren Ramp, New Marysechester MT 41312", "Isadore42@gmail.com", 5.5, 11000);
    
    const userRepository = new UserRepository([user1, user2, user3]);

    expect(userRepository.returnUserData(2)).to.equal(user2);
  });  

  it('should store the address of the user', function() {
    const user1 = new User(1, "Nyasia Weber", "270 August Meadows, Maribelside SD 36129", "Jordane_Schultz@yahoo.com", 4.7, 8000);
    const user2 = new User(2, "Shayne Swift", "747 Dickinson Gardens, South Helga AR 88484-2240", "Lawson74@yahoo.com", 4.5, 11000);
    const user3 = new User(5, "Grady Wolff", "45657 Lindgren Ramp, New Marysechester MT 41312", "Isadore42@gmail.com", 5.5, 11000);
    const user4 = new User(12, "Alanna Kerluke", "8350 Bailee Motorway, South Pascale AR 08695-4819", "Eldon15@yahoo.com", 4.6, 11000);
    
    const userRepository = new UserRepository([user1, user2, user3, user4]);

    expect(userRepository.returnAverageStepGoal()).to.equal(10250);
  });
  

  it('should return the addresses of all users', function() {
    const user1 = new User(1, "Nyasia Weber", "270 August Meadows, Maribelside SD 36129", "Jordane_Schultz@yahoo.com", 4.7, 8000);
    const user2 = new User(2, "Shayne Swift", "747 Dickinson Gardens, South Helga AR 88484-2240", "Lawson74@yahoo.com", 4.5, 11000);
    const user3 = new User(5, "Grady Wolff", "45657 Lindgren Ramp, New Marysechester MT 41312", "Isadore42@gmail.com", 5.5, 11000);
    const user4 = new User(12, "Alanna Kerluke", "8350 Bailee Motorway, South Pascale AR 08695-4819", "Eldon15@yahoo.com", 4.6, 11000);
    const userRepository = new UserRepository([user1, user2, user3, user4]);

    expect(userRepository.returnAllUsersAddresses()).to.eql(['270 August Meadows, Maribelside SD 36129', '747 Dickinson Gardens, South Helga AR 88484-2240', '45657 Lindgren Ramp, New Marysechester MT 41312', '8350 Bailee Motorway, South Pascale AR 08695-4819']);
  });

  it('should store all the home states of the users', function() {
    const user1 = new User(1, "Nyasia Weber", "270 August Meadows, Maribelside SD 36129", "Jordane_Schultz@yahoo.com", 4.7, 8000);
    const user2 = new User(2, "Shayne Swift", "747 Dickinson Gardens, South Helga AR 88484-2240", "Lawson74@yahoo.com", 4.5, 11000);
    const user3 = new User(5, "Grady Wolff", "45657 Lindgren Ramp, New Marysechester MT 41312", "Isadore42@gmail.com", 5.5, 11000);
    const user4 = new User(12, "Alanna Kerluke", "8350 Bailee Motorway, South Pascale AR 08695-4819", "Eldon15@yahoo.com", 4.6, 11000);
    const userRepository = new UserRepository([user1, user2, user3, user4]);

    expect(userRepository.returnAllStates()).to.eql(["SD", "AR", "MT", "AR"]);
  });

  it('should store the most common home state of the users', function() {
    const user1 = new User(1, "Nyasia Weber", "270 August Meadows, Maribelside SD 36129", "Jordane_Schultz@yahoo.com", 4.7, 8000);
    const user2 = new User(2, "Shayne Swift", "747 Dickinson Gardens, South Helga AR 88484-2240", "Lawson74@yahoo.com", 4.5, 11000);
    const user3 = new User(5, "Grady Wolff", "45657 Lindgren Ramp, New Marysechester MT 41312", "Isadore42@gmail.com", 5.5, 11000);
    const user4 = new User(12, "Alanna Kerluke", "8350 Bailee Motorway, South Pascale AR 08695-4819", "Eldon15@yahoo.com", 4.6, 11000);
    const userRepository = new UserRepository([user1, user2, user3, user4]);

    expect(userRepository.returnMostFrequentState()).to.equal("AR");
  });

});
  


