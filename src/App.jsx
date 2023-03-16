import { useState } from 'react'
import randomPiece from './data/pieces'

import './styles.scss'

function App() {

  const createPiece = (
    <div style={{
      height: randomPiece.height * 30,
      width: randomPiece.width * 30,
      position: 'absolute',
      backgroundColor: 'red',
      zIndex: 10,
    }}
    className='piece'
    ></div>
  )

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='board'>
          {createPiece}
        </div>
        <div className='info-board'>
          <span className='title'>TETRIS JS</span>
          <div className='next-wrapper'>
            <span className='subtitle'>Next</span>
            <div className='next-board'></div>
          </div>
          <div className='score-wrapper'>
            <span className='subtitle'>SCORE</span>
            <div className='score-board'>
              <span className='subtitle'>0</span>
            </div>
          </div>
          <div className='reset-button'>
            RESET
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
