/**
 * 
 * Same as in the charts file. 
 * It's pretty common to create a utils file to share common utility functions
 * But def not necessary for this project but you'll
 * see stuff like this more later
 */

export const getLatestDate = (dataset, user) => {
  return dataset.reduce((latestDate, entry) => {
    if (entry.userID === user.id && entry.date > latestDate) {
      latestDate = entry.date;
    }
    return latestDate;
  }, '')
}

export const generateRandomIndex = (dataset) => {
  return Math.floor(Math.random() * dataset.length);
}
