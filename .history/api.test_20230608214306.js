const fetch = require('node-fetch');
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
    const response = await fetch('https://petstore.swagger.io/v2/pet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: 0,
        category: {
          id: 0,
          name: 'string'
        },
        name: 'doggie',
        photoUrls: [
          'string'
        ],
        tags: [
          {
            id: 0,
            name: 'string'
          }
        ],
        status: 'available'
      })
    });
    
    expect(response.status).toBe(200);
  });
});
