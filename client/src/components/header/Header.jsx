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
        <div className="headerTitles">
          <span className="headerTitleLg">Recicle!</span>
        </div>
        <img className='headerImg' src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt=''/>
        <div className="headerItems">
          <div className="badSide">
            <HomeLeftBar slides={leftData}/>
            <div className="iframe-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/QLPg2T-qDso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{marginTop: "20px"}}></iframe>
            </div>
          </div>
          <hr/>
          <div className="goodSide">
            <HomeRigthBar slides={rigthData}/>
            <div className="iframe-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/3zAsyYgSaxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{marginTop: "20px"}}></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
