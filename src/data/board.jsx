import React, { memo, useEffect, useRef } from 'react'
import { useBoard } from "./boardFunc"

const Board = () => {

  const [display, score, onKeyDown] = useBoard();
  const eBoard = useRef();

  useEffect(focusBoard, []);

  function focusBoard() {
    eBoard.current.focus();
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='board' ref={eBoard} tabIndex={0} onKeyDown={ onKeyDown }>
          {display.map((row, index) => <Row row={row} key={index}/>)}
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
              <span className='subtitle'>{score.toLocaleString()}</span>
            </div>
          </div>
          <div className='reset-button'>
            RESET
          </div>
        </div>
      </div>
    </div>
  );
};

const Row = memo(props => {
  return (
    <span className='t-row'>
      {props.row.map((cell, index) => <Cell cell={cell} key={index}/>)}
    </span>
  );
});

const Cell = memo(props => {
  const count = useRef(0);

  count.current++;

  const value = props.cell ? props.cell : 0
  return (
    <span className={`t-cell t-cell-${value}`}></span>
  );
});

export default memo(Board);