import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "@/assets/locale";
import "vuetify/styles";
import vuetify from "./plugins/vuetify";

// Set HTML direction BEFORE the app mounts — prevents LTR flash
document.documentElement.lang = i18n.global.locale.value;
document.documentElement.dir =
  i18n.global.locale.value === "ar" ? "rtl" : "ltr";

createApp(App)
  .use(i18n)
  .use(vuetify)
  .use(store)
  .use(router)
  .mount("#app");
