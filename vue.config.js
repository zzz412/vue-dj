module.exports = {
  devServer: {
    open: true,
    proxy: { // 配置请求代理
      '/dj': { // 哪些请求需要代理
        target: 'https://we.dji.com/hire_front/api/common', // 代理地址
        pathRewrite: { '^/dj': '' }, // 重写请求头
        changeOrigin: true // 携带请求源
      }
    }
  }
}
