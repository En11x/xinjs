const isDev = process.argv[process.argv.length - 1] === 'development'
const Guide = [{ text: 'Get Started', link: '/guide/' }]
const Patterns = [
  Guide,
  { text: 'Scheduler', link: '/packages/patterns/scheduler/' },
  { text: 'Observer', link: '/packages/patterns/observer/' },
  { text: 'Pub-sub', link: '/packages/patterns/pub-sub/' },
  { text: 'Singleton', link: '/packages/patterns/singleton/' },
  { text: 'Vue2', link: '/packages/patterns/vue2/' },
]
const Cores = [
  Guide,
  {
    text: 'Array',
    items: [{ text: 'Move', link: '/packages/core/array/move/' }],
  },
  {
    text: 'Debounce',
    link: '/packages/core/debounce/'
  },
  {
    text: 'Throttle',
    link: '/packages/core/throttle/'
  },
]
const Shared = [
  Guide,
  {
    text: 'Is',
    link: '/packages/shared/is/',
  },
  {
    text: 'Noop',
    link: '/packages/shared/noop/',
  },
  {
    text: 'Sleep',
    link: '/packages/shared/sleep/',
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
  {
    text: 'Compute',
    link: '/packages/types/compute/',
  },
]

const DefaultSideBar = [
  { text: 'Guide', items: Guide },
  { text: 'Core', items: Cores },
  { text: 'Patterns', items: Patterns },
  { text: 'Shared', items: Shared },
  { text: 'Types', items: Types },
]

export default {
  base: isDev ? '/' : '/xinjs/',
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
