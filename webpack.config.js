const path = require("path");
module.exports = {
    entry: path.join(__dirname, "full_stack_app/frontend/src/index.tsx"),
    output: {
        filename: "main.js",
        path: path.join(
            __dirname,
            "./full_stack_app/frontend/static/frontend/"
        ),
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "awesome-typescript-loader",
                },
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ],
    },
    //loaders: ["react-hot"],
    // TODO fix webpack dev server and hot reload? 
    // script is "start": "webpack-dev-server --hot"
    devServer: {
        contentBase: path.join(__dirname, "full_stack_app/frontend/templates/frontend/"),
        port: 3000,
        hot: true,
    },
};
