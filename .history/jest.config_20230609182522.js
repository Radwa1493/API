
/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
  "testMatch": [
    "**/*.steps.js"
  ],
  
  reporters: [
    'default',
    'cucumber-jest-json-reporter' // Add this line
  ],
 
};


