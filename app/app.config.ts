export default defineAppConfig({
  global: {
    meetingLink: 'https://cal.com/studio-vision/15min',
    available: true,
  },
  profile: {
    name: 'Studio.Vision',
    job: 'Tvoříme webové stránky, webové aplikace, branding, design, fotografie, reklamní spoty. ',
    email: 'jangajdosprod@gmail.com',
    phone: '(+420) 733 48 12 80',
    picture: '',
  },
  socials: {
    github: 'https://github.com/yung988',
    twitter: 'https://x.com/Studio_Vision98',
    linkedin: 'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BFtuoJmbbQxGrZBmHv98nMg%3D%3D',
    instagram: 'https://www.instagram.com/vis.ion0001/',
    spotify: '',
  },
  seo: {
    title: 'Studio.Vision',
    description: 'Jsme Studio.Vision a pomáháme firmám s tvorbou webových stránek, vizuálního stylu, Fotografiemi a vším co by mohli potřebovat. ',
    url: 'https://vision-studio.nuxt.dev',
    lang: 'en',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})