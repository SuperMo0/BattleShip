const { gameboard } = require("./gameboard");
const { ship } = require("./ship");

class game {

    constructor() {
        this.player_board = new gameboard();
        this.computer_board = new gameboard();
        this.randomize_board(this.player_board);
        this.randomize_board(this.computer_board);
        this.crnt_target = this.computer_board;
        this.initiate_dom();
    }

    initiate_dom() {
        let player_board_dom = document.querySelector("#player_board");
        let computer_board_dom = document.querySelector("#computer_board");
        let logo = document.querySelector("img");
        let cell = document.querySelector("#cell");
        // cell.style["background-color"] = "black";
        for (let i = 1; i <= 99; i++) {
            let new_cell = cell.cloneNode(true);
            player_board_dom.appendChild(new_cell);
        }
        for (let i = 1; i <= 99; i++) {
            let new_cell = cell.cloneNode(true);
            computer_board_dom.appendChild(new_cell);
        }
        // logo.src = "./..assets/logo.png";



    }

    randomize_board(board) {
        let ships = [new ship(3), new ship(3), new ship(2), new ship(4), new ship(5)];
        for (let sh of ships) {
            while (true) {
                let random_cell = Math.floor(Math.random() * 100);
                let direction = Math.floor(Math.random() * 2);
                direction = (direction == 0) ? "v" : "h";
                if (board.check_placment(sh.size, random_cell, direction)) {
                    board.place_a_ship(sh, random_cell, direction);
                    break;
                }
            }
        }
    }

    handle_cell_click(cell) {
        if (!this.crnt_target.check_cell(cell)) {
            throw new Error("can't click cell twice!");
        }
        let res = this.crnt_target.take_hit(cell);
        if (res) return "hit";
        else return "miss";
    }











}


module.exports = { game };