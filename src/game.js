const { gameboard } = require("./gameboard");
const { ship } = require("./ship");

class game {

    constructor() {
        this.player_board = new gameboard();
        this.computer_board = new gameboard();
        this.randomize_board(this.computer_board);
        this.text = document.querySelector(".text");
        this.counter1 = document.querySelector(".counter1");
        this.counter2 = document.querySelector(".counter2");
        this.stop = true;
        this.create_drag_ships();
        this.initiate_dom();
    }

    start_random_game() {
        this.stop = false;
        this.player_board = new gameboard();
        this.computer_board = new gameboard();
        this.randomize_board(this.player_board);
        this.randomize_board(this.computer_board);
        this.initiate_dom();
    }


    create_ship(size, direction) {
        let ship_part = document.createElement("div");
        ship_part.classList.toggle("ship_part");
        ship_part.direction = "^";
        ship_part.textContent = size + "\^";
        ship_part.draggable = true;


        return ship_part;
    }

    create_drag_ships() {

        let container = document.querySelector("#container");
        let arr = [2, 3, 3, 4, 5];
        for (let size of arr) {
            let ship = this.create_ship(size);
            container.appendChild(ship);
        }

    }


    add_drag_listener(cell) {

        cell.addEventListener("dragover", (ev) => {
            ev.preventDefault();
        });
        cell.addEventListener("drop", (ev) => {
            ev.preventDefault();
            console.log(ev.target);

        });

        cell.addEventListener("dragenter", (ev) => {
            ev.preventDefault();
            console.log(23232323);
        })

    }

    initiate_dom() {
        let player_board_dom = document.querySelector("#player_board");
        let computer_board_dom = document.querySelector("#computer_board");
        player_board_dom.replaceChildren();
        computer_board_dom.replaceChildren();
        this.text = "Battleship";
        this.counter1.textContent = "0";
        this.counter2.textContent = 0;
        let cell = document.createElement("div");
        cell.classList.toggle("hover", true);
        cell.classList.toggle("cell", true);
        for (let i = 0; i <= 99; i++) {
            let new_cell = cell.cloneNode(true);
            this.add_drag_listener(new_cell);
            new_cell.classList.toggle("hover");
            if (this.player_board.check_ship(i)) new_cell.style["background-color"] = "grey";
            player_board_dom.appendChild(new_cell);
        }

        for (let i = 0; i < 100; i++) {
            let new_cell = cell.cloneNode(true);
            new_cell.addEventListener("click", (e) => { this.handle_cell_click(e.target) });
            new_cell.index = i;
            new_cell.style["background-color"] = "black";
            computer_board_dom.appendChild(new_cell);
        }


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
        if (this.stop == true) return;

        if (this.computer_board.check_cell(cell.index)) {
            return;
        }
        let res = this.computer_board.take_hit(cell.index);
        if (res) {
            cell.style["background-color"] = "grey";
            cell.textContent = "🎯";
            // this.counter1.textContent = +this.counter1.textContent + 1
        }
        else {
            cell.style["background-color"] = "rgb(4, 190, 236)";
            cell.textContent = "🔘";

        }
        if (this.computer_board.check_dead()) {
            text.textContent = "Congrats Captin we sank all their ships 💯🚀🎯";
            this.stop = true;
            return;
        }
        this.computer_play();
    }

    computer_play() {
        let cells_array = document.querySelectorAll("#player_board .cell");
        for (let i = 0; i < 100; i++) {
            if (this.player_board.check_cell(i) && this.player_board.check_ship(i)) {

                let right = i + 1;
                let left = i - 1;
                let up = i - 10;
                let down = i + 10;
                let z = [right, left, up, down];
                for (let ne of z) {
                    if (ne < 0 || ne > 99 || this.player_board.check_cell(ne)) continue;
                    else {
                        let res = this.player_board.take_hit(ne);
                        if (res) {
                            cells_array[ne].textContent = "🎯";

                            this.counter2.textContent = +this.counter2.textContent + 1
                        }
                        else cells_array[ne].textContent = "🔘";
                        if (this.player_board.check_dead()) {
                            text.textContent = "Captin we lost 💯";
                            this.stop = true;
                        }
                        return;
                    }
                }
            }
        }
        while (true) {
            let index = Math.floor(Math.random() * 100);
            if (!this.player_board.check_cell(index)) {
                let res = this.player_board.take_hit(index);
                if (res) {
                    cells_array[index].textContent = "🎯";
                    this.counter2.textContent = +this.counter2.textContent + 1
                }
                else cells_array[index].textContent = "🔘";
                if (this.player_board.check_dead()) {
                    text.textContent = "Captin we lost 💯";
                    this.stop = true;
                }
                break;
            }
        }





    }











}


module.exports = { game };