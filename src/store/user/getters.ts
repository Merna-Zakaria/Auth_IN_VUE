import { UserState, User } from "./types";
import { State } from "../stateType";

export const getters = {
  users(state: State) {
    return state.user.users;
  },
  user(state: State) {
    return state.user.user;
  },
};
