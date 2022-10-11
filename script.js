const gameboard = (() => {
    const row = ['', '', ''];
    return [row, row, row];
})();

const player = (name, mark) => {
    return {
        name,
        mark
    };
}

const playerOne = player("P1", "O");
const playerTwo = player("P2", "X");

let spaces = document.querySelectorAll(".column");
spaces.forEach((space) => {
    space.addEventListener('click', (e) => {
        let row = space.parentElement.id;
        let column = space.id;
        gameboard[row][column] = 'X';
        space.textContent = gameboard[row][column];
    })
})