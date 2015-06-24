var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'www/js'),
  entry: {
    app: ["./script.js"]
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'www/build'),
    publicPath: "http://localhost:5555/assets",
    filename: "bundle.js"
  },
  module: {
  	loaders: [
  		{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
  	]
  },
  resolve: {
    // Allow require('./blah') to require blah.jsx
    extensions: ['', '.js', '.jsx'],
    root: path.join(__dirname, 'www/js')
  }
};