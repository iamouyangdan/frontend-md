const { defaultTheme } = require('@vuepress/theme-default')
const navbar = require('./navbar')
const sidebar = require('./sidebar')
module.exports = defaultTheme({
    // 在这里进行配置
    repo: 'https://gitee.com/ouyangdan/frontend-md.git',
    logo: '/images/mine.png',
    navbar, 
    sidebar, 
    toggleSidebar: 'toggle sidebar',
    sidebarDepth: 2,
})