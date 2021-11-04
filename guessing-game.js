const guessingGame = () => {
    let target = Math.floor(Math.random() * 100) 
    let guessCount = 0; 
    let gameOver = false; 

    return function game(num) {
        // if game is not over we have to continue checking
        if(gameOver) {
            guessCount++
            return 'The game is over, you already won!'
        }

        if(num === target) {
            guessCount++
            gameOver = true 
            let guess = guessCount === 1 ? 'guess' : 'guesses'
            return `You win! You found ${num} in ${guessCount} ${guess}.`
        }
        if(num < target) {
            guessCount++
            return `${num} is too low!`
        } 
        if(num > target) {
            guessCount++
            return `${num} is too high!`
        }  
    }
}
// let game = guessingGame() 
// console.log(game(50))
// console.log(game(71))

module.exports = { guessingGame };