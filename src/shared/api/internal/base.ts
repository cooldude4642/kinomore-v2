import axios from "axios";
import { createHttp } from "effector-http-api";

export const instance = axios.create({
  baseURL: process.env.INTERNAL_API_URL,
});

const http = createHttp(instance);

export { http };