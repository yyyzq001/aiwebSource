
const Timestamp = new Date().getTime();
module.exports = {
    outputDir: 'aiweb',
    publicPath:'./',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.1.168:8510',//代理地址，这里设置的地址会代替axios中设置的baseURL
                changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
                proxyTimeout: 10 * 60 * 1000,
                timeout: 10 * 60 * 1000,
                //ws: true, // proxy websockets
                //pathRewrite方法重写url
                pathRewrite: {
                    //pathRewrite: {'^/api': '/'} //重写之后url为 http://192.168.1.16:8085/xxxx
                    pathRewrite: { '^/api': '/api' }// 重写之后url为 http://192.168.1.16:8085/api/xxxx
                }
            }
        },
    },
    configureWebpack: { // webpack 配置
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            filename: `js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
            chunkFilename: `js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
        },
    },
    css: {
        extract: {
            filename: `css/[name].${process.env.VUE_APP_Version}.${Timestamp}.css`,
            chunkFilename: `css/[name].${process.env.VUE_APP_Version}.${Timestamp}.css`
        }
    },
}