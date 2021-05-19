const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack"); // to access built-in plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "hello-world": "./src/hello.js",
    kiwi: "./src/kiwi.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 1024 * 3 // defines when common dependencies should be extracted to a file
    }
  },
  module: {
    rules: [
      // copy as a resource to the dist dir
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
      // build inline as base64
      {
        test: /\.(svg)$/,
        type: "asset/inline",
      },
      // as is
      {
        test: /\.(txt)$/,
        type: "asset/source",
      },

      // decides automatically based on file size
      // {
      //   test: /\.(png|jpg|svg)$/,
      //   type: "asset",
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: 3 * 1024, // 3 kb
      //     },
      //   },
      // },
      {
        test: /\.(css)$/,
        use: [/* "style-loader" */ MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(scss)$/,
        use: [
          /* "style-loader"*/ MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    // new TerserPlugin(), - in production mode it's included by default
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/page-template.hbs",
      filename: "hello-world.html",
      inject: "body",
      title: "Hello World",
      description: "Some HW description",
      minify: false,
      chunks: ["hello-world"],
    }),
    new HtmlWebpackPlugin({
      template: "src/page-template.hbs",
      filename: "kiwi.html",
      inject: "body",
      title: "Kiwi",
      description: "Some Kiwi description",
      minify: false,
      chunks: ["kiwi"],
    }),
  ],
};
