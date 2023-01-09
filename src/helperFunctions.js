import * as dayjs from "dayjs";

const checkID = function (id, data) {
  return data.some((user) => user.userID === id);
};

const userDataForDate = function (data, id, date) {
  return data.find((el) => el.userID === id && el.date === date);
};

const weeklyData = function (data, query, label, id, date, rerun = {}) {
  const userInfo = data.filter((el) => el.userID === id);
  const queryData = userInfo.map((el) => el[query]);
  const index = userInfo.findIndex(
    (el) => el.date === date && el.userID === id
  );
  const newDate = dayjs(date).add(1, "day").format("YYYY/MM/DD");
    const currentIndexData = index === -1 ? null : queryData[index]
    const currentCount = rerun.count || [];
    const currentDates = rerun.dates || [];
    const dataFiller = {
      count: [...currentCount, currentIndexData],
      label: label,
      dates: [...currentDates, date],
    };
    if (dataFiller.count.length === 7) {
      return dataFiller;
    }
    return weeklyData(data, query, label, id, newDate, dataFiller)
};

const testSequentialDates = (arr) => {
  return arr.every((curr, index, ar) => {
    if (index === ar.length - 1) {
      return true;
    }
    return dayjs(curr.date).diff(dayjs(ar[index + 1].date)) <= 0;
  });
};

const userDataForID = (id, data) => {
  return data.filter((el) => el.userID === id);
};

export {
  checkID,
  userDataForDate,
  weeklyData,
  testSequentialDates,
  userDataForID,
};
