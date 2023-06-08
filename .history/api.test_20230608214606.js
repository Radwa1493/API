const axios = require('axios');
const requestBody = {
  id: 0,
  category: {
    id: 0,
    name: 'string'
  },
  name: 'doggie',
  photoUrls: [
    'string'
  ],
  tags: [{
    id: 0,
    name: 'string'
  }],
  status: 'available'
};


describe('Create Pet Test', () => {
  it('POST create a new pet', async () => {
 
    // Make the POST request to the API
    const response = await axios.post('https://petstore.swagger.io/v2/pet', requestBody);
    expect(response.status).toBeDefined();
  });
});
