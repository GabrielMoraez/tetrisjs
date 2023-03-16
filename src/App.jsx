import { useState } from 'react'
import Board from './data/board'
import './styles.scss'

function App() {

  function Game() {
    return (
      <div className="t-parent">
        <Board />
      </div>
    );
  }

  return (
    <Game />
  )
}

export default App
