const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new cleanPlugin(['dist']),  //每次打包时清理之前的dist文件夹下生成的文件
    new htmlWebpackPlugin({ //自动生成入口文件
      title: 'webPack San',
      template: 'index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.san$/,
        use: [
            'san-loader'
          ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader'
          ]
      }
    ]
  }
};