import React from 'react'
import { MapContainer, TileLayer, Marker } from "react-leaflet"; //Import Map components
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const englandPos = [52.90330510839568, -1.1862272800848968];







function PageOne() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <div style={{width: '70vw', boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.3)'}}>
        <MapContainer
          center={englandPos}
          zoom={6}
          scrollWheelZoom={true}
          style={{
            width: '70vw',
            height: '85vh',
          }}
        >

          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=Nmi7XJ7V5CNH8umtJfFQ"
          />

          <Marker
            position={englandPos}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [10, 20],
                iconAnchor: [12, 41],
              })
            }
          >

          </Marker>
          
        </MapContainer>
      </div>

      
      
      <div>
        <h1>Warnings here</h1>
      </div>
      
    </div>
  )
}

export default PageOne
