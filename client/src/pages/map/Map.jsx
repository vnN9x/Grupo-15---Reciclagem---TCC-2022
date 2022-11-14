import React, {useRef, useLayoutEffect} from 'react'
import { Loader } from '@googlemaps/js-api-loader';
import './map.css'
import TopBar from '../../components/TopBar/TopBar';
import HomeSideBar from '../../components/homeSidebar/HomeSideBar';
import MapOptions from '../../components/mapOptions/MapOptions';

const mapStyle = [{
  'featureType': 'administrative',
  'elementType': 'all',
  'stylers': [{
    'visibility': 'on',
  },
  {
    'lightness': 33,
  },
  ],
},
{
  'featureType': 'landscape',
  'elementType': 'all',
  'stylers': [{
    'color': '#f2e5d4',
  }],
},
{
  'featureType': 'poi.park',
  'elementType': 'geometry',
  'stylers': [{
    'color': '#c5dac6',
  }],
},
{
  'featureType': 'poi.park',
  'elementType': 'labels',
  'stylers': [{
    'visibility': 'on',
  },
  {
    'lightness': 20,
  },
  ],
},
{
  'featureType': 'road',
  'elementType': 'all',
  'stylers': [{
    'lightness': 20,
  }],
},
{
  'featureType': 'road.highway',
  'elementType': 'geometry',
  'stylers': [{
    'color': '#c5c6c6',
  }],
},
{
  'featureType': 'road.arterial',
  'elementType': 'geometry',
  'stylers': [{
    'color': '#e4d7c6',
  }],
},
{
  'featureType': 'road.local',
  'elementType': 'geometry',
  'stylers': [{
    'color': '#fbfaf7',
  }],
},
{
  'featureType': 'water',
  'elementType': 'all',
  'stylers': [{
    'visibility': 'on',
  },
  {
    'color': '#acbcc9',
  },
  ],
},
];

function displayMap(mapDiv, locations) {
  const mapOptions = {
    center: { lat: -22.9064, lng: -47.0616},
    zoom: 14,
    styles: mapStyle
  };
  const map = new window.google.maps.Map(mapDiv, mapOptions);

  let features = [];

  for(var local of locations){
    features.push({position: new window.google.maps.LatLng(parseFloat(local.lat), parseFloat(local.long))})
  }

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new window.google.maps.Marker({
      position: features[i].position,
      map: map,
    });
  }

  return map;
}

var mapDiv = null;


export default function Map({locations}) {
  const ref = useRef();

  useLayoutEffect(() => {
    mapDiv = ref.current;
  })

  const apiOptions = {
    apiKey: "AIzaSyACrksKJj2P6sO8NZ2eNBP7F-bBGwGRk0c"
  }
  const loader = new Loader(apiOptions);

  loader.load().then(() => {
    displayMap(mapDiv, locations)
  });

  return (
    <>
      <TopBar/>
      <HomeSideBar/>
      <div className="map">
        <MapOptions/>
        <div className='map-div' id='map-div' ref={ref}></div>
      </div>
    </>
  )
}
