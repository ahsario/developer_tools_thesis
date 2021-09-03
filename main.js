import "./style.scss";
import { addCard, addAudio, addVideo } from "./src/media";
import qwe from "./src/images/qwe.jpg";
import asd from "./src/images/asd.gif";
import zxc from "./src/images/zxc.jpg";
import www from "./src/audio/www.mp3";
import qqq from "./src/audio/qqq.mp3";
import vvv from "./src/video/vvv.mp4";

const items = [
  { img: qwe, text: "Montain" },
  { img: asd, text: "Laiks" },
  { img: zxc, text: "River" },
  { src: www, text: "Track" },
  { src: qqq, text: "Another track" },
  { videoSrc: vvv, text: "Video" },
];

const cardBlock = document.createElement("div");
cardBlock.classList.add("gallery");
items.map((item) => {
  if ("img" in item) cardBlock.appendChild(addCard(item.img, item.text));
  if ("src" in item) cardBlock.appendChild(addAudio(item.src, item.text));
  if ("videoSrc" in item)
    cardBlock.appendChild(addVideo(item.videoSrc, item.text));
});

document.querySelector(".container").appendChild(cardBlock);
