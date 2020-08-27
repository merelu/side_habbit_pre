import axios from "axios";

function authenticate(user: User, data: User[]) {
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
  console.log(response.data);
  const test = await authenticate(user, response.data);
  await axios.post(`http://localhost:8000/users`, test);
}

export interface User {
  id: number;
  username: string;
  password: string;
  name: string;
}
