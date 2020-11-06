export const setFixNum = (num: number): string => {
  let fixNum: string = "";
  if (num < 10) {
    fixNum = "0" + num.toString();
  } else {
    fixNum = num.toString();
  }
  return fixNum;
};

export function generateCalendar(date: Date) {
  //Sunday - Saturday : 0 - 6
  //이번달 1일 의 요일
  const firstday: number = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  //이번달 마지막날 날짜
  const lastdate: number = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  let startDateCount: number = 1;
  let calendarList = [];
  let key = 0;

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstday) {
        calendarList.push({ status: false, key: key++ });
      } else if (i === 0 && j >= firstday) {
        calendarList.push({
          status: true,
          key: key++,
          date: new Date(date.getFullYear(), date.getMonth(), startDateCount++),
        });
      } else if (i > 0 && startDateCount <= lastdate) {
        calendarList.push({
          status: true,
          key: key++,
          date: new Date(date.getFullYear(), date.getMonth(), startDateCount++),
        });
      } else if (startDateCount > lastdate) {
        calendarList.push({ status: false, key: key++ });
      }
    }
  }
  return calendarList;
}
