export const actions = {
  isSnackbar(
    context: {
      commit: (arg0: string, arg1: boolean) => void;
    },
    payload: boolean
  ) {
    context.commit("IS_SNACKNAR", payload);
  },
  setLang(
    context: {
      commit: (arg0: string, arg1: string) => void;
    },
    payload: string
  ) {
    context.commit("SET_LANG", payload);
  },
};
