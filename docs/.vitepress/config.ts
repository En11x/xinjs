const Guide = [{ text: 'Get Started', link: '/guide/' }]
const Patterns = [
  Guide,
  { text: 'Scheduler', link: '/packages/patterns/scheduler/' },
]
const Cores = [
  Guide,
  {
    text: 'Array',
    items: [{ text: 'Move', link: '/packages/core/array/move/' }],
  },
]
const Types = [
  Guide,
  {
    text: 'Array',
    link: '/packages/types/array/',
  },
  {
    text: 'Object',
    link: '/packages/types/object/',
  },
  {
    text: 'Chaos',
    link: '/packages/types/chaos/',
  },
]

const DefaultSideBar = [
  { text: 'Guide', items: Guide },
  { text: 'Core', items: Cores },
  { text: 'Patterns', items: Patterns },
  { text: 'Types', items: Types },
]

export default {
  base: '/',
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
}
