const path = require('path')
const proxyUrl = '';

module.exports = {
  productionSourceMap: false,
  publicPath:'./',
  // devServer: {
  //   disableHostCheck: true,
  //   proxy: {
  //     '/api': {  //使用"/api"来代替"http://f.apiplus.c"
  //       target: proxyUrl, //源地址
  //       changeOrigin: true, //改变源
  //       pathRewrite: {
  //         '^/api': '/' //路径重写
  //       }
  //     }
  //   }
  // },

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
    config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true,
                preprocess: function (MarkdownIt, Source) {
                  MarkdownIt.renderer.rules.table_open = function () {
                    return '<div class="table-container"><table class="table">'
                  };
                  MarkdownIt.renderer.rules.table_close = function () {
                    return '</table></div>'
                  };
                  return Source
                }
            })
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
