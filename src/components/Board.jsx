import React from 'react'
import Square from './Square'

export default function Board({ board, click }) {
    return (
        <div className='board'>
            {board.map((item, id) => (
                <Square key={id} value={item} click={() => click(id)}/>
            ))}
        </div>
    )
}
