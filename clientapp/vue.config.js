const path = require('path')

module.exports = {
  devServer: { https: true },

  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'stylus',
      'patterns': [
        path.resolve(__dirname, './src/styles/*.scss'),
      ]
    }
  },

  configureWebpack: {
    externals: {
      config: JSON.stringify({
        apiUrl: 'http://localhost:5000'
      })
    }
  }
};
