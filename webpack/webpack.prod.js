const base = require('./webpack.config');
const merge = require('webpack-merge');
const Size = require('size-plugin');
const Ext = require('script-ext-html-webpack-plugin');
const Analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const prod = merge(base, {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial'
        },
        async: {
          priority: 5,
          chunks: 'async'
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },
  plugins: [new Size(), new Ext({ inline: ['runtime'] })]
});

if (process.env.PERFORMANCE) {
  prod.plugins.push(new Analyzer());
}

module.exports = prod;
