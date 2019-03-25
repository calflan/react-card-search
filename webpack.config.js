const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = [
  {
    entry: './src/js/index.js',
    output: {
      filename: 'scripts/card-listings.js',
      path: path.join(__dirname, 'web')
    },
    externals: {
      "react": "React",
      "react-dom": "ReactDOM"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    },
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/),
      new CopyWebpackPlugin([
        { from: './src/card-listings.html', to: 'card-listings.html' }
      ]),
      (process.env.apiEnv === 'prod' ? new UglifyJsPlugin() : { apply: () => {}})
    ],
    devServer: {
      contentBase: path.resolve('web')
    }
  }
]
