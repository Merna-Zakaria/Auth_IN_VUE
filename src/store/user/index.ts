import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { UserState } from "./types";

export const state: UserState = {
  user: undefined,
  users: [],
};

const namespaced = true;

export const user = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
