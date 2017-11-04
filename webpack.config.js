const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const sourceDir = path.resolve(__dirname, 'src')
const targetDir = path.resolve(__dirname, 'dist')

module.exports = env => {

  // initialize for development environment
  let filename = '[name].js', plugins = []
  let sourceMap = 'inline-source-map'

  if (env.production) {

    sourceMap = 'source-map'
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
          warnings: false
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
    plugins: plugins,
    devtool: sourceMap
  }
}
