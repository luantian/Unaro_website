const path = require('path')
const proxyUrl = 'http://192.168.101.205:9091';


module.exports = {
  devServer: {
    proxy: {
      '/api': {  //使用"/api"来代替"http://f.apiplus.c"
        target: proxyUrl, //源地址
        changeOrigin: true, //改变源
        pathRewrite: {
        '^/api': '/' //路径重写
        }
      }
    }
  },

  css: {
    loaderOptions: {
        sass: {
            prependData: `@import "./src/scss/global.scss";`,
        },
    },
},

  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  }

}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
        patterns: [
        path.resolve(__dirname, './src/scss/global.scss'),
    ],
  })
}
