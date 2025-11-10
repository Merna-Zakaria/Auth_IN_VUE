import VueI18n from "vue-i18n";
import { createI18n } from "vue-i18n";
import ar from "./messages/ar.json";
import en from "./messages/en.json";

export enum Locales {
  EN = "en",
  AR = "ar",
}
export const LOCALES = [
  { value: Locales.EN, caption: "English" },
  { value: Locales.AR, caption: "Arabic" },
];

const messages = {
  [Locales.EN]: en,
  [Locales.AR]: ar,
};

const defaultLocale = Locales.EN;

const i18n = createI18n({
  legacy: false,
  messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
});

export default i18n;
