
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var apiHost;
var oapiHost;

var setupApi = function(){
    if(process.env.NODE_ENV === 'production'){
        if(!(process.env.server)){
            throw 'server is required'
        }
        if(!(process.env.port)){
            throw 'port is required'
        }
        apiHost = `http://${process.env.server}:${process.env.port}/api`
        oapiHost = `http://${process.env.server}:${process.env.port}/oapi`
    }else{
        apiHost = 'http://localhost:3003/api'
        oapiHost = 'http://localhost:3003/oapi'
    }   
}

setupApi()

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules',
            jquery:  'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery:  'jquery',
            'window.jQuery' : 'jquery'
        }),
        new ExtractTextPlugin('app.css'),
        new webpack.DefinePlugin({
            __API__: JSON.stringify(apiHost),
            __OAPI__: JSON.stringify(oapiHost),
          }),
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            loader: 'file'
        }]
    }
}
