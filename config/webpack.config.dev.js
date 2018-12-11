'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const defaultSettings = require('./defaults');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    path.join(__dirname, '../demo/src/index.tsx')
  ],
  cache: true,
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: 'copywriting-correct.js',
    library: 'copywriting-correct',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    publicPath: defaultSettings.publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false
  },
  resolve: defaultSettings.getDefaultResolves(),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../demo/src/index.html'),
    }),
  ],
  module: defaultSettings.getDefaultModules()
};
