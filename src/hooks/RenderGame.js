import React, { useEffect } from 'react'

import Cell from '../components/Cell'

const RenderGame = (n=3,m=3) => {
  const cells_arr = []
  for (let i = 0;i<n;i++){
      let arr = []
      for (let j = 0;j<m;j++){
        let cell = {'color':'green','id':Math.random(),'figure':null,'photo':null}
        arr.push(cell)
      }
      cells_arr.push(arr)
  }
  return cells_arr
}

export default RenderGame