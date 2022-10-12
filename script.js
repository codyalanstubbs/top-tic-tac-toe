const gameboard = (() => {
    const firstRow = ['', '', ''];
    const secondRow = ['', '', ''];
    const thirdRow = ['', '', ''];
    return [firstRow, secondRow, thirdRow];
})();

const player = (name, mark, score) => {
    return {
        name,
        mark,
        score
    };
}

buildPlayerInputs();

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
const playerOne = player("P1", "O", 0);
const playerTwo = player("P2", "X", 0);
function buildPlayerInputs() {
    const gamestarterDiv = document.querySelector(".gamestarter");

    let nameP1Label = document.createElement('label');
    nameP1Label.setAttribute("for", "nameP1");
    nameP1Label.textContent = "Player 1 Name: ";

    let nameP1Input = document.createElement('input');
    nameP1Input.setAttribute("name", "nameP1");
    nameP1Input.setAttribute("id", "nameP1");
    nameP1Input.setAttribute("placeholder", "Enter P1's name here");


    let nameP2Label = document.createElement('label');
    nameP2Label.setAttribute("for", "nameP2");
    nameP2Label.textContent = "Player 2 Name: ";

    let nameP2Input = document.createElement('input');
    nameP2Input.setAttribute("name", "nameP2");
    nameP2Input.setAttribute("id", "nameP2");
    nameP2Input.setAttribute("placeholder", "Enter P2's name here");

    let submitBtn = document.createElement('button');
    submitBtn.type = "button";
    submitBtn.setAttribute("id", "submitPlayers");
    submitBtn.textContent = "START GAME";

    gamestarterDiv.appendChild(nameP1Label).appendChild(nameP1Input);
    gamestarterDiv.appendChild(nameP2Label).appendChild(nameP2Input);
    gamestarterDiv.appendChild(submitBtn);

}

function buildGameboard() {
    const gameboardDiv = document.querySelector('.gameboard');

    gameboard.forEach((row, rowIndex) => {
        let newRow = document.createElement('div');
        newRow.classList = "row";
        newRow.setAttribute("id", rowIndex);

        row.forEach((column, colIndex) => {
            let newColumn = document.createElement('div');
            newColumn.classList = "column";
            newColumn.setAttribute("id", colIndex);
            newColumn.textContent = column;

            newRow.appendChild(newColumn);
        })

        gameboardDiv.appendChild(newRow);
    })

}