const path = require("path");
const webpack = require("webpack");
const EX = require("extract-text-webpack-plugin");//为了单独打包css
const EXCSS = new EX('[name].css');
const env = process.env.NODE_ENV;
module.exports = {
  entry: {
    'index': './src/app/app.js',
    'zh-CN': './src/i18n/zh-CN.js',
    'en': './src/i18n/en.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 8080
  },
  module:{
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      include:[
        path.resolve(__dirname, 'src/app'),
        path.resolve(__dirname, 'src/pages')
      ],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-3'],
            plugins: ['transform-runtime']
          }
        }
      ]
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
    }, {
      test: /\.(less|css)$/,
      use: EXCSS.extract({
        fallback: "style-loader",
        use: ['css-loader', 'less-loader']
      })
    }]
  },
  plugins:[
    EXCSS,
    new webpack.DefinePlugin({
        "env": env
    })
  ]
};