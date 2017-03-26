/* eslint-disable max-len */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractVendorCSS = new ExtractTextPlugin('stylesheets/vendor.css');
const extractCSS = new ExtractTextPlugin('stylesheets/styles.css');

// const LOCAL_NAME = '[name]__[local]___[hash:base64:5]';

// const srcPath = [
//   path.join(__dirname, 'src'),
// ];
// const cssGlobals = [
//   path.join(__dirname, 'node_modules'),
//   './src/assets',
// ];

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index',
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 40000,
              name: 'assetsr/images/[hash].[ext]',
            },
          },
          'image-webpack-loader',
        ],
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'assetsr/fonts/[name].[ext]',
              limit: 65000,
              mimetype: 'application/vnd.ms-fontobject',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'assetsr/fonts/[name].[ext]',
              limit: 5000,
            },
          },
        ],
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'assetsr/fonts/[name].[ext]',
              limit: 10000,
              mimetype: 'application/octet-stream',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    extractVendorCSS,
    extractCSS,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
};
