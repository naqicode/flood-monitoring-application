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




//AADED
const handleClick = () => {
  warningData.map((e) => {
    console.log(e.floodArea.riverOrSea)
  })
}



  return (
    <div>
      <h1>HJIDKODKD</h1>

      SO BASICALLY - TRY TO USE MAP THE POLYGON OF THIS API "https://environment.data.gov.uk/flood-monitoring/id/floods".
      WHICH THEN SHOULD GIVE OUT LAT AND LONG OF THOSE AREAS WITH WARNING.



    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: '20px',
        paddingLeft: '30px',
      }}
    >
          <div
            style={{
              height: '75vh',
              backgroundColor: 'lightBlue',
              width: '20vw',
              overflow: 'auto',
              
              
            }}
          >


          {/* ADDED NEW */}

          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h3>Alerts</h3>

            {warningData &&
            warningData
            .sort((a, b) => new Date(b.timeRaised) - new Date(a.timeRaised))
            .map((ele, index) => (
              <li style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}} key={index}>
                <button onClick={handleClick} style={{ borderRadius: '30px', fontSize: '20px', padding: '20px', width: '200px', margin: '10px' }}>{ele.timeRaised}</button>
              </li>
            ))}


          </ul>


          </div>

    </div>












    </div>
  )
}

export default PageThree
