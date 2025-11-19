 import { AxiosResponse } from "axios";
 import { LoginResponse, RegisterForm, LoginPayload } from './types'
 import { axiosInstance, signup, login } from "@/network";
 import router from "@/router";
 import store from "@/store/index";


export const actions = {
    async loginRequest(context: {
    commit: (arg0: string, arg1: AxiosResponse<any, any>) => void;
  }, payload: LoginPayload) {
      try {
        const response = await axiosInstance.post(login, payload);
        store.dispatch(
          "shared/isSnackbar", { type: 'success', text: response.data.message }, { root: true }
        );
        context.commit('SET_USER', response?.data?.data)
        router.push("/");
      } catch (err: any) {
        console.log('error in login', err)
      } 
    },

    async registerRequest(context: {
    commit: (arg0: string, arg1: AxiosResponse<any, any>) => void;
  }, payload: RegisterForm) {
      try {
        const response = await axiosInstance.post(signup, payload);
        store.dispatch(
          "shared/isSnackbar", { type: 'success', text: response.data.message }, { root: true }
        );
        context.commit('SET_USER', response?.data?.data)
        router.push("/");
      } catch (err) {
        console.log('error in login', err)
      }
    }
  }