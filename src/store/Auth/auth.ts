import { axiosInstance, signup, login } from "@/network";
import { AxiosResponse } from "axios";

export interface AuthState {
  user: { email: string } | null
  loading: boolean
  error: string | null
}

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
    SET_USER(state: AuthState, payload: { email: string } | null) {
      state.user = payload
    },
    SET_ERROR(state: AuthState, payload: string | null) {
      state.error = payload
    }
  },
  actions: {
    async loginRequest({ commit , dispatch}:{commit: any, dispatch: any}, payload: { email: string; password: string }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      try {
        const response = await axiosInstance.post(login, payload);
        dispatch(
          "shared/isSnackbar", true, { root: true }
        );
        // Simulate API call
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        // if (email === 'test@example.com' && password === '1234') {
        //   commit('SET_USER', { email })
        // } else {
        //   throw new Error('بيانات الدخول غير صحيحة')
        // }
      } catch (err: any) {
        commit('SET_ERROR', err.message)
      } finally {
        commit('SET_LOADING', false)
      }
    },

    async register({ commit , dispatch}:{commit: any, dispatch: any}, payload: { email: string }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      try {
        // const response = await axiosInstance.post(signup, payload);
        console.log('payload', payload)
        dispatch(
          "shared/isSnackbar", true, { root: true }
        );
        // await new Promise((resolve) => setTimeout(resolve, 1500))
        // commit('SET_USER', payload)
        // alert('تم التسجيل بنجاح!')
      } catch (err) {
        commit('SET_ERROR', 'حدث خطأ أثناء التسجيل')
      } finally {
        commit('SET_LOADING', false)
      }
    }
  }
}
