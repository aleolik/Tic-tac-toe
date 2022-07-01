import React from 'react'

import photo_nolik from '../assets/nolik.png'

import photo_krestik from '../assets/krestik.png'

import CheckWin from './CheckWin'

import RenderGame from './RenderGame'

const Make_turn = (cell,player,setPlayer,cells,start,setStart,set_o_wins,set_x_wins,x_wins,o_wins) => {
  if (cell.figure == null){
    cell.figure = player
    if (player == 'x'){
        cell.photo = photo_krestik
        setPlayer('o')
    }
    else{
        cell.photo = photo_nolik
        setPlayer('x')
    }
    cell.color = 'red'
    if (CheckWin(cells,player)){
      if (player == 'x'){
        set_x_wins(x_wins+1)
      }
      else{
        set_o_wins(o_wins+1)
      }
      setStart(!start)
    }
  }
}

export default Make_turn