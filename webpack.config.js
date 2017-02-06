const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './drag.js'
  },
  output: {
    path: __dirname + './dist',
    filename: '[name].bundle.js',
    publicPath: '/assert'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
            'style-loader', 'css-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: __dirname + '/src'
  }
};