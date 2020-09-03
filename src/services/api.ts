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
    }
    localStorage.setItem("user", JSON.stringify(exist?.username));
    localStorage.setItem("userId", JSON.stringify(exist?.id));
    resolve(exist);
  });
}

export async function authLogin(username: string, password: string) {
  const response = await axios.get<User[]>(`http://localhost:8000/users`);
  const user = await checkLogin(username, password, response.data);
  return user;
}

//알고리즘 검증 필요 현재요일고려?, period로 홀수지정했을시 하루 오차 있음
function calEndDate(
  checkedDayOfweek: boolean[],
  startDate: Date,
  period: number
) {
  return new Promise(function (resolve, reject) {
    let endDate = new Date(startDate);
    const trues = checkedDayOfweek.filter((x) => x === true).length;
    const weeks = period / trues;
    const rest = period % trues;
    const dates = weeks * 7 + n_indexof(checkedDayOfweek, rest, true) - 1;
    endDate.setDate(endDate.getDate() + dates);
    resolve(endDate);
  });
}

function n_indexof(
  checkedDayofweek: boolean[],
  nth: number,
  searchValue: boolean
) {
  let times = 0,
    num = 0;
  while (times < nth) {
    num = checkedDayofweek.indexOf(searchValue, num++);
    times++;
  }
  return num;
}

export async function addHabit(habit: Habit) {
  const beHabit = {
    ...habit,
    endDate: await calEndDate(
      habit.checkedDayOfWeek,
      habit.startDate,
      habit.period
    ),
  };
  await axios.post(`http://localhost:8000/habits`, beHabit);
}

export interface User {
  id: number;
  username: string;
  password: string;
  name: string;
}

export interface Habit {
  id: number;
  userId: number;
  habbit_Name: string;
  period: number;
  habbit_color: string;
  checkedDayOfWeek: boolean[];
  startDate: Date;
}
