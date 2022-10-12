const gameboard = (() => {
    const firstRow = ['', '', ''];
    const secondRow = ['', '', ''];
    const thirdRow = ['', '', ''];
    return [firstRow, secondRow, thirdRow];
})();

const player = (name, mark) => {
    return {
        name,
        mark
    };
}

const playerOne = player("P1", "O");
const playerTwo = player("P2", "X");

// Add event listeners to each space
let message = document.querySelector(".message");
let spaces = document.querySelectorAll(".column");
spaces.forEach((space) => {
    space.addEventListener('click', (e) => {
        message.textContent = ""; // Reset message on each click

        let row = space.parentElement.id;
        let column = space.id;
    
        if (gameboard[row][column] === '') {
            gameboard[row][column] = 'X';
            space.textContent = gameboard[row][column];
        } else {
            message.textContent = "Hey! That space is already taken.";
        }
    })
})