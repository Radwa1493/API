const petData = require('./pets.json');
const fetch = require('node-fetch');
describe('Create Pet Test', () => {
  it('POST create a new pet', async () => {
    const response = await fetch('https://petstore.swagger.io/v2/pet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(petData)
    });
    
    const responseData = await response.json();
    expect(response.status).toBe(200);

    console.log(`New pet created with name ${responseData.name} and ID ${responseData.id}`);
  });


  test('GET API - Fetch pet details', async () => {
    const petId = 123; // replace with a valid pet ID
    
    const response = await axios.get(`https://petstore.swagger.io/v2/pet/${petId}`);

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(petId);
    // validate other details of the pet as required
  });
});
