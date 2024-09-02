const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    hot: true, // Asegúrate de que hot reload esté habilitado
  }
})

