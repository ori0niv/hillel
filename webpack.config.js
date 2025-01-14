const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";

    return {
        entry: "./src/index.js",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist"),
            clean: true,
        },
        mode: isProduction ? "production" : "development",
        devtool: isProduction ? false : "source-map",
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: ["html-loader"],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ["style-loader", "css-loader", "sass-loader"],
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: "styles.css",
            }),
            new HtmlWebpackPlugin({
                template: "./src/templates/index.html",
                filename: "index.html",
            }),
        ],
        devServer: {
            static: "./dist",
            open: true,
            hot: true,
            port: 9000,
        },
    };
};
