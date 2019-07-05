const idNumber = Math.floor(Math.random() * 50) + 1;
const currentUserRepo = new UserRepository(userData, idNumber);
const user = currentUserRepo.findUser();
const currentUser = new User({...user});
const currentHydrationRepo = new HydrationRepository(hydrationData, idNumber);
const hydrationUser = currentHydrationRepo.findHydrationUser();
const currentHydrationUser = new HydrationUser([...hydrationUser]);

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
          <p> On ${currentHydrationUser.array[0].date} You Drank: <span class = "currentDateHydro">${currentHydrationUser.flOzOneDay(currentHydrationUser.array[0].date)} ounces of water!</span> </p>
          <p> Latest Week:<span class = "latestWeekHydro">${currentHydrationUser.flOzOneWeek()}</span> </p>
          <p> Weekly Average: <span class = "weeklyAvgHydro">${currentHydrationRepo.findHydrationAverage()} ounces of water</span> </p>
        </article>`)

