import React, { useState } from 'react'
import Board from './Board'
import { getWinner } from '../Winner'

export default function Game() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(true)

    let winner = getWinner(board)

    const handleClick = (index) => {
        const newBoard = [...board]
        if (winner || newBoard[index]) return
        newBoard[index] = turn ? 'X' : 'O'
        console.log(turn);
        setBoard(newBoard)
        setTurn(!turn)
    }

    return (
        <div>
            <p className='gameInfo'>{winner ? 'Winner is: ' + winner : `Turn to move: ${turn ? 'X' : 'O'}`}</p>
            <Board board={board} click={handleClick} />
            <button className='reset' onClick={() => {setBoard(Array(9).fill(null)); setTurn(true)}}>Restart the game</button>
        </div>
    )
}
