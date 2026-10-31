import { getLocales } from "@jojomatik/nuxt-bundle";
import vuetifyOptions from "./vuetify-options";

export default defineNuxtConfig({
  extends: "@jojomatik/nuxt-bundle",
  app: {
    head: {
      titleTemplate: "%s - nuxt-3-base",
    },
  },
  faviconModule: {
    enabled: true,
  },
  i18n: {
    locales: getLocales(),
    defaultLocale: "en",
    restructureDir: ".",
    langDir: "locales",
  },
  vuetify: {
    vuetifyOptions,
  },
});
