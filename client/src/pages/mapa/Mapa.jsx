import React from 'react'
import HomeSideBar from '../../components/homeSidebar/HomeSideBar'
import Map from '../../components/map/Map'
import MapOptions from '../../components/mapOptions/MapOptions'
import TopBar from '../../components/TopBar/TopBar'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'

export default function Mapa() {
    const [locations, setLocations] = useState([]);
    const {search} = useLocation();

    useEffect(() =>{
      const fetchLocations = async ()=>{
        const res = await axios.get("/place"+search)
        setLocations(res.data)
      }
      fetchLocations()
    }, [search])
  return (
    <>
        <TopBar/>
        <HomeSideBar/>
        <div>
            <MapOptions/>
            <Map locations={locations}/>
        </div>
    </>
  )
}
