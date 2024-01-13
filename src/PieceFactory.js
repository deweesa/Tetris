const pieces = [
  {
    name: "line",
    color: "teal",
    coordinates: [
      {x:0, y:0},
      {x:0, y:1},
      {x:0, y:2},
      {x:0, y:3}
    ]
  },
  {
    name: "block",
    color: "yellow",
    coordinates: [
      {x:0, y:0},
      {x:0, y:1},
      {x:1, y:0},
      {x:1, y:1}
    ]
  }
]

export default function NewPiece(){
  return pieces[Math.floor(Math.random() * pieces.length)]
}


