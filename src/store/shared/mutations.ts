import { MutationTree } from "vuex";
import i18n from "@/assets/locale";
import { Locales } from "@/assets/locale";
import { SharedState } from "./types";

export const mutations: MutationTree<SharedState> = {
  IS_SNACKNAR(state, payload) {
    state.snackbar = payload;
  },
  SET_LANG(state, payload) {
    state.lang = payload;
    localStorage.setItem("lang", payload);
    i18n.global.locale.value = Locales[payload as keyof typeof Locales];
  },
};
