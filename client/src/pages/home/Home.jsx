import './home.css'
//import Header from '../../components/header/Header'
import React from 'react'
import TopBar from '../../components/TopBar/TopBar';
import HomeSideBar from '../../components/homeSidebar/HomeSideBar'
import Header from '../../components/header/Header';


export default function Home() {
  return (
    <>
        <div className='home'>
          <TopBar/>
          <HomeSideBar/>
          <Header/>
        </div>
    </>
  )
}
