const base = require('./webpack.config');
const { config, getIpTips } = require('./utils');
const merge = require('webpack-merge');
const Friend = require('friendly-errors-webpack-plugin');
const ips = getIpTips();

module.exports = merge(base, {
  devServer: {
    host: '0.0.0.0',
    port: config.port,
    publicPath: '/',
    inline: true,
    hot: true,
    clientLogLevel: 'warning',
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/
    },
    noInfo: true
  },
  plugins: [
    new Friend({
      compilationSuccessInfo: {
        notes: ips.tips
      }
    })
  ]
});
