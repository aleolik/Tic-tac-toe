import React, { useState } from 'react'

const CheckWin = (cells,player) => {
   let winner = null
   //check right diagonal
   if (cells[0][0].figure == cells[1][1].figure && cells[0][0].figure == cells[2][2].figure && cells[0][0].figure != null){
    winner = player
   }
   // check left diagonal
   if (cells[0][2].figure == cells[1][1].figure && cells[0][2].figure == cells[2][0].figure && cells[0][2].figure != null){
    winner = player
   }
    //  check row
   for (let i = 0;i<cells.length;i++){
    if (cells[0][i].figure == cells[1][i].figure && cells[1][i].figure == cells[2][i].figure && cells[0][i].figure != null){
        winner = player
    }
   }
    // check column
   for (let i = 0;i<cells.length;i++){
    if (cells[i][0].figure == cells[i][1].figure && cells[i][1].figure == cells[i][2].figure && cells[i][0].figure != null){
        winner = player
    }
   }
   return winner
}

export default CheckWin