export interface SharedState {
  snackbar: {type: 'success' | 'error' | null, text: string};
  lang: "ar" | "en" | string | null;
}
