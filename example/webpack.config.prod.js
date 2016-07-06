'use strict';

let webpack = require('webpack');
let shared = require('./webpack.config.shared');

module.exports = {
  entry: shared.entry,
  output: shared.output,
  externals: shared.external,
  module: {
    postLoaders: shared.postLoaders,
    loaders: shared.loaders
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      drop_console: true,
      sourceMap: false,
      mangle: {
        except: shared.vendors
      }}
    )
  ],
  target: 'web',
  node: shared.node
};
