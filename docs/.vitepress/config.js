
/**
 * @type {import('vitepress').UserConfig}
 */
export default {
  base:'/visualization-summary/',
  themeConfig: {
    siteTitle: '可视化技术总结',
    nav: [
      { text: 'Guide', link: '/guide' },
    ],
    sidebar: [
      {
        text: '目录',
        items: [
          { text: '立体图表', link: '/chart' },
        ]
      }
    ],
    aside:true
  },
}