# roulette-bet-chrome-ext
A Chrome extension for roulette betting on CSGO Empire written in Pure JavaScript.

### To Use
Open chrome://extensions in the chrome browser. Turn on Developer Mode. Load the unpacked extension.

### Betting Strategy
This bot uses the Martingale Betting Strategy. You start with a small bet. If you lose, you double your bet on the next turn to cover your losses repeating until you win or run out of money. If you win, then you bet the initial ammount the next turn. Don't get greedy. Bet safe. And trust the system! 

### Recommendations For Betting
Use this function to determing the minimum balance you must maintain to bet a certain bet ammount "n". This function accounts for 10 losses in a row.  
![equation](https://latex.codecogs.com/gif.latex?f%28n%29%3D%5Csum_%7Bx%3D0%7D%5E%7B10%7Dn*2%5Ex%3DminBalance)

### Attributions
Icons made by [Nikita Golubev](https://www.flaticon.com/authors/nikita-golubev "Nikita Golubev") from [Flaticon](https://www.flaticon.com/ "Flaticon")
