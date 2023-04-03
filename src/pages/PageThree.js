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





  return (
    <div>
      <h1>HJIDKODKD</h1>

      SO BASICALLY - TRY TO USE MAP THE POLYGON OF THIS API "https://environment.data.gov.uk/flood-monitoring/id/floods".
      WHICH THEN SHOULD GIVE OUT LAT AND LONG OF THOSE AREAS WITH WARNING.


    <div
      style={{
        display: 'flex'
      }}
      >
      <ul
        style={{
          listStyle: 'none',
          overflowY: 'scroll',
          maxHeight: '75vh',
          maxWidth: '25vw',
          paddingRight: '20px'
        }}
        >
        <h3
          style={{
            fontSize: '2em',
            textAlign: 'center',
            marginBottom: '1em'
          }}
        >ALERTS</h3>
        {warningData &&
            warningData
            .sort((a, b) => new Date(b.timeRaised) - new Date(a.timeRaised))
            .map((ele, index) => (
              <li key={index}>
                <button onClick={() => handleClick(ele)}
                  style={{
                    width: '100%',
                    height: '150px',
                    lineHeight: '75px',
                    border: 'none',
                    borderRadius: '10px',
                    backgroundColor: '#f44336',
                    color: '#fff',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)',
                    marginBottom: '10px',
                    textAlign: 'center',
                    fontSize: '1.2em',
                    transition: 'all 0.2s ease-in-out'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#b71c1c';
                    e.target.style.cursor = 'pointer';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#f44336';
                  }}
                  >
                    <span style={{padding: '5px'}}>{ele.timeRaised}</span>
                </button>
              </li>
            ))}
              
      </ul>

   



    <div 
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
        }}
      >
      {selectedWarning && (
          <div 
          style={{
            backgroundColor: '#ffebee',
            border: '1px solid #e53935',
            borderRadius: '10px',
            padding: '20px',
            margin: '20px',
            width: '80%',
            maxWidth: '800px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
            overflowY: 'auto',
            maxHeight: '60vh'

          }}
          >
            <h3 style={{ 
              color: '#e53935',
              textAlign: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '20px',
              textTransform: 'uppercase'
             }}>Warning Details</h3>




             {/* SEPERATE */}
             <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginBottom: '10px',
                backgroundColor: 'rgba(242, 36, 36, 0.3)',
                padding: '10px',
                borderRadius: '10px'
              }}>
                <p style={{
                  fontWeight: 'bold',
                  marginRight: '10px',
                  marginBottom: '5px',
                  textTransform: 'uppercase'
                }}>ID:</p>
                  <p>{selectedWarning.id}</p>
              </div>

              {/* SEPERATE <DIV/> */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginBottom: '10px',
                backgroundColor: 'rgba(242, 36, 36, 0.3)',
                padding: '10px',
                borderRadius: '10px'
              }}>
                <p style={{
                  fontWeight: 'bold',
                  marginRight: '10px',
                  marginBottom: '5px',
                  textTransform: 'uppercase'
                }}>Description:</p>
                  <p>{selectedWarning.description}</p>
              </div>
              

              {/* SEPERATE <DIV/> */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginBottom: '10px',
                backgroundColor: 'rgba(242, 36, 36, 0.3)',
                padding: '10px',
                borderRadius: '10px'
              }}>
                <p style={{
                  fontWeight: 'bold',
                  marginRight: '10px',
                  marginBottom: '5px',
                  textTransform: 'uppercase'
                }}>EA AreaName:</p>
                  <p>{selectedWarning.eaAreaName}</p>
              </div>

               {/* SEPERATE <DIV/> */}
               <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginBottom: '10px',
                backgroundColor: 'rgba(242, 36, 36, 0.3)',
                padding: '10px',
                borderRadius: '10px'
              }}>
                <p style={{
                  fontWeight: 'bold',
                  marginRight: '10px',
                  marginBottom: '5px',
                  textTransform: 'uppercase'
                }}>EA RegionName:</p>
                  <p>{selectedWarning.eaRegionName}</p>
              </div>

              {/* SEPERATE <DIV/> */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginBottom: '10px',
                backgroundColor: 'rgba(242, 36, 36, 0.3)',
                padding: '10px',
                borderRadius: '10px'
              }}>
                <p style={{
                  fontWeight: 'bold',
                  marginRight: '10px',
                  marginBottom: '5px',
                  textTransform: 'uppercase'
                }}>County:</p>
                  <p>{selectedWarning.floodArea.county}</p>
              </div>
              
              {/* SEPERATE <DIV/> */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginBottom: '10px',
                backgroundColor: 'rgba(242, 36, 36, 0.3)',
                padding: '10px',
                borderRadius: '10px'
              }}>
                <p style={{
                  fontWeight: 'bold',
                  marginRight: '10px',
                  marginBottom: '5px',
                  textTransform: 'uppercase'
                }}>Notation:</p>
                  <p>{selectedWarning.floodArea.notation}</p>
              </div>

              {/* SEPERATE <DIV/> */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginBottom: '10px',
                backgroundColor: 'rgba(242, 36, 36, 0.3)',
                padding: '10px',
                borderRadius: '10px'
              }}>
                <p style={{
                  fontWeight: 'bold',
                  marginRight: '10px',
                  marginBottom: '5px',
                  textTransform: 'uppercase'
                }}>River Or Sea:</p>
                  <p>{selectedWarning.floodArea.riverOrSea}</p>
              </div>

                            {/* SEPERATE <DIV/> */}
                            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginBottom: '10px',
                backgroundColor: 'rgba(242, 36, 36, 0.3)',
                padding: '10px',
                borderRadius: '10px'
              }}>
                <p style={{
                  fontWeight: 'bold',
                  marginRight: '10px',
                  marginBottom: '5px',
                  textTransform: 'uppercase'
                }}>Flood Area ID:</p>
                  <p>{selectedWarning.flodAreaID}</p>
              </div>

              {/* SEPERATE <DIV/> */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginBottom: '10px',
                backgroundColor: 'rgba(242, 36, 36, 0.3)',
                padding: '10px',
                borderRadius: '10px'
              }}>
                <p style={{
                  fontWeight: 'bold',
                  marginRight: '10px',
                  marginBottom: '5px',
                  textTransform: 'uppercase'
                }}>Is it Tidal:</p>
                  <p>{selectedWarning.isTidal}</p>
              </div>

              {/* SEPERATE <DIV/> */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginBottom: '10px',
                backgroundColor: 'rgba(242, 36, 36, 0.3)',
                padding: '10px',
                borderRadius: '10px'
              }}>
                <p style={{
                  fontWeight: 'bold',
                  marginRight: '10px',
                  marginBottom: '5px',
                  textTransform: 'uppercase'
                }}>Message:</p>
                  <p>{selectedWarning.message}</p>
              </div>

              {/* SEPERATE <DIV/> */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginBottom: '10px',
                backgroundColor: 'rgba(242, 36, 36, 0.3)',
                padding: '10px',
                borderRadius: '10px'
              }}>
                <p style={{
                  fontWeight: 'bold',
                  marginRight: '10px',
                  marginBottom: '5px',
                  textTransform: 'uppercase'
                }}>Severity:</p>
                  <p>{selectedWarning.severity}</p>
              </div>

              {/* SEPERATE <DIV/> */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginBottom: '10px',
                backgroundColor: 'rgba(242, 36, 36, 0.3)',
                padding: '10px',
                borderRadius: '10px'
              }}>
                <p style={{
                  fontWeight: 'bold',
                  marginRight: '10px',
                  marginBottom: '5px',
                  textTransform: 'uppercase'
                }}>severityLevel:</p>
                  <p>{selectedWarning.severityLevel}</p>
              </div>

              {/* SEPERATE <DIV/> */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginBottom: '10px',
                backgroundColor: 'rgba(242, 36, 36, 0.3)',
                padding: '10px',
                borderRadius: '10px'
              }}>
                <p style={{
                  fontWeight: 'bold',
                  marginRight: '10px',
                  marginBottom: '5px',
                  textTransform: 'uppercase'
                }}>Time Messaged Changed:</p>
                  <p>{selectedWarning.timeMessageChanged}</p>
              </div>

              {/* SEPERATE <DIV/> */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginBottom: '10px',
                backgroundColor: 'rgba(242, 36, 36, 0.3)',
                padding: '10px',
                borderRadius: '10px'
              }}>
                <p style={{
                  fontWeight: 'bold',
                  marginRight: '10px',
                  marginBottom: '5px',
                  textTransform: 'uppercase'
                }}>Time Message Raised:</p>
                  <p>{selectedWarning.timeRaised}</p>
              </div>

              {/* SEPERATE <DIV/> */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginBottom: '10px',
                backgroundColor: 'rgba(242, 36, 36, 0.3)',
                padding: '10px',
                borderRadius: '10px'
              }}>
                <p style={{
                  fontWeight: 'bold',
                  marginRight: '10px',
                  marginBottom: '5px',
                  textTransform: 'uppercase'
                }}>Time Severity Level Changed:</p>
                  <p>{selectedWarning.timeSeverityChanged}</p>
              </div>


            </div>
      )}

      </div>

      </div>
    </div>
  )
}

export default PageThree
