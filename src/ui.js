class ui {

    constructor(game) {
        this.direction = "^";
        this.player_board_dom = document.querySelector("#player_board");
        this.computer_board_dom = document.querySelector("#computer_board");
        this.logo = "Battleship";
        this.counter1 = document.querySelector(".counter1");
        this.counter2 = document.querySelector(".counter2");
        this.counter1.textContent = "0";
        this.counter2.textContent = "0";
        this.player_cells_array = [];
        this.computer_cells_array = [];
        this.game = game;
        this.switch = document.querySelector(".switch");
        this.switch.addEventListener("click", () => { this.flip_direction(); });
        this.create_drag_ships();
        this.initiate_dom();
        this.crnt_drag = null;
        this.drag_ok = false;
        this.start = document.querySelector(".start");
        this.start.addEventListener("click", () => {
            if (this.check_empty_dock()) this.game.start();
            this.status.textContent = "we are ready Captin, waiting command to fire 💯🚀🎯"
        });
        this.status = document.querySelector(".status")
        this.status.textContent = "waiting your commands to posisition ships captin 🗺️🔎💯🚀🎯"
        this.alert_ships();
    }

    alert_ships() {

        let arr = document.querySelectorAll(".ship_part");
        let i = 0;
        let id = setInterval(() => {
            for (let ship of arr) {
                console.log(i);
                if (i) ship.style.border = "2px solid red";
                else ship.style.border = "2px solid black";
            }
            if (this.check_empty_dock()) clearInterval(id);
            i ^= 1;

        }, 500);




    }

    check_empty_dock() {
        let ships = document.querySelectorAll("#ship_container  *");
        return ships.length == 0;
    }

    flip_direction() {
        let ships = document.querySelectorAll("#ship_container  *");
        this.direction = (this.direction == "^") ? '>' : '^';
        for (let s of ships) {
            s.textContent = s.textContent[0] + this.direction;
        }
    }

    highlight(size, index) {
        let crnt = this.player_cells_array[index];
        for (let i = 0; i < size; i++) {
            crnt = this.player_cells_array[index];
            crnt.classList.toggle("ship");
            index = (this.direction == "^") ? index + 10 : index + 1;
        }
    }
    add_drag_listeners(cell) {

        cell.addEventListener("dragover", (ev) => {
            ev.preventDefault();
        });
        cell.addEventListener("drop", (ev) => {
            ev.preventDefault();
            if (this.game.check_can_place(this.crnt_drag.size, ev.target.index, this.direction)) {
                this.game.place_a_ship(this.crnt_drag.size, ev.target.index, this.direction);
                this.drag_ok = true;
            }

        });
        cell.addEventListener("dragenter", (ev) => {
            ev.preventDefault();
            if (this.game.check_can_place(this.crnt_drag.size, ev.target.index, this.direction)) {
                this.highlight(this.crnt_drag.size, ev.target.index);
            }
        })
        cell.addEventListener("dragleave", (ev) => {
            if (this.game.check_can_place(this.crnt_drag.size, ev.target.index, this.direction)) {
                this.highlight(this.crnt_drag.size, ev.target.index);
            }

        })
    }

    create_cell(index) {
        let cell = document.createElement("div");
        cell.classList.toggle("cell");
        cell.index = index;
        return cell;
    }
    change_cell(cell, res) {
        if (res) {
            cell.style["background-color"] = "grey";
            cell.textContent = "🎯";
            this.counter1.textContent = this.game.counter1;
        }
        else {
            cell.style["background-color"] = "rgb(4, 190, 236)";
            cell.textContent = "🔘";
        }
    }
    update_score(score1, score2) {
        this.counter1.textContent = score1;
        this.counter2.textContent = score2;
    }
    handle_cell_click(cell) {
        if (!this.game.is_active()) return;
        if (this.game.check_click_validity(cell.index)) return;
        let result = this.game.take_hit(cell.index);
        this.change_cell(cell, result);
        let end = this.game.check_game_end();
        if (end[0]) this.status.textContent = end[1];
        let res = this.game.continue();
        this.change_cell(this.player_cells_array[res.index], res.res);
        this.update_score(this.game.counter1, this.game.counter2);
        end = this.game.check_game_end();
        if (end[0]) this.status.textContent = end[1];


    }

    initiate_dom() {
        this.player_board_dom.replaceChildren();
        this.computer_board_dom.replaceChildren();
        for (let i = 0; i <= 99; i++) {
            let new_cell = this.create_cell(i);
            this.add_drag_listeners(new_cell);
            this.player_cells_array.push(new_cell);
            if (this.game.check_player_ship(i)) new_cell.classList.toggle("ship");
            this.player_board_dom.appendChild(new_cell);
        }
        for (let i = 0; i < 100; i++) {
            let new_cell = this.create_cell(i);
            new_cell.addEventListener("click", (ev) => { this.handle_cell_click(ev.target) });
            new_cell.style["background-color"] = "black";
            this.computer_board_dom.appendChild(new_cell);
        }
    }

    create_ship(size) {
        let ship_part = document.createElement("div");
        ship_part.classList.toggle("ship_part");
        ship_part.textContent = size + "^";
        ship_part.draggable = true;
        ship_part.size = size;
        return ship_part;
    }

    create_drag_ships() {
        let container = document.querySelector("#ship_container");
        let container2 = document.querySelectorAll("#ship_container *");
        for (let z of container2) z.remove();
        let arr = [2, 3, 3, 4, 5];
        for (let size of arr) {
            let shipp = this.create_ship(size);
            shipp.addEventListener("drag", (e) => {
                this.crnt_drag = shipp;
            })
            shipp.addEventListener("dragend", (e) => {
                this.crnt_drag = null;
                if (this.drag_ok == true) e.target.remove();
                this.drag_ok = false;
                this.crnt_drag = null;
            })
            container.appendChild(shipp);
        }
    }

}

module.exports = { ui };