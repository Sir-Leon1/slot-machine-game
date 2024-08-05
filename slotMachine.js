/*
Deposit some money
Determine number of lines to bet on
Collect a bet amount
Spin the slot machine
Check if user won
Give user their winnings
Play again
*/


const prompt = require('prompt-sync')(); // Gives access o a function

//Global variables
const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

//Deposit some money
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount); // Turn the amount to a float from string

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) { // IsNaN checks that something is not a number
            console.log("Invalid deposit try again");
        } else {
            return numberDepositAmount;
        }
    }
};

//Get number of lines to bet on
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines); // Turn the amount to a float from string

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) { // IsNaN checks that something is not a number
            console.log("Invalid number of lines, try again.");
        } else {
            return numberOfLines;
        }
    }
};

// Collect bet amount
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the total bet per line: ");
        const numberBet = parseFloat(bet); // Turn the amount to a float from string

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines)) { // IsNaN checks that something is not a number
            console.log("Invalid bet, try again: ");
        } else {
            return numberBet;
        }
    }

}

//Spin the slot machine
const spin = () => {
    //Array is a reference datatype hence the contents can be changed
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols]; // Copies all the symbols in symbols to this array
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels;
}

// Check if a user won
const transpose = (reels) => {
    const rows = [];
    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i])
        }
    }
    return rows;
};


//Print slot machine rows in pretty format
const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()) {
            rowString += symbol
            if (i != row.length - 1) {
                rowString += " | "
            }
        }
        console.log(rowString)
    }
}

//Get the winnings of a user
const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol !== symbols[0]) {
                allSame = false;
                break;
            }
        }

        if (allSame ) {
            winnings += bet * SYMBOL_VALUES[symbols[0]];
        }
    }

    return winnings;
}

//run the game
const game = () => {

//let allows you to adjust the value of a varaible
    let balance = deposit();

    while (true) {
        console.log("You have a balance of $" + balance);
// const variable values cannot be changed
        const numberOfLines = getNumberOfLines();
        const bet = getBet(balance, numberOfLines);
        balance -= bet * numberOfLines;
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings;
        console.log("You won, $" + winnings.toString());

        if (balance <= 0) {
            console.log("You run out of money!");
            break;
        }

        const playAgain = prompt("Do you want to play again (y/n)?");

        if (playAgain !== "y") break;
    }
}

game()