const petData = require('./pets.json');
const fetch = require('node-fetch');
describe('Create Pet Test', () => {
  it('POST create a new pet', async () => {
    const response = await fetch('https://petstore.swagger.io/v2/pet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(petData)
    });
    
    expect(response.status).toBe(200);
    expect(response.data.id).toBeDefined();
    console.log(response.data.id)
    console.log(response.data.id)


  });
});
