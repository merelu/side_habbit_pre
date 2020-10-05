import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] = "application/json";

export interface User {
  email: string;
  password: string;
  full_name: string;
}

export async function authRegister(user: User) {
  const body = new FormData();
  body.append("email", user.email);
  body.append("password", user.password);
  body.append("full_name", user.full_name);

  const response = await axios.post(`/account/registration/`, body);
  console.log(response);
  return response;
}

export async function authLogin(email: string, password: string) {
  const body = new FormData();
  body.append("email", email);
  body.append("password", password);

  const response = await axios.post(`/account/login/`, body);
  setCookie("auth", response.data.token, 1);
  return response;
}

export function setCookie(key: string, value: string, expiredays: number) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie = `${key}=${escape(
    value
  )}; path=/; expires="${todayDate.toUTCString()};`;
}

export function getCookie(key: string) {
  var result = null;
  var cookie = document.cookie.split(";");
  //잘못된 키값들어왔을때 예외처리 필요
  cookie.some((item) => {
    // 공백을 제거
    item = item.replace(" ", "");

    var dic = item.split("=");

    if (key === dic[0]) {
      result = dic[1];
      return true; // break;
    }
    //이부분 고쳐야뎀
    return false;
  });
  return result;
}
