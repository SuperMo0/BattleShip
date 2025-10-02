


describe("gameboard testing", () => {
    let { gameboard } = module.require("./../src/gameboard.js");
    let { ship } = module.require("./../src/ship.js");

    test("take an empty hit", () => {
        let board = new gameboard();
        board.take_hit(2);
        expect(board.board[2].clicked).toBeTruthy();
    })

    test("check placment", () => {
        let board = new gameboard();
        let ship1 = new ship(3);
        expect(board.check_placment(3, 0, "h")).toBeTruthy();
    })

    test("check placment", () => {
        let board = new gameboard();
        let ship1 = new ship(3);
        expect(board.check_placment(3, 0, "h")).toBeTruthy();
    })

})
