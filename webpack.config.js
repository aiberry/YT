const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: path.resolve('./src'),

  entry: {
    app: './app.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(css)/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|otf)$/,
        loader: 'file-loader'
      }
    ]
  },

  devtool: 'cheap-eval-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'BEM App',
      template: './index.html',
      inject: 'body',
      filename: 'index.html'
    })
  ],

  devServer: {
    contentBase: path.resolve('./dist'),
    port: 9000,
    clientLogLevel: 'silent',
    open: true
  }
};

module.exports = config;
