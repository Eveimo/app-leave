const path = require('path')

function resolve(name) {
  return path.resolve(__dirname,name)
}
module.exports = {

  devServer: {
    port: 1000,
    proxy: {
      '': {
        target: 'http://192.168.1.221:12140/',
        ws: true,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '': '',
        },
      },
    },
  },

  publicPath: './',
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',

      title: '疫情防控数据核查',
    }

  },

  configureWebpack: () => ({
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  }),
  // chainWebpack: config => {
  //     const jsRule = config.module.rule('js');
  //     jsRule.uses.clear();
  //
  //     jsRule
  //       .test(/\.js$/)
  //       .include
  //       .add( resolve('node_modules/element-ui') )
  //       .add( resolve('src') )
  //       .end()
  //       .use('babel-loader')
  //       .loader('babel-loader')
  //       .end();
  // },
}
