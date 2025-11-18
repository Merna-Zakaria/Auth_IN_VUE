import { Module } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { SharedState } from "./types";

localStorage.setItem("lang", "ar");

export const state: SharedState = {
  snackbar: {type: null, text: ''},
  lang: localStorage.getItem("lang"),
};

const namespaced = true;

export const shared = {
  namespaced,
  state,
  actions,
  mutations,
};
