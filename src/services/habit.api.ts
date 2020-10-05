import axios from "axios";
import { getCookie } from "./auth.api";

axios.defaults.baseURL = "http://localhost:8000";
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] = "application/json";

function calEndDate(startDate: Date, period: number) {
  return new Promise(function (resolve, reject) {
    let endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + period);

    resolve(endDate);
  });
}

function countDay(startDate: Date, period: number, arr: boolean[]) {
  let count = 0;
  let tmp;
  for (var i = 0; i <= period; i++) {
    tmp = new Date(startDate);
    tmp.setDate(tmp.getDate() + i);
    if (arr[tmp.getDay()] === true) {
      count++;
    }
  }
  return count;
}

function calNumOfdoDay(
  startDate: Date,
  period: number,
  checkedDayOfWeek: boolean[]
) {
  return new Promise(function (resolve) {});
}

export async function addHabit(habit: Habit) {
  const config = {
    headers: { authorization: `token ${getCookie("Auth")}` },
    data: JSON.stringify({
      ...habit,
      endDate: await calEndDate(habit.startDate, habit.period),
      NumOfTodo: await calNumOfdoDay(
        habit.startDate,
        habit.period,
        habit.checkedDayOfWeek
      ),
    }),
  };
  await axios.post(`/habits`, config);
}

//오늘 해야하는 습관만 습관목록에서 가져옴.
function habitOfDate(data: any, date: Date) {
  return new Promise((resolve, reject) => {
    let habits: Habit[] = data.map((habit: any) => ({
      ...habit,
      startDate: new Date(habit.startDate),
      endDate: new Date(habit.endDate),
    }));
    habits = habits.filter(
      (habit: Habit) =>
        habit.endDate!.getTime() > date.getTime() &&
        habit.checkedDayOfWeek[date.getDay()]
    );
    resolve(habits);
  });
}
export async function callHabit(username: string, date: Date = new Date()) {
  const response = await axios.get(`/habits?username=${username}`);
  let habits = await habitOfDate(response.data, date);

  return habits;
}

// 수정 필요 db.json 형식 변화 하거나 delete를 안쓰거나
export async function removeHabit(username: string, id: number) {
  await axios.delete(`/habits`, {
    params: { id: String(id), username: username },
  });
  const response = await axios.get(`/habits?username=${username}`);
  return response.data;
}

export interface Habit {
  habit_Name: string;
  period: number;
  checkedDayOfWeek: boolean[];
  startDate: Date;
  color?: string;
  endDate?: Date;
  NumOfTodo?: number;
}
