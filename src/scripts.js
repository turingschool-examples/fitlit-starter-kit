const idNumber = Math.floor(Math.random() * 50) + 1;
const currentUserRepo = new UserRepository(userData, idNumber);
const user = currentUserRepo.findUser();
const currentUser = new User({...user});
const currentHydrationRepo = new HydrationRepository(hydrationData, idNumber);
const hydrationUser = currentHydrationRepo.findHydrationUser();
const currentHydrationUser = new HydrationUser([...hydrationUser]);
const currentSleepRepo = new SleepRepository(sleepData, idNumber);
const sleepUser = currentSleepRepo.findSleepUser();
const currentSleepUser = new SleepUser([...sleepUser]);

console.log(currentUser)

$('.userFirstName').text(currentUser.giveName());

$('.infoDisplay').append(`
	<article class = "userInfo">
	  <p> name: <span class = "userName">${currentUser.name}</span> </p>
	  <p> address: <span class = "address">${currentUser.address}</span> </p>
	  <p> email: <span class = "email">${currentUser.email}</span> </p>
	  <p> strideLength: <span class = "strideLength">${currentUser.strideLength} </span> </p>
	  <p> dailyStepGoal: <span class = "dailyStepGoal">${currentUser.dailyStepGoal} </span> </p>
	  <p>Friends</p>
	  <ul>
	    <li>friend1</li>
	    <li>friend2</li>
	    <li>friend3</li>
	  </ul>
	</article>`)

console.log(currentHydrationUser.flOzOneWeek())

$('.infoDisplay').append(`<article class = "hydrationInfo">
          <p> On ${currentHydrationUser.array[currentHydrationUser.array.length - 1].date} You Drank: <span class = "currentDateHydro">${currentHydrationUser.flOzOneDay(currentHydrationUser.array[0].date)} ounces of water!</span> </p>
          <p> Latest Week:<span class = "latestWeekHydro">${currentHydrationUser.flOzOneWeek()}</span> </p>
          <p> Weekly Average: <span class = "weeklyAvgHydro">${currentHydrationRepo.findHydrationAverage()} ounces of water</span> </p>
        </article>`)

$('.infoDisplay').append(`<article class = "sleepInfo">
    <p> On ${currentSleepUser.array[currentSleepUser.array.length - 1].date} you slept ${currentSleepUser.sleepOneDay(currentSleepUser.array[currentSleepUser.array.length - 1].date)} hours with a sleep quality of ${currentSleepUser.sleepQualityOneDay(currentSleepUser.array[currentSleepUser.array.length - 1].date)}!</p>
    <p> Here are the hours of sleep for the last week: ${currentSleepUser.sleepOneWeek('2019/09/16', '2019/09/22')}</p>
    <p> Here is the quality of sleep for the last week: ${currentSleepUser.sleepQualityOneWeek('2019/09/16', '2019/09/22')}</p>
    <p> Here is your average sleep hours for all time: ${currentSleepRepo.findUserSleepAverage()}</p>
     <p> Here is your average sleep quality for all time: ${currentSleepRepo.findUserSleepQualityAverage()}</p>`)
