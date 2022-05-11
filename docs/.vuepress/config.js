const plugins = require('./config/plugins.config')
const theme = require('./config/theme.config')
module.exports = {
    base: '/frontend-md/',
    lang: 'zh-CN',
    title: 'ouyangdan',
    description: '这是我的第一个 VuePress 站点',
    head: [
        [
          'link',
          {
            rel: 'icon',
            type: 'image/png',
            href: `/images/mine.png`,
          },
        ],
        ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ],
    plugins,
    theme,
}