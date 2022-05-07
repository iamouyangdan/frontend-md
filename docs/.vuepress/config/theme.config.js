const { defaultTheme } = require('@vuepress/theme-default')
module.exports = defaultTheme({
    // 在这里进行配置
    repo: 'https://gitee.com/ouyangdan/frontend-md.git',
    logo: '/images/mine.png',
    sidebar: 'auto',
    
    Locale: {
        navbar: [
            // NavbarItem
            {
                text: '新员工指南',
                link: '/新人入门/新员工指南.md',
            },
            {
                text: '编码规范',
                link: '/编码规范/前端规范文档.md',
            },
            {
                text: '项目管理',
                link: '/项目管理/项目搭建.md',
            },
            {
                text: '技术分享',
                link: '/技术分享/技术分享介绍.md',
            },
            {
                text: '前端规划',
                link: '/前端规划/前端工作规划.md',
            },
            // NavbarGroup
            // {
            //   text: 'Group',
            //   children: ['/group/foo.md', '/group/bar.md'],
            // },
            // 字符串 - 页面文件路径
            // '/bar/README.md',
        ],       
    }
})