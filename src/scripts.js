$(document).ready(function() {

const randomUser = Math.floor(Math.random() * 50 ) 
const userRepository = new UserRepository(userData);
const hydration = new Hydration(hydrationData);
// const sleep = new Sleep();
// const sleepRepository = new SleepRepository();
// const activity = new Activity();
// const activityRepository = new ActivityRepository();

//the above code is commented out until we finish each of those iterations

const user = new User(userData[randomUser]);

    $('#random-user-span').text(user.getFirstName());
    $('#article__user--name').text(user.getFirstName());
    $('#article__user--address').text(userData.address);
    $('#article__user--email').text(userData.email);
    $('#article__user--stridelength').text(userData.strideLength);
    $('#article__user--stepgoal').text(userData.dailyStepGoal);
    $('#article__user--stepcompare').text();
    $('#article__user--currentsleep').text();
    $('#article__user--weekssleep').text();
    $('#article__user--avgsleep').text();
    $('#article__user--todaysteps').text();
    $('#article__user--activemins').text();
    $('#article__user--todaydistance').text();
    $('#article__user--weeklyview').text();
    $('#article__user--comparesteps').text();
    $('#article__user--comparemins').text();
    $('#article__user--comparestairs').text();



});