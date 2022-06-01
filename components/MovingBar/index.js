import React from 'react'
import { MarqueeBanner } from './styles'

const MovingBar = () => {
  return (
    <MarqueeBanner>
      <div className='marquee'>
        <p className='text-sm text-white'>Vacunación Covid-19 | Lunes-Viernes 8:30am-3:00pm </p>
        <p className='text-sm text-white'>Vacunación Covid-19 | Lunes-Viernes 8:30am-3:00pm </p>
      </div>          
    </MarqueeBanner>
  )
}

export {MovingBar}