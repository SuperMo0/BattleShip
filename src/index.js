import { style } from "./style.css";
const { game } = require("./game");
// import { logo } from "./../assets/logo.png";
// import gameboard from "./gameboard.js"



let game1 = new game();

let restart = document.querySelector(".restart");

restart.addEventListener("click", () => {

    game1 = new game();
})














