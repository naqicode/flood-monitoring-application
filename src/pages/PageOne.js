import React, {useEffect, useState}from 'react' //Importing 'React' library and functions such as 'useState' and 'useEffect
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; //Import Map components
import markerIconPng from "leaflet/dist/images/marker-icon.png"; //Importing marker
import "leaflet/dist/leaflet.css"; // Import the CSS file for Leaflet's default styles.
import { Icon } from "leaflet"; //Import the Icon class from the Leaflet library.
import './PageOneCss.css'; // Import the css file
import api from '../api/api'; // Import the api file
// Importing 'useSelector' and 'useDispatch' hooks from react redux to interact with the redux store.
// 'useDispatch' hook is used to dispatch an action to update the state in the store.
// 'useSelector' hook is used to retrieve the updated state and display it on speicifc component
import { useDispatch, useSelector } from 'react-redux';
// importing the 'addCounty' and 'addFloodWarning' functions.
import {addCounty, addFloodWarning} from '../redux/floodAreaSlice'
// importing the 'selectorCountyList' and 'selectorFloodWarning' functions.
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




  // Declared a dispatch var that is initialized to the value of useDispatch() hook
  const dispatch = useDispatch()
  // Declared a 'countyList' var where its initialized to the value of useSelector hook.
  const countyList = useSelector(selectorCountyList)
  // Declared a 'floodData' var where its initialized to the value of useSelector hook.
  const floodData = useSelector(selectorFloodWarning)

  //
  useEffect(() => {
    async function runApiCall() {
      const resp = await api.counties.getFloodmonitoring();
      if (resp) {

        dispatch(addCounty(resp.items))

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
            





          
        </MapContainer>
      </div>


    </div>
  )
}

export default PageOne
