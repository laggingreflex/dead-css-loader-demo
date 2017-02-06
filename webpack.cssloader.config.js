const path = require('path');
const BabelPlugin = require('babel-webpack-plugin');
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
          "style-loader",
          {
            loader: "css-loader",
            query: {
              modules: true,
              localIdentName: "_[local]_[name]",
              importLoaders: 2,
              camelCase: 'dashes'
            }
          },
          {
            loader: "dead-css-loader",
            query: {
              recursion: 1,
              spinalCase: true,
              allowNonClassSelectors: true
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpg|eot|woff2*|ttf|svg)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new BabelPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
