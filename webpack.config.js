const webpack = require("webpack");
const path = require("path");

const TerserPlugin = require("terser-webpack-plugin");

module.exports = {

    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd",
        library: "aalib",
        filename: "aalib.js"
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },

    plugins: [
        new webpack.BannerPlugin(require("fs").readFileSync("LICENSE", { encoding: "utf8" }))
    ],

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },

    devtool: "source-map"
};