const HtmlWebpackPlugin = require('html-webpack-plugin');//处理HTML
const ExtractTextPlugin = require("extract-text-webpack-plugin");//分离css样式表
const CleanWebpackPlugin = require('clean-webpack-plugin');//清除打包文件后dist文件中的多个app.bundle+hash.js
const webpack = require('webpack');

//获取线上环境变量--可议查看package.json
const isProd = process.env.NODE_ENV === 'production';
const cssDev = ["style-loader", "css-loader", "sass-loader"];//开发环境使用这个
const cssProd = ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader", "sass-loader"]
});
const cssConfig = isProd ? cssProd : cssDev;

console.log(isProd)

module.exports = {
    mode: 'none',
    entry: {
        'app.bundle':'./src/app.js',
        'contact':'./src/contact.js'
    },
    output: {//处理打包后文件路径
        path: __dirname + '/dist',//打包文件存放的地方
        // filename: '[name].[chunkhash].js',//打包后输出文件名
        filename: '[name].[hash].js',//打包后输出文件名,-----使用模块热加载的话要使用hash
    },
    module: {//加载css
        rules: [
            {
                test: /\.scss$/,
                // use: ['style-loader', 'css-loader','sass-loader']
                use: cssConfig
            },
            // 这两行是处理 react 相关的内容
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',//确保用户输出图片的路径不会被编译
                            outputPath: 'images/',//指定编译后图片的路径名
                        }
                    }
                ]
            }
        ]
    },
    //服务器相关配置
    devServer: {
        port: 9000,//指定端口号
        open:true,//打开浏览器 
        hot: true,//表示打开热加载
    },
    plugins: [//处理html文件-----第一个html文件
        new HtmlWebpackPlugin({
            title: 'index template',//改变HTML文件的标题头
            // Load a custom template (lodash by default see the FAQ for details)
            template: './src/index.html',//源代码模板
            filename:'index.html',//打包后对应的名字
            minify: {
                collapseWhitespace: true,//去掉html文件中的空格
            },
            hash: true,//引入的文件会加hash值
            chunks: ['app.bundle'],//表示index只会引入app.hundle文件
        }),
        //处理html文件----第二个html文件
        new HtmlWebpackPlugin({
            title: 'contact template',//改变HTML文件的标题头
            // Load a custom template (lodash by default see the FAQ for details)
            template: './src/contact.html',//源代码模板
            filename:'contact.html',//打包后对应的名字
            minify: {
                collapseWhitespace: true,//去掉html文件中的空格
            },
            hash: true,//引入的文件会加hash值
            chunks: ['contact'],//只会引入contact文件  excludeChunks:除了某个文件不加载其他都加载
        }),
        new ExtractTextPlugin({
            filename:'styles.css',//使用热加载的时候,要将style.css设置为true
            disable:!isProd,
        }),//css 跟js文件分离
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),//打开热加载的时候使用
        new webpack.HotModuleReplacementPlugin(),//打开热加载的时候使用
    ]
};