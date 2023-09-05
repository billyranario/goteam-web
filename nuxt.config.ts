// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ['composables/**', 'utils/**'],
  },
  css: ['~/assets/scss/main.scss', '@fortawesome/fontawesome-free/css/all.css'],
  devtools: { enabled: true },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'definePiniaStore'],
      },
    ],
  ],
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },
  runtimeConfig: {
    public: {
      axios: {
        baseURL: 'http://localhost:8882/api/',
      },
    },
  },
  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },
  typescript: {
    strict: true,
  },
});
