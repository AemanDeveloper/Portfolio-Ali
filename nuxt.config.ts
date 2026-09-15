export default defineNuxtConfig({
  compatibilityDate: "2026-09-15",

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },

    head: {
      htmlAttrs: {
        lang: "en",
      },

      titleTemplate: "%s | Syed Ali",

      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "theme-color",
          content: "#182a3a",
        },
      ],
    },
  },
});
