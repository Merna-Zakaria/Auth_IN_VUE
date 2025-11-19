 import { LoginResponse, AuthState } from './types'

export const  mutations = {
    SET_USER(state: AuthState, payload: LoginResponse) {
      state.user = {...payload?.user, token: payload.token}
      localStorage.setItem('user', JSON.stringify(payload.user))
      localStorage.setItem('token', JSON.stringify(payload.token))
    },
  }