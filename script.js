const gameboard = (() => {
    const row  =  ['', '', ''];
    return [row, row, row];
})();

const player = (name, mark) => {
    return {name, mark};
}

const playerOne = player("P1", "O");
const playerTwo = player("P2", "X");