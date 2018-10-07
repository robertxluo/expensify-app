const path = require('path');
const MiniCssExtractTextPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    plugins: [
      new MiniCssExtractTextPlugin({
        filename: 'styles.css'
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