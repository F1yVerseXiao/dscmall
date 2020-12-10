module.exports = {
  publicPath: "./",
  devServer: {
    host: "0.0.0.0",
    port: "2333",
    open: true,
    proxy: {
      "/api": {
        // 配置要代理的域名
        target: "https://x.dscmall.cn/api",
        // 允许跨域
        changeOrigin: true,
        pathRewrite: {
          // 路径重写
          "/api": "",
        },
      },
    },
  },
};
