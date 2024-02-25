import hydration from '../src/data/hydration-test-data'
import account from '../src/data/users-test-data'

function getAverageDailyFluidOunces(userId, hydroData) {
    const userHydrationData = hydroData.filter((userRecord) => userRecord.userID === userId);
    const totalOunces = userHydrationData.reduce((acc, userRecord) => acc += userRecord.numOunces, 0);
    return userHydrationData.length > 0 ? totalOunces / userHydrationData.length : 0;
}

function getSpecificDay(userId, date, hydroData) {
const dayEntry = hydroData.find(entry => entry.userID === userId && entry.date === date);
return dayEntry ? dayEntry.numOunces : 0; 
}

function getWeeklyFluidOunces(userId) {
const userHydrationData = hydration.hydrationData.filter(record => record.userID === userId);
userHydrationData.sort((a, b) => new Date(b.date) - new Date(a.date));
const lastWeekData = userHydrationData.slice(0, 7);
return lastWeekData.map(record => ({
    date: record.date,
    numOunces: record.numOunces
}));
}

export {
    getAverageDailyFluidOunces,
    getSpecificDay,
    getWeeklyFluidOunces,
};