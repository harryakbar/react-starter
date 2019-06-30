var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname , 'build'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']}
    ]
  },
  mode:'development',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin ({
      template: 'src/index.html'
    })
  ],
  devServer: {
    overlay: true
  }
};
