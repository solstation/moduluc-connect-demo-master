import axios from "axios";
import { config } from "../configs/environment";

export const privateHttpClient = axios.create({
  ...config.api,
  withCredentials: true,
});

privateHttpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error.response);
    const prevRequest = error?.config;
    if (
      error?.response?.status === 403 &&
      error.response.data.message === "access_token" &&
      !prevRequest?.sent
    ) {
      prevRequest.sent = true;
      axios
        .post("/api/v1/auth/refresh", null, {
          ...config.api,
          withCredentials: true,
        })
        .catch(console.log);
      return privateHttpClient(error?.config);
    }
    return Promise.reject(error);
  }
);
