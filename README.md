# roulette-bet-chrome-ext
A Chrome extension for automated roulette betting on CSGO Empire. Written in Pure JavaScript.


### To Use
Open chrome://extensions in the chrome browser. Turn on Developer Mode. Load the unpacked extension.  
Go to CSGO Empire's website and hit start. Now you can sit back and plan that Gucci shopping cart. 

### Betting Strategy
This bot uses the Martingale Betting Strategy. You start with a small bet. If you lose, you double your bet on the next turn to cover your losses repeating until you win or run out of money. If you win, then you bet the initial ammount the next turn. Don't get greedy. Bet safe. And trust the system!

### Recommendations For Betting
Use this function to determine the minimum balance you must maintain to bet a certain bet ammount *n*. This function accounts for 13 losses in a row.
![equation](https://latex.codecogs.com/gif.latex?f%28n%29%3D%5Csum_%7Bx%3D0%7D%5E%7B13%7Dn*2%5Ex%3DminBalance)  

### Probability of Losing it All
The probability of losing 14 times in a row is 0.000150. Where there is a 7/15 chance of winning, and a 8/15 chance of losing each turn. You must win on the 14th round or else you will lose it all!
![equation](https://latex.codecogs.com/gif.latex?%288/15%29%5E%7B14%7D%3D0.00015065452)

### Visualization
|Round|Outcome|Win/Loss|Bet|Balance|
|-|-|-|-|-|
|0  |Gold |W|$0.01  |$163.83|
|1  |Black|L|$0.01  |$163.82|
|2  |Black|L|$0.02  |$163.80|
|3  |Black|L|$0.04  |$163.76|
|4  |House|L|$0.08  |$163.68|
|5  |Black|L|$0.16  |$163.52|
|6  |Black|L|$0.32  |$163.20|
|7  |Black|L|$0.64  |$162.56|
|8  |Black|L|$1.28  |$161.28|
|9  |Black|L|$2.56  |$158.72|
|10 |House|L|$5.12  |$153.60|
|11 |Black|L|$10.24 |$143.36|
|12 |Black|L|$20.48 |$122.88|
|13 |Black|L|$40.96 |$81.92 |
|14 |Gold |W|$81.92 |$163.84|
|15 |Gold |W|$0.01  |$163.85|

### Win Rate and Profit Chart
Ranging from 23 to 28 seconds a round, this bot wins, on average, the bet value every minute. So if the bet value is $0.01, the bot will win $0.60 in 60 minutes.  

Profit Chart 

|Balance |Bet Ammount|Time to Reach Bet (hours)|Total Runtime (days)|
|-|-|-|-|
|$163.83  |$0.01|0|0|
|$327.66  |$0.02|273.05 |11.38|
|$491.49  |$0.03|140.25 |17.22|
|$655.32  |$0.04|93.50  |21.12|
|$819.15  |$0.05|70.13  |24.04|
|$982.98 |$0.06|56.10  |26.38|  

The bet ammount is based off the balance defined in the betting function. So to start betting $0.01 you must have a minimum balance of $163.83 assuming you account for the reccommeded 13 losses. It will take 273.05 hours or 11.38 days to reach a total balance of $327.66 at which point you can start betting $0.02. Don't worry about updating it tho! The bot self optimizes bet amounts so you don't have to do a thing.  

### Features
* Fully Automated
* Lightweight
* Self Optimizing
* Fast

### Attributions
Icons made by [Nikita Golubev](https://www.flaticon.com/authors/nikita-golubev "Nikita Golubev") from [Flaticon](https://www.flaticon.com/ "Flaticon")
