// File for rendering APIs in redux

//An 'Async Await' function to only return resonse.json() if response is ok or else return the status
async function checkAndReturn(response) { //async function with 'response' as param.
  if (response.ok) { //if statement to check if the 'response' param is ok
    //The result of response.json() is set to a new var 'jsonResp' - 
    // The response.json() is being told to wait by the 'await' async keyword until the response.ok is set to true
    const jsonResp = await response.json();
    return jsonResp; //returns the json
  } else { //else return the status and statusText of the param 'resonse'
    return { status: response.status, statusText: response.statusText };
  }
}



//Exporting counties so it can be used in other files
//And sets it to 2 Async function
export const counties = { 
  //An 'Async Await' function 
  async getFloodmonitoring() {
    const resp = await fetch( //Uses 'await' to fetch the API and set it to a new variable 'resp'.
      `https://environment.data.gov.uk/flood-monitoring/id/floodAreas`
    );
    //uses the checkAndReturn() function to run resp as a param 
    //and set it to new var 'data'
    const data = checkAndReturn(resp); 
    return data; //returns data
  },

  //An 'Async Await' function 
  async getFloodWarnings () {
    //Uses 'await' to fetch the API and set it to a new variable 'resp'.
    const resp = await fetch(`https://environment.data.gov.uk/flood-monitoring/id/floods`);
      //uses the checkAndReturn() function to run resp as a param and set it to new var 'data'
    const data = checkAndReturn(resp);
    return data //returns data
  }
};


//sets the counties var to a new var 'api'
const api = { counties };

export default api; //exporting the api

