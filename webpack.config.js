const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const s = path.sep
const sourceDir = path.resolve(__dirname, 'lib')
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
    module: {
      noParse: [
        /node_modules/,
        /data/,
        /debug/,
        /dist/,
        /example/,
        /coverage/,
        /lib/,
        /test/,
        /LICENSE/,
        /README\.md/
      ],
      rules: [
        {
          test: /\.js$/,
          include: /src\/*/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      /*new UglifyJSPlugin({
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /coverage/,
          /data/,
          /src/,
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
      })*/
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist')
    }
  }
}
