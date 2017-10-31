const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const s = path.sep
const sourceDir = path.resolve(__dirname, 'src')
const targetDir = path.resolve(__dirname, 'dist')

module.exports = env => {
  return {
    entry: {
      'youtube-search': path.resolve(sourceDir, 'entry.js')
    },
    output: {
      filename: '[name].js',
      path: targetDir,
      /*library: 'youtubeSearch',
      libraryTarget: 'umd'*/
    },
    resolve: {
      alias: {
        'request$': 'xhr'
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: /src\/*/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      new UglifyJSPlugin({
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /coverage/,
          /data/,
          /lib/,
          /debug/,
          /test/,
          /dist/
        ],
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          ecma: 6,
          warnings: true
        }
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist')
    }
  }
}
