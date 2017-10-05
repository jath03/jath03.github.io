const webpack = require('webpack');

const config = {
  entry: __dirname + '/src/static/js/index.jsx',
  output: {
    path: __dirname + '/src/static/dist',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: ['/node_modules/', 'sw.js'],
        use: 'babel-loader'
      }
    ]
  },
};

module.exports = config;
