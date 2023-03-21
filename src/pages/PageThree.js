import React from 'react';
import './PageThree.css';


//ADDED
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";


//ADDED



function PageThree() {

//ADDED
const [warningData, setWarningData] = useState('');

const [selectedWarning, setSelectedWarning] = useState(null); //added new



//ADDED
const getWarnings = () => {
  axios.get("https://environment.data.gov.uk/flood-monitoring/id/floods")
  .then((res) => {
    const newData = res.data.items;

    setWarningData(
      newData.map((el) => {
        return el;
      })
    )
  })
  .catch((error) => {
    console.log(error);
  })
}

useEffect(() => {
  getWarnings();
}, [warningData]);


//added new
const handleClick = (warning) => {
  setSelectedWarning(warning);
};


//AADED
// const handleClick = () => {
//   warningData.map((e) => {
//     console.log(e.floodArea.riverOrSea)
//   })
// }



  return (
    <div>
      <h1>HJIDKODKD</h1>

      SO BASICALLY - TRY TO USE MAP THE POLYGON OF THIS API "https://environment.data.gov.uk/flood-monitoring/id/floods".
      WHICH THEN SHOULD GIVE OUT LAT AND LONG OF THOSE AREAS WITH WARNING.




      <div className="warning-list-container"
        style={{
          overflowY: 'scroll',
          maxHeight: '745px',
          border: '1px solid red',
          paddingBottom: '10px',
          width: '25vw'
        }}
      >

          {/* ADDED NEW */}

          <ul className="warning-list" style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h3>Alerts</h3>

            {warningData &&
            warningData
            .sort((a, b) => new Date(b.timeRaised) - new Date(a.timeRaised))
            .map((ele, index) => (
              <li style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}} key={index}>
                <button 
                  onClick={() => handleClick(ele)}
                  
                  style={{ 
                    borderRadius: '30px',
                    fontSize: '20px',
                    padding: '20px', 
                    width: '200px', 
                    margin: '10px' 
                    }}>
                    {ele.timeRaised}
                </button>
              </li>
            ))}

          </ul>
        
      </div>

      <div className="warning-details-container"
        style={{
          border: '1px solid red',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'inherit',
          width: '50vw',
          position: 'fixed',
          top: '200px',
          right: '200px'

          
         }}
        >
      {selectedWarning && (
          <div className="warning-details"
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'column'
              

            }}

          >
            <h3>Warning Details</h3>
            <p>ID: {selectedWarning.id}</p>
            <p>Description: {selectedWarning.description}</p>
            <p>EA Area Name: {selectedWarning.eaAreaName}</p>
            <p>EA Region Name: {selectedWarning.eaRegionName}</p>
            <p>Flood Area County: {selectedWarning.floodArea.county}</p>
            <p>Flood Notation: {selectedWarning.floodArea.notation}</p>
            <p>River or Sea: {selectedWarning.floodArea.riverOrSea}</p>
            <p>Flood Area ID: {selectedWarning.floodAreaID}</p>
            <p>Is it Tidal: {selectedWarning.isTidal}</p>
            <p>Message: {selectedWarning.message}</p>
            <p>Severity: {selectedWarning.severity}</p>
            <p>Severity Level: {selectedWarning.severityLevel}</p>
            <p>Time Message Changed: {selectedWarning.timeMessageChanged}</p>
            <p>Time Message Raised: {selectedWarning.timeRaised}</p>
            <p>Time SeverityChanged: {selectedWarning.timeSeverityChanged}</p>

            </div>
      )}
      </div>





  





            










    </div>
  )
}

export default PageThree
