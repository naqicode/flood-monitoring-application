import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker } from "react-leaflet"; //Import Map components
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

//NEW ADDED
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MapsCss.css'



const markerIcon = L.icon({
  iconUrl: './newIcon.png',
  iconSize: [20, 25]
});







const englandPos = [52.90330510839568, -1.1862272800848968];



function Maps(props) {
  const { markerPosition, town, riverName, RLOIid, catchmentName, dateOpened, easting,
          label, northing, notation, stationReference, status, wiskiID  } = props;



    //ADDED NEW 
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);




  

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

            //ADDED NEW
            eventHandlers={{
              click: () => handleShow()
            }}
          >
          
      
           
        <Modal show={showModal} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Marker Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div>
                <h6 style={{fontWeight: 'bold'}}>Long & Lat:</h6>
                <h6>{markerPosition}</h6>
              </div>
              <div>
                <h6 style={{fontWeight: 'bold'}}>Town:</h6>
                <h6>{town}</h6>
              </div>
              <div>
                <h6 style={{fontWeight: 'bold'}}>River Name:</h6>
                <h6>{riverName}</h6>
              </div>
              <div>
                <h6 style={{fontWeight: 'bold'}}>RLO ID:</h6>
                <h6>{RLOIid}</h6>
              </div>
              <div>
                <h6 style={{fontWeight: 'bold'}}>Catchment Name:</h6>
                <h6>{catchmentName}</h6>
              </div>
              <div>
                <h6 style={{fontWeight: 'bold'}}>Date Opened:</h6>
                <h6>{dateOpened}</h6>
              </div>
              <div>
                <h6 style={{fontWeight: 'bold'}}>Easting:</h6>
                <h6>{easting}</h6>
              </div>
              <div>
                <h6 style={{fontWeight: 'bold'}}>Label</h6>
                <h6>{label}</h6>
              </div>
              <div>
                <h6 style={{fontWeight: 'bold'}}>Northing</h6>
                <h6>{northing}</h6>
              </div>
              <div>
                <h6 style={{fontWeight: 'bold'}}>Notation:</h6>
                <h6>{notation}</h6>
              </div>
              <div>
                <h6 style={{fontWeight: 'bold'}}>Station Reference:</h6>
                <h6>{stationReference}</h6>
              </div>
              <div>
                <h6 style={{fontWeight: 'bold'}}>Status:</h6>
                <h6>{status}</h6>
              </div>
              <div>
                <h6 style={{fontWeight: 'bold'}}>Wiski ID:</h6>
                <h6>{wiskiID}</h6>
              </div>


              </div>
          </Modal.Body>
        </Modal>
        

            

          </Marker>
        )}

        </MapContainer>
      </div>


  )
}

export default Maps
