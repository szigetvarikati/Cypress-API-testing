const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl:
      'https://my-json-server.typicode.com/szigetvarikati/Cypress-API-testing',
    //this is a recorder for the cypress, what i do in the test browser, it will recorded
    experimentalStudio: true,
    supportFile: false,
  },
});
