import axios from "axios";

export const ajax = axios.create({
  oks: false,
  gotovo: false,
  baseURL: "http://capi.rp/",
  headers: {
    Authorization: "Bearer {token}",
    "Content-type": "application/json"
  }
});
