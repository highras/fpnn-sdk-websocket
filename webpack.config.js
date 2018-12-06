const path = require('path');

//amd
module.exports = {
    entry: './src/fpnn.js',
    output: {
        filename: 'fpnn.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'fpnn',
        libraryTarget: 'umd'
    },
    // devtool: 'source-map',
    target: 'web',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'libs')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ["es2015"]
                }
            }
        ]
    }
};
