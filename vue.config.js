const { resolve } = require("path");
module.exports = {
  configureWebpack: {
    // 然后在 index.html 手动cdn引入(或者用插件自动添加)
    // externals: {
    //   vue: "Vue",
    //   "element-ui": "ELEMENT",
    // },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all", // 表示哪些代码需要优化，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为async
        maxInitialRequests: Infinity, // 按需加载时候最大的并行请求数，默认为5
        minSize: 30000, // 依赖包超过300000bit将被单独打包
        // 缓存组
        // priority: 缓存组打包的先后优先级
        // minChunks: 表示被引用次数，默认为1
        cacheGroups: {
          //公共模块
          commons: {
            name: "chunk-commons",
            test: resolve("src"), // can customize your rules
            minSize: 5, //大小超过100个字节
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
          // 第三方库
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial", // only package third parties that are initially dependent
            reuseExistingChunk: true,
            enforce: true,
          },
          element: {
            name: "element-lib",
            test: /[\\/]node_modules[\\/]element-plus[\\/]/,
            chunks: "all",
            priority: 12,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      },
    },
  },
};
