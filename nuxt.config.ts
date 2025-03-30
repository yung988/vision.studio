export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@nuxt/ui', '@nuxtjs/i18n', '@nuxtjs/seo', '@nuxt/content', '@nuxt/image', '@nuxthub/core'],

  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@fontsource/geist@5.0.0/index.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@fontsource/geist-mono@5.0.0/index.css'
        }
      ]
    }
  },

  imports: {
    presets: [
      {
        from: 'vue-sonner',
        imports: ['toast'],
      },
    ],
  },

  devtools: {
    enabled: true,
  },

  css: ['~/assets/style/main.css'],

  site: {
    url: 'https://yung988-vision-studio.nuxt.space',
    defaultLocale: 'cs',
    indexable: true,
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  content: {
    renderer: {
      anchorLinks: false,
    },
    preview: {
      api: 'https://api.nuxt.studio',
      dev: true,
      gitInfo: {
        name: 'vision.studio',
        owner: 'yeezuz332',
        url: 'https://github.com/yeezuz332/vision.studio'
      }
    },
  },

  mdc: {
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-dark',
        light: 'github-light',
      },
    },
  },

  runtimeConfig: {
    public: {
      resend: !!process.env.NUXT_PRIVATE_RESEND_API_KEY,
    },
  },

  routeRules: {
    '/': { prerender: false },
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    viewTransition: true,
  },

  compatibilityDate: '2025-01-05',

  nitro: {
    experimental: {
      websocket: true,
    },
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: ['/cs', '/en'],
      failOnError: false
    },
  },

  hooks: {
    'nitro:config': (config) => {
      if (process.env.NUXT_PRIVATE_RESEND_API_KEY) {
        config.handlers?.push({
          method: 'post',
          route: '/api/emails/send',
          handler: '~~/server/emails/send.ts',
        })
      }
    },
  },

  i18n: {
    bundle: {
      optimizeTranslationDirective: false
    },
    locales: [
      { code: 'cs', name: 'Česky', language: 'cs-CZ' },
      { code: 'en', name: 'English', language: 'en-US' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    strategy: 'prefix',
    defaultLocale: 'cs',
    vueI18n: '~/i18n.config.ts',
  },

  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      },
    ],
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
    provider: 'iconify',
  },

  ogImage: {
    zeroRuntime: true,
  },
})