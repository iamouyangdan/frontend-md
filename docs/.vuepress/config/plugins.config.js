// const { gitPlugin } = require('@vuepress/plugin-git')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { searchPlugin } = require('@vuepress/plugin-search')
const { externalLinkIconPlugin } = require('@vuepress/plugin-external-link-icon')

module.exports =  [
    backToTopPlugin(),
    searchPlugin({
        // 配置项
    }),
    externalLinkIconPlugin({
        // 配置项
    }),
    require('vuepress-plugin-auto-sidebar-navbar')({
        sidebarUrl: '.vuepress/config/sidebar/index.js',
        navbarUrl: '.vuepress/config/navbar/index.js',
    }),
    // 已在theme.config.js配置
    // gitPlugin({
    //     // 配置项
    // }),
]
