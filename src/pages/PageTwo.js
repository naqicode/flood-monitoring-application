import React, { useState } from 'react';
import Maps from './sidePages/Maps';
import SearchBox from './sidePages/SearchBox';








function PageTwo() {

  //ADDEDD
  //ADDED
  //ADDED
  const [markerPosition, setMarkerPosition] = useState(null);
  
  const handleStationSelect = (station) => {
    setMarkerPosition([station.lat, station.long]);
  };


  return (
    <div style={{
      border: '2px solid red',
      display: 'flex',
      flexDirection: 'row',
    }}>
      
      <div style={{ border: '2px solid red', width: '70vw'}}>
        <Maps markerPosition={markerPosition}/>
      </div>

      <div style={{border: '2px solid blue', width: '30vw'}}>
        <SearchBox onStationSelect={handleStationSelect} />
      </div>

    </div>
  )
}

export default PageTwo
