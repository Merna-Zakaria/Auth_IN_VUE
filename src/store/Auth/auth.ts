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
    async login({ commit }:{commit: any}, { email, password }: { email: string; password: string }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        if (email === 'test@example.com' && password === '1234') {
          commit('SET_USER', { email })
        } else {
          throw new Error('بيانات الدخول غير صحيحة')
        }
      } catch (err: any) {
        commit('SET_ERROR', err.message)
      } finally {
        commit('SET_LOADING', false)
      }
    },

    async register({ commit }:{commit: any}, payload: { email: string }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        commit('SET_USER', payload)
        alert('تم التسجيل بنجاح!')
      } catch (err) {
        commit('SET_ERROR', 'حدث خطأ أثناء التسجيل')
      } finally {
        commit('SET_LOADING', false)
      }
    }
  }
}
