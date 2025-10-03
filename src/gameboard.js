class gameboard {

    constructor() {
        this.board = new Array(100);
        this.board = this.board.fill().map(x => ({ clicked: false, ship: null, pos: null }));
        this.deads = 0;
    }

    check_ship(cell) {
        return this.board[cell].ship != null;
    }
    check_cell(cell) {
        return this.board[cell].clicked;
    }

    check_placment(size, index, direction) {
        if (index < 0 || index > 99) throw new Error("invalid index");
        if (direction == "v") {
            for (let i = 0; i < size; i++) {
                if (index > 99) return false;
                if (this.board[index].ship != null) return false;
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
                if (this.board[index].ship != null) return false;
                index++;
            }
            return true;
        }
    }

    place_a_ship(ship, index, direction) {
        let pos = 0;
        for (let i = 0; i < ship.size; i++) {
            this.board[index].ship = ship;
            this.board[index].pos = pos;
            (direction == "v") ? index += 10 : index++;
            pos++;
        }
    }

    take_hit(cell) {
        this.board[cell].clicked = true;
        if (this.board[cell].ship == null) return 0;
        else {
            this.board[cell].ship.hit(this.board[cell].pos);
            if (this.board[cell].ship.isdead()) this.deads++;


            return 1;
        }
    }

    check_dead() {
        return this.deads == 5;
    }

}


module.exports = { gameboard };