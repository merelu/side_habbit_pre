import axios from "axios";
import { AddHabitInputsType } from "../store/types";
import { getCookie } from "./auth.api";

let AUTH_TOKEN = null;
if (getCookie("auth")) {
  AUTH_TOKEN = "token " + getCookie("auth");
}

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] = "application/json";

function calEndDate(startDate: Date, period: number) {
  let endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + period);

  return endDate;
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
function dateFormat(date: Date) {
  const numFormat = (num: number): string => {
    if (num > 9) {
      return String(num);
    } else {
      return "0" + num;
    }
  };
  const result = `${date.getFullYear()}-${numFormat(
    date.getMonth() + 1
  )}-${numFormat(date.getDate())}-${numFormat(date.getHours())}:${numFormat(
    date.getMinutes()
  )}`;
  console.log(result);
  return result;
}

export async function addHabit(habit: AddHabitInputsType) {
  const start_date = new Date();
  const end_date = calEndDate(start_date, habit.period);
  AUTH_TOKEN = getCookie("auth");
  // const body = new FormData();
  // body.append("due_date", JSON.stringify(habit.period));
  // body.append("name", habit.habit_Name);
  // body.append("start_date", dateFormat(start_date));
  // body.append("end_date", dateFormat(end_date));
  // body.append("check_day_of_week", JSON.stringify(habit.checkedDayOfWeek));

  const body = {
    due_date: habit.period,
    name: habit.habit_Name,
    start_date: dateFormat(start_date),
    end_date: dateFormat(end_date),
    check_day_of_week: habit.checkedDayOfWeek,
  };

  console.log(body);
  console.log(JSON.stringify(body));
  const response = await axios.post(`/habit/`, JSON.stringify(body));
  console.log(response);
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
  color: string;
  endDate: Date;
  NumOfTodo: number;
}
