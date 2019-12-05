# roulette-bet-chrome-ext
A Chrome extension for roulette betting on CSGO Empire written in Pure JavaScript.

### To Use
Open chrome://extensions in the chrome browser. Turn on Developer Mode. Load the unpacked extension.

### Betting Strategy
This bot uses the Martingale Betting Strategy. You start with a small bet. If you lose, you double your bet on the next turn to cover your losses repeating until you win or run out of money. If you win, then you bet the initial ammount the next turn. Don't get greedy. Bet safe. And trust the system!

### Recommendations For Betting
Use this function to determine the minimum balance you must maintain to bet a certain bet ammount *n*. This function accounts for 13 losses in a row.  
![equation](https://latex.codecogs.com/gif.latex?f%28n%29%3D%5Csum_%7Bx%3D0%7D%5E%7B13%7D%20n*2%5Ex%3DminBalance)  

The probability of losing 13 times in a row is 0.000282. Where there is a 7/15 chance of winning, and a 8/15 chance of losing each turn.
![equation](https://latex.codecogs.com/gif.latex?%288/15%29%5E%7B13%7D%3D0.00028247724)


### Win Rate and Profit Chart
Ranging from 23 to 28 seconds a round, this bot wins, on average, the bet value every minute. So if the bet value is $0.01, the bot will win $0.60 in 60 minutes.  

Profit Chart 

|Balance |Bet Ammount|Time to Reach Bet (hours)|Total Runtime (days)|
|-|-|-|-|
|$163.83  |$0.01|0|0|
|$327.66  |$0.02|273.05 |11.38|
|$495.96  |$0.03|140.25 |17.22|
|$664.26  |$0.04|93.50  |21.12|
|$832.56  |$0.05|70.13  |24.04|
|$1000.86 |$0.06|56.10  |26.38|  

The bet ammount is based off the balance defined in the betting function. So to start betting $0.01 you must have a minimum balance of $163.83. It will take 273.05 hours or 11.38 days to reach a total balance of $327.66 at which point you can start betting $0.02.

### Attributions
Icons made by [Nikita Golubev](https://www.flaticon.com/authors/nikita-golubev "Nikita Golubev") from [Flaticon](https://www.flaticon.com/ "Flaticon")
