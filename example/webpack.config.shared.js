'use strict';

let path = require('path');
let autoprefixer = require('autoprefixer');
let precss = require('precss');

let cwd = process.cwd();

const vendors =  [

];

const CONFIG = {
    vendors: vendors,
    postLoaders: [
        {
            loader: 'transform?envify'
        }
    ],
    loaders: [
        {
            test: /\.js$|\.jsx$/i,
            //exclude: /node_modules/,
            loader: 'babel',
            include: [
                path.normalize(`${cwd}/src/`),
                path.normalize(`${cwd}/../src/`),
            ]
        },
        {
            test: /\.(woff|ttf|eot|svg|png)(\?.*)?/,
            loader: 'url-loader'
        }
    ],
    entry: {
        example: [path.normalize(`${cwd}/src/index.js`)]
    },
    output: {
        path: path.normalize(`${cwd}/lib`),
        publicPath: '/lib/',
        filename: '[name].js',
        chunkFilename: '[name].[id].js',
        pathinfo: true
    },
    external: {
    },
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        fs: 'empty'
    }
};

module.exports = CONFIG;
