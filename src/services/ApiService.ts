import axios, { AxiosResponse } from "axios";
import { User } from "../interfaces/User";

export const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const fetchUsers = (): Promise<AxiosResponse<User[]>> => {
  return apiClient.get("users/");
};
