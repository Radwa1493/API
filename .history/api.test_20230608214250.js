const fetch = require('node-fetch');
POST API: h_ps://petstore.swagger.io/v2/pet
Descrip0on: Its a pet store API, which will add a new pet into its repository & create a unique
PetId for the new entry.
Request Body:
{
"id": 0, "category": {
"id": 0,
"name": "string" },
"name": "doggie", "photoUrls": [
"string" ],
"tags": [ {
"id": 0,
"name": "string" }
],
"status": "available" } write code using jest and needed dependancies and excute comand 

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
