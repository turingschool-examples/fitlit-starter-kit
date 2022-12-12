import './html-css/styles.css';
import activityCharts from './activityCharts';
import apiCalls from './apiCalls';
import UserRepository from './UserRepository';
import './images/turing-logo.png'

// Query Selectors
const userPromise = apiCalls.loadUserData()
const hydrationPromise = apiCalls.loadHydrationData()
const sleepPromise = apiCalls.loadSleepData()
const welcomeMessage = document.querySelector('#welcomeMessage')
const friendsDisplay = document.querySelector('#friends')
const stepGoal = document.querySelector('#stepGoal')
const stepGoalVsAvg = document.querySelector('#stepGoalVsAvg')
const userProfile = document.querySelector('#profile')
const userName = document.querySelector('#userName')
const userAvatar = document.querySelector('#userAvatar')
const hydrationToday = document.getElementById('hydrationToday')
const hydrationGoal = document.getElementById('hydrationGoal')
const sleepToday = document.getElementById('sleepToday')
const sleepUserAvg = document.getElementById('sleepUserAvg')
const sleepGlobalAvg = document.getElementById('sleepGlobalAvg')
// Global variables
let userRepo;
let currentUser

const profileEmojis = ["✌", "😂", "😝", "😁", "😱", "🔥", "🌈", "☀", "🎀", "⚽", "🎾", "🏁", "😡", "👿", "🐻", "🐶", "🐬", "🐟", "😍", "😉", "😓", "😳", "💪", "💩", "💖", "🌟", "🎉", "🌺", "🏈", "⚾", "🏆", "👽", "💀", "🐵", "🐮", "🐩", "🐎", "😘", "😜", "😵", "💃", "💎", "🚀", "🌙", "⛄", "🌊", "⛵", "🏀", "💰", "👶", "👸", "🐰", "🐷", "🐍", "🐫", "🚲",]
const profileBackgrounds = ['#F8B195', '#F67280', '#C06C84', '#6C5B7B', '#355C7D', '#99B898', '#FECEAB', '	#FF847C', '#2A363B', '#A8E6CE']

window.addEventListener('load', function () {
    Promise.all([userPromise, hydrationPromise, sleepPromise])
        .then((values) => {
            parseData(values)
            updateDOM()
        });
});

userAvatar.addEventListener('click', toggleProfileInfo)



//update DOM
function parseData(values) {
    userRepo = new UserRepository(values[0], values[1], values[2])
    userRepo.initialize()
    currentUser = userRepo.selectedUser
}

function updateDOM() {
    showPersonalizedWelcome();
    showUserInfoDisplay();
    displayUserStepGoal();
    displayStepGoalComparison();
    displaySelectedUserInformation();
    displayHydrationData();
    displaySleepData();
    activityCharts.updateHydroDateChart();
    activityCharts.updateStepChart();
    activityCharts.updateSleepChart();
    activityCharts.updateHydroWeeklyChart();
}


// Welcome message display
function showPersonalizedWelcome() {
    let randomGreetings = [`Let's Carpe this Diem!`, `You miss 100% of the shots you don't take.`, `You can have results or excuses, not both.`, `Lets do this thing!`, `Do or do not there is no try.`, `Everything is awesome when you're living out a dream.`];
    let selectedMsg = selectRandom(randomGreetings)
    welcomeMessage.innerText = `Welcome, ${currentUser.name}! - - ${selectedMsg}`;
}

function selectRandom(selectedArray) {
    return selectedArray[Math.floor(Math.random() * selectedArray.length)];
}

// Info card display
function showUserInfoDisplay() {
    friendsDisplay.innerText = ` `;
    userName.innerText = `${currentUser.name}`
    userAvatar.innerText = selectRandom(profileEmojis)
    userAvatar.style.backgroundColor = selectRandom(profileBackgrounds)
    currentUser.friends.forEach(friend => {
        friendsDisplay.innerHTML += `
    <div class="single-friend">
    <div  class="friend-avatar friend-${friend}" style="background-color: ${selectRandom(profileBackgrounds)}">${selectRandom(profileEmojis)}</div> 
        ${(userRepo.findUser(friend)).name}
    </div>
    `;
    })
}

function toggleProfileInfo() {
    if (!friendsDisplay.classList.contains('hidden')) {
        friendsDisplay.classList.add('hidden')
        userProfile.classList.remove('hidden')
    } else {
        friendsDisplay.classList.remove('hidden')
        userProfile.classList.add('hidden')
    }
}

// User step goal display
function displayUserStepGoal() {
    stepGoal.innerText = `Step goal: ${currentUser.dailyStepGoal} steps per day`;
}

// Step Goal vs. Avg all users
function displayStepGoalComparison() {
    stepGoalVsAvg.innerText = `Your step goal: ${currentUser.dailyStepGoal}

Average Step Goal: ${userRepo.averageSteps()}`
}

// Hydration data display
function displayHydrationData() {
    const lastHydration = currentUser.findLatestDate(currentUser.hydrationData)
    const lastHydrationOunces = currentUser.findDaysHydration(lastHydration).numOunces;
    const goal = 64;
    hydrationToday.innerText = `You have consumed ${lastHydrationOunces} ounces of water today!`;
    if (lastHydrationOunces < goal) {
        hydrationGoal.innerText = `Only ${goal - lastHydrationOunces} to go!`
    } else {
        hydrationGoal.innerText = 'You have met the daily recommendation, great job!';
    }
};

//Sleep data display
function displaySleepData() {
    const today = currentUser.findLatestDate(currentUser.hydrationData);
    let sleepHours = currentUser.findDaySleepHours(today);
    let sleepQuality = currentUser.findDaySleepQuality(today);
    sleepToday.innerText = `${sleepHours} hours | ${sleepQuality} quality`;
    sleepHours = currentUser.averageSleepHours();
    sleepQuality = currentUser.averageSleepQuality();
    sleepUserAvg.innerText = `${sleepHours} hours | ${sleepQuality} quality`;
}
// User Profile Information Display
function displaySelectedUserInformation() {
    // Added space manually with this interpolation but can fix later with CSS
    userProfile.innerText = `${currentUser.name}

${currentUser.address}

${currentUser.email}

${currentUser.dailyStepGoal}

${currentUser.strideLength}`
}

export { userRepo };