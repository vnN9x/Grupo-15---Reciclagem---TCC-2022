import React, {useRef, useLayoutEffect} from 'react'
import { Loader } from '@googlemaps/js-api-loader';
import './map.css'
import TopBar from '../TopBar/TopBar';
import HomeSideBar from '../homeSidebar/HomeSideBar';
import MapOptions from '../mapOptions/MapOptions';

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

let myPos;

function calcCrow(lat1, lon1, lat2, lon2) {
  var R = 6371; 
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1B = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1B) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return {lat: lat1, long: lon1, distance: d};
}

function toRad(Value) {
    return Value * Math.PI / 180;
}

function displayMap(mapDiv, locations) {
  let pos, infoWindow;

  infoWindow = new window.google.maps.InfoWindow;

  const mapOptions = {
    center: { lat: -22.9064, lng: -47.0616},
    zoom: 14,
    styles: mapStyle
  };

  const map = new window.google.maps.Map(mapDiv, mapOptions);

  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      pos = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      };

      myPos = {lat: pos.lat, long: pos.long}
    }, ()=> {
      handleLocationError(true, infoWindow, map, pos);
    });
  } else {
    handleLocationError(false, infoWindow, map, pos);
  }

  let features = [];
  let aux = {lat: null, long: null, distance: 999999};
  let present;

  if (myPos){
    let myMarker = new window.google.maps.Marker({
      position: new window.google.maps.LatLng(myPos.lat, myPos.long),
      icon: {
        url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      },
      map: map,
      title: "Minha Localização!",
    });

    let myContentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Minha Localização!</h1>' +
    '<div id="bodyContent">' +
    "<p>O marcador azul representa <b>minha</b> localização no mapa de acordo com os dados fornecidos pelo navegador e a Google.</p><br><br>" +
    "</div>" +
    "</div>";

    let infowindow = new window.google.maps.InfoWindow({
      content: myContentString,
      maxWidth: 400,
      ariaLabel: "Minha Localização",
    });

    myMarker.addListener("click", () => {
      infowindow.open({
        anchor: myMarker,
        map,
      });
    });

    for(var local of locations){
      present = calcCrow(parseFloat(local.lat), parseFloat(local.long), myPos.lat, myPos.long);

      if (aux.distance > present.distance){
        aux = present;
      }
    }

    for(var local of locations){
      features.push({position: new window.google.maps.LatLng(parseFloat(local.lat), parseFloat(local.long)),
                    title: local.name,
                    distance: aux.lat == parseFloat(local.lat) && aux.long == parseFloat(local.long) ? 'closest' : '',
                    desc: local.desc,
                    town: local.town})
    }

  } else {
    for(var local of locations){
      features.push({position: new window.google.maps.LatLng(parseFloat(local.lat), parseFloat(local.long)),
                    title: local.name,
                    distance: aux.lat == parseFloat(local.lat) && aux.long == parseFloat(local.long) ? 'closest' : '',
                    desc: local.desc,
                    town: local.town})
    }
  }

  for (let i = 0; i < features.length; i++) {
    let marker = new window.google.maps.Marker({
      position: features[i].position,
      map: map,
      icon: {
        url: features[i].distance == 'closest' ? 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      },
      title: features[i].title, 
    });

    let contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">'+features[i].title+'</h1>' +
    '<div id="bodyContent">' +
    "<p><b>"+features[i].title+"</b><br><br>" +
    features[i].desc+"<br><br>" +
    "Cidade: <b>"+features[i].town+"</b></p>" +
    "</div>" +
    "</div>";

    let infowindow = new window.google.maps.InfoWindow({
      content: contentString,
      maxWidth: 400,
      ariaLabel: features[i].title,
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
  }

  return map;
}

function handleLocationError(browserHasGeolocation, infoWindow, map, pos) {
  let currentInfoWindow;
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
  'Geolocation permissions denied. Using default location.' :
  'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
  currentInfoWindow = infoWindow;
}

let mapDiv = null;

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
      <div className="map">
        <div className='map-div' id='map-div' ref={ref}></div>
      </div>
    </>
  )
}
