const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const extractVendorCSS =
  new ExtractTextPlugin('stylesheets/vendor.[contenthash].css');
const extractCSS =
  new ExtractTextPlugin('stylesheets/styles.[contenthash].css');

const PRODUCTION = {
  'process.env.NODE_ENV': JSON.stringify('production'),
};

const VENDOR_LIBS = [
  'babel-polyfill',
  'react',
  'react-dom',
  'react-intl',
  'react-intl-redux',
  'react-redux',
  'react-router',
  'react-router-redux',
  'redux',
  'redux-thunk',
];

const LOCAL_NAME = '[hash:base64:5]';

const srcPath = [
  path.join(__dirname, 'src'),
];
const cssGlobals = [
  path.join(__dirname, 'node_modules'),
  './src/assets',
];

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS,
  },
  target: 'web',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.css$/,
        use: extractVendorCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
        include: cssGlobals,
        exclude: srcPath,
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: [
            `css-loader?modules&importLoaders=1&localIdentName=${LOCAL_NAME}`,
            'postcss-loader',
          ],
        }),
        include: srcPath,
        exclude: cssGlobals,
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'assets/fonts/[name].[ext]',
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
              name: 'assets/fonts/[name].[ext]',
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
              name: 'assets/fonts/[name].[ext]',
              limit: 10000,
              mimetype: 'application/octet-stream',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 40000,
              name: 'assets/images/[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
    ],
  },
  plugins: [
    extractVendorCSS,
    extractCSS,
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin(PRODUCTION),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
      sourceMap: true,
    }),
    // new CompressionPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.js$/,
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: './templates/index.html',
      filename: './index.html',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../analyzer/report.html',
      openAnalyzer: false,
    }),
  ],
};
