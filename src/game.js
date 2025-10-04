const { gameboard } = require("./gameboard");
const { ship } = require("./ship");

class game {

    constructor() {
        this.player_board = new gameboard();
        this.computer_board = new gameboard();
        this.counter1 = 0;
        this.counter2 = 0;
        this.active = false;
    }

    start() {
        this.active = true;
        this.randomize_board();

    }

    check_game_end() {
        if (this.player_board.check_dead()) {
            this.active = false;
            return [1, "we Lost Captin!"];

        }
        else if (this.computer_board.check_dead()) {
            this.active = false;
            return [1, "Congrats Captin we sank all their ships"];

        }
        else return 0;
    }

    check_can_place(size, index, direction) {
        return this.player_board.check_can_place(size, index, direction);
    }

    place_a_ship(size, index, direction) {
        let shipp = new ship(size);
        this.player_board.place_a_ship(shipp, index, direction);
        console.log(this.player_board.check_for_ship(index));

    }

    is_active() {
        return this.active;
    }

    check_player_ship(index) {
        return this.player_board.check_for_ship(index);
    }

    check_click_validity(index) {
        return this.computer_board.check_if_clicked(index)

    }

    randomize_board() {
        let ships = [new ship(3), new ship(3), new ship(2), new ship(4), new ship(5)];
        for (let sh of ships) {
            while (true) {
                let random_cell = Math.floor(Math.random() * 100);
                let direction = Math.floor(Math.random() * 2);
                direction = (direction == 0) ? "^" : ">";
                if (this.computer_board.check_can_place(sh.size, random_cell, direction)) {
                    this.computer_board.place_a_ship(sh, random_cell, direction);
                    break;
                }
            }
        }
    }

    take_hit(index) {
        let res = this.computer_board.take_hit(index);
        this.counter1 = this.computer_board.hits;
        return res;
    }

    get_player_status() {
        return this.player_board;
    }
    get_computer_status() {
        return this.computer_board;
    }

    continue() {
        for (let i = 0; i < 100; i++) {
            if (this.player_board.check_if_clicked(i) && this.player_board.check_for_ship(i)) {
                let right = i + 1;
                let left = i - 1;
                let up = i - 10;
                let down = i + 10;
                let z = [right, left, up, down];
                for (let ne of z) {
                    if (ne < 0 || ne > 99 || this.player_board.check_if_clicked(ne)) continue;
                    else {
                        let res = this.player_board.take_hit(ne);
                        this.counter2 = this.player_board.hits;
                        return { index: ne, res: res };
                    }
                }
            }
        }
        while (true) {
            let index = Math.floor(Math.random() * 100);
            if (!this.player_board.check_if_clicked(index)) {
                let res = this.player_board.take_hit(index);
                this.counter2 = this.player_board.hits;
                return { index, res };
            }
        }
    }



}


module.exports = { game };