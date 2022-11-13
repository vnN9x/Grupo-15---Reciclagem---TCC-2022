import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'

export default function TopBar() {
  return (
    <div className='top'>
      <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>
              <Link to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link>
            </li>
            <li className='topListItem'>
              <Link to="/dados" style={{textDecoration:"none", color:"inherit"}}>DADOS</Link>
            </li>
            <li className='topListItem'>
              <Link to="/materiais" style={{textDecoration:"none", color:"inherit"}}>MATERIAIS</Link>
            </li>
            <li className='topListItem'>
              <Link to="/mapa" style={{textDecoration:"none", color:"inherit"}}>MAPA</Link>
            </li>
            <li className='topListItem'>
              <Link to="/sobre" style={{textDecoration:"none", color:"inherit"}}>SOBRE</Link>
            </li>
          </ul>
      </div>
    </div>
  )
}
