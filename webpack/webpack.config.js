const { resolve, alias, isDev, extensions } = require('./utils');
const Html = require('html-webpack-plugin');
const webpack = require('webpack');
const Progress = require('progress-bar-webpack-plugin');
const Css = require('mini-css-extract-plugin');
const env = process.env.NODE_ENV;

module.exports = {
  mode: env,
  entry: resolve('src/main.tsx'),
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: isDev ? 'js/[name].js' : 'js/[name].[contenthash].js'
  },
  resolve: {
    alias,
    extensions
  },
  module: {
    rules: [
      // javascript typescript
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader'
      },
      // css
      {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader' : { loader: Css.loader },
          'css-loader',
          'postcss-loader'
        ]
      },
      // sass scss
      {
        test: /\.s[a|c]ss$/,
        use: [
          isDev ? 'style-loader' : { loader: Css.loader },
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      // images
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'images/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      // media
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      // fonts
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new Html({
      template: resolve('public/index.ejs'),
      env: process.env.NODE_ENV
    }),
    new Progress(),
    new Css({
      filename: isDev ? 'css/[name].css' : 'css/[name].[hash].css'
    })
  ],
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
};
