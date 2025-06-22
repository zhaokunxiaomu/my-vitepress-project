import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/my-vitepress-project/',
  ignoreDeadLinks: true, // 忽略死链检查
  vite: {
    server: {
      host: '0.0.0.0',
      port: 5557,
    },
    css: {
      preprocessorOptions: {
        scss: { api: 'modern-compiler' },
      },
    },
  },
  // 配置网站的根目录
  srcDir: 'src',
  // 配置网站的标题和描述
  title: 'Docs文档系统',
  // 配置网站的描述 是SEO要用的，我们不用关注
  description: 'docs文档系统可查看组件文档',
  // 配置网站的头部信息
  head: [['link', { rel: 'icon', href: './logo.png' }]],
  // 配置网站的markdown
  markdown: {
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
  },
  // 配置网站的语言
  lang: 'zh-CN',
  // 配置网站的最后更新时间
  lastUpdated: true,
  // 主题配置项
  themeConfig: {
    // 配置网站的标题
    siteTitle: 'Docs文档系统',
    // 配置网站logo
    logo: '/logo.png',
    // 配置网站的导航栏 https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '家',
        items: [
          {
            text: '首页',
            link: '/',
          },
          {
            text: 'MarkDown示例',
            link: '/markdown-examples',
          },
        ],
      },
      { text: 'markdown示例', link: '/markdown-examples' },
    ],
    // 配置网站的侧边栏
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
      {
        text: 'default默认',
        items: [
          { text: 'default-theme-badge', link: '/default-theme-badge' },
          {
            text: 'default-theme-carbon-ads',
            link: '/default-theme-carbon-ads',
          },
          { text: 'default-theme-config', link: '/default-theme-config' },
        ],
      },
      { text: 'data-loading', link: '/data-loading' },
      { text: 'page', link: '/page' },
      {
        text: 'document-formatting',
        link: '/document-formatting',
      },
      {
        text: 'template-vue',
        link: '/template-vue',
      },
      {
        text: '放烟花',
        link: '/放烟花功能',
      },
    ],
    // 大纲标题深度
    outline: 'deep',
    // 大纲标题文字
    outlineTitle: '大纲文档目录',
    // 配置社交链接头部导航栏右边的图标
    socialLinks: [
      // github
      {
        icon: 'github',
        link: 'https://github.com/vuejs/vitepress',
        ariaLabel: 'github图标',
      },
      // gitee
      {
        icon: 'gitee',
        link: 'https://gitee.com/zk13832090782',
        ariaLabel: 'gitee图标',
      },
    ],
    // 配置页脚信息
    footer: {
      message: '根据 MIT 许可证发布',
      copyright: 'Copyright © 2019-present My Name',
    },
    // 文档页脚信息
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },
})
