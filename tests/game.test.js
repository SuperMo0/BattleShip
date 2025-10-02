const { game } = require("../src/game")

describe("game play testing", () => {

    test("initiate game", () => {

        let game1 = new game();

        for (let i = 0; i < 50; i++) {

            let index = Math.floor(Math.random() * 100);
            console.log(game1.handle_cell_click(index));
        }


    })















})