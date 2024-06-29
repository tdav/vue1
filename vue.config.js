// vue.config.js
module.exports = {
    chainWebpack: config => {
      config.module
        .rule('images')
          .set('parser', {
            dataUrlCondition: {
              maxSize: 4 * 1024 // 4KiB
            }
          })
    }
  }

