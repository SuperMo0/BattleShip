import { style } from "./style.css";
import { ui } from "./ui";
const { game } = require("./game");
// import { logo } from "./../assets/logo.png";
// import gameboard from "./gameboard.js"



let game1 = new game();
let uix = new ui(game1);
let restart = document.querySelector(".restart");
restart.addEventListener("click", () => {
    game1 = new game();
    uix = new ui(game1);
})
















