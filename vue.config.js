const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {}
  },
  transpileDependencies: true
})
