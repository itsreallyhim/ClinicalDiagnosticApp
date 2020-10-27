const webpack = require("webpack");
module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  },
  pluginOptions: {
    browserSync: {
      https: true,
    },
  },
  configureWebpack: (config) => {
    return {
      plugins: [new webpack.HotModuleReplacementPlugin()],
    };
  },
};
