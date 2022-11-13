import React from 'react'
import HomeSideBar from '../../components/homeSidebar/HomeSideBar'
import MiniSlider from '../../components/mini-slider/Mini-slider'
import { miniSliderData } from '../../components/mini-slider/mini-slider-data'
import TopBar from '../../components/TopBar/TopBar'

export default function Materiais() {
  return (
    <>
        <TopBar/>
        <HomeSideBar/>
        <div className='materiais'>
          <MiniSlider slides = {miniSliderData}/>
        </div>
    </>
  )
}
