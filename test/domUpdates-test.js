// import { expect } from 'chai';

// import {
//     displayWelcomeMessage,
//     displayStepGoal,
//     compareStepGoalToAverage,
//     updateAccountName,
//     updateAccountAddress,
//     updateAccountEmail,
//     updateAccountStride,
//     updateAccountStep,
//     updateAccountFriends
// } from '..src/domUpdates'

// describe('domUpdates', () => {
//     let user1
    
//     beforeEach(function() {
//         user1 = {
//             "id": 126,
//             "name": "Alexa Johns",
//             "address": "1844 Jaskolski Garden, New Carolinatown TX 93401-8847",
//             "email": "Alexa.Johns@example.com",
//             "strideLength": 4.3,
//             "dailyStepGoal": 10000,
//             "friends": [125, 22, 8]
//         }
//     });

//     it('should write a welcome message', function () {
//         displayWelcomeMessage(user1)
//         const welcomeMessageElement = document.querySelector('.welcome-message');
//         expect(welcomeMessageElement.textContent).to.equal('Welcome back, Alexa!');
//     });
// });