const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".js", ".css"],
  },

  plugins: [
    new ExtractTextPlugin("[name].css"),
    new CopyWebpackPlugin([{ from: "images/*", to: "dist" }]),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader", options: { importLoaders: 1 } },
            { loader: "postcss-loader", options: { sourceMap: "inline" } },
          ],
        }),
      },
    ],
  },
  devtool: "inline-source-map",
};
