'use strict';

const path = require('path');

module.exports = {
  mode: 'development', // режим разработки
  entry: './src/index.js', // файл обработки (сборки)
  output: {
    path: path.resolve(__dirname, 'dist'), // куда ложить файл
    filename: 'main.js', // конечный файл на выходе
  },
  //watch: true, // отслеживать и изменять автоматом

  devtool: "source-map", // генерация source-map

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          // юзаем бабель для кроссбраузерности
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      } 
    ],
  }
};