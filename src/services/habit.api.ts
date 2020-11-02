import axios from "axios";
import { AddHabitInputsType } from "../store/types";

export interface Habit {
  name: string;
  pk: number;
  period: number;
  checkedDayOfWeek: boolean[];
  startDate: Date;
  color: string;
  endDate: Date;
  NumOfTodo: number;
}
//-------------------------------Add habit-------------------------------------
function calEndDate(startDate: Date, period: number) {
  let endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + period);

  return endDate;
}

// function countDay(startDate: Date, period: number, arr: boolean[]) {
//   let count = 0;
//   let tmp;
//   for (var i = 0; i <= period; i++) {
//     tmp = new Date(startDate);
//     tmp.setDate(tmp.getDate() + i);
//     if (arr[tmp.getDay()] === true) {
//       count++;
//     }
//   }
//   return count;
// }

// function calNumOfdoDay(
//   startDate: Date,
//   period: number,
//   checkedDayOfWeek: boolean[]
// ) {
//   return new Promise(function (resolve) {});
// }

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
  )}-${numFormat(date.getDate())} ${numFormat(date.getHours())}:${numFormat(
    date.getMinutes()
  )}`;
  console.log(result);
  return result;
}

export async function addHabit(habit: AddHabitInputsType) {
  const start_date = new Date();
  const end_date = calEndDate(start_date, habit.period);
  const body = {
    name: habit.name,
    start_date: dateFormat(start_date),
    end_date: dateFormat(end_date),
    check_day_of_week: habit.checkedDayOfWeek,
  };

  const response = await axios.post("/habit/", body);
  console.log(response);
}

//오늘 해야하는 습관만 습관목록에서 가져옴.
// function habitOfDate(data: any, date: Date) {
//   return new Promise((resolve, reject) => {
//     let habits: Habit[] = data.map((habit: any) => ({
//       ...habit,
//       startDate: new Date(habit.startDate),
//       endDate: new Date(habit.endDate),
//     }));
//     habits = habits.filter(
//       (habit: Habit) =>
//         habit.endDate!.getTime() > date.getTime() &&
//         habit.checkedDayOfWeek[date.getDay()]
//     );
//     resolve(habits);
//   });
// }

//-------------------------------Call habit-------------------------------------
export async function callHabit() {
  const response = await axios.get("/habit/my_habits/");
  console.log(response.data);
  return response.data;
  //let habits = await habitOfDate(response.data, date);
}

//-------------------------------Delete habit-------------------------------------
// 수정 필요 db.json 형식 변화 하거나 delete를 안쓰거나
export async function removeHabit(username: string, id: number) {
  await axios.delete(`/habits`, {
    params: { id: String(id), username: username },
  });
  const response = await axios.get(`/habits?username=${username}`);
  return response.data;
}
