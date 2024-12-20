export const siteConfig = {
  author: 'Khoirul',
  title: 'Khoirul',
  subtitle: 'Pixels and Progress.',
  description:
    'Fullstack wizard with a camera, weaving elegant websites while capturing the world through a lens. Transforming visions into digital and visual masterpieces.',
  email: 'ahmusafir.khoirul@gmail.com',
  image: {
    src: 'https://khoirul.site/og.jpg',
    alt: 'Open Graph',
  },
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/masmuss',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    {
      text: 'Twitter',
      href: 'https://x.com/rexbocho',
      icon: 'i-simple-icons-x',
      header: 'i-ri-twitter-x-line',
    },
    {
      text: 'Linkedin',
      href: 'www.linkedin.com/in/masmuss',
      icon: 'i-simple-icons-linkedin',
    },
    {
      text: 'Instagram',
      href: 'https://www.instagram.com/mas.musss',
      icon: 'i-simple-icons-instagram',
    },
  ],
  header: {
    logo: {
      src: '/favicon.svg',
      alt: 'Website Logo',
    },
    navLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Projects',
        href: '/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
    ],
  },
  footer: {
    navLinks: [
      {
        text: 'View on Astro',
        href: 'https://astro.build/themes/details/vitesse-theme-for-astro/',
      },
      {
        text: 'GitHub Repository',
        href: 'https://github.com/kevinwong865/astro-theme-vitesse',
      },
    ],
  },
};

export default siteConfig;
