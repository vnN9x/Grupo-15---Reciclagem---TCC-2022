import React from 'react'
import { Link } from 'react-router-dom'
import './mapOptions.css'

export default function MapOptions() {
  return (
    <div className='mapOptions'>
      <div className="optionsContainer">
        <Link to='/mapa/?materials=Plastico'>
          <img alt='' title='Plastico' className='containerItem' src='https://cdn-icons-png.flaticon.com/512/1039/1039778.png'></img>
        </Link>
        <Link to='/mapa/?materials=Papel'>
          <img alt='' title='Papel' className='containerItem' src='https://cdn-icons-png.flaticon.com/512/1039/1039780.png'></img>
        </Link>
        <Link to='/mapa/?materials=Vidro'>
          <img alt='' title='Vidro' className='containerItem' src='https://cdn-icons-png.flaticon.com/512/1039/1039781.png'></img>
        </Link>
        <Link to='/mapa/?materials=Organico'>
          <img alt='' title='Organico' className='containerItem' src='https://cdn-icons-png.flaticon.com/512/1039/1039775.png'></img>
        </Link>
        <Link to='/mapa/?materials=Metal'>
          <img alt='' title='Metal' className='containerItem' src='https://cdn-icons-png.flaticon.com/512/1039/1039782.png'></img>
        </Link>
      </div>
    </div>
  )
}
