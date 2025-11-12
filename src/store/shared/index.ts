import { Module } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { SharedState } from "./types";

localStorage.setItem("lang", "AR");

export const state: SharedState = {
  snackbar: false,
  lang: localStorage.getItem("lang"),
};

const namespaced = true;

export const shared = {
  namespaced,
  state,
  actions,
  mutations,
};
