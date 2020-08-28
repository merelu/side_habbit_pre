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

function checkLogin(username: string, password: string, data: User[]) {
  return new Promise(function (resolve, reject) {
    const exist = data.find(
      (x) => x.username === username && x.password === password
    );
    if (!exist) {
      reject(new Error(`Username or Password is incorrect`));
    }
    resolve(true);
  });
}

export async function authRegister(user: User) {
  const response = await axios.get<User[]>(`http://localhost:8000/users`);
  const test = await checkUsername(user, response.data);
  await axios.post(`http://localhost:8000/users`, test);
}

export async function authLogin(username: string, password: string) {
  const response = await axios.get<User[]>(`http://localhost:8000/users`);
  await checkLogin(username, password, response.data);
}

export interface User {
  id: number;
  username: string;
  password: string;
  name: string;
}
