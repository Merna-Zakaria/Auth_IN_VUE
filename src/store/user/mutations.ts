import { MutationTree } from "vuex";
import { UserState, User } from "./types";

export const mutations: MutationTree<UserState> = {
  GET_USERS(state, payload: Array<User>) {
    state.users = payload;
  },
  GET_USER(state, payload: User) {
    state.user = payload;
  },
};
