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

export async function callHabit(username: string, today: Date) {
  const response = await axios.get<Habit[]>(
    `http://localhost:8000/habits?username=${username}`
  );
  console.log(response);
  //금일에 해야하는 습관만 가져올 promise 함수 하나 정의해야함
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
