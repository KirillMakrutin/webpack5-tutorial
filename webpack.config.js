const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/",
  },
  mode: "none",
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
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
