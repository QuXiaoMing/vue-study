const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'vue.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        hot: true,
        port: 9000,
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html', //通过模板生成的文件名
            template: 'index.html', //模板路径
            inject: false, //是否自动在模板文件添加 自动生成的js文件链接
            title: '这个是WebPack Demo',
            minify: {
                removeComments: true, //是否压缩时 去除注释
            },
        }),
    ],
};
