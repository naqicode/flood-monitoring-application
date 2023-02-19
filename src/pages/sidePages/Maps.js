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
  const { markerPosition, town, riverName, RLOIid, catchmentName, dateOpened, easting,
          label, northing, notation, stationReference, status, wiskiID  } = props;

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
              <div>
              <h3>{markerPosition}</h3>
              <h3>{town}</h3>
              <h3>{riverName}</h3>
              <h3>{RLOIid}</h3>
              <h3>{catchmentName}</h3>
              <h3>{dateOpened}</h3>
              <h3>{easting}</h3>
              <h3>{label}</h3>
              <h3>{northing}</h3>
              <h3>{notation}</h3>
              <h3>{stationReference}</h3>
              <h3>{status}</h3>
              <h3>{wiskiID}</h3>

              </div>
            </Popup>
          </Marker>
        )}

        </MapContainer>
      </div>


  )
}

export default Maps
