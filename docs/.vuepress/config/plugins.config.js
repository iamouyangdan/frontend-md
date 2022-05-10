const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { searchPlugin } = require('@vuepress/plugin-search')
const { gitPlugin } = require('@vuepress/plugin-git')
const { externalLinkIconPlugin } = require('@vuepress/plugin-external-link-icon')

module.exports =  [
    backToTopPlugin(),
    searchPlugin({
        // 配置项
    }),
    gitPlugin({
        // 配置项
    }),
    externalLinkIconPlugin({
        // 配置项
    }),
    require('../plugins/auto-sidebar')(),
    // ["vuepress-plugin-auto-sidebar", {
    // require('../vuepress-plugin-auto-sidebar')({
    //     output: {
    //         filename: './config/sidebar/index'
    //     }
    // })
]
