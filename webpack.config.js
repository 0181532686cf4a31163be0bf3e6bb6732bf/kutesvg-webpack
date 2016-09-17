var webpack = require("webpack");

module.exports = {
  entry: './main.js',
  output: {
    path: '.',
    filename: 'bundle.js'
  },
  module: {
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components', 'web_modules']
  },
      loaders: [
      { test: require.resolve('kute.js'), loader: 'imports?this=>window!expose?KUTE' },
    ],
  }
};
