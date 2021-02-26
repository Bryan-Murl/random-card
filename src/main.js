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
  let symbol = ["\u2666", "\u2660", "\u2665", "\u2663"];

  //  Simbolo y número aletorio
  let z = Math.floor(Math.random() * symbol.length);
  let topx = symbol[z];
  let bottomx = symbol[z];
  let centerx = number[Math.floor(Math.random() * number.length)];

  document.querySelector("#symbol-top").innerHTML = topx;
  document.querySelector("#card-number").innerHTML = centerx;
  document.querySelector("#symbol-bottom").innerHTML = bottomx;

  // Asignar color
  document.querySelector("#symbol-top").style.color = colors(topx);
  document.querySelector("#symbol-bottom").style.color = colors(bottomx);
  //   document.querySelector("#card-number").style.color = colorNo(centerx);
};

function colors(palos) {
  if (palos == "\u2665" || palos == "\u2666") {
    return "red";
  } else {
    return "black";
  }
}

// function colorNo(palo) {
//   if (palo == "\u2665" || palo == "\u2666") {
//     return "black";
//   } else {
//     return "red";
//   }
// }
