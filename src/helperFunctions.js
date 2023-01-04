const checkID = function (id, data) {
  return data.some((user) => user.userID === id);
};

const userDataForDate = function (data, id, date) {
  return data.find((el) => el.userID === id && el.date === date);
};

const weeklyData = function (data, query, label, id, date) {
  const userInfo = data.filter((el) => el.userID === id);
  const queryData = userInfo.map((el) => el[query]);
  const dates = userInfo.map((el) => el.date);
  const index = userInfo.findIndex(
    (el) => el.date === date && el.userID === id
  );
  if (index === -1) {
    return "No data found for date selected";
  }
  if (!queryData[index + 6]) {
    return {
      count: queryData.slice(-7),
      label: label,
      dates: dates.slice(-7),
    };
  }
  return {
    count: queryData.slice(index, index + 7),
    label: label,
    dates: dates.slice(index, index + 7),
  };
};

export { checkID, userDataForDate, weeklyData };
