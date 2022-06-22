import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Shortly',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Shorten your URLs as fast as possible with ou service',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
});
