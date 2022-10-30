import React from 'react'
import './topbar.css'

export default function TopBar() {
  return (
    <div className='top'>
      <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>HOME</li>
            <li className='topListItem'>DADOS</li>
            <li className='topListItem'>MATERIAIS</li>
            <li className='topListItem'>MAPA</li>
            <li className='topListItem'>SOBRE</li>
          </ul>
      </div>
    </div>
  )
}
