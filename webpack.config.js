// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");

module.exports = {
  //设置打包模式
  mode: "production",
  //设置入口
  entry: "./src/index.js",
  //设置出口
  output: {
    path: join(__dirname, "lib"),
    filename: "index.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, "public/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
};
