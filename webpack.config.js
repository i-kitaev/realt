const path = require('path');

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = {
  context: __dirname,
  entry: {
    realt: path.join(src, 'index.js')
  },
  output: {
    path: dist,
    filename: '[name].js',
    library: 'ReAlt',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-object-rest-spread'],
          presets: ['es2015']
        }
      }
    ]
  }
};
