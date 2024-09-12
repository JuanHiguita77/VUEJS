const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.PUBLIC_HTML || "/"
})

//El public path es para decirle la ruta para acceder a los archivos en un host
