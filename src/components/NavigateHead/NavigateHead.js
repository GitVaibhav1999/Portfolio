import React from 'react'
import { config } from '../../Constants'

import './NavigateHead.scss'

export const NavigateHead = ({type}) => {

  const color = config.find(({title}) => title === type).color

  return (
    <div style={{color: color}} className='navigateHead font-xl bold hand-written'>{type}</div>
  )
}
