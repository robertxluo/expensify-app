const path = require('path');
const webpack = require('webpack');
const MiniCssExtractTextPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test')
{
  require('dotenv').config({path: '.env.test'});
}
else if (process.env.NODE_ENV === 'development')
{
  require('dotenv').config({path: '.env.development'})
}

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    plugins: [
      new MiniCssExtractTextPlugin({
        filename: 'styles.css'
      }),
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
      })
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/env', "@babel/preset-react"],
              }
            }
          }, 
          {
            test: /\.s?css$/,
            use: [
              MiniCssExtractTextPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
        ]
      },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        historyApiFallback: true, 
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}