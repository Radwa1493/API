const fetch = require('node-fetch');


import fetch from 'node-fetch';
| const fetch = require('node-fetch');
test('should add a new pet', async () => {
  // Set up the request body
  const requestBody = {
    "id": 0,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  };

  // Make the API request
  const response = await fetch('https://petstore.swagger.io/v2/pet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });
  const jsonResponse = await response.json();

  // Check that the response status is OK and that the response body has the expected values
  expect(response.status).toBe(200);

});
