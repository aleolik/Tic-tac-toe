
import './App.css';

import { useEffect } from 'react';

import { useState } from 'react';

import RenderGame from './hooks/RenderGame'


import Cell from './components/Cell';

import Button from '@mui/material/Button';
function App() {
  const [cells,setCells] = useState([])

  let [start,setStart] = useState(true)

  const [player,setPlayer] = useState('x')

  const [x_wins,set_x_wins] = useState(0)

  const [o_wins,set_o_wins] = useState(0)
  useEffect(() => {
    setCells(RenderGame())
  },[start])
  return(
    <div className='bg'>
      <div style={{'marginLeft':45+'%','border':'5px solid black','width':9+'%'}}>
        <h2>O wins : {o_wins}  | x wins : {x_wins}</h2>
      </div>
      <Button variant="contained" style={{'marginTop':14+'%','marginLeft':45+'%','width':250+'px'}} className='btn btn-info' onClick={() => {setStart(!start)}}>Restart</Button>
      <div className='app'>
      {cells.map((row,index) =>
        <div key={index}>
          {row.map(cell =>
            <div key={cell.id}>
              <Cell cell={cell} player={player} setPlayer={setPlayer} cells={cells} start={start} setStart={setStart} set_o_wins={set_o_wins} set_x_wins={set_x_wins} x_wins={x_wins} o_wins={o_wins}/>   
            </div>
          )}
        </div>    
      )}
    </div>
    </div>
  )
}

export default App;

