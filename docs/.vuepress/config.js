const plugins = require('./config/plugins.config')
const theme = require('./config/theme.config')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
    base: '/frontend-md/',
    lang: 'zh-CN',
    title: '前端文档库',
    description: '基于 VuePress 搭建的在线文档库',
    open: true,
    debug: true,
    head: [
        [
          'link',
          {
            rel: 'icon',
            type: 'image/png',
            href: `/frontend-md/images/mine.png`,
          },
        ],
        ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ],
    plugins,
    theme,
}