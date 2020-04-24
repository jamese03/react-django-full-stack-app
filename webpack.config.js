const path = require('path');
module.exports = {
    entry: path.join(__dirname, 'full_stack_app/frontend/src/index.tsx'),
    output: {
        filename: 'main.js',
        path: path.join(__dirname, './full_stack_app/frontend/static/frontend/')
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'awesome-typescript-loader'
                },
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ],
    },
};
