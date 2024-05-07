const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://jsonplaceholder.typicode.com',
    //this is a recorder for the cypress, what i do in the test browser, it will recorded
    experimentalStudio: true,
  },
});