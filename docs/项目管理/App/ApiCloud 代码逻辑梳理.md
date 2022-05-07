因为 ApiCloud 项目代码太多，看得有点眼花缭乱。故此以底部栏组件的工作流程为例，稍微梳理一下项目的运行逻辑，加深理解。

先放上项目的文件结构

```text
|──── config                     项目打包的配置文件，主要是一些webpack的配置
|──── core                       项目打包的核心代码
|       |──── build.js           项目打包时执行的js
|       |──── copyResource.js    从src复制基础文件到 dist/widget
|       |──── dev-client.js
|       |──── dev-server.js      开发环境
|       |──── projectSelect.js   (npm run config)列出选项,并根据选择的项目替换文件到src
|       |──── replaceResource.js 根据传入项目名替换文件到src
|       |──── util.js
|       |──── version.js
|       └──── writeConfig.js
|──── project                    不同项目旗下不同的配置文件
|       |──── neiyiyun           一个项目的总目录（以下文档有给出详细内容）
|       └──── qianqianyun
|       └──── botian
|──── src                        项目资源文件
|       |──── config             项目中读取的配置文件，此文件由project中的配置文件替换，无需修改
|       |──── css
|       |──── html
|       |──── image              图片，与特定项目相关的图片（如logo，商标等）需要在project中配置
|       |──── res
|       |──── sass
|       |──── script
|       |       |──── entity      实体
|       |       |──── entry       入口文件
|       |       |──── lib         外部引入的js库
|       |       |──── presenter   组件/页面公用模块
|       |       |──── routing     页面跳转
|       |       |──── utils       公共模块代码，如：ajax，过滤器，oss上传等
|       |       └──── view        代码页面
|       |──── config.xml          apicloud的配置文件，在project文件夹中配置，此处无需修改
|       └──── download.html       微信分享下载页，在project文件夹中配置，此处无需修改
|──── .gitignore
|──── package.json
└──── README.md
```

1. Project 目录下存放的是各个项目下的配置文件。在 Project/config/config.js 中定义了底部栏按钮的内容。不同项目对应的按钮内容也不同。

```javascript
// 泊天的底部栏按钮
footList: [  
	{ title: '首页', tabName: 'index' },
	{ title: '24小时', tabName: 'tfHour' },
	{ title: '推荐', tabName: 'recommend' },
	{ title: '问答', tabName: 'QA' },
	{ title: '我的', tabName: 'user' }
]

// 内衣云的底部栏按钮
footList: [ 
    { title: '首页', tabName: 'index' },
    { title: '爆品推荐', tabName: 'recommend' },
    { title: '问答', tabName: 'QA' },
    { title: '我的', tabName: 'user' }
]
```

1. src/script/presenter 定义了公共组件。其中就包含底部栏 footer-P.vue。在底部栏组件中，点击按钮，会根据按钮的 tabName 来进行跳转。

```javascript
$api.ready(() => {
	if (active == this.active) return;
	if (!$api.isApiCloud) {
		switch(active) {
			case 'index':
				indexR.index();
				break;
			case 'tfHour':
				tfHourR.tfHour();
				break;
			case 'QA':
				QAR.QAIndex();
				break;
			case 'recommend':
				recommendR.recommend();
				break;
			case 'user':
				if (!this.gotoPersonalCenter()) return;
				userR.user();
				break;			
		}
	} else {
		if (active == 'user') {
			if (!this.gotoPersonalCenter()) return;
			$api.emit("refresh_userInfomation");
		}
		api.setFrameGroupIndex({
			name: 'main',
			index: index
		});
	}
	this.active = active;
	})
}

```



1. 跳转时调用了像 indexR.index() 的方法，这来自于`import indexR from "@R/index-R"`

关于@R，在 /config/webpack.config.js 定义了如下路径的别名。

```javascript
alias: {
	'vue$': 'vue/dist/vue.esm.js',
	'@C':path.resolve('src/config'), 
	'@V':path.resolve('src/script/view'),
	'@P':path.resolve('src/script/presenter'),
	'@E':path.resolve('src/script/entity'),
	'@R':path.resolve('src/script/routing'),
	'@U':path.resolve('src/script/utils'),
	'@LIB':path.resolve('src/script/lib'),
	'@': path.resolve('src'),
	'@IMAGE':path.resolve('src/image'),
	'@CSS': path.resolve('src/css')
}

```

其中，@R是 src/script/routing，即关于页面跳转的部分。这里截取 routing 目录下 index-R.js 的一部分代码。

```javascript
import $api from '@U/api'

export default{
  index(pageParam){
    var animation = {
      type:"none"
    };
    if($api.isApiCloud){
      return $api.closeToWin();
    }
    $api.openWin({
      name:'index-win',
      animation:animation,
      pageParam
    },true);
  }
}
```

@U 是 src/script/utils，该目录下存放了如 ajax 等一些公共模块。utils 目录下的 api.js 函数中定义了许多方法，其中 openWin() 方法当中包含了路由跳转的代码。

1. 在 src/script/entry/index/main.js 入口文件中，配置了路由。

```javascript
import Vue from 'vue'
import Footer from "@P/common/footer-P"
import $api from '@U/api'
import commonR from '@R/common-R'

//注册路由
commonR.register();

var index = {
  createFooter() {
    var footer = new Vue({
      el: "#footer",
      template: `<Footer active='index'></Footer>`,
      components: {
        Footer
      }
    });
  },
  winMain() {
    document.title = "首页";
    this.createFooter();
  },
  winApicloud() {
    $api.ready(() => {
      // var demo = api.require('logCrash');  //todo bugly
      // demo.listenCrash()
      let _frames = [];
      let list = config.footList;
      for(let i=0,len=list.length;i<len;i++){
        if(list[i].tabName == 'index'){
          _frames.push({
            name: "index-frame",
            url: "./frame-layout.html?entry=index",
            bgColor: '#fff'
          })
        } else if (list[i].tabName == 'tfHour') {
          _frames.push({
            name: 'tfHour-frame',
            url: "./frame-layout.html?entry=tfHour",
            bgColor: '#fff'
          })
        } else if (list[i].tabName == 'QA') {
          _frames.push({
            name: 'QAIndex-frame',
            url: "./frame-layout.html?entry=QAIndex",
            bgColor: '#fff'
          })
        } else if (list[i].tabName == 'recommend') {
          _frames.push({
            name: "recommend-frame",
            url: "./frame-layout.html?entry=recommend",
            bgColor: '#fff'
          })
        } else if (list[i].tabName == 'user') {
          _frames.push({
            name: 'user-frame',
            url: "./frame-layout.html?entry=user",
            bgColor: '#fff'
          })
        }
      }
      api.openFrameGroup({
        name: 'main',
        rect: {
          x: 0,
          y: 0,
          w: 'auto',
          h: window.innerHeight - ($api.rem2px(0.99) + $api.getSafeArea().bottom)
        },
        scrollEnabled: false,
        frames: _frames
      }, function (ret, err) {
        var index = ret.index;
      });
    });
  }
};

$api.init(index);

```

1. 在 src/script/entry 目录下，还分别有 index、recommend、tfHour、OA、user 路径下对应同名 js 文件中有如下添加路由的代码。其中 index.js 代码如下。

```javascript
import Vue from 'vue'
import VueFilter from '@U/vueFilter'
import Footer from "@P/common/footer-P"
import App from '@V/index/index-V.vue'
import $api from '@U/api'
import commonR from '@R/common-R'
VueFilter.init(Vue);

//注册路由
commonR.register();

var index = {
  createFooter() {
    var footer = new Vue({
      el: "#footer",
      template: `<Footer active='index'></Footer>`,
      components: {
        Footer
      }
    });
  },
  winMain(){
    document.title = "首页";
    if (!$api.isApiCloud) {
      this.createFooter();
    }
  },
  winApicloud(){
    $api.ready(()=>{
      $api.openFrame({
        name: "index-frame",
        pageParam: $api.pageParam()
      });
    });
  },
  winWeb(){
    main();
  },
  frameMain: main
};

function main(){
  new Vue({
    el:"#app",
    template:'<App >',
    components:{
      App
    }
  });
}

$api.init(index);
```

1. 在 src/html 中定义了各页面的模板，在该模板中引入了底部栏组件。

```html
<!DOCTYPE html>
<html>
<head>...</head>

<body>
    <header id="header"></header>
    <div id="app"></div>
    <footer id="footer"></footer> 
</body>
</html>


```











