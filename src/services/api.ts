import axios from "axios";

function checkUsername(user: User, data: User[]) {
  return new Promise(function (resolve, reject) {
    const exist = data.find((x) => x.username === user.username);
    if (exist) {
      reject(new Error(`Username ${user.username}is already taken`));
    }
    resolve(user);
  });
}

export async function authRegister(user: User) {
  const response = await axios.get<User[]>(`http://localhost:8000/users`);
  const test = await checkUsername(user, response.data);
  await axios.post(`http://localhost:8000/users`, test);
}

function checkLogin(username: string, password: string, data: User[]) {
  return new Promise(function (resolve, reject) {
    const exist = data.find(
      (x) => x.username === username && x.password === password
    );
    if (!exist) {
      reject(new Error(`Username or Password is incorrect`));
    } else {
      localStorage.setItem("username", JSON.stringify(exist.username));
      resolve(exist.username);
    }
  });
}

export async function authLogin(username: string, password: string) {
  const response = await axios.get<User[]>(`http://localhost:8000/users`);
  const user = await checkLogin(username, password, response.data);
  return user;
}

function calEndDate(startDate: Date, period: number) {
  return new Promise(function (resolve, reject) {
    let endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + period);

    resolve(endDate);
  });
}

export async function addHabit(habit: Habit) {
  const beHabit = {
    ...habit,
    endDate: await calEndDate(habit.startDate, habit.period),
  };
  await axios.post(`http://localhost:8000/habits`, beHabit);
}

//오늘 해야하는 습관만 습관목록에서 가져옴 Habit interface에서 checkedDayOfWeek를 만족하는 필터 추가해야뎀
function checkTodayHabit(data: any, today: Date) {
  return new Promise((resolve, reject) => {
    let habits: Habit[] = data.map((habit: any) => ({
      ...habit,
      startDate: new Date(habit.startDate),
      endDate: new Date(habit.endDate),
    }));
    console.log(habits);
    habits = habits.filter(
      (habit: Habit) => habit.endDate!.getTime() > today.getTime()
    );
    resolve(habits);
  });
}
export async function callHabit(username: string, today: Date) {
  const response = await axios.get(
    `http://localhost:8000/habits?username=${username}`
  );
  let habits = await checkTodayHabit(response.data, today);

  return habits;
}
// 수정 필요
export async function removeHabit(username: string, id: number) {
  await axios.delete(`http://localhost:8000/habits`, {
    params: { id: String(id), username: username },
  });
  const response = await axios.get(
    `http://localhost:8000/habits?username=${username}`
  );
  //금일 해야하는 습관만 가져오는 기능 필요
  return response.data;
}
export interface User {
  id: number;
  username: string;
  password: string;
  name: string;
}

export interface Habit {
  id: number;
  username: string;
  habbit_Name: string;
  period: number;
  habbit_color: string;
  checkedDayOfWeek: boolean[];
  startDate: Date;
  endDate?: Date;
}
