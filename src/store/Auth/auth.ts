import { axiosInstance, signup, login } from "@/network";
import { AxiosResponse } from "axios";
import router from "@/router";
import { LoginResponse, AuthState } from './types'



export default {
  namespaced: true,
  state: {
    user: null as { email: string } | null,
    loading: false,
    error: null as string | null
  },
  mutations: {
    SET_LOADING(state: AuthState, payload: boolean) {
      state.loading = payload
    },
    SET_USER(state: AuthState, payload: LoginResponse) {
      state.user = payload?.user
      localStorage.setItem('user', JSON.stringify(payload.user))
      localStorage.setItem('token', JSON.stringify(payload.token))
    },
    SET_ERROR(state: AuthState, payload: string | null) {
      state.error = payload
    }
  },
  actions: {
    async loginRequest({ commit, dispatch }: { commit: any, dispatch: any }, payload: { email: string; password: string }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      try {
        const response = await axiosInstance.post(login, payload);
        dispatch(
          "shared/isSnackbar", { type: 'success', text: response.data.message }, { root: true }
        );
        router.push("/");
        console.log('response', response)
        commit('SET_USER', response?.data?.data)
      } catch (err: any) {
        console.log('error in login', err)
      } finally {
        commit('SET_LOADING', false)
      }
    },

    async register({ commit, dispatch }: { commit: any, dispatch: any }, payload: { email: string }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      try {
        const response = await axiosInstance.post(signup, payload);
        dispatch(
          "shared/isSnackbar", { type: 'success', text: response.data.message }, { root: true }
        );
        router.push("/");
        console.log('response', response)
        commit('SET_USER', response?.data?.data)
      } catch (err) {
        console.log('error in login', err)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  }
}
