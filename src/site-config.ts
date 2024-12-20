export const siteConfig = {
  author: 'Khoirul',
  title: 'A little bit of my journey',
  subtitle: 'Navigating the Sea of Reflections',
  description:
    'Setiap tulisan merupakan dunia tersendiri, yang terapung-apung antara dunia kenyataan dan dunia impian.',
  email: 'ahmusafir.khoirul@gmail.com',
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
