import React from 'react'
import { useState } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';


//hahahahah
//ahhahahah

function SearchBox(props) {
  

  const [townName, setTownName] = useState('');
  const [stations, setStations] = useState([]);
 


  const handleSearch = () => {
    axios.get(`https://environment.data.gov.uk/flood-monitoring/id/stations?parameter=level&town=${townName}`)
      .then(response => {
        setStations(response.data.items);
      })
      .catch(error => {
        console.log(error);
      });
  }


  const handleListItemClick = (station) => {
    console.log(station);
    props.onStationSelect(station);
    props.handleTown(station)
    props.handleRiver(station)
    props.handleRLOIid(station)
    props.handleCatchmentName(station)
    props.handleDateOpened(station)
    props.handleEasting(station)
    props.handleLabel(station)
    props.handleNorthing(station)
    props.handleNotation(station)
    props.handleStationReference(station)
    props.handleStatus(station)
    props.handleWiskiID(station)
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <div style={{ display: 'flex'}}>
      <div style={{ flex: 1}}>
        <OutlinedInput 
          style={{width: '100%'}} 
          value={townName}
          onChange={(event) => setTownName(event.target.value)}
          
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', padding: '0px 20px'}}>
      <Button 
        variant="contained" 
        color="primary"
        onClick={handleSearch}
      >
        Search
      </Button>
      </div>

      </div>

      <div>
      <List component="nav" aria-label="main mailbox folders">
          {stations.map((station) => (
            <ListItem button key={station.label} onClick={() => handleListItemClick(station)}>
              <ListItemIcon>
                <img 
                  src='./newIcon.png'
                  alt='newIcon' 
                  style={{ width: 38, height: 38}}
                />
              </ListItemIcon>
              <ListItemText primary={station.label} />
            </ListItem>
          ))}
          {stations.length === 0 && <ListItem><ListItemText primary="No results found." /></ListItem>}
        </List>
      </div>

    </div>
  )
}

export default SearchBox
