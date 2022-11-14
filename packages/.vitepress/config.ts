const Guide = [{ text: 'Get Started', link: '/guide/' }];


const DefaultSideBar = [
  { text: '指导', items: Guide }
];

export default {
  base: '/xinjs/',
  title: ' ',
  lang: 'zh-CN',
  themeConfig:{
    logo:'/logo.png',
    lastUpdated: true,
    lastUpdatedText: '最后修改时间',
    socialLinks:[{
      icon:'github',
      link:'https://github.com/XlnOnly/xinjs'
    }],
    nav:[
      {text:'指南',link:'/guide/'}
    ],
    sidebar:{
      '/guide/':[
        {
          text:'',
          items:DefaultSideBar
        }
      ]
    }
  }
};
