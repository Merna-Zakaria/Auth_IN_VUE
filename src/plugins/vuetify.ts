import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

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
  locale: {
    locale: "ar, en",
    fallback: localStorage.getItem("lang")?.toLocaleLowerCase() || "en",
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
});

export default vuetify;
