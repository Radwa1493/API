const fetch = require('node-fetch');

describe('Create Pet Test', () => {
  it('should create a new pet and return a 200 status code', async () => {
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
