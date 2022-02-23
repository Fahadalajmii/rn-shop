import axios from "axios";

//the first numbers are the ip adress (it changes with the change of wifi or location)
export const baseURL = "http://192.168.100.252:8002";
const instance = axios.create({
  baseURL: baseURL,
});

export default instance;
