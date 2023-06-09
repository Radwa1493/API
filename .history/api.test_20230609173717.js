const petData = require('./pets.json');
const fetch = require('node-fetch');
import { petID } from '../config'

// Test suite for creating and fetching pets using API.
describe('Pet API Test', () => {
  // Test case uses the HTTP POST method to create a new pet with the given data.
  it('POST create a new pet', async () => {
    const response = await fetch('https://petstore.swagger.io/v2/pet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(petData)
    });
    // Parse the response to JSON.
    const responseData = await response.json();
    //Assert on the status code to be 200.
    expect(response.status).toBe(200);
    //Assert on the pet name.
    expect(responseData.name).toBe(petData.name);
    //Display pet name and id
    console.log(`New pet created with name ${responseData.name} and ID ${responseData.id}`);
  });

// Test case uses the HTTP GET method to fetch details of a pet with ID.
  test('GET API - Fetch pet details', async () => {
    //Get pet ID from config file
    const petId = petID;
    const response = await fetch(`https://petstore.swagger.io/v2/pet/${petId}`);
    expect(response.ok).toBe(true);

    const responseData = await response.json();
    console.log(`Pet name ${responseData.name} and ID ${responseData.id}`);

    expect(responseData.id).toBe(petId);
    // validate other details of the pet as required
  });
  });
