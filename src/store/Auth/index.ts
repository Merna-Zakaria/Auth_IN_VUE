
import { actions } from "./actions";
import { mutations } from "./mutations";
import { AuthState } from "./types";

export const state: AuthState = {
  user: null,
};

const namespaced = true;

export const auth = {
  namespaced,
  state,
  actions,
  mutations,
};
