import React from 'react'

import Make_turn from '../hooks/Make_turn'

const Cell = ({cell,player,setPlayer,cells,start,setStart,set_o_wins,set_x_wins,x_wins,o_wins}) => {
  return (
    <div className={['cell',cell.color].join(' ')} onClick={() => Make_turn(cell,player,setPlayer,cells,start,setStart,set_o_wins,set_x_wins,x_wins,o_wins)}>
        {cell.photo && (
          <div className='center'><img src={cell.photo} alt='photo' style={{'width':100+'%'}}/></div>
        )}
    </div>
  )
}

export default Cell