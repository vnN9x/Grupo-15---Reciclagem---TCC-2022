import './header.css'
import React from 'react'
import HomeRigthBar from '../homeRigthBar/HomeRigthBar';
import {rigthData} from '../homeRigthBar/rigthData';

export default function Header() {
  return (
    <>
      <div className='header'>
          <div><HomeRigthBar slides={rigthData}/></div>
          <div><HomeRigthBar slides={rigthData}/></div>
      </div>
    </>
  )
}
