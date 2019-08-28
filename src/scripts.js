/***************** Variables *****************/
let name = document.querySelector('.main_user_name');
let address = document.querySelector('.main_user_address');
let email = document.querySelector('.main_user_email');
let stride = document.querySelector('.main_user_strideLength');
let goal = document.querySelector('.main_user_dailyStepGoal');
let friends = document.querySelector('.main_user_friends');
let welcome = document.querySelector('.main_header_welcome');
let hydroList = document.querySelector('.main_hydro_list');
let dailyFluids = document.querySelector('.main_hydro_daily');
let weeklyFluids = document.querySelector('.main_hydro_weekly')
let randoNum = null
let avgSleep = document.querySelector('.main_sleep_average')
let avgQuality = document.querySelector('.main_sleep_average_quality')
let sleepList = document.querySelector('.main_sleep_list');
let sleepWeek = document.querySelector('.main_sleep_weekly');
let sleepQuality = document.querySelector('.main_sleep_quality');
let sleepPerDay = document.querySelector('.main_sleep_specific_day');
let steps = document.querySelector('.main_activity_steps');
let minutes = document.querySelector('.main_activity_minutes');
let miles = document.querySelector('.main_activity_miles');
let activityGoal = document.querySelector('.main_activity_goal');
let activityList = document.querySelector('.main_activity_list');

/*************** Event Listeners *************/
window.addEventListener('load', initializePage(userData, hydrationData, sleepData, activityData))

/***************** Functions *****************/
function getRandoNum() {
randoNum = Math.floor(Math.random() * 50) + 1  
}

function initializePage(data, hydro, sleepy, activity) {
	getRandoNum();
	const userRepository = new UserRepository(data)
	userRepository.findUser(randoNum)
	const user = new User(userRepository.currentUser)
	const user2 = userRepository.data
	const hydroRepository = new HydroRepository(hydro)
	hydroRepository.findUserID(randoNum);
	const userHydro = new UserHydro(hydroRepository.currentUser)
	sleepRepository = new SleepRepository(sleepy)
	sleepRepository.findUserID(randoNum);
	const sleep = new Sleep(sleepRepository.currentUser)
	const sleep2 = new Sleep(sleepRepository.data)
	activityRepository = new ActivityRepository(activity);
	activityRepository.findUserID(randoNum);
	const activity1 = new Activity(activityRepository.currentUser, userRepository.currentUser);
	name.innerHTML = `Name: ${user.name}`
	address.innerHTML = `Address: ${user.address}`
	email.innerHTML = `Email: ${user.email}`
	stride.innerHTML = `Stride Length: ${user.strideLength} feet`
	goal.innerHTML = `Step Goal: ${user.dailyStepGoal} steps Global Average Step Goal: ${userRepository.findAverageStep()} steps`
	friends.innerHTML = `Friends: ${findFriends(userRepository, user)}`
	welcome.innerHTML = `Welcome ${user.firstName()}!`;
	userHydro.findAvgOunce()
	avgSleep.innerHTML = `Average hours slept per day: ${sleep.findAvg('hoursSlept').toFixed(2)}`
	avgQuality.innerHTML = `Average quality per day: ${sleep.findAvg('sleepQuality').toFixed(2)}`
	appendHydroList(userHydro.findDates(), userHydro);
	appendSleepList(sleep.findSleepDates(), sleep);
	appendMostSleep(sleep, sleep2, user2);
	appendActivityList(activity1.findActivityDates(), activity1, user)
}

function findFriends(userRepository, user) {
	newFriends = [];
	user.friends.forEach(friend => {
		let friendInfo = userRepository.findUser(friend)
			newFriends.push(friendInfo.name)
			newFriends.push(friendInfo.dailyStepGoal)
		})
	return newFriends
}

function appendHydroList(array, obj) {
	let dateHydroList = document.createElement("select");
	dateHydroList.setAttribute("id", "mySelect");
	hydroList.appendChild(dateHydroList);
	for (let i = 0; i < array.length; i++) {
		var option = document.createElement("option");
    option.setAttribute("value", array[i]);
    option.text = array[i];
    dateHydroList.appendChild(option);
    if (dateHydroList.value === array[i]) {
    		weeklyFluids.innerHTML = `Fluid ounces intake by week: ${obj.findOunceWeek(i)}`
    }
	}
		dateHydroList.addEventListener('change', () => {
			obj.findOunceDay(dateHydroList.value)
			dailyFluids.innerHTML = `Fluid ounces intake by day: ${obj.day}`;
			for (let i = 0; i < array.length; i++) {
				if (dateHydroList.value === array[i]) {
    		weeklyFluids.innerHTML = `Fluid ounces intake by week: ${obj.findOunceWeek(i)}`
    		}
			}
		})
		obj.findOunceDay(dateHydroList.value)
		dailyFluids.innerHTML = `Fluid ounces intake by day: ${obj.day}`;
}

function appendSleepList(array, obj) {
	dateSleepList = document.createElement("select");
	dateSleepList.setAttribute("id", "mySelect");
	sleepList.appendChild(dateSleepList);
	for (let i = 0; i < array.length; i++) {
		var option = document.createElement("option");
    option.setAttribute("value", array[i]);
    option.text = array[i];
    dateSleepList.appendChild(option);
    if (dateSleepList.value === array[i]) {
    	sleepWeek.innerHTML = `Hours slept throughout week: ${obj.findSleepWeek(i)}`
    	sleepQuality.innerHTML = `Sleep quality throughout week: ${obj.findSleepWeekQuality(i)}`
    	}
	}
		dateSleepList.addEventListener('change', function() {
		obj.findSleepDay(dateSleepList.value)
		obj.findSleepQuality(dateSleepList.value)
		sleepPerDay.innerHTML = `Hours slept for day: ${obj.day}  Quality of sleep: ${obj.quality}`;
		for (let i = 0; i < array.length; i++) {
			if (dateSleepList.value === array[i]) {
    	sleepWeek.innerHTML = `Hours slept throughout week: ${obj.findSleepWeek(i)}`
    	sleepQuality.innerHTML = `Sleep quality throughout week: ${obj.findSleepWeekQuality(i)}`
    			}
			}
		})
	obj.findSleepDay(dateSleepList.value)
	obj.findSleepQuality(dateSleepList.value)
	sleepPerDay.innerHTML = `Hours slept for day: ${obj.day}  Quality of sleep: ${obj.quality}`;
}

function appendMostSleep(singleSleepObj, sleepObj, userObj) {
	userSleepAvg(singleSleepObj, sleepObj, userObj);
	checkMostSleep(sleepObj, userObj);
	dateSleepList.addEventListener('change', () => {
		checkMostSleep(sleepObj, userObj);
		userSleepAvg(singleSleepObj, sleepObj, userObj);
 })
}

function checkMostSleep(sleepObj, userObj) {
	let dateObjects = []
	let largestNum = 0
	let userIndex = 0
	for (let i = 0; i < sleepObj.data.length; i++) {
		if (dateSleepList.value === sleepObj.data[i].date) {
				dateObjects.push(sleepObj.data[i].hoursSlept)
		}
  }
  for (let i = 0; i < dateObjects.length; i++) {
  		if (dateObjects[i] > largestNum) {
  			largestNum = dateObjects[i]
  			userIndex = i
  		} 
  }
 	for (let i = 0; i < userObj.length; i++) {
 		if (i === userIndex) {
 			return userObj[i].name
 		}
 	}
}

function userSleepAvg(singleSleepObj, sleepObj, userObj) {
	let sleepIDs = []
	let dateObjects = []
	let newDates = [];
	for (let i = 0; i < singleSleepObj.data.length; i++) {
		if (dateSleepList.value === singleSleepObj.data[i].date) {
				dateObjects.push(singleSleepObj.compareQualityAverage(i))
		}
	}
	for (let i = 0; i < sleepObj.data.length; i++) {
		for (let index = 0; index < dateObjects[0].length; index++) {
			if (i+1 === sleepObj.data[i].userID && sleepObj.data[i].date === dateObjects[0][index]) {
				newDates.push(sleepObj.data[i].userID)
			}
			}
		}
		newDates.forEach(id => {
			let tomorrow;
			let today = dateSleepList.value;
			let currentSleep = sleepRepository.findUserID(id)
			currentSleep.forEach((person,index) => {
				if (person.date === today) {
					tomorrow = index;
				}
			})
			var weekSleep = currentSleep.slice(tomorrow - 6, tomorrow + 1).map(quality => quality.sleepQuality)
			if (weekSleep.reduce((x,y) => x + y, 0) / 7 > 3) {
				userObj.forEach(user => {
					if (user.id === id) {
						sleepIDs.push(user.name)
					}
				})
			}
		})
		return sleepIDs
}

function appendActivityList(array, obj, user) {
	let dateActivityList = document.createElement("select");
	dateActivityList.setAttribute("id", "mySelect");
	activityList.appendChild(dateActivityList);
	for (let i = 0; i < array.length; i++) {
	var option = document.createElement("option");
    option.setAttribute("value", array[i]);
    option.text = array[i];
    dateActivityList.appendChild(option);
    if (dateActivityList.value === array[i]) {
    	obj.findNumSteps(dateActivityList.value)
    	obj.findMinActive(dateActivityList.value)
    		}
   dateActivityList.addEventListener('change', function() {
   obj.findNumSteps(dateActivityList.value)
   obj.findMinActive(dateActivityList.value)
		steps.innerHTML = `Number of steps today: ${obj.numSteps}`
		minutes.innerHTML =`Number of Minutes active: ${obj.minutesActive}`
		miles.innerHTML = `Numer of Miles Traveled: ${obj.findDistanceMiles(user, obj)}`
		goal.innerHTML = `${obj.checkStepGoal(user, obj)}`
		})
   obj.findNumSteps(dateActivityList.value)
   obj.findMinActive(dateActivityList.value)
		steps.innerHTML = `Number of steps today: ${obj.numSteps}`
		minutes.innerHTML =`Number of Minutes active: ${obj.minutesActive}`
		miles.innerHTML = `Numer of Miles Traveled: ${obj.findDistanceMiles(user, obj)}`
		activityGoal.innerHTML = `${obj.checkStepGoal(user, obj)}`
	}
}