const { ship } = require("./ship");

class gameboard {

    #board;
    #ships_destroyed = 0;

    hits = 0;
    constructor() {
        this.#board = new Array(100);
        this.#board = this.#board.fill().map(x => ({ clicked: false, ship: null, pos: null }));
    }

    get_board() {
        return this.#board;
    }

    check_for_ship(cell) {
        return this.#board[cell].ship != null;
    }
    check_if_clicked(cell) {
        return this.#board[cell].clicked;
    }

    check_can_place(size, index, direction) {
        if (index < 0 || index > 99) throw new Error("invalid index");
        if (direction == "^") {
            for (let i = 0; i < size; i++) {
                if (index > 99) return false;
                if (this.#board[index].ship != null) return false;
                index += 10;
            }
            return true;
        }
        else {
            let row = index / 10;
            let col = index % 10;
            let exist = 10 - col;
            if (exist < size) return false;
            for (let i = 0; i < size; i++) {
                if (this.#board[index].ship != null) return false;
                index++;
            }
            return true;
        }
    }

    place_a_ship(shipp, index, direction) {
        let pos = 0;
        for (let i = 0; i < shipp.size; i++) {
            this.#board[index].ship = shipp;
            this.#board[index].pos = pos;
            (direction == "^") ? index += 10 : index++;
            pos++;
        }
    }

    take_hit(cell) {
        this.#board[cell].clicked = true;
        if (this.#board[cell].ship == null) return 0;
        else {
            this.hits++;
            this.#board[cell].ship.hit(this.#board[cell].pos);
            if (this.#board[cell].ship.isdead()) this.#ships_destroyed++;
            return 1;
        }
    }

    check_dead() {
        return this.#ships_destroyed == 5;
    }
}


module.exports = { gameboard };