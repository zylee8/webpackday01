//引入js
import { fn } from "./tab.js";
import { lunbo } from "./lunbo.js";

//引入css less
import "../src/style/index.css";
import "../src/style/index.less";
// 引入字体图标文件
import "./assets/fonts/iconfont.css";

//图片
import gifSrc from "../src/assets/1.gif";
import pngSrc from "../src/assets/logo_small.png";

const gif = document.createElement("img");
const png = document.createElement("img");

gif.src = gifSrc;
png.src = pngSrc;

document.body.appendChild(gif);
document.body.appendChild(png);

fn();
lunbo();

const fnn = () => {
  console.log("js高级");
};

fnn();
