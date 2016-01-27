var path = require('path');
module.exports = {
    entry: {
        app: ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style', 'css', 'sass']
            }

        ]
    }
};