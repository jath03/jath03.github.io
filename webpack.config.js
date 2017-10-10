const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
const glob = require("glob");

var config = {
  entry: {
    index: __dirname + '/src/static/js/index.jsx',
  },
  output: {
    path: __dirname + '/src/static/dist',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.css?/,
        loader: extractTextPlugin.extract("css-loader")
      },
      {
        test: /\.jsx?/,
        exclude: ['/node_modules/', 'sw.js'],
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new extractTextPlugin("[name].css")
  ]
};
var files = glob.sync(__dirname + '/src/static/js/*/index.jsx');
var name;
for (var i=0; i < files.length; i++) {
  fname = files[i].split("/").splice(8);
  name = fname.join("/").split(".")[0];
  config.entry[name] = files[i];
}

module.exports = config;
