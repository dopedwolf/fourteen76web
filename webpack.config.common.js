var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './assets/app/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.css$/,
                use: [{ loader: 'raw-loader' }]
            },
            {
              test: /\.png$/,
              exclude: /node_modules/,
              loader: 'file-loader?name=images/[name].[ext]'
            },
            {
              test: /\.jpg$/,
              exclude: /node_modules/,
              loader: 'file-loader?name=images/[name].[ext]'
            }
        ],
        exprContextCritical: false

    }
};
