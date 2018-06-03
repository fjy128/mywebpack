<h2>使用webpack搭建前端开发环境</h3>
<p>---2018-04-15</p>
<h3>(一)</h3>
<h4>1、首先在自己的电脑上安装node环境，可以到Node 官网上自行下载，下载地址：<a src="https://nodejs.org/en/">https://nodejs.org/en/</a>，这里就不赘诉；</h4>
<h4>2、安装webpack  npm install -g webpack(全局安装到电脑中，以后可以使用webpack的命令执行程序)，安装过程觉得太慢的可以使用淘宝镜像，地址：<a src="https://npm.taobao.org/">https://npm.taobao.org/</a></h4>
<h3>3、创建项目</h3>
<p>1）创建以个文件夹，作为项目的文件夹  mkdir webpack_sample_project (webpack_sample_project表示文件名)</p>
<p>2）进入该文件夹 cd webpack_sample_project</p>
<p>3)初始化项目 npm init(若是不是发布到GitHub上的，默认就好) 执行完npm init 之后就会生成package.json文件</p>
<p>4)在项目安装webpack npm install --save-dev webpack (--save-dev可以使用-D代替，达到的效果一致)</p>
<p> 相关命令： ls --表示查看当前文件夹列表  ls node_modules 表示查看node_modules文件夹的所有列表</p>
<p>5) mkdir src 创建src文件夹，存放源码；mkdir dist 存放编译后的文件</p>
<p>6)touch src/app.js 在文件夹src 创建文件app.js 并在该文件写console.log('hello world !')</p>
<p> 7)touch webpack.config.js创建配置文件 ，</p>
<p> 创建完毕就可以直接使用 webpack 代替 webpack src/app.js dist/app.bundle.js(本人执行时不成功的);</p>
<p>webpack --watch 文件监听  webpack -p 打包</p>
<p> 8）修改package.json </p>
<p>
    "scripts": {
        "dev": "webpack --watch", ---npm run dev 启动项目
        "prod":"webpack -p"       ---npm run prod  打包项目
    },
</p>
<h3>(二)</h3>
<p>使用第一个插件 html-webpack-plugin </p>
<p>9）touch dist/index.html  创建一个HTML文件  html文件一般都是放在dist文件下面</p>
<p>10）open index.html   在浏览器打开HTML文件</p>
<div>
<p>11) 安装 npm i --save-dev html-webpack-plugin </br> 网址：<a src="https://github.com/jantimon/html-webpack-plugin">https://github.com/jantimon/html-webpack-plugin</a>
    修改webpack.config.js ---每次修改都要重新启动项目</br>
    const HtmlWebpackPlugin = require('html-webpack-plugin')</br>
    module.exports = {</br>
    entry: 'app.js',//入口文件</br>
    output: {</br>
        path: __dirname + '/dist',</br>
        filename: 'app.bundle.js',//编译之后文件</br>
    },</br>
    plugins: [</br>
        new HtmlWebpackPlugin()</br>
    ]</br>
    }</br>
    </p>
</div>
<p>12）安装 pm install --save-dev css-loader  网址：<a src="https://github.com/webpack-contrib/css-loader">https://github.com/webpack-contrib/css-loader</a></p>
<p>13)安装  npm install style-loader --save-dev  网址：<a src="https://github.com/webpack-contrib/style-loader">https://github.com/webpack-contrib/style-loader</a></p>
<p>14)安装 npm install sass-loader node-sass --save-dev 网址：<a src="https://github.com/webpack-contrib/sass-loader">https://github.com/webpack-contrib/sass-loader</a>
</p>
<p>15)安装 npm install --save-dev extract-text-webpack-plugin 网址：<a src="https://github.com/webpack-contrib/extract-text-webpack-plugin ">https://github.com/webpack-contrib/extract-text-webpack-plugin </a> 
</p>
<p>
在执行样式分离这个插件时报错 报以下错（20180421）</br>
DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead</br>
/Users/a/Desktop/myWebpack/node_modules/webpack/lib/Chunk.js:528</br>
原因：webpack4.1.0及以上版本，不再支持 extract-text-webpack-plugin，</br>
因为：extract-text-webpack-plugin 最新版本为 3.0.2，这个版本还没有适应 webpack 4 的版本</br>
解决办法：使用 4.0 beta 版，npm install --save-dev extract-text-webpack-plugin@next）</br>
</p>
<p>
更新node  1) npm install -g n</br>
         2) n stable  // 如果遇到权限问题，可以使用 sudo n stable</br>
更新npm  1)  sudo npm -g install npm@5.8.0  </br>
</p>
<p>16）安装 npm install webpack-dev-server --save-dev  网址：<a src="https://github.com/webpack/webpack-dev-server">https://github.com/webpack/webpack-dev-server</a></p>
<p>建议全局安装 npm install -g webpack-dev-server </p>
<p>
修改webpack.json</br>
  "scripts": {</br>
    "dev": "webpack-dev-server",</br>
    "prod": "webpack -p"</br>
  },</p>
<p>devserver 网址 <a src="https://webpack.js.org/configuration/dev-server/#devserver">https://webpack.js.org/configuration/dev-server/#devserver</a></p>
<p>17)搭建react开发环境  </p>
<p>
地址：<a src="https://www.rails365.net/articles/webpack-3-ling-ji-chu-ru-men-jiao-cheng-8-yong-webpack-he-babel-pei-zhi-react-kai-fa-huan-jing">https://www.rails365.net/articles/webpack-3-ling-ji-chu-ru-men-jiao-cheng-8-yong-webpack-he-babel-pei-zhi-react-kai-fa-huan-jing</a>
</p>
<p>安装 npm install --save react react-dom</p>
<p>18）建立babel</p>
<p>npm install --save-dev babel-core babel-preset-react babel-preset-env</p>
<p>地址：<a src="https://www.rails365.net/articles/babel-ru-men-zhi-nan">https://www.rails365.net/articles/babel-ru-men-zhi-nan</a></p>
<p>19）安装badel npm install --save-dev babel-loader</p>
<p>20)安装 npm i clean-webpack-plugin --save-dev 地址：<a src="https://github.com/johnagan/clean-webpack-plugin">https://github.com/johnagan/clean-webpack-plugin</a></p>
<p>21）创建多个HTML</p>
<p>22）模块热替换   地址：<a src="https://webpack.js.org/guides/hot-module-replacement/"></a></p>
<p>23)开发环境与线上环境的区别</p>
<p>
"scripts": {</br>
    "dev": "webpack-dev-server",//开发环境</br>
    "prod": "webpack -p",//生产环境</br>
  },
</p>
<p>24）图片打包 /p>
<p>安装：npm install --save-dev file-loader   地址：<a src="https://github.com/webpack-contrib/file-loader">https://github.com/webpack-contrib/file-loader</a></p>
<p>  <a src="https://github.com/webpack-contrib/file-loader ">https://github.com/webpack-contrib/file-loader </a> 处理图片压缩</p>

