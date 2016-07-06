'use strict';

let webpack = require('webpack');
let shared = require('./webpack.config.shared');




module.exports = {
  devtool: 'eval-cheap-module-source-map',
  debug: true,
  entry: shared.entry,
  output: shared.output,
  externals: shared.external,
  module: {
    
    loaders: shared.loaders
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  target: 'web',
  watch: true,
  node: shared.node
};



