class SleepSeries {
  constructor(userSleepData) {
    this.data = userSleepData || [];
  }

  getSleepDataPerDay(date, detail) {
    const entry = this.data.find((entry) => entry.date === date);
    if (entry) {
      return entry[detail];
    } else {
      return 0.0;
    }
  }

  getAvgSleepDataPerDay(detail) {
    const totalSleepData = this.data.reduce((total, entry) => {
      total += entry[detail];
      return total;
    }, 0);
    if (this.data.length > 0) {
      const average = (totalSleepData / this.data.length).toFixed(1);
      return parseFloat(average);
    } else {
      return 0.0;
    }
  }

  getSleepPerDayForWeek(endDate, detail) {
    const endDateObj = new Date(endDate);
    const dayDate = new Date(endDate);
    dayDate.setDate(endDateObj.getDate() - 7);
    let weekSleep = [{}, {}, {}, {}, {}, {}, {}];
    let index = 0;
    weekSleep.forEach(() => {
      dayDate.setDate(dayDate.getDate() + 1);
      let entryDate = `${dayDate.getFullYear()}/${String(
        dayDate.getMonth() + 1
      ).padStart(2, "0")}/${String(dayDate.getDate()).padStart(2, "0")}`;
      let sleepEntry = this.data.find((entry) => entry.date === entryDate);
      if (sleepEntry) {
        weekSleep[index] = { date: entryDate, [detail]: sleepEntry[detail] };
      } else {
        weekSleep[index] = { date: entryDate, [detail]: 0.0 };
      }
      index++;
    });
    return weekSleep;
  }
}

export default SleepSeries;
