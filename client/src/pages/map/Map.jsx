import React, {useRef, useLayoutEffect} from 'react'
import { Loader } from '@googlemaps/js-api-loader';
import './map.css'

function displayMap(mapDiv) {
  const mapOptions = {
    center: { lat: -33.860664, lng: 151.208138 },
    zoom: 14
  };
  const map = new window.google.maps.Map(mapDiv, mapOptions);
  console.log(mapDiv)
  return map;
}

var mapDiv = null;

export default function Map() {
  const ref = useRef();

  useLayoutEffect(() => {
    mapDiv = ref.current;
  })

  const apiOptions = {
    apiKey: "AIzaSyACrksKJj2P6sO8NZ2eNBP7F-bBGwGRk0c"
  }
  const loader = new Loader(apiOptions);

  loader.load().then(() => {
    displayMap(mapDiv);
  });
  
  return (
    <div className='Map' id='Map' ref={ref}></div>
  )
}