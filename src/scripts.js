/***************** Variables *****************/
let name = document.querySelector('.main_user_name');
let address = document.querySelector('.main_user_address');
let email = document.querySelector('.main_user_email');
let stride = document.querySelector('.main_user_strideLength');
let goal = document.querySelector('.main_user_dailyStepGoal');
let friends = document.querySelector('.main_user_friends');
let welcome = document.querySelector('.main_header_welcome');
let hydroList = document.querySelector('.main_hydro_list');
let avgFluids = document.querySelector('.main_hydro_average');
let dailyFluids = document.querySelector('.main_hydro_daily');
let weeklyFluids = document.querySelector('.main_hydro_weekly')
let randoNum = null
let avgSleep = document.querySelector('.main_sleep_average')
let sleepList = document.querySelector('.main_sleep_list');
let sleepWeek = document.querySelector('.main_sleep_weekly');
let sleepQuality = document.querySelector('.main_sleep_quality');
let sleepAll = document.querySelector('.main_sleep_average_all');
let sleepAvgQuality = document.querySelector('.main_sleep_average_quality');
let sleepDay = document.querySelector('.main_sleep_day');
let sleepPerDay = document.querySelector('.main_sleep_specific_day');

/*************** Event Listeners *************/
window.addEventListener('load', initializePage(userData, hydrationData, sleepData))

/***************** Functions *****************/
function getRandoNum() {
randoNum = Math.floor(Math.random() * 50) + 1  
}

function initializePage(data, hydro, sleepy) {
	getRandoNum();
	const userRepository = new UserRepository(data)
	userRepository.findUser(randoNum)
	const user = new User(userRepository.currentUser)
	const hydroRepository = new HydroRepository(hydro)
	hydroRepository.findUserID(randoNum);
	const userHydro = new UserHydro(hydroRepository.currentUser)
	const sleepRepository = new SleepRepository(sleepy)
	sleepRepository.findUserID(randoNum)
	const sleep = new Sleep(sleepRepository.currentUser)
	name.innerHTML = `Name: ${user.name}`
	address.innerHTML = `Address: ${user.address}`
	email.innerHTML = `Email: ${user.email}`
	stride.innerHTML = `Stride Length: ${user.strideLength} feet`
	goal.innerHTML = `Step Goal: ${user.dailyStepGoal} steps       Global Average Step Goal: ${userRepository.findAverageStep()} steps`
	friends.innerHTML = `Friends: ${findFriends(userRepository, user)}`
	welcome.innerHTML = `Welcome ${user.firstName()}!`;
	avgFluids.innerHTML = `Average fluid ounces intake: ${userHydro.findAvgOunce()}`
	avgSleep.innerHTML = `Average hours slept per day: ${sleep.findAvgSleep().toFixed(2)}`
	sleepAll.innerHTML = `All users average sleep quality: ${sleepRepository.findAverageQuality().toFixed(2)}`
	appendHydroList(userHydro.findDates(), userHydro);
	appendSleepList(sleep.findSleepDates(), sleep)
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
		dateHydroList.addEventListener('change', function() {
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
	let dateSleepList = document.createElement("select");
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