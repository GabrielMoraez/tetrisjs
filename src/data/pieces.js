const PIECES = [
  {
    shape: [
      {x:0, y:0},
      {x:0, y:1},
      {x:1, y:0},
      {x:1, y:1}
    ],
    width: 2,
    height: 2,
    rotate: false
  },
  {
    shape: [
        {x:0, y:0},
        {x:0, y:1},
        {x:0, y:2},
        {x:0, y:3}
    ],
    width: 1,
    height: 4
  },
  {
      shape: [
          {x:0, y:0},
          {x:0, y:1},
          {x:0, y:2},
          {x:1, y:2}
      ],
      width: 1,
      height: 3
  }
]

const randomPiece = PIECES[Math.floor(Math.random() * PIECES.length)]

export default randomPiece