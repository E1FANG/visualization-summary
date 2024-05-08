/**
 * @type {import('vitepress').UserConfig}
 */
export default {
  base: "/visualization-summary/",
  appearance: "dark",
  themeConfig: {
    siteTitle: "可视化技术总结",
    nav: [{ text: "Guide", link: "/guide" }],
    sidebar: [
      {
        text: "板块地图",
        items: [
          {
            text: "基础用法",
            link: "/plate-map-base",
          },
          {
            text: "板块轮播",
            link: "/plate-map-loop",
          },
        ],
      },
      {
        text: "3D图表",
        items: [
          {
            text: "柱状图",
            link: "/3d-bar-chart",
          },
          {
            text: "饼图",
            link: "/3d-pie-chart",
          },
        ],
      },
      {
        text: "2D图表",
        items: [
          {
            text: "柱状图",
            link: "/guide",
          },
        ],
      },
    ],
    aside: true,
  },
};
