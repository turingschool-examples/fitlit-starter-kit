const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const UsersRepo = require('../src/UsersRepo');
const UserHydration = require('../src/UserHydration');
const userData = require('../subset_data/users-subset');
const hydrationData = require('../subset_data/hydration-subset');


beforeEach(function() {
    usersRepo = new UsersRepo(userData);
    userHydration = new UserHydration(usersRepo.getUserById(1), hydrationData);
  });


  describe('UserHydration Test', function() {

      it('should be a function', function() {
        expect(UserHydration).to.be.a('function');
      });

      it('should be an instance of UserHydration', function() {
      expect(userHydration).to.be.an.instanceof(UserHydration);
    });

    it('should return an users avg ounces for all of time', function() {
      expect(userHydration.avgUserFluidOncesDateAllTime()).to.equal(56.14);
    });

    it('should return user Ounces for one specific date', function() {
      expect(userHydration.userOuncesByDate('2019/06/15')).to.equal(37);
    });

    it('should return user Ounces for one week', function() {
      expect(userHydration.userOuncesByWeek()).to.deep.equal([ 43, 39, 61, 51, 52, 29, 57 ]);
    });

  })
