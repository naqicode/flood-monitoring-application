// File for rendering APIs in redux

//An 'Async await' function to only return resonse.json() if response is ok or else return the status
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


export const counties = {
  async getFloodmonitoring() {
    const resp = await fetch(
      `https://environment.data.gov.uk/flood-monitoring/id/floodAreas`
    );
    const data = checkAndReturn(resp);
    return data;
  },

  async getFloodWarnings () {
    const resp = await fetch(`https://environment.data.gov.uk/flood-monitoring/id/floods`);
    const data = checkAndReturn(resp);
    return data
  }
};


//

const api = { counties };

export default api;


//https://environment.data.gov.uk/flood-monitoring/id/floods