const genSidebar = require('./create-sidebar')
const path = require('path')
// 可接受 autoSort参数和自定义排序函数
// 排序重启项目时生效
const createSidebar = (options = {}) => {
    return (app) => {
        console.log('app.dir', app.dir.source())
        const sourceDir = app.dir.source()
        const sidebarUrl = options.sidebarUrl || '.vuepress/config/sidebar/index.js'
        const sidebarPath = path.resolve(sourceDir, sidebarUrl)
        genSidebar(sourceDir, sidebarPath, {}, options.sortFn)
        return {
          name: 'vuepress-create-sidebar',
          // ...
        }
    }
}

module.exports = createSidebar