import axios from "axios";
import store from "@/store/index";

export const axiosInstance = axios.create({
  baseURL: "https://karrda.wsmco.sa/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const successHandler = (response: any) => {
  return response;
};

export const errorHandler = (error: any) => {
  console.log('mmmmmmmmmm', error)
    store.dispatch(
          "shared/isSnackbar", {type: 'error', text: error.response.data.message}, { root: true }
        );
  throw new Error(`There is an error in response ${error}`);
  
};

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (config?.headers?.Authorization != undefined) {
      config.headers.Authorization = "Bearer " + store?.state.user.user?.token;
      return config;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
