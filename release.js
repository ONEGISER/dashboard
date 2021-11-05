const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const { CheckerPlugin } = require('awesome-typescript-loader');
const ignores = Object.assign(pkg.devDependencies, pkg.dependencies);
const UglifyESPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: `${pkg.name}.js`,
        library: `${pkg.name}`,
        libraryTarget: "umd"
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'awesome-typescript-loader?silent=true&declaration=true&declarationDir=libTmp' },
            { test: /\.css$/, use: ['style-loader', 'css-loader?minimize'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader?minimize', 'less-loader'] },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
        new webpack.optimize.OccurrenceOrderPlugin(),
        new UglifyESPlugin({
            // 多嵌套了一层
            uglifyOptions: {
                compress: {
                    drop_debugger: true,
                    drop_console: true,  //生产环境自动删除console
                },
                warnings: false,
            },
            sourceMap: false,
            parallel: true,//使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        }),
        new webpack.optimize.AggressiveMergingPlugin(),//合并块    
    ],
    entry: ['./src/components/index.ts'],
    externals: [ignores]
}