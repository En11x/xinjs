const Guide = [{ text: 'Get Started', link: '/guide/' }];
const Schedule = [
  Guide,
  { text: 'Scheduler', link: '/packages/patterns/scheduler/' },
];

const DefaultSideBar = [
  { text: 'Guide', items: Guide },
  { text: 'Patterns', items: Schedule },
];

export default {
  base: '/xinjs/',
  title: 'xinjs',
  lang: 'zh-CN',
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: true,
    lastUpdatedText: '最后修改时间',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/XlnOnly/xinjs',
      },
    ],
    nav: [{ text: 'Guide', link: '/guide/' }],
    sidebar: {
      '/guide/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
      '/packages/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
    },
  },
};
