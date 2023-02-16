import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; //Import Map components
import "leaflet/dist/leaflet.css";
import L from 'leaflet';


const markerIcon = L.icon({
  iconUrl: './newIcon.png',
  iconSize: [20, 25]
});







const englandPos = [52.90330510839568, -1.1862272800848968];



function Maps(props) {
  const { markerPosition } = props;

  return (
      
      <div >
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


        {markerPosition && (
          <Marker 
            position={markerPosition || [52.90330510839568, -1.1862272800848968]}
            icon={markerIcon}
          >
            <Popup>
              ahahahah mate
            </Popup>
          </Marker>
        )}

        </MapContainer>
      </div>


  )
}

export default Maps
