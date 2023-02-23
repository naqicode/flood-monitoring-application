async function checkAndReturn(response) {
  if (response.ok) {
    const jsonResp = await response.json();
    return jsonResp;
  } else {
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