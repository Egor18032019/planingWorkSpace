/* eslint-disable strict */
const path = require(`path`);
//  экспортируем настройки
module.exports = {
  entry: `./src/index.jsx`, // - точка входа в приложение
  output: {
    // файл сборки (бандл) назвали bundle.js;
    filename: `bundle.js`,
    // eslint-disable-next-line no-undef
    path: path.join(__dirname, `build`) // абсолютный путь до public где будет лежать bundle.js
  },
  devServer: {
    // eslint-disable-next-line no-undef
    contentBase: path.join(__dirname), // - пишем откуда серверу забирать файлы
    // где лежат html и css файлы
    open: false, // чтобы при запуске не открывался браузер
    port: 800, // - порт в котором открывается
    historyApiFallback: true // для react-router-dom
  },
  module: { // как преобразуються файлы для webpacka
    rules: [{
      test: /\.(js|jsx)$/, // те типы файлов котоорые проверям
      exclude: /node_modules/, // исключаем из проверки
      use: {
        loader: `babel-loader`,
      },
    },
    {
      test: /\.(tsx|ts)?$/,
      loader: `ts-loader`
    },
    ],
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `json`]
  },
  devtool: `source-map`,
};
