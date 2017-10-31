const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const sourceDir = path.resolve(__dirname, 'src')
const targetDir = path.resolve(__dirname, 'dist')

module.exports = env => {

  let filename = '[name].js', plugins = []

  if (env.production) {

    filename = '[name].min.js'
    plugins.push(
      new UglifyJSPlugin({
        test: /\.js$/,
        include: /src/,
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          ecma: 6,
          warnings: true
        }
      })
    )
  }
  return {
    entry: {
      'youtube-search': path.resolve(sourceDir, 'entry.js')
    },
    output: {
      filename: filename,
      path: targetDir,
      library: 'youtubeSearch',
      libraryTarget: 'umd'
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
          include: /src/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: plugins
  }
}
