const checkID = function (id, data) {
  return data.some((user) => user.userID === id);
};

const userDataForDate = function (data, id, date) {
  return data.find((el) => el.userID === id && el.date === date);
};

export { checkID, userDataForDate };
