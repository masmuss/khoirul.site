import type { ProjectData } from '@/types';

export const projectData: ProjectData = [
  {
    title: 'Web Development',
    projects: [
      {
        text: 'IdeaHive',
        description:
          'Mind-mapping app by PENS Agile PBL and Agileteknik, Laravel, MySQL, Flutter',
        icon: 'i-carbon-machine-learning-model',
        href: 'https://secimap.agileteknik.com',
      },
      {
        text: 'IoT Dashboard',
        description: 'IoT Dashboard for monitoring and controlling IoT devices',
        icon: 'i-carbon-cloud-monitoring',
        href: 'https://github.com/masmuss/next-hydroponic-monitoring',
      },
      {
        text: 'PENS Aquaculture',
        description: 'Dashboard for realtime water quality monitoring',
        icon: 'i-carbon-temperature-water',
        href: 'https://aquaculturepens.com',
      },
      {
        text: 'Qasir API',
        description:
          'Learning NestJS by creating API for Point of Sales system',
        icon: 'i-carbon-api-1',
        href: 'https://github.com/masmuss/qasir-api',
      },
    ],
  },
  {
    title: 'Mobile App',
    projects: [
      {
        text: 'IoT Monitoring and Control',
        description:
          'IoT Monitoring and Control App for Hydroponic System, Flutter, Firebase',
        icon: 'i-carbon-carbon-for-mobile',
        href: 'https://github.com/masmuss/mobile-hydroponic-monitoring',
      },
    ],
  },
  {
    title: 'Artificial Intelligence',
    projects: [
      {
        text: 'DSS for Hydroponic System',
        description:
          'Decision Support System for analyzing environmental data in hydroponic system using Sugeno Fuzzy Inference System',
        icon: 'i-carbon-decision-tree',
        href: 'https://github.com/masmuss/sugeno-fuzzy-simulator',
      },
    ],
  },
];
