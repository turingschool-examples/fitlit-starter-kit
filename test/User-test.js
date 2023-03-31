import { expect } from 'chai';
import User from '../src/user.js';

describe('User', () => {
    
    
    
    it('should be a function', function () {
        const userData = {
            users: [{
              id: 1,
              name: 'John Doe',
              address: '123 Main St',
              email: 'johndoe@example.com',
              strideLength: 2.5,
              dailyStepGoal: 10000,
              friends: [2, 3]
            }]
        }
            const user = new User(userData);
            expect(User).to.be.a('function');
        });

    it('should create a new user object with the provided data', () => {
      const userData = {
        users: [{
          id: 1,
          name: 'John Doe',
          address: '123 Main St',
          email: 'johndoe@example.com',
          strideLength: 2.5,
          dailyStepGoal: 10000,
          friends: [2, 3]
        }]
      };
  
            const user = new User(userData);
        
            expect(user.userId).to.equal(1);
            expect(user.userName).to.equal('John Doe');
            expect(user.address).to.equal('123 Main St');
            expect(user.email).to.equal('johndoe@example.com');
            expect(user.strideLength).to.equal(2.5);
            expect(user.dailyStepGoal).to.equal(10000);
            expect(user.friends).to.deep.equal([2, 3]);
            });
    
    it('should store a users id', () => {
        const userData = {
        users: [{
            id: 1,
            name: 'John Doe',
            address: '123 Main St',
            email: 'johndoe@example.com',
            strideLength: 2.5,
            dailyStepGoal: 10000,
            friends: [2, 3]
        }]
    };
            const user = new User(userData);
            expect(user.userId).to.equal(1);
    });

    it('should store a user name', () => {
        const userData = {
        users: [{
            id: 1,
            name: 'John Doe',
            address: '123 Main St',
            email: 'johndoe@example.com',
            strideLength: 2.5,
            dailyStepGoal: 10000,
            friends: [2, 3]
        }]
    };
            const user = new User(userData);
            expect(user.userName).to.equal("John Doe");

    });
        it('should store a user address', () => {
            const userData = {
        users: [{
            id: 1,
            name: 'John Doe',
            address: '123 Main St',
            email: 'johndoe@example.com',
            strideLength: 2.5,
            dailyStepGoal: 10000,
            friends: [2, 3]
        }]
    };
            const user = new User(userData);
            expect(user.address).to.equal("123 Main St");
        });
        
        it('should store a user email', () => {
                const userData = {
            users: [{
                id: 1,
                name: 'John Doe',
                address: '123 Main St',
                email: 'johndoe@example.com',
                strideLength: 2.5,
                dailyStepGoal: 10000,
                friends: [2, 3]
            }]
        };
            const user = new User(userData);
            expect(user.email).to.equal('johndoe@example.com');
        });
        
        it('should store the stridelength of the user', () => {
                const userData = {
            users: [{
                id: 1,
                name: 'John Doe',
                address: '123 Main St',
                email: 'johndoe@example.com',
                strideLength: 2.5,
                dailyStepGoal: 10000,
                friends: [2, 3]
            }]
        };
            const user = new User(userData);
            expect(user.strideLength).to.equal(2.5);
        });

        it('should store the daily step goal of the user', () => {
            const userData = {
            users: [{
                id: 1,
                name: 'John Doe',
                address: '123 Main St',
                email: 'johndoe@example.com',
                strideLength: 2.5,
                dailyStepGoal: 10000,
                friends: [2, 3]
            }]
        };
            const user = new User(userData);
            expect(user.dailyStepGoal).to.equal(10000);
        });
        
        it.skip('should store friends', () => {
            const userData = {
            users: [{
                id: 1,
                name: 'John Doe',
                address: '123 Main St',
                email: 'johndoe@example.com',
                strideLength: 2.5,
                dailyStepGoal: 10000,
                friends: [2, 3]
            }]
        };
            const user = new User(userData);
            expect(user.friends).to.equal([2, 3]);
        }); 
        
        it.skip('should find the overall step goal average', () => {
            const userData = {
            users: [
                {
                id: 1,
                name: 'John Doe',
                address: '123 Main St',
                email: 'johndoe@example.com',
                strideLength: 2.5,
                dailyStepGoal: 10000,
                friends: [2, 3]
                },
                {
                id: 2,
                name: 'Jane Doe',
                address: '123 Main St',
                email: 'janedoe@example.com',
                strideLength: 2.5,
                dailyStepGoal: 10000,
                friends: [1]
                }]
            };
                const user = new User(userData);
                const average = user.findOverAllStepGoalAvg();
                expect(average).to.be.equal(10000);
                });

        it.skip('should find the users first name', () => {
            const userData = {
            users: [
                {
                id: 1,
                name: 'John Doe',
                address: '123 Main St',
                email: 'johndoe@example.com',
                strideLength: 2.5,
                dailyStepGoal: 10000,
                friends: [2, 3]
                }]
            };
                const user = new User(userData);
                const firstName = user.userFirstName();
                expect(firstName).to.be.equal('John');
            });
            it.skip('should find a user by id', () => {
                const userData = {
                users: [
                    {
                    id: 1,
                    name: 'John Doe',
                    address: '123 Main St',
                    email: 'johndoe@example.com',
                    strideLength: 2.5,
                    dailyStepGoal: 10000,
                    friends: [2, 3]
                    }]
                };
                const user = new User(userData);
                const nameById = user.findUserById()
                expect(nameById).to.be.equal(1);
                });    
           })
    
   
    // more test cases go here



//

//    

//     it('should find a user by id', function () {
//         expect(testUserID.findUserbyId(48)).to.deep.equal({
//             "id": 48,
//             "name": "Kenny Zboncak",
//             "address": "2077 West Loaf, Lilianefort SD 09435",
//             "email": "Aliza.Schulist2@hotmail.com",
//             "strideLength": 2.5,
//             "dailyStepGoal": 7000,
//             "friends": [
//                 33,
//                 23,
//                 46,
//                 8
//             ]
//         });
//     });

//     it('should generate a random user', function () {
//         expect(testUserID.generateRandomUser().id).to.be.below(51);
//         expect(testUserID.generateRandomUser().id).to.be.above(45);
//     });

//     it('should generate a random user with all of their user info', function () {
//         expect(testUserID.generateRandomUser().name).to.be.a('string');
//         expect(testUserID.generateRandomUser().address).to.be.a('string')
//         expect(testUserID.generateRandomUser().email).to.be.a('string')
//         expect(testUserID.generateRandomUser().strideLength).to.be.a('number')
//         expect(testUserID.generateRandomUser().dailyStepGoal).to.be.a('number')
//         expect(testUserID.generateRandomUser().friends).to.be.an('array')
//     });

// });