import React, {useEffect}from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; //Import Map components
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import api from '../api/api';
import { useDispatch, useSelector } from 'react-redux';
import {addCounty, addFloodWarning} from '../redux/floodAreaSlice'

import {selectorCountyList, selectorFloodWarning} from '../redux/floodAreaSlice'

const englandPos = [52.90330510839568, -1.1862272800848968];



function PageOne() {
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

      <div style={{width: '70vw', boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.3)'}}>
        <MapContainer
          center={englandPos}
          zoom={6}
          scrollWheelZoom={true}
          style={{
            width: '100vw',
            height: '85vh',
          }}
        >

          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=Nmi7XJ7V5CNH8umtJfFQ"
          />

          {/* <Marker
            position={englandPos}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [10, 20],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>
              <h1>Hi</h1>
            </Popup>

          </Marker> */}
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
            >

              <Popup    >
              <h1>{element.id}</h1>
            </Popup>

            </Marker>
          ))}
          
        </MapContainer>
      </div>


      
    </div>
  )
}

export default PageOne
