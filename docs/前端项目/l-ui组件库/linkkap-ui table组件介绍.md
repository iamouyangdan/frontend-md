# l-ui table组件介绍
## 目的

介绍这个表格组件需要实现的功能和目前开发的情况和疑问点

介绍目前这个组件的用法和开发过程遇到的问题



## 产品需求说明

[__https://shimo.im/docs/xPwRQKPhypHHXYkQ__](https://shimo.im/docs/xPwRQKPhypHHXYkQ)

这个管理后台ui改版的需求文档，涉及了表格、菜单、面包屑和搜索栏

目前开发了表格、菜单栏组件

面包屑在管理后台项目中修改了，搜索栏还未有使用需求和开发

## 表格组件功能需求和目前开发情况

需求任务：[__https://devops.aliyun.com/project/60b88437749ddb003fdc0ecc/story/section/all__](https://devops.aliyun.com/project/60b88437749ddb003fdc0ecc/story/section/all)

### 原来的组件文档

当前表格组件时基于vxe-table进行二次开发

[__https://xuliangzhan_admin.gitee.io/vxe-table/#/table/base/basic__](https://xuliangzhan_admin.gitee.io/vxe-table/#/table/base/basic)

### 已实现功能

- 筛选

- 自定义拉伸

- 列表冻结

- 行高设置

- tips显示完整文本内容

- 批量操作

### 未实现功能

- 拉伸宽度后缓存拉伸后的宽度

- 终评单元格高度限制和编辑项高度

- 加载更多按钮放到表格中

- 筛选部门

- 行内编辑（目前暂无使用的需求）

### 目前无法实现功能

- 表头与表格之间的间隙

- 表格整个屏幕全屏

- 组件只表头拖动，存在批量操作的表格情况下，勾选后不支持拖动表格宽度

## 使用指南

[__https://packages.aliyun.com/npm/npm-registry/artifacts__](https://packages.aliyun.com/npm/npm-registry/artifacts)

步骤一：设置仓库凭证

```text
npm config set registry=https://packages.aliyun.com/5f009f6e6a575d7f23661045/npm/npm-registry/
```

步骤二：登陆 npm 仓库并设置凭证

```text
npm login
用户名: ************************
密码: ************
邮箱: ************************
```

步骤三：拉取

```text
npm install linkkap-ui
```

项目使用

在main.js,在引用项目依赖的地方

```text
import LinkkapUi from 'linkkap-ui'
import 'linkkap-ui/lib/linkkap.css'
Vue['#uiConfig'] = {
  scriptUrl: '//at.alicdn.com/t/font_2611588_zmmoaxglo7l.js'
}
Vue.use(LinkkapUi)
```

![](/images/auto/linkkap-ui的table组件介绍/image1.png)

![](/images/auto/linkkap-ui的table组件介绍/image2.png)

## 使用说明

![](/images/auto/linkkap-ui的table组件介绍/image3.png)

![](/images/auto/linkkap-ui的table组件介绍/image4.png)

## 
项目地址

https://codeup.aliyun.com/5f009f6e6a575d7f23661045/frontend/linkkap-ui/tree/develop

![](/images/auto/linkkap-ui的table组件介绍/image5.png)



