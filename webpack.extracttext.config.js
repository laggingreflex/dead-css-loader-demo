const path = require('path');
const BabelWebpackPlugin = require('babel-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DeadCss = require('dead-css-loader');
const webpack = require('webpack');

module.exports = {
  entry: [ './src/index.js' ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: [ path.resolve(__dirname, "src") ],
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ["react"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          DeadCss.extract(),
          {
            loader: "css-loader",
            query: {
              modules: true,
              localIdentName: "_[hash:5]",
              sourceMap: true,
              importLoaders: 2,
              camelCase: 'dashes'
            }
          },
          {
            loader: "dead-css-loader",
            query: {
              spinalCase: true,
              allowNonClassSelectors: true
            }
          },
          'postcss-loader'
        ]
        //*/
      },
      {
        test: /\.(jpg|eot|woff2*|ttf|svg)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new BabelWebpackPlugin({
      sourceMaps: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devtool: "source-map"
};
