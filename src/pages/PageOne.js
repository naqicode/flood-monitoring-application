import React, {useEffect, useState}from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; //Import Map components
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import './PageOneCss.css';
import api from '../api/api';
import { useDispatch, useSelector } from 'react-redux';
import {addCounty, addFloodWarning} from '../redux/floodAreaSlice'

import {selectorCountyList, selectorFloodWarning} from '../redux/floodAreaSlice'




//MODAL
//NEW ADDED
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const englandPos = [52.90330510839568, -1.1862272800848968];



function PageOne() {




  //MODAL
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);





  const dispatch = useDispatch()

  const countyList = useSelector(selectorCountyList)

  const floodData = useSelector(selectorFloodWarning)

  useEffect(() => {
    async function runApiCall() {
      const resp = await api.counties.getFloodmonitoring();
      if (resp) {
        // 1. Destructure resp.items {lat, lng }
        // const latandLngOfEachCounty = resp.map((element) => {  
        // })
        // 2. replace resp.item with latandlngofeachCounty
        dispatch(addCounty(resp.items))

        // console.log(resp.items)
      }
    }
    runApiCall()
  },[])


  useEffect(() => {
    async function runFloodWarningApiCall() {
      const resp = await api.counties.getFloodWarnings();
      if (resp) {
        dispatch(addFloodWarning(resp.items))
      }
    }
    runFloodWarningApiCall()
  }, [])




  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <div>


        <MapContainer
          center={englandPos}
          zoom={6}
          scrollWheelZoom={true}
          style={{
            width: '100vw',
            height: '85vh',
            position: 'relative',
          }}
        >



          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=Nmi7XJ7V5CNH8umtJfFQ"
          />

          {countyList && countyList.map((element, index) => (
            <Marker
            key={index}
              position={[element.lat, element.long]}
              icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [10, 20],
                iconAnchor: [12, 41],
              })
            }
            //MODAL
            eventHandlers={{
              click: () => handleShow()
            }}
            >
              <Popup
                latitude={element.lat}
                longitude={element.long}
                onClose={() => setShowModal(false)}
                closeOnClick={false}
                dynamicPosition={true}
              >
                <div onClick={() => setShowModal(true)}>
                  <h6>{element.riverOrSea}</h6>
                </div>
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Marker Info</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div>
                      <h4>Lat: {element.lat}</h4>
                      <h4>Long: {element.long}</h4>
                      <h4>County: {element.county}</h4>
                      <h4>Description: {element.description}</h4>
                      <h4>eaAreaName: {element.eaAreaName}</h4>
                      <h4>fwdCode: {element.fwdCode}</h4>
                      <h4>Label: {element.label}</h4>
                      <h4>Notation: {element.notation}</h4>
                      <h4>Quick dial number: {element.quickDialNumber}</h4>
                      <h4>River or Sea: {element.riverOrSea}</h4>
                    </div>
                  </Modal.Body>
                </Modal>
              </Popup>

            </Marker>
          ))}







            {/* PANE */}
            




            <div
              style={{
                position: 'absolute',

                top: 0,
                right: '20px',
                width: '25%',
                height: '80%',
                backgroundColor: 'white',
                padding: '10px',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                zIndex: 9999 // or any high value
              }}
            >
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Some Text Here</p>



              {/* CHANGE THIS SO USER CAN CHOOSE THE COUNTY AND THEN A LIST OF THAT
              COUNTY WILL BE DISPLAYED AT THE BOTTOM */}
              <label for="cars">Choose a car:</label>
                <select id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="vw">VW</option>
                  <option value="audi" selected>Audi</option>
                </select>

              

            </div>

            



















          
        </MapContainer>
      </div>


    </div>
  )
}

export default PageOne
