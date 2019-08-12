### 准备工作

#### Vue仓库准备工作
1. 阅读vue官方的开发设置[Development Setup](https://github.com/vuejs/vue/blob/dev/.github/CONTRIBUTING.md#development-setup)。把vue项目clone到本地，安装好依赖

2. 进入vue目录，执行`yarn link`。把本地vue仓库注册到全局

3. 执行`yarn dev`。此命令会自动监听src中的文件改动，自动执行打包命令，输出结果到dist中


#### 本仓库的准备工作

1. `git clone 本仓库`。安装依赖:`yarn install`

2. 执行: `yarn link vue`。链接上一步全局注册的vue

3. 执行`yarn start`。启动服务器，访问`http://localhost:9000/`，通过控制台查看输出

#### 完成！
> vue仓库中任何src中的改动，都会触发浏览器自动刷新

![演示图片](./images/vue-inspect.gif)