const Guide = [{ text: 'Get Started', link: '/guide/' }];
const Patterns = [{ text: 'Scheduler', link: '/scheduler/' }];

const DefaultSideBar = [{ text: '指导', items: Guide }];
const PatternsSideBar = [{ text: 'javascript设计模式', items: Patterns }];

export default {
  base: '/xinjs/',
  title: ' ',
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
    nav: [{ text: '指南', link: '/guide/' }],
    sidebar: {
      '/guide/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
      '/patterns/': [{ text: '', items: PatternsSideBar }],
    },
  },
};
