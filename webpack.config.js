var path = require('path');
var webpack = require('webpack');
var DeadCSSPlugin = require('webpack-dead-css');

module.exports = {
  entry: [ './src/index.js' ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  plugins: [
    new DeadCSSPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            query: {
              "presets": [ ["es2015", { "modules": false }] ]
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
            options: {
              modules: true,
              camelCase: 'dashes'
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map'
};
