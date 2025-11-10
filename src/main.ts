import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "@/assets/locale";
import "vuetify/styles";
import vuetify from "./plugins/vuetify";

createApp(App).use(i18n).use(vuetify).use(store).use(router).mount("#app");
