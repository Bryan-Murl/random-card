/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let symbol = ["♦", "♣", "♥", "♠"];

  let z = Math.floor(Math.random() * symbol.length);
  let topx = symbol[z];
  let centerx = number[Math.floor(Math.random() * number.length)];
  let bottomx = symbol[z];
  document.querySelector("#symbol-top").innerHTML = topx;
  document.querySelector("#card-number").innerHTML = centerx;
  document.querySelector("#symbol-bottom").innerHTML = bottomx;
};
