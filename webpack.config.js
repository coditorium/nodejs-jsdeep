const webpack = require('webpack');
const path = require('path');
const yargs = require('yargs');
const libraryName = require('./package').name;

const isProduction = yargs.argv.env === 'production'; // use --env with webpack 2
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const plugins = () => (
  isProduction ?
    [new UglifyJsPlugin({ minimize: true, sourceMap: true })] :
    []
);

const outputFile = () => (
  isProduction ?
    `${libraryName}.min.js` :
    `${libraryName}.js`
);

module.exports = {
  entry: './lib',
  devtool: 'source-map',
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: outputFile(),
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};
