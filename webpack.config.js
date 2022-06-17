// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: join(__dirname, "lib"),
    filename: "main.js",
  },
};
