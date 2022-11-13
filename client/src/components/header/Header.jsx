import './header.css'
import React from 'react'
import HomeRigthBar from '../homeRigthBar/HomeRigthBar';
import HomeLeftBar from '../homeLeftBar/HomeLeftBar';
import {rigthData} from '../homeRigthBar/rigthData';
import {leftData} from '../homeLeftBar/leftData';

export default function Header() {
  return (
    <>
      <div className='header'>
          <div className='left'><HomeLeftBar slides={leftData}/></div>
          <div className='rigth'><HomeRigthBar slides={rigthData}/></div>
          <div className="leftVideo">
          </div>
      </div>
    </>
  )
}
