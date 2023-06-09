module.exports = {
    // ... other Jest configuration options ...
    reporters: [
      "default",
      ["./node_modules/jest-html-reporters", {
        pageTitle: "Test Report"
      }]
    ]
  };