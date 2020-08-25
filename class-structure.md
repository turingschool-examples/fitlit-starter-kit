UserRepository:
1.11 we want to have a class "UserRepository"
1.11 this will hold onto all of the user objects in an array
1.11 lets make userObjects a property and assign it to an array of the user objects
1.11 it should have a parameter to take in data(activity, hydration, or sleep)

1.12 create a method that;
1.12 based on the the data['userID'], finds the specific object from the data array that corresponds
1.12 return this object

1.13 create a method that;
1.13 reduces userObjects['dailyStepGoal']
1.13 adds all of these values
1.13 divides this total by the userObjects.length
1.13 returns the average step goal amongst all users


User:
1.21 create a User class that;
1.21 represents a single user (new User(UserRepository.returnUserData(id))) <= 1.12 =>
1.21 * each user holds onto it's data (as seen above)

1.22 Assign properties that correspond to the users ('id', 'name', 'address', 'email', 'strideLength', 'dailyStepGoal', 'friends')

1.23 create a method that returns this.name

?? Do I need a method that returns each individual users steps?


Dashboard:
** There should not be any DOM manipulation within the User or UserRepository class files

** use the scripts.js file to add information to the DOM

1.31 Create an info card on the dashboard with all of user’s info on the page
  1.31.1 run UserRepository.returnUser <= 1.12 =>
  1.31.2 assign DOM elements to corresponding user elements

1.32 display first name prominently on DOM, and welcome them
  1.32.1 run User.returnName <= 1.23 =>
  1.32.2 assign DOM elements to corresponding user elements

1.33 display user-steps and average-steps on DOM
  1.33.1 run UserRepository.returnAverageSteps() <= 1.13 =>
  1.33.2 run method from user class to return userSteps <= ?? =>
  1.33.3 display a comparison of <= 1.33.2 => to <= 1.33.1 => (userSteps vs averageSteps)


Testing:
** You should not use the original data files in the data directory for testing

** By creating this sample dataset, you will also know if your methods are working correctly because you can do the calculations by hand with a much smaller dataset

1.4 Write tests for all classes, their properties, and their methods from now on for all iterations.

1.41 Create a small, sample datasets that match the structure of the application data
  1.41.1 maybe 5 objects in an array that represent sample users

1.42 When you test a JavaScript class file, you need to use module.exports
  1.42.1  if (typeof module !== 'undefined') {
          module.exports = someClassName;
        }

Hydration:

  Data:
  2.1 Create Hydration class
    2.12 run <= 1.12 => to get access to specific user
    2.13 check specificUser['id'] to hydrationData['userID'] to return array of user's hydration data
    ** maybe make this function global so we can check specificUser['id'] === ['dataSet']['userID']

    2.14 Create method that returns user's average hydration
      2.14.1 map userDays['numOunces'] to receive a users total hydration
      2.14.2 divide by userDays.length to get average hydration

    2.15 Create method that returns nomOunces per specific date
      2.15.1 check userDays['date'] === input-date to find specific date
      2.15.2 return userDate['numOunces']

  ?  2.16 Create a method that returns number of ounces for a total week
      2.16.1 run <= 2.15.1 => to return specific date
      2.16.2 return userDays['date'] += userDays['date += 1'] += userDays['date += 2'] ... 7 (for a week total)
      *** Will have to go into more detail once we get here

    *** You have to decide which classes should contain each method. Think about whose responsibility it is to own the method.


    Dashboard:
    2.2 For your user (or any user you choose), add:
      2.21 add a display to show how much water they have consumed today
        2.21.1 run <= 2.15 => and set equal to DOM respective element

      2.22 add display to show how much water they have consumed each day over the course of the latest week
        2.22.1 run <= 2.16 => and set equal to DOM respective element


Sleep:
  Data:
    3.1 Create Sleep class
      3.11 run <= 1.12 => to get access to specific user
      3.12 check specificUser['id'] to sleepData['userID'] to return array of user's hydration data

      3.21 Create method that averages hours slept per day
        3.21.1 map userDays['hoursSlept'] to receive a users total hydration
        3.21.2 divide by userDays.length to get averageHoursSlept

      3.22 Create method that averages sleep quality
        3.22.1 map userDays['sleepQuality'] to receive a users total hydration
        3.22.2 divide by userDays.length to get averageSleepQuality

      3.23 Create method to get how many hours they slept for a specific day (identified by a date)
        3.23.1 run same function as <= 2.15.1 => to return userDate
        3.23.2 return userDate['hoursSlept']

      3.24 Create method to get quality of sleep for a specific day (identified by a date)
        3.24.1 run same function as <= 2.15.1 => to return userDate
        3.24.2 return userDate['sleepQuality']

    ?  3.25 Create method for how many hours slept each day over the course of a given week (7 days)
        3.25.1 run <= 2.15.1 => to return specific date
        3.25.2 return userDays['date'] += userDays['date += 1'] += ... userDays['date += 7']
        *** Will have to go into more detail once we get here

    ?  3.26 Create method for how quality of sleep each day over the course of a given week (7 days)
        3.26.1 run <= 2.15.1 => to return specific date
        3.26.2 return userDays['date'] += userDays['date += 1'] += ... userDays['date += 7']
        *** Will have to go into more detail once we get here

      3.27 Create a method that averages all user's sleep
        3.27.1 access and iterate over the entire sleepData array
        3.27.2 map all hoursSlept
        3.27.3 return <= 3.27.2 => / sleepData.length

      3.28 Find all users who average a sleep quality greater than 3 for a given week (7 days)
        3.28.1 run <= 3.22 => on all users
        3.28.2 if <= 3.28.1 => .map is greater than 3, return

      3.29 Create a method that, for a given day (identified by the date), find the users who slept the most number of hours (one or more if they tied)

      ** Make a metric of your own!

  Dashboard:
    3.31 For a user, display their sleep data for the latest day (hours slept and quality of sleep)

    3.32 For a user, display their sleep data over the course of the latest week (hours slept and quality of sleep)

    3.33 For a user, display their all-time average sleep quality and all-time average number of hours slept

Activity:
  Data:
    4.11 For a specific day (specified by a date), return the miles a user has walked based on their number of steps (use their strideLength to help calculate this)
      4.11.1 Find find a date specific to a user
      4.11.2 use math to return their miles walked per day (user['strideLength'], and ['userID']['numSteps'])

    4.12 For a user, (identified by their userID) how many minutes were they active for a given day (specified by a date)?
      4.12.1 run <= 2.15.1 => to get a user date
      4.12.2 find given minutesActive

    4.22 For a user, how many minutes active did they average for a given week (7 days)?
      4.22.1 access a section of users activity data based on a given week
      4.22.2 add all 7 minutesActive and divide by 7 to get average

    4.23 For a user, did they reach their step goal for a given day (specified by a date)?
      4.23.1 run <= 4.11.1 =>
      4.23.2 fund if user['dailyStepGoal'] is greater than user['numSteps']

    4.24 For a user, find all the days where they exceeded their step goal
      4.24.1 iterate over all user's activity data
      4.24.2 return all sets that are greater than user['dailyStepGoal']

    4.25 For a user, find their all-time stair climbing record
      4.25.1 run <= 4.24.1 =>
      4.25.2 find the largest user['numSteps']













.
