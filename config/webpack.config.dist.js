'use strict';

const path = require('path');
const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const TerserPlugin = require('terser-webpack-plugin');

let defaultSettings = require('./defaults');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  devtool: 'sourcemap',
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: '[name].js',
    library: 'copywriting-correct',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    publicPath: defaultSettings.publicPath,
    // webpack 4.x bug
    // https://github.com/webpack/webpack/issues/6522
    globalObject: "(typeof window !== 'undefined' ? window : this)"
  },
  entry: {
    'copywriting-correct.common': path.join(__dirname, '../src/index.ts'),
    'copywriting-correct.min': path.join(__dirname, '../src/export.ts'),
    'copywriting-correct': path.join(__dirname, '../src/export.ts'),
  },
  cache: false,
  resolve: defaultSettings.getDefaultResolves(),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new WebpackCleanupPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 8888,
      defaultSizes: 'parsed',
      openAnalyzer: false,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info'
    })
  ],
  optimization: {
    minimizer: [new TerserPlugin({
      test: /\.min.js(\?.*)?$/i
    })]
  },
  module: defaultSettings.getDefaultModules()
};
