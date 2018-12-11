/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
const srcPath = [path.join(__dirname, '/../src'), path.join(__dirname, '/../demo/src')];
const dfltPort = 3000;

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
  return {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: srcPath,
        loader: 'tslint-loader',
        enforce: 'pre',
        exclude: '/node_modules/'
      },
      {
        test: /\.(ts|tsx)$/,
        include: srcPath,
        loader: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'tslint-loader',
        enforce: 'pre',
        exclude: '/node_modules/'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.sass/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded'
            }
          }
        ]
      },
      {
        test: /\.less/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.styl/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      },
      {
        test: /\.svg/,
        loader: 'raw-loader',
      },
      {
        test: /\.(mp4|ogg)$/,
        loader: 'file-loader'
      }
    ]
  };
}

/**
 * Get the default resolves object for webpack
 * @return {Object}
 */
function getDefaultResolves() {
  return {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  }
}

module.exports = {
  publicPath: '/',
  port: dfltPort,
  getDefaultModules: getDefaultModules,
  getDefaultResolves: getDefaultResolves
};