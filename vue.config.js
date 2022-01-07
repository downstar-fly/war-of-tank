const path = require('path');

module.exports = {
    publicPath: '/',
    pages: {
        app: {
            entry: 'src/main.ts',
            template: 'public/index.html',
            filename: 'index.html',
            // chunks: ['chunk-vendors', 'chunk-common', 'index'],
        }
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true,
                }
            }
        },
    },
    devServer: {
        host: '0.0.0.0',
        port: 8081,
        hot: true,
        // ipc: true,
        liveReload: true,
        open: true,
        compress: true, //开启Http报文压缩
        // client: {
        //     overlay: false, // 出现编译错误时全局提示
        //     progress: true, // 浏览器中以百分比显示编译速度
        //     reconnect: true, //无限次尝试重新连接
        // },
        headers: {
            'username': 'ggw',
        },
        proxy: {
            '/':{
                target: 'http://localhost:8080/',
            },
        },
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', path.resolve(__dirname, 'src'));
        config
        // config.module
        //     .rule('ts')
        //     .use('ts-loader')
        //     .end();

    }
}