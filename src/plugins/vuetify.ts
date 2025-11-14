
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { ar, en } from "vuetify/locale"; 
import i18n from "@/assets/locale";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

const currentLocale = 
  localStorage.getItem("lang")?.toLowerCase() || i18n.global.locale.value;
console.log('localStorage.getItem("lang")', localStorage.getItem("lang"), 'i18n.global.locale.value', i18n.global.locale.value )
const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#F19822",
    bg_primary: "#F19822",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    white: "#FFFFFF",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi },
  },
  locale: {
    locale: currentLocale,
    fallback: "en",
    messages: { ar, en },
    rtl: {
      ar: true,
      en: false,
    },
  },

  theme: {
    defaultTheme: "myCustomLightTheme",
    variations: {
      colors: ["primary", "secondary"],
      lighten: 1,
      darken: 2,
    },
    themes: {
      myCustomLightTheme,
    },
  },
    defaults: {
    global: {
      style: {
        fontFamily: "Dubai, sans-serif",
      },
    },
  },
});

export default vuetify;
