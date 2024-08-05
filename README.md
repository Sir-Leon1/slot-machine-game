# Slot Machine Game
![SlotMachine](https://images.unsplash.com/photo-1520278013317-50b1dfd757cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2xvdCUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D)

## Project Description
This project is a simple console-based slot machine game implemented in JavaScript. The game allows a user to deposit money, choose the number of lines to bet on, place bets, spin the slot machine, check winnings, and play multiple rounds until the user decides to stop or runs out of money.

## Features
- **Deposit Money**: The user can deposit a specific amount of money to start the game.
- **Choose Bet Lines**: The user can choose to bet on 1 to 3 lines.
- **Place Bets**: The user can place bets based on their balance and chosen lines.
- **Spin the Slot Machine**: The slot machine spins and displays random symbols.
- **Check Winnings**: The game checks if the user has won and calculates the winnings.
- **Play Multiple Rounds**: The user can play multiple rounds until they run out of money or decide to stop.

## Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/slot-machine-game.git
   ```
2. Navigate to the project directory:
   ```bash
   cd slot-machine-game
   ```
3. Install the required packages:
   ```bash
   npm install prompt-sync
   ```

## How to Play
1. Run the game:
   ```bash
   node slotMachine.js
   ```
2. Follow the on-screen prompts to:
    - Deposit money.
    - Choose the number of lines to bet on (1-3).
    - Place a bet amount per line.
    - Spin the slot machine and see the results.
    - Check your winnings and decide whether to play again.

## Code Overview

### Global Variables
- `ROWS` and `COLS`: Define the dimensions of the slot machine.
- `SYMBOLS_COUNT`: Define the number of each symbol in the slot machine.
- `SYMBOL_VALUES`: Define the value of each symbol.

### Functions
- `deposit()`: Prompts the user to deposit money and returns the deposit amount.
- `getNumberOfLines()`: Prompts the user to enter the number of lines to bet on and returns the number of lines.
- `getBet(balance, lines)`: Prompts the user to enter the bet amount and returns the bet amount.
- `spin()`: Generates a random spin result and returns the reels.
- `transpose(reels)`: Transposes the reels to rows.
- `printRows(rows)`: Prints the slot machine rows in a readable format.
- `getWinnings(rows, bet, lines)`: Calculates the winnings based on the bet and returns the winnings.
- `game()`: Main game loop to manage the game flow.

## Example
```
Enter a deposit amount: 100
Enter number of lines to bet on (1-3): 3
Enter the total bet per line: 10
A | B | C
A | A | A
B | D | C
You won, $50
Do you want to play again (y/n)? y
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [prompt-sync](https://www.npmjs.com/package/prompt-sync) for synchronous prompts in Node.js.


---

Feel free to modify and expand this README file to better suit your project's requirements.