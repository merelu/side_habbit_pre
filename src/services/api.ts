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

export async function addHabit(habit: Habit) {
  //구현해야함
  //디비구조 잡아야할듯
}
export interface User {
  id: number;
  username: string;
  password: string;
  name: string;
}

export interface Habit {
  id: number;
  userid: number;
  username: string;
  habbit_Name: string;
  habbit_days: number;
  habbit_color: string;
  dayOfWeek: boolean[];
}
