import React, { useState } from 'react';
import Maps from './sidePages/Maps';
import SearchBox from './sidePages/SearchBox';








function PageTwo() {


  const [markerPosition, setMarkerPosition] = useState(null);
  const [town, setTown] = useState('');
  const [riverName, setRiverName] = useState('');
  const [RLOIid, setRLOIid] = useState('');
  const [catchmentName, setCatchmentName] = useState('');
  const [dateOpened, setDateOpened] = useState('');
  const [easting, setEasting] = useState('');
  const [label, setLabel] = useState('');
  const [northing, setNorthing] = useState('')
  const [notation, setNotation] = useState('')
  const [stationReference, setStationReference] = useState('')
  const [status, setStatus] = useState('')
  const [wiskiID, setWiskiID] = useState('')
  
  const handleStationSelect = (station) => {
    setMarkerPosition([station.lat, station.long]);
  };
  const handleTown = (station) => {
    setTown(station.town);
  }
  const handleRiver = (station) => {
    setRiverName(station.riverName)
  }
  const handleRLOIid = (station) => {
    setRLOIid(station.RLOIid);
  }
  const handleCatchmentName = (station) => {
    setCatchmentName(station.catchmentName);
  }
  const handleDateOpened = (station) => {
    setDateOpened(station.dateOpened);
  }
  const handleEasting = (station) => {
    setEasting(station.easting);
  }
  const handleLabel = (station) => {
    setLabel(station.label);
  }
  const handleNorthing = (station) => {
    setNorthing(station.northing);
  }
  const handleNotation = (station) => {
    setNotation(station.notation);
  }
  const handleStationReference = (station) => {
    setStationReference(station.stationReference)
  }
  const handleStatus = (station) => {
    setStatus(station.status)
  }
  const handleWiskiID = (station) => {
    setWiskiID(station.wiskiID)
  }








  return (
    <div style={{
      boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.3)',
      display: 'flex',
      flexDirection: 'row',
    }}>
      
      <div style={{ width: '70vw' }}>
        <Maps markerPosition={markerPosition}
              town={town}
              riverName={riverName}
              RLOIid={RLOIid}
              catchmentName={catchmentName}
              dateOpened={dateOpened}
              easting={easting}
              label={label}
              northing={northing}
              notation={notation}
              stationReference={stationReference}
              status={status}
              wiskiID={wiskiID}
              />
      </div>

      <div style={{ width: '30vw' }}>
        <SearchBox onStationSelect={handleStationSelect}
                  handleTown={handleTown}
                  handleRiver={handleRiver}
                  handleRLOIid={handleRLOIid}
                  handleCatchmentName={handleCatchmentName}
                  handleDateOpened={handleDateOpened}
                  handleEasting={handleEasting}
                  handleLabel={handleLabel}
                  handleNorthing={handleNorthing}
                  handleNotation={handleNotation}
                  handleStationReference={handleStationReference}
                  handleStatus={handleStatus}
                  handleWiskiID={handleWiskiID}
                    
                     />
      </div>

    </div>
  )
}

export default PageTwo
