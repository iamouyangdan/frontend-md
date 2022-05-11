const { defaultTheme } = require('@vuepress/theme-default')
const navbar = require('./navbar')
const sidebar = require('./sidebar')
const isProd = process.env.NODE_ENV === 'production'
console.log('isProd', isProd)
module.exports = defaultTheme({
    // 在这里进行配置
    repo: 'iamouyangdan/frontend-md',
    docsDir: 'docs',
    logo: '/images/mine.png',
    navbar, 
    sidebar, 
    toggleSidebar: 'toggle sidebar',
    sidebarDepth: 2,
    themePlugins: {
        // only enable git plugin in production mode
        git: isProd,
    },
    // theme-level locales config
    locales: {
        /**
         * Chinese locale config
         */
        '/': {
          // navbar
          navbar: navbar,
          selectLanguageName: '简体中文',
          selectLanguageText: '选择语言',
          selectLanguageAriaLabel: '选择语言',
  
          // sidebar
          sidebar: sidebar,
  
          // page meta
          editLinkText: '在 GitHub 上编辑此页',
          lastUpdatedText: '上次更新',
          contributorsText: '贡献者',
  
          // custom containers
          tip: '提示',
          warning: '注意',
          danger: '警告',
  
          // 404 page
          notFound: [
            '这里什么都没有',
            '我们怎么到这来了？',
            '这是一个 404 页面',
            '看起来我们进入了错误的链接',
          ],
          backToHome: '返回首页',
  
          // a11y
          openInNewWindow: '在新窗口打开',
          toggleDarkMode: '切换夜间模式',
          toggleSidebar: '切换侧边栏',
        },
        /**
         * English locale config
         */
        '/en/': {
            // navbar
            navbar: navbar,
    
            // sidebar
            sidebar: sidebar,
    
            // page meta
            editLinkText: 'Edit this page on GitHub',
        },
    },
})