'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanupPlugin =  require('webpack-cleanup-plugin');

let defaultSettings = require('./defaults');

module.exports = {
  entry: path.join(__dirname, '../demo/src/index.tsx'),
  output: {
    path: path.join(__dirname, '/../demo/public'),
    filename: 'main.[hash].js',
    publicPath: defaultSettings.publicPath
  },
  cache: false,
  devtool: 'sourcemap',
  resolve: defaultSettings.getDefaultResolves(),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../demo/src/index.html'),
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
  module: defaultSettings.getDefaultModules()
};
