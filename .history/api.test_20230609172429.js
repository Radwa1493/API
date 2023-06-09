const petData = require('./pets.json');
const fetch = require('node-fetch');

// Test suite for creating and fetching pets using the Pet Store API.
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
    const petId = 1; // replace with a valid pet ID
    
    const response = await fetch(`https://petstore.swagger.io/v2/pet/${petId}`);
    
    expect(response.ok).toBe(true);

    const responseData = await response.json();
    console.log(`Pet name ${responseData.name} and ID ${responseData.id}`);

    expect(responseData.id).toBe(petId);
    // validate other details of the pet as required
  });
});
