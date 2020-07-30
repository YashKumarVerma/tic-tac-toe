
const { checkscore } = require('./patterns')

function minimax(board, depth, maxMode, BOT, player) {
    console.log(board, maxMode)
    let value = checkscore(board)
    console.log(value)
    
    if (value === Math.abs(10)) {
        return value
    }

    if(gameOver(board)) {
        return 0
    }

    if(maxMode) {
        let bestVal = -Infinity
        for(let i = 0; i < board.length; i++) {
            if(board[i]==="")
            {   board[i] = BOT
                console.log('pos', value)
                value = minimax(board, depth+1, false, BOT, player)
                bestVal = Math.max(bestVal, value)
                board[i] = ""
                console.log('negs', value)
            }
        }
        return bestVal
    }

    else {
        console.log("------in---")

        let bestVal = Infinity
        // for(let i = 0; i < 7; i++) {
            let i = 8
            if(board[i]==="")
            {   board[i] = player
                console.log("new board - ", board)
                value = minimax(board, depth+1, true, BOT, player)
                bestVal = Math.min(bestVal, value)
                console.log('negs', value)
                board[i] = ""
            }
        // }
        return bestVal
    }

}

function gameOver(board) {
    for(let i = 0; i<board.length; i++) {
        if(board[i]==="")
        { return false }
    }
    return true
}

function bestMove(board) {
    let BOT = 'O'
    let player = 'X'
    let bestVal = -Infinity
    let bestMove = -1
    let moveVal = -Infinity
    // for(let i = 0; i < board.length; i++) {
        let i = 2
        if(board[i]==="") {
            board[i] = BOT
            moveVal = minimax(board, 0, false, BOT, player)
            // console.log("moveVal for ",i," = ", moveVal)
            board[i] = ""
        }
        if(moveVal > bestVal)
        {   bestVal = moveVal
            bestMove = i
        }
    // }
    // console.log("bestMove Value = ", bestVal)
    return bestMove
}
console.log(bestMove(["X", "O", "", "", "X", "", "", "", ""]))

module.exports = bestMove
