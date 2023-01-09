
// import Chess from './node_module/node_modules/chess.js/dist/chess.js'
import { Chess } from 'chess.js'

console.log('Hello world!');

var board = null
var game = new Chess()


function makeRandomMove () {
    var possibleMoves = game.moves()

    // exit if the game is over
    if (game.isGameOver()) return

    var randomIdx = Math.floor(Math.random() * possibleMoves.length)
    game.move(possibleMoves[randomIdx])
    board.position(game.fen())

    window.setTimeout(makeRandomMove, 500)
}


var config = {
    pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
    position: 'start'
}

board = Chessboard('board1', config)


window.setTimeout(makeRandomMove, 500)
