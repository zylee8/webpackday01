// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");
// webpack.config.js
const { VueLoaderPlugin } = require("vue-loader");

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
    new VueLoaderPlugin(),
  ],
  devServer: {
    port: 3000, // 端口号
    open: true,
  },
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
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: "asset",
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset",
        generator: {
          filename: "images/[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024,
          },
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash:6][ext]",
        },
      },

      {
        test: /\.js$/i,
        use: ["babel-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
};
