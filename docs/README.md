---
home: true
title: 首页
heroImage: /images/mine.png
actions:
  - text: 快速上手 →
    link: /新人入门/
    type: primary
  - text: VuePress
    link: https://v2.vuepress.vuejs.org/zh/
    type: secondary
features:
  - title: 要求一
    details: md 文件中涉及到 html 或自定义组件标签的地方需要使用 ` ` 包裹，不然可能会编译失败。如 <style>，<navigator>，<html> 等。
  - title: 要求二
    details: 每个 md 文档必须且仅只有一个一级标题。一级标题用于在 sidebar 中显示对应的二级菜单。若存在多个一级标题时，sidebar 取第一个一级标题。
  - title: 要求三
    details: md文件内容中不能出现process.env.*。若出现此关键字，可能会出现打开当前页面报错的情况。
  - title: 要求四
    details: md文件内容中使用代码块标志时，需要指定代码块的语言类型，如```js。若则可能会出现打开当前页面报错的情况。
  - title: 要求五
    details: 若当前系统为 Windows 系统，发布页面请在项目根目录运行 ./scripts/deploy.bat 。
  - title: 要求六
    details: 若当前系统为 Linux 系统，发布页面请在项目根目录运行 sh ./scripts/deploy.sh 。
footer: MIT Licensed | Copyright © 2022 ouyangdan
---
::: warning
如存在以上问题，可能`npm run docs:dev`本地开发时没问题，但是会导致`vuepress2.x`打包编译`npm run docs:build`报错或最终页面显示异常，所以请务必严格遵守要求。
:::

::: tip 附录资料
- [markdown可用的表情包](https://github.com/ikatyang/emoji-cheat-sheet)
:::