const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "72np3q",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://petstore.swagger.io",
  },
});
